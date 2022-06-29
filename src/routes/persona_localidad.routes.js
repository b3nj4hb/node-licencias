const router = require('express').Router();

const persona_localidad = require('../controllers/persona_localidad.controller');

router.get('/', persona_localidad.list);

export default router;