'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('personagens_episodios', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,        
       },
      personagem_id: {
        field: 'personagem_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'personagens', // faz referencia a tabela
          key: "id",
        }
      },
      episodio_id: {
        field: 'episodio_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'episodios', // faz referencia a tabela
          key: "id",
        }
      }
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('personagens_episodios');
  }
};
