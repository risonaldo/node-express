import { Router } from 'express';
import clientesController from '../controllers/clientesController';


const router = Router();

router.get('/', clientesController.index);


router.get('/produto/:id', clientesController.produto)

export default router;