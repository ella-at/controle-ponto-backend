const express = require('express');
const router = express.Router();
const PontoController = require('../controllers/PontoController');
const upload = require('../middlewares/upload');

router.post(
  '/',
  upload.fields([
    { name: 'foto', maxCount: 1 },
    { name: 'assinatura', maxCount: 1 }
  ]),
  PontoController.registrar
);

router.get('/hoje', PontoController.listarHoje);
router.get('/faltantes', PontoController.faltantes);

module.exports = router;
