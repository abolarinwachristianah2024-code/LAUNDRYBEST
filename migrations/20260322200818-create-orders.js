'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.ENUM('dry_clean', 'wash_and_fold', 'ironing', 'dry_cleaning_and_pressing')
      },
      images: {
        type: Sequelize.TEXT
      },
      amount: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('pending', 'completed', 'cancelled')
      },
      staff_id: {
        type: Sequelize.INTEGER
      },
      OrgId: {
        type: Sequelize.UUID,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "organizations",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};