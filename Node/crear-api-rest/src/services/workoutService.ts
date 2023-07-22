import { v4 as uuidv4 } from 'uuid';
import { type WorkoutRequest } from '../../types';
import Workout from '../database/Workout';

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = (workoutId: string) => {
  const workout = Workout.getOneWorkout(workoutId);
  return workout;
};

const createNewWorkout = (newWorkout: WorkoutRequest) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuidv4(),
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  };

  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkout = (workoutId: string, changes: WorkoutRequest) => {
  const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
  return updatedWorkout;
};

const deleteOneWorkout = (workoutId: string) => {
  Workout.deleteOneWorkout(workoutId);
};

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
