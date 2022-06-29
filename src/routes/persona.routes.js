const router = require('express').Router();

const persona = require('../controllers/persona.controller');

router.get('/', persona.list);

export default router;