import { type Request, type Response } from 'express';
import workoutService from '../services/workoutService';
import {
  type RequestBody,
  type RequestParams,
  type RequestQuery,
  type ResponseBody,
  type WorkoutRequest,
} from '../../types';

const getAllWorkouts = (
  req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>,
  res: Response
) => {
  const { mode, equipment, length, page } = req.query;
  try {
    const allWorkouts = workoutService.getAllWorkouts({
      mode,
      equipment,
      length,
      page,
    });
    res.status(200).send({ status: 'OK', data: allWorkouts });
  } catch (error: any) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: {
        error: error?.message || error,
      },
    });
  }
};

const getOneWorkout = (req: Request, res: Response) => {
  const { workoutId } = req.params;
  if (!workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error: 'Parameter ":workoutId" can not be empty',
      },
    });
  }
  try {
    const workout = workoutService.getOneWorkout(workoutId);
    res.status(200).send({
      status: 'OK',
      data: workout,
    });
  } catch (error: any) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: {
        error: error?.message || error,
      },
    });
  }
};

const createNewWorkout = (req: Request, res: Response) => {
  const { body }: { body: WorkoutRequest } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
      },
    });
    return;
  }

  const newWorkout: WorkoutRequest = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  try {
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({
      status: 'OK',
      data: createdWorkout,
    });
  } catch (error: any) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: { error: error?.message || error },
    });
  }
};

const updateOneWorkout = (req: Request, res: Response) => {
  const {
    params: { workoutId },
    body,
  } = req;

  if (!workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error: 'Parameter ":workoutId" can not be empty',
      },
    });
  }

  try {
    const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
    res.status(200).send({
      status: 'OK',
      data: updatedWorkout,
    });
  } catch (error: any) {
    res.status(error?.status || error).send({
      status: 'FAILED',
      data: {
        error: error?.message || error,
      },
    });
  }
};

const deleteOneWorkout = (req: Request, res: Response) => {
  const { workoutId } = req.params;
  if (!workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error: 'Parameter ":workoutId" can not be empty',
      },
    });
  }

  try {
    workoutService.deleteOneWorkout(workoutId);
    res.status(200).send({
      status: 'OK',
      data: {
        message: `Workout with id '${workoutId}' deleted`,
      },
    });
  } catch (error: any) {
    res.status(error?.status || error).send({
      status: 'FAILED',
      data: {
        error: error?.message || error,
      },
    });
  }
};

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
