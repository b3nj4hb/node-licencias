import { Router } from 'express';

const router = Router();
// import * as localidadCrtl from '../controllers/post.controller'
import * as localidadCrtl from '../controllers/localidad.controller'

router.get('/', localidadCrtl.getLocalidades);
router.get('/:id', localidadCrtl.getLocalidadId);
router.post('/', localidadCrtl.crearLocalidad);
router.put('/:id', localidadCrtl.updateLocalidad);
router.delete('/:id', localidadCrtl.deleteLocalidad);

export default router;