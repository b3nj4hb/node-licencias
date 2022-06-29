const router = require('express').Router();

const usuario = require('../controllers/usuario.controller');

router.get('/', usuario.list);

export default router;