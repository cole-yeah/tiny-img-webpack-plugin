const Sequelize = require('sequelize')

const Helloworld = new Sequelize('mysql://root:password@localhost/helloworld', {
  define: {
    timestamps: false, //取消Sequelize自动给数据表加入时间戳
  }
})

module.exports = {
  Helloworld
}
