const router = require('express').Router();

const voucher_pago = require('../controllers/voucher_pago.controller');

router.get('/', voucher_pago.list);
router.get('/:id', voucher_pago.search);
router.post('/add', voucher_pago.save);
router.put('/update/:id', voucher_pago.edit);
router.delete('/delete/:id', voucher_pago.delete);

export default router;