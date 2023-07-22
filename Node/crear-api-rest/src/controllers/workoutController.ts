import { type Request, type Response } from 'express';
import workoutService from '../services/workoutService';
import { WorkoutRequest, WorkoutResponse } from '../../types';

const getAllWorkouts = (req: Request, res: Response) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.status(200).send({ status: 'OK', data: allWorkouts });
};

const getOneWorkout = (req: Request, res: Response) => {
  const { workoutId } = req.params;
  if (!workoutId) return;
  const workout = workoutService.getOneWorkout(workoutId);
  res.status(200).send({
    status: 'OK',
    data: workout,
  });
};

const createNewWorkout = (req: Request, res: Response) => {
  const { body }: { body: WorkoutRequest } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  )
    return;

  const newWorkout: WorkoutRequest = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({
    status: 'OK',
    data: createdWorkout,
  });
};

const updateOneWorkout = (req: Request, res: Response) => {
  const {
    params: { workoutId },
    body,
  } = req;

  if (!workoutId) return;

  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);

  res.status(200).send({
    status: 'OK',
    data: updatedWorkout,
  });
};

const deleteOneWorkout = (req: Request, res: Response) => {
  const { workoutId } = req.params;
  if (!workoutId) return;

  workoutService.deleteOneWorkout(workoutId);
  res.status(200).send({
    status: 'OK',
  });
};

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
