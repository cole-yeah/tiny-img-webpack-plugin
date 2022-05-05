const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const babel = require("@babel/core");

const getModuleInfo = (entry) => {
  const body = fs.readFileSync(entry, "utf-8");
  const ast = parser.parse(body, {
    sourceType: "module",
  });
  // 依赖收集
  const deps = {};
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(entry);
      const abspath = "./" + path.join(dirname, node.source.value);
      deps[node.source.value] = abspath;
    },
  });
  //
  const { code } = babel.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"],
  });

  return {
    entry,
    deps,
    code,
  };
};

const parseModule = (entry) => {
  const module = getModuleInfo(entry);
  const modules = [module];
  for (const temp of modules) {
    const { deps } = temp;
    Object.values(deps).forEach((path) => {
      modules.push(getModuleInfo(path));
    });
  }
  let depsGraph = {};
  modules.forEach((module) => {
    const { entry, code, deps } = module;
    depsGraph[entry] = {
      deps,
      code,
    };
  });
  return depsGraph;
};

const bundle = (file) => {
  const depsGraph = JSON.stringify(parseModule(file));
  return `(function (graph) {
    console.log(graph);
    function require(file) {
      function absRequire(relPath) {
        return require(graph[file].deps[relPath]);
      }
      var exports = {}; // 这里要加分号，不然会报错，太坑爹了
      // require和exports是在eval(code)里面会调用到，因为打包出来的代码格式大概为 const a = require('./a.js')
      (function (require, exports, code) {
        eval(code);
      })(absRequire, exports, graph[file].code);
      return exports;
    }
    require("${file}");
  })(${depsGraph})`;
};

const content = bundle("./src/index.js");

const isExists = fs.existsSync("./dist");
!isExists && fs.mkdirSync("./dist");
fs.writeFileSync("./dist/bundle.js", content);
