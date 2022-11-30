module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('personagens_episodios',
      [
        {
          personagem_id: 3,
          episodio_id: 1,
        },
        {
          personagem_id: 4,
          episodio_id: 1,
        },
        {
          personagem_id: 1,
          episodio_id: 1,
        },
        {
          personagem_id: 5,
          episodio_id: 3,
        },
        {
          personagem_id: 2,
          episodio_id: 3,
        },
        {
          personagem_id: 1,
          episodio_id: 2,
        },
        {
          personagem_id: 2,
          episodio_id: 2,
        },
        {
          personagem_id: 3,
          episodio_id: 2,
        },
        {
          personagem_id: 4,
          episodio_id: 2,
        },
        {
          personagem_id: 5,
          episodio_id: 2,
        },
        {
          personagem_id: 3,
          episodio_id: 4,
        },
        {
          personagem_id: 4,
          episodio_id: 4,
        },
        {
          personagem_id: 5,
          episodio_id: 4,
        },
        {
          personagem_id: 3,
          episodio_id: 5,
        },
        {
          personagem_id: 4,
          episodio_id: 5,
        },
        {
          personagem_id: 1,
          episodio_id: 5,
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('personagens_episodios', null, {});
  },
};
