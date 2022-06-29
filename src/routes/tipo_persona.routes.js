const router = require('express').Router();

const tipo_persona = require('../controllers/tipo_persona.controller');

router.get('/', tipo_persona.list);
router.get('/:id', tipo_persona.search);
router.post('/add', tipo_persona.save);
router.put('/update/:id', tipo_persona.edit);
router.delete('/delete/:id', tipo_persona.delete);

export default router;