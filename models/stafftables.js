'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class staffTables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  staffTables.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    salary: DataTypes.STRING,
    staffDp: DataTypes.TEXT,
    profilePhoto: DataTypes.TEXT,
    orgId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'staffTables',
  });
  return staffTables;
};