import { Router } from 'express'
const router = Router()

import * as usuario from '../controllers/usuario.controller.js'

router.get('/', usuario.list);
router.get('/:id', usuario.search);
router.post('/add', usuario.save);
router.put('/update/:id', usuario.edit);
router.delete('/delete/:id', usuario.deletee);

export default router;