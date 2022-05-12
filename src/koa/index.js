const http = require("http");

const compose = (middlewares) => {
  return (ctx) => {
    const dispatch = (i) => {
      const middleware = middlewares[i];
      if (i === middlewares.length) return;
      // app.use((ctx, next) => {});
      // 当在中间件中调用next()时，此时将控制权交给下一个中间件，也是洋葱模型的核心。

      return middleware(ctx, () => dispatch(i + 1));
    };
    dispatch(0);
  };
};

// 抽离状态管理
class Context {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }
}

class Koa {
  constructor() {
    this.middlewares = [];
  }
  use(middleware) {
    this.middlewares.push(middleware);
  }
  async callback(req, res) {
    const ctx = new Context(req, res);
    // 处理中间件，如路由解析、Body解析、异常处理...
    const fn = compose(this.middlewares);
    try {
      await fn(ctx);
    } catch (err) {
      console.error(err);
      ctx.res.statuscode = 500;
      ctx.res.end("Internel Server Error");
    }
    ctx.res.end(ctx.body);
  }
  listen(...args) {
    // (req, res) => this.callback(req, res) 这里使用箭头函数，不然callback的this指向有问题
    const server = http.createServer((req, res) => this.callback(req, res));
    server.listen(...args);
  }
}

module.exports = Koa;
