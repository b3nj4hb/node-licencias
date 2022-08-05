import { Router } from 'express'
const router = Router()

import * as tipo_documento from '../controllers/tipo_documento.controller.js'

router.get('/', tipo_documento.list);
router.get('/:id', tipo_documento.search);
router.post('/add', tipo_documento.save);
router.put('/update/:id', tipo_documento.edit);
router.delete('/delete/:id', tipo_documento.deletee);

export default router;