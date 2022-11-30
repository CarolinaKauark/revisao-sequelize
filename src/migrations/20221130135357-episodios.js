'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('episodios', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,        
       },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_de_lancamento: {
        field: 'data_de_lancamento',
        type: Sequelize.DATE,
        allowNull: false,
      },
      temporada_id: {
        field: 'temporada_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'temporadas', // faz referência a tabela
          key:  'id',
        }
      }
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('episodios');
  }
};
