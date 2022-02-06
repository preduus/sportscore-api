import { Router } from 'express';
import { createController, createSchema } from '../../domains/matches/create';
import { readController } from '../../domains/matches/read';
import { updateController, updateSchema } from '../../domains/matches/update';
import { deleteController } from '../../domains/matches/delete';

const router = Router();

router.post('/', createSchema, (request, response) => createController.handle(request, response));
router.get('/:id?', (request, response) => readController.handle(request, response));
router.put('/:id', updateSchema, (request, response) => updateController.handle(request, response));
router.delete('/:id', (request, response) => deleteController.handle(request, response));

export default router;
