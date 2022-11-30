const episodioService = require('../services/episodio.service');

const getAll = async (_req, res) => {
  try {
    const episodios = await episodioService.getAll();
    return res.status(200).json(episodios);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
};