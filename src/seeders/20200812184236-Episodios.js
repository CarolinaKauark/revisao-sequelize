module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('episodios',
      [
        {
          id: 1,
          titulo: 'The One with Ross`s New Girlfriend',
          data_de_lancamento: new Date('1995-09-01T19:58:00.000Z'),
          temporada_id: 1,
        },
        {
          id: 2,
          titulo: 'The One with the Breast Milk',
          data_de_lancamento: new Date('1995-09-05T19:58:00.000Z'),
          temporada_id: 2,
        },
        {
          id: 3,
          titulo: 'The One Where Heckles Dies',
          data_de_lancamento: new Date('1995-10-05T19:58:00.000Z'),
          temporada_id: 3,
        },
        {
          id: 4,
          titulo: 'The One with Phoebe`s Husband',
          data_de_lancamento: new Date('1995-10-12T19:58:00.000Z'),
          temporada_id: 1,
        },
        {
          id: 5,
          titulo: 'The One with Five Steaks and an Eggplant',
          data_de_lancamento: new Date('1995-10-19T19:58:00.000Z'),
          temporada_id: 3,
        },
        
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('episodios', null, {});
  },
};
