import { Router } from 'express'
const router = Router()

import * as tipo_persona from '../controllers/tipo_persona.controller.js'

router.get('/', tipo_persona.list);
router.get('/:id', tipo_persona.search);
router.post('/add', tipo_persona.save);
router.put('/update/:id', tipo_persona.edit);
router.delete('/delete/:id', tipo_persona.deletee);

export default router;