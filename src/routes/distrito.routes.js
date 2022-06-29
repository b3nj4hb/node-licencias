const router = require('express').Router();

const distrito = require('../controllers/distrito.controller');

router.get('/', distrito.list);
router.get('/:id', distrito.search);
router.post('/add', distrito.save);
router.put('/update/:id', distrito.edit);
router.delete('/delete/:id', distrito.delete);

export default router;