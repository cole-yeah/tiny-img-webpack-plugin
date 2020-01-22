const Koa = require('koa')
const Router = require('koa-router')
const json = require('koa-json')
const logger = require('koa-logger')
const parser = require('koa-bodyparser')
const auth = require('./server/routers/auth')

const app = new Koa()
const router = Router()

app.use(parser())
app.use(json())
app.use(logger())


router.use('/auth', auth.routes())

app.use(router.routes())  // 将路由规则挂载到Koa上

app.on('error', (err) => {
  console.log('-- server err --', err)
}) 

app.listen('3030', () => {
  console.log('Koa is listening in 3030')
})

module.exports = app