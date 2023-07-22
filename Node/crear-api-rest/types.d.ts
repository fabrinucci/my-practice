export interface Workout {
  workouts: WorkoutResponse[];
}

export interface WorkoutResponse {
  id: string;
  name: string;
  mode: string;
  equipment: string[];
  exercises: string[];
  createdAt: string;
  updatedAt: string;
  trainerTips: string[];
}

export interface WorkoutRequest {
  name: string;
  mode: string;
  equipment: string[];
  exercises: string[];
  trainerTips: string[];
}
