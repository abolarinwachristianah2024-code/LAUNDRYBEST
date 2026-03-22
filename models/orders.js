'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orders.init({
    type: DataTypes.ENUM('dry_clean', 'wash_and_fold', 'ironing', 'dry_cleaning_and_pressing'),
    images: DataTypes.TEXT,
    amount: DataTypes.STRING,
    status: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    staff_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};