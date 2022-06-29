const router = require('express').Router();

const persona = require('../controllers/persona.controller');

router.get('/', persona.list);
router.get('/:id', persona.search);
router.post('/add', persona.save);
router.put('/update/:id', persona.edit);
router.delete('/delete/:id', persona.delete);

export default router;