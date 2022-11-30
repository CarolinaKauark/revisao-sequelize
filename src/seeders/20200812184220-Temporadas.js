module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('temporadas',
      [
        {
          id: 1,
          temporada: 'temporada 1',
        },
        {
          id: 2,
          temporada: 'temporada 2',
        },
        {
          id: 3,
          temporada: 'temporada 3',
        },
        {
          id: 4,
          temporada: 'temporada 4',
        },
        {
          id: 5,
          temporada: 'temporada 5',
        },        
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('temporadas', null, {});
  },
};
