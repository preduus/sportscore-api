import { Router } from 'express';
import MatchesRoutes from './matches';

const router = Router();

router.get('/', (request, response) => response.status(200).json({
  message: 'Status Ok',
}));

router.use('/matches', MatchesRoutes);

export default router;
