import { Router } from 'express'
const router = Router()

import * as voucher_pago from '../controllers/voucher_pago.controller.js'

router.get('/', voucher_pago.list);
router.get('/:id', voucher_pago.search);
router.post('/add', voucher_pago.save);
router.put('/update/:id', voucher_pago.edit);
router.delete('/delete/:id', voucher_pago.deletee);

export default router;