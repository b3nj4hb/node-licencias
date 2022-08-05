import { Router } from 'express'
const router = Router()

import * as tipo_riesgo from '../controllers/tipo_riesgo.controller.js'

router.get('/', tipo_riesgo.list);
router.get('/:id', tipo_riesgo.search);
router.post('/add', tipo_riesgo.save);
router.put('/update/:id', tipo_riesgo.edit);
router.delete('/delete/:id', tipo_riesgo.deletee);

export default router;