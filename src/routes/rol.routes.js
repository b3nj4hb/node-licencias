import { Router } from 'express'
const router = Router()

import * as rol from '../controllers/rol.controller.js'

router.get('/', rol.list);
router.get('/:id', rol.search);
router.post('/add', rol.save);
router.put('/update/:id', rol.edit);
router.delete('/delete/:id', rol.deletee);

export default router;