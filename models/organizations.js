'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class organizations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  organizations.init({
    id:{type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true},
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNo: DataTypes.INTEGER,
    logo: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'organizations',
  });
  return organizations;
};