const user = require('../models/user')

const getUserInfo = async (ctx) => {
  const id = ctx.params.id
  const result = await user.getUserById(id)
  ctx.body = result
}

module.exports = {
  getUserInfo
}