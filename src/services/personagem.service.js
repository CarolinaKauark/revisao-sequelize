const { Personagem, Episodio } = require('../models');

const getAll = async () => {
  const personagens = await Personagem.findAll({
    include: [{ model: Episodio, as: 'episodio', through: { attributes: [] } }],
  });

  return personagens;
};

module.exports = {
  getAll,
};