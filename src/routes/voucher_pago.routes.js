const router = require('express').Router();

const voucher_pago = require('../controllers/voucher_pago.controller');

router.get('/', voucher_pago.list);

export default router;