const router = require('express').Router();

const rol = require('../controllers/rol.controller');

router.get('/', rol.list);
router.get('/:id', rol.search);
router.post('/add', rol.save);
router.put('/update/:id', rol.edit);
router.delete('/delete/:id', rol.delete);

export default router;