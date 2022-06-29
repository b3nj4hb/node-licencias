const router = require('express').Router();

const tipo_riesgo = require('../controllers/tipo_riesgo.controller');

router.get('/', tipo_riesgo.list);
router.get('/:id', tipo_riesgo.search);
router.post('/add', tipo_riesgo.save);
router.put('/update/:id', tipo_riesgo.edit);
router.delete('/delete/:id', tipo_riesgo.delete);

export default router;