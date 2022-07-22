const router = require('express').Router();

const localidad = require('../controllers/localidad.controller');

router.get('/', localidad.list);
router.get('/:id', localidad.search);
router.get('/retornarid/:referencia/:direccion', localidad.retornarid);
router.post('/add', localidad.save);
router.put('/update/:id', localidad.edit);
router.delete('/delete/:id', localidad.delete);

export default router;