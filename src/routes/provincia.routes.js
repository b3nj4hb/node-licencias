import { Router } from 'express'
const router = Router()

import * as provincia from '../controllers/provincia.controller.js'

router.get('/', provincia.list);
router.get('/:id', provincia.search);
router.post('/add', provincia.save);
router.put('/update/:id', provincia.edit);
router.delete('/delete/:id', provincia.deletee);

export default router;