"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Workout_1 = __importDefault(require("../database/Workout"));
const getAllWorkouts = () => {
    const allWorkouts = Workout_1.default.getAllWorkouts();
    return allWorkouts;
};
const getOneWorkout = (workoutId) => {
    const workout = Workout_1.default.getOneWorkout(workoutId);
    return workout;
};
const createNewWorkout = (newWorkout) => {
    const workoutToInsert = Object.assign(Object.assign({}, newWorkout), { id: (0, uuid_1.v4)(), createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }), updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }) });
    const createdWorkout = Workout_1.default.createNewWorkout(workoutToInsert);
    return createdWorkout;
};
const updateOneWorkout = (workoutId, changes) => {
    const updatedWorkout = Workout_1.default.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
};
const deleteOneWorkout = (workoutId) => {
    Workout_1.default.deleteOneWorkout(workoutId);
};
exports.default = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};
