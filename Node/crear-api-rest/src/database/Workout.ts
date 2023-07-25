import { WorkoutRequest, type WorkoutResponse } from '../../types';
import DB from './db.json';
import { saveToDatabase } from './utils';

const getAllWorkouts = () => {
  try {
    return DB.workouts;
  } catch (error: any) {
    throw {
      status: 500,
      message: error?.message || error,
    };
  }
};

const getOneWorkout = (workoutId: string) => {
  try {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
      throw {
        status: 400,
        message: `Can not find workout with the id '${workoutId}'`,
      };
    }
    return workout;
  } catch (error: any) {
    throw {
      status: 500,
      message: error?.message || error,
    };
  }
};

const createNewWorkout = (newWorkout: WorkoutResponse) => {
  try {
    const isAlreadyAdded =
      DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Workout with the name '${newWorkout.name}' already exists`,
      };
    }

    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  } catch (error: any) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneWorkout = (workoutId: string, changes: WorkoutRequest) => {
  try {
    const indexForUpdate = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can not find workout with the id '${workoutId}'`,
      };
    }
    const updatedWorkout = {
      ...DB.workouts[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    };
    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;
  } catch (error: any) {
    throw { status: 500, message: error?.message || error };
  }
};

const deleteOneWorkout = (workoutId: string) => {
  try {
    const indexForDelete = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (indexForDelete === -1) {
      throw {
        status: 400,
        message: `Can not find workout with the id '${workoutId}'`,
      };
    }

    DB.workouts.splice(indexForDelete, 1);
    saveToDatabase(DB);
  } catch (error: any) {
    throw { status: 500, message: error?.message || error };
  }
};

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
