'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('personagens', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,        
       },
       name: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       age: {
        type: Sequelize.INTEGER,
        allowNull: false,
       },
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('personagens');
  }
};
