const router = require('express').Router();

const tipo_persona = require('../controllers/tipo_persona.controller');

router.get('/', tipo_persona.list);

export default router;