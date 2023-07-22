"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_json_1 = __importDefault(require("./db.json"));
const utils_1 = require("./utils");
const getAllWorkouts = () => {
    return db_json_1.default.workouts;
};
const getOneWorkout = (workoutId) => {
    const workout = db_json_1.default.workouts.find((workout) => workout.id === workoutId);
    if (!workout)
        return;
    return workout;
};
const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = db_json_1.default.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded)
        return;
    db_json_1.default.workouts.push(newWorkout);
    (0, utils_1.saveToDatabase)(db_json_1.default);
    return newWorkout;
};
const updateOneWorkout = (workoutId, changes) => {
    const indexForUpdate = db_json_1.default.workouts.findIndex((workout) => workout.id === workoutId);
    if (indexForUpdate === -1) {
        return;
    }
    const updatedWorkout = Object.assign(Object.assign(Object.assign({}, db_json_1.default.workouts[indexForUpdate]), changes), { updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }) });
    db_json_1.default.workouts[indexForUpdate] = updatedWorkout;
    (0, utils_1.saveToDatabase)(db_json_1.default);
    return updatedWorkout;
};
const deleteOneWorkout = (workoutId) => {
    const indexForDelete = db_json_1.default.workouts.findIndex((workout) => workout.id === workoutId);
    if (indexForDelete === -1) {
        return;
    }
    db_json_1.default.workouts.splice(indexForDelete, 1);
    (0, utils_1.saveToDatabase)(db_json_1.default);
};
exports.default = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};
