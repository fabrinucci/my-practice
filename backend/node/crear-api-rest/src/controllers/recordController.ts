import { type Request, type Response } from 'express';
import recordService from '../services/recordService';

const getRecordForWorkout = (req: Request, res: Response) => {
  try {
    const { workoutId } = req.params;
    if (!workoutId) {
      res.status(400).send({
        status: 'FAILED',
        data: {
          error: 'Parameter ":workoutId" can not be empty',
        },
      });
    }
    const record = recordService.getRecordForWorkout(workoutId);
    res.status(200).send({
      status: 'OK',
      data: record,
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

export default {
  getRecordForWorkout,
};
