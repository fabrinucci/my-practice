import { Router } from 'express';
import workoutController from '../../controllers/workoutController';

const router = Router();

router.route('/').get(workoutController.getAllWorkouts);

router.route('/:workoutId').get(workoutController.getOneWorkout);

router.route('/').post(workoutController.createNewWorkout);

router.route('/:workoutId').patch(workoutController.updateOneWorkout);

router.route('/:workoutId').delete(workoutController.deleteOneWorkout);

export default router;
