const Koa = require("./index");

const app = new Koa();

app.use(async (ctx, next) => {
  console.log("middleware 1 start");
  await next();
  console.log("middleware 1 end");
});

app.use(async (ctx, next) => {
  console.log("middleware 1 start");
  await next();
  ctx.body = "this is koa~";
  console.log("middleware 1 end");
});

app.listen(3000, (e) => console.log("3000 端口启动成功！", e));
