/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    userName: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    password: {
      type: DataTypes.CHAR(16),
      allowNull: true
    }
  }, {
    tableName: 'user'
  });
};
