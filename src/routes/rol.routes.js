const router = require('express').Router();

const rol = require('../controllers/rol.controller');

router.get('/', rol.list);

export default router;