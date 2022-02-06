import { Router } from 'express';
import MatchesRoutes from './matches';
import TeamsRoutes from './teams';
import TournamentsRoutes from './tournaments';

const router = Router();

router.get('/', (request, response) => response.status(200).json({
  message: 'Status Ok',
}));

router.use('/matches', MatchesRoutes);
router.use('/teams', TeamsRoutes);
router.use('/tournaments', TournamentsRoutes);

export default router;
