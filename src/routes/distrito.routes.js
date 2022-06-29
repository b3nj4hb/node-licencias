const router = require('express').Router();

const distrito = require('../controllers/distrito.controller');

router.get('/', distrito.list);

export default router;