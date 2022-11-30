const PersonagemService = require('../services/personagem.service');

const getAll = async (_req, res) => {
  try {
    const personagens = await PersonagemService.getAll();
    return res.status(200).json(personagens);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
};