// const router = require('express').Router();

// const distrito = require('../controllers/distrito.controller');

import { Router } from 'express'
const router = Router()

import * as distrito from '../controllers/distrito.controller.js'

router.get('/', distrito.list);
router.get('/:id', distrito.search);
router.post('/add', distrito.save);
router.put('/update/:id', distrito.edit);
router.delete('/delete/:id', distrito.deletee);

export default router;