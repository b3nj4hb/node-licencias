const router = require('express').Router();

const localidad = require('../controllers/localidad.controller');

router.get('/', localidad.list);

export default router;