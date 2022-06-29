const router = require('express').Router();

const provincia = require('../controllers/provincia.controller');

router.get('/', provincia.list);

export default router;