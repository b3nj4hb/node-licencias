// const router = require('express').Router();

// const persona_localidad = require('../controllers/persona_localidad.controller');

import { Router } from 'express'
const router = Router()

import * as persona_localidad from '../controllers/persona_localidad.controller.js'

router.get('/', persona_localidad.list);
router.get('/:id', persona_localidad.search);
router.post('/add', persona_localidad.save);
router.put('/update/:id', persona_localidad.edit);
router.delete('/delete/:id', persona_localidad.deletee);

export default router;