const router = require('express').Router();

const tipo_riesgo = require('../controllers/tipo_riesgo.controller');

router.get('/', tipo_riesgo.list);

export default router;