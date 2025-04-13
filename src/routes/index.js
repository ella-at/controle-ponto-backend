const express = require('express');
const router = express.Router();

const funcionarioRoutes = require('./funcionarios');
const pontoRoutes = require('./pontos');

router.use('/funcionarios', funcionarioRoutes);
router.use('/pontos', pontoRoutes);

module.exports = router;
