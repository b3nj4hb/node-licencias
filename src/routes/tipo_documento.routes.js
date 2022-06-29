const router = require('express').Router();

const tipo_documento = require('../controllers/tipo_documento.controller');

router.get('/', tipo_documento.list);
router.get('/:id', tipo_documento.search);
router.post('/add', tipo_documento.save);
router.put('/update/:id', tipo_documento.edit);
router.delete('/delete/:id', tipo_documento.delete);

export default router;