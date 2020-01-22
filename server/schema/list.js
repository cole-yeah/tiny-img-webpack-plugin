/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('list', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'list'
  });
};
