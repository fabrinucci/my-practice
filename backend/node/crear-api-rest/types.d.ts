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

export interface Records {
  records: Record[];
}

export interface Record {
  id: string;
  workout: string;
  record: string;
}

export interface Members {
  members: Member[];
}

export interface Member {
  id: string;
  name: string;
  gender: gender;
  dateOfBirth: string;
  email: string;
  password: string;
}

type gender = {
  male: 'M';
  female: 'F';
};

export interface FilterParams {
  mode: string;
  equipment: string;
  length: number;
  page: number;
}

export interface RequestParams {}
export interface ResponseBody {}
export interface RequestBody {}
export interface RequestQuery {
  mode: string;
  equipment: string;
  length: number;
  page: number;
}
