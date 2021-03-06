const router = require('express').Router();

const persona = require('../controllers/persona.controller');

router.get('/', persona.list);
router.get('/listarcontribuyentes', persona.listarcontribuyentes);
router.get('/:id', persona.search);
router.get('/buscarlocalidad/:id', persona.buscarlocalidad);
router.get('/retornarid/:ruc/:num_documento', persona.retornarid);
router.post('/add', persona.save);
router.put('/update/:id', persona.edit);
router.put('/updurl/:id', persona.updurl);
router.delete('/delete/:id', persona.delete);

export default router;