const { Temporada, Episodio } = require('../models');

const getAll = async () => {
  const episodios = await Episodio.findAll({
    include: [{ model: Temporada, as: 'temporada' }],
  });

  return episodios;
};

module.exports = {
  getAll,
};