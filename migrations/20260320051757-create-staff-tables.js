'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('staffTables', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      position: {
        type: Sequelize.STRING,
        allowNull: false
      },
      salary: {
        type: Sequelize.STRING,
        allowNull: false
      },
      staffDp: {
        type: Sequelize.TEXT
      },
      profilePhoto: {
        type: Sequelize.TEXT
      },
      OrgId: {
        type: Sequelize.UUID,
        allowNull: false,
        foreignKey: true,
        references: {
          model:"organizations",
          key:"id"
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
    await queryInterface.dropTable('staffTables');
  }
};