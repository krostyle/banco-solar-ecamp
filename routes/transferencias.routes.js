const { Router } = require('express');
const { getTransferencias, createTransferenciaTransaction } = require('../controllers/transferencia.controllers');

const pathTransferencia = '/transferencia'
const pathTransferencias = '/transferencias'


const router = Router();

router.post(pathTransferencia, createTransferenciaTransaction);
router.get(pathTransferencias, getTransferencias);







module.exports = router;