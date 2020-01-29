const db = require('../config/db')
const HelloworldDb = db.Helloworld
const userModel = '../schema/user.js'

const User = HelloworldDb.import(userModel)

const getUserById = async (id) => {
  const userInfo = await User.findOne({
    where: {
      id: id
    }
  })
  return userInfo
}

const getUserByName = async (name) => {
  const userInfo = await User.findOne({
    where: {
      userName: name
    }
  })
  return userInfo
}

module.exports = {
  getUserById,
  getUserByName
}