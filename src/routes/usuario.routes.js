const router = require('express').Router();

const usuario = require('../controllers/usuario.controller');

router.get('/', usuario.list);
router.get('/:id', usuario.search);
router.post('/add', usuario.save);
router.put('/update/:id', usuario.edit);
router.delete('/delete/:id', usuario.delete);

export default router;