const router = require('express').Router();

const departamento = require('../controllers/departamento.controller');

router.get('/', departamento.list);
router.get('/:id', departamento.search);
router.post('/add', departamento.save);
router.put('/update/:id', departamento.edit);
router.delete('/delete/:id', departamento.delete);

export default router;