const router = require('express').Router();

const auth = require('../controllers/auth.controller');

router.post('/', auth.login);
router.post('/registrar', auth.registrar);

export default router;