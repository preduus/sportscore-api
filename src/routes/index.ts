import { Router } from 'express';
import MatchesRoutes from './matches';
import TeamsRoutes from './teams';

const router = Router();

router.get('/', (request, response) => response.status(200).json({
  message: 'Status Ok',
}));

router.use('/matches', MatchesRoutes);
router.use('/teams', TeamsRoutes);

export default router;
