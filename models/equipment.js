'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class equipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  equipment.init({
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    expiringDate: DataTypes.DATE,
    status: DataTypes.ENUM('active', 'inactive'),
    images: DataTypes.TEXT,
    orgId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'equipment',
  });
  return equipment;
};