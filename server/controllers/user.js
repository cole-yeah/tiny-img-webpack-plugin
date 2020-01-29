const user = require('../models/user')
const jwt = require('koa-jwt')

const SECRET_KEY = 'vue-koa-demo' // 指定密钥，这是之后用来判断token合法性的标志

const getUserInfo = async (ctx) => {
  const id = ctx.params.id
  const result = await user.getUserById(id)
  ctx.body = result
}

const postUserAuth = async (ctx) => {
  const data = ctx.request.body
  const userInfo = await user.getUserByName(data.userName)
  if(!userInfo) {
    ctx.body = {
      success: false,
      msg: '用户不存在!'
    }
    return
  }
  if(userInfo.password !== data.password) {
    ctx.body = {
      success: false,
      msg: '密码错误！'
    }
  }else {
    const userToken = {
      name: userInfo.userName,
      id: userInfo.id,
    }
    //TODO: token获取有问题 
    const token = jwt(userToken, SECRET_KEY)
    ctx.body = {
      success: true,
      token,
    }
  }
}

module.exports = {
  getUserInfo,
  postUserAuth
}