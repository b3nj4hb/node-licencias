// const router = require('express').Router();
import { Router } from 'express'
const router = Router()

import * as departamento from '../controllers/departamento.controller.js'

// const departamento = require('../controllers/departamento.controller.js');

router.get('/', departamento.list);
router.get('/:id', departamento.search);
router.post('/add', departamento.save);
router.put('/update/:id', departamento.edit);
router.delete('/delete/:id', departamento.deletee);

export default router;