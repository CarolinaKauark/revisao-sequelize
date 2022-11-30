module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('personagens',
      [{
        id: 1,
        name: 'Joe',
        age: 30,
      },
      {
        id: 2,
        name: 'Monica',
        age: 29,
      },
      {
        id: 3,
        name: 'Ross',
        age: 31,
      },
      {
        id: 4,
        name: 'Rachel',
        age: 28,
      },
      {
        id: 5,
        name: 'Chandler',
        age: 28,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('personagens', null, {});
  },
};
