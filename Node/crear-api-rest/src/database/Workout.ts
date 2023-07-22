import { WorkoutRequest, type WorkoutResponse } from '../../types';
import DB from './db.json';
import { saveToDatabase } from './utils';

const getAllWorkouts = () => {
  return DB.workouts;
};

const getOneWorkout = (workoutId: string) => {
  const workout = DB.workouts.find((workout) => workout.id === workoutId);
  if (!workout) return;
  return workout;
};

const createNewWorkout = (newWorkout: WorkoutResponse) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) return;

  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

const updateOneWorkout = (workoutId: string, changes: WorkoutRequest) => {
  const indexForUpdate = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForUpdate === -1) {
    return;
  }
  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  };
  DB.workouts[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB);
  return updatedWorkout;
};

const deleteOneWorkout = (workoutId: string) => {
  const indexForDelete = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForDelete === -1) {
    return;
  }

  DB.workouts.splice(indexForDelete, 1);
  saveToDatabase(DB);
};

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
