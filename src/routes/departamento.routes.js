const router = require('express').Router();

const departamento = require('../controllers/departamento.controller');

router.get('/', departamento.list);

export default router;