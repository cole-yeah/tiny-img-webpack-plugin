const db = require('../config/db')
const HelloworldDb = db.Helloworld
const userModel = '../schema/user.js'

const User = HelloworldDb.import(userModel)

const getUserById = async (id) => {
  console.log('----------------------', id)
  const userInfo = await User.findOne({
    where: {
      id: id
    }
  })
  return userInfo
}

module.exports = {
  getUserById
}