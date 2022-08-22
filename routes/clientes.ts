import { Router } from 'express';
import clientesController from '../controllers/clientesController';


const router = Router();

router.get('/cliente', clientesController.index);
router.get('/cliente/cadastrar', clientesController.cadastrar);
router.post('/cliete', clientesController.store)
router.get('/cliente/:id', clientesController.detalhe);
router.put('/cliente/:id', clientesController.atualizar);
router.get('/cliente/:id/editar', clientesController.editar);
router.delete('/clients/:id', clientesController.destroy);


export default router;