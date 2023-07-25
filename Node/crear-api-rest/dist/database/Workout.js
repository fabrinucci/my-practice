"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_json_1 = __importDefault(require("./db.json"));
const utils_1 = require("./utils");
const getAllWorkouts = () => {
    try {
        return db_json_1.default.workouts;
    }
    catch (error) {
        throw {
            status: 500,
            message: (error === null || error === void 0 ? void 0 : error.message) || error,
        };
    }
};
const getOneWorkout = (workoutId) => {
    try {
        const workout = db_json_1.default.workouts.find((workout) => workout.id === workoutId);
        if (!workout) {
            throw {
                status: 400,
                message: `Can not find workout with the id '${workoutId}'`,
            };
        }
        return workout;
    }
    catch (error) {
        throw {
            status: 500,
            message: (error === null || error === void 0 ? void 0 : error.message) || error,
        };
    }
};
const createNewWorkout = (newWorkout) => {
    try {
        const isAlreadyAdded = db_json_1.default.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `Workout with the name '${newWorkout.name}' already exists`,
            };
        }
        db_json_1.default.workouts.push(newWorkout);
        (0, utils_1.saveToDatabase)(db_json_1.default);
        return newWorkout;
    }
    catch (error) {
        throw { status: 500, message: (error === null || error === void 0 ? void 0 : error.message) || error };
    }
};
const updateOneWorkout = (workoutId, changes) => {
    try {
        const indexForUpdate = db_json_1.default.workouts.findIndex((workout) => workout.id === workoutId);
        if (indexForUpdate === -1) {
            throw {
                status: 400,
                message: `Can not find workout with the id '${workoutId}'`,
            };
        }
        const updatedWorkout = Object.assign(Object.assign(Object.assign({}, db_json_1.default.workouts[indexForUpdate]), changes), { updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }) });
        db_json_1.default.workouts[indexForUpdate] = updatedWorkout;
        (0, utils_1.saveToDatabase)(db_json_1.default);
        return updatedWorkout;
    }
    catch (error) {
        throw { status: 500, message: (error === null || error === void 0 ? void 0 : error.message) || error };
    }
};
const deleteOneWorkout = (workoutId) => {
    try {
        const indexForDelete = db_json_1.default.workouts.findIndex((workout) => workout.id === workoutId);
        if (indexForDelete === -1) {
            throw {
                status: 400,
                message: `Can not find workout with the id '${workoutId}'`,
            };
        }
        db_json_1.default.workouts.splice(indexForDelete, 1);
        (0, utils_1.saveToDatabase)(db_json_1.default);
    }
    catch (error) {
        throw { status: 500, message: (error === null || error === void 0 ? void 0 : error.message) || error };
    }
};
exports.default = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};
