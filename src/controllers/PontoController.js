const { Ponto, Funcionario } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  async registrar(req, res) {
    try {
      const { funcionario_id, tipo } = req.body;
      const foto = req.files['foto']?.[0]?.path || null;
      const assinatura = req.files['assinatura']?.[0]?.path || null;

      const ponto = await Ponto.create({
        funcionario_id,
        tipo,
        foto,
        assinatura,
        data_hora: new Date(),
      });

      res.status(201).json(ponto);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao registrar ponto' });
    }
  },

  async listarHoje(req, res) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    try {
      const pontos = await Ponto.findAll({
        where: {
          data_hora: {
            [Op.gte]: hoje
          }
        },
        include: [Funcionario]
      });
      res.json(pontos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pontos de hoje' });
    }
  },

  async faltantes(req, res) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    try {
      const funcionarios = await Funcionario.findAll();
      const registrosHoje = await Ponto.findAll({
        where: {
          tipo: 'entrada',
          data_hora: {
            [Op.gte]: hoje
          }
        }
      });

      const idsComEntrada = registrosHoje.map(r => r.funcionario_id);
      const faltando = funcionarios.filter(f => !idsComEntrada.includes(f.id));

      res.json(faltando);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar faltantes' });
    }
  }
};
