const { Funcionario } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const funcionario = await Funcionario.create(req.body);
      res.status(201).json(funcionario);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao cadastrar funcionário' });
    }
  },

  async index(req, res) {
    try {
      const where = req.query || {};
      const funcionarios = await Funcionario.findAll({ where });
      res.json(funcionarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar funcionários' });
    }
  }
};
