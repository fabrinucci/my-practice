import {
  type FilterParams,
  type WorkoutRequest,
  type WorkoutResponse,
} from '../../types';
import DB from './db.json';
import { saveToDatabase } from './utils';

/**
 * @openapi
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name:
 *           type: string
 *           example: Tommy V
 *         mode:
 *           type: string
 *           example: For Time
 *         equipment:
 *           type: array
 *           items:
 *             type: string
 *           example: ["barbell", "rope"]
 *         exercises:
 *           type: array
 *           items:
 *             type: string
 *           example: ["21 thrusters", "12 rope climbs, 15 ft", "15 thrusters", "9 rope climbs, 15 ft", "9 thrusters", "6 rope climbs, 15 ft"]
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         trainerTips:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Split the 21 thrusters as needed", "Try to do the 9 and 6 thrusters unbroken", "RX Weights: 115lb/75lb"]
 */

const getAllWorkouts = (filterParams: FilterParams) => {
  try {
    let workouts = DB.workouts;

    if (filterParams.mode) {
      const filterMode = filterParams.mode.toLowerCase();
      return DB.workouts.filter((workout) =>
        workout.mode.toLowerCase().includes(filterMode)
      );
    }

    if (filterParams.equipment) {
      const filterEquipment = filterParams.equipment.toLowerCase();
      return DB.workouts.filter((workout) => {
        const equipment = workout.equipment.map((eq) => eq.toLowerCase());
        return equipment.includes(filterEquipment);
      });
    }

    return workouts;
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
