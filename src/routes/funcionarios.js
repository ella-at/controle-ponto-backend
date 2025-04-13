const express = require('express');
const router = express.Router();
const FuncionarioController = require('../controllers/FuncionarioController');

router.post('/', FuncionarioController.create);
router.get('/', FuncionarioController.index);

module.exports = router;
