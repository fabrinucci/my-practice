import { Router } from 'express';
import apicache from 'apicache';
import workoutController from '../../controllers/workoutController';
import recordController from '../../controllers/recordController';

const router = Router();
const cache = apicache.middleware;

router.get('/', cache('2 minutes'), workoutController.getAllWorkouts);

router.route('/:workoutId').get(workoutController.getOneWorkout);

router.route('/:workoutId/records').get(recordController.getRecordForWorkout);

router.route('/').post(workoutController.createNewWorkout);

router.route('/:workoutId').patch(workoutController.updateOneWorkout);

router.route('/:workoutId').delete(workoutController.deleteOneWorkout);

export default router;
