import Record from '../database/Record';

const getRecordForWorkout = (workoutId: string) => {
  try {
    const record = Record.getRecordForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};

export default { getRecordForWorkout };
