const router = require('express').Router();

const provincia = require('../controllers/provincia.controller');

router.get('/', provincia.list);
router.get('/:id', provincia.search);
router.post('/add', provincia.save);
router.put('/update/:id', provincia.edit);
router.delete('/delete/:id', provincia.delete);

export default router;