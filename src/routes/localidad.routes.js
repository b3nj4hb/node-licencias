const router = require('express').Router();

// import * as localidadCrtl from '../controllers/localidad.controller'
const localidadController = require('../controllers/localidad.controller');

router.get('/', localidadController.getLocalidades);

export default router;