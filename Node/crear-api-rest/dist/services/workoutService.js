"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Workout_1 = __importDefault(require("../database/Workout"));
const getAllWorkouts = () => {
    try {
        const allWorkouts = Workout_1.default.getAllWorkouts();
        return allWorkouts;
    }
    catch (error) {
        throw error;
    }
};
const getOneWorkout = (workoutId) => {
    try {
        const workout = Workout_1.default.getOneWorkout(workoutId);
        return workout;
    }
    catch (error) {
        throw error;
    }
};
const createNewWorkout = (newWorkout) => {
    const workoutToInsert = Object.assign(Object.assign({}, newWorkout), { id: (0, uuid_1.v4)(), createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }), updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }) });
    try {
        const createdWorkout = Workout_1.default.createNewWorkout(workoutToInsert);
        return createdWorkout;
    }
    catch (error) {
        throw error;
    }
};
const updateOneWorkout = (workoutId, changes) => {
    try {
        const updatedWorkout = Workout_1.default.updateOneWorkout(workoutId, changes);
        return updatedWorkout;
    }
    catch (error) {
        throw error;
    }
};
const deleteOneWorkout = (workoutId) => {
    try {
        Workout_1.default.deleteOneWorkout(workoutId);
    }
    catch (error) {
        throw error;
    }
};
exports.default = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};
