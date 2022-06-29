const router = require('express').Router();

const tipo_documento = require('../controllers/tipo_documento.controller');

router.get('/', tipo_documento.list);

export default router;