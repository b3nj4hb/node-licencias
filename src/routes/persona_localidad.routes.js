const router = require('express').Router();

const persona_localidad = require('../controllers/persona_localidad.controller');

router.get('/', persona_localidad.list);
router.get('/:id', persona_localidad.search);
router.post('/add', persona_localidad.save);
router.put('/update/:id', persona_localidad.edit);
router.delete('/delete/:id', persona_localidad.delete);

export default router;