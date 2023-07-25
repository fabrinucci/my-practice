"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const workoutService_1 = __importDefault(require("../services/workoutService"));
const getAllWorkouts = (req, res) => {
    try {
        const allWorkouts = workoutService_1.default.getAllWorkouts();
        res.status(200).send({ status: 'OK', data: allWorkouts });
    }
    catch (error) {
        res.status((error === null || error === void 0 ? void 0 : error.status) || 500).send({
            status: 'FAILED',
            data: {
                error: (error === null || error === void 0 ? void 0 : error.message) || error,
            },
        });
    }
};
const getOneWorkout = (req, res) => {
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
        const workout = workoutService_1.default.getOneWorkout(workoutId);
        res.status(200).send({
            status: 'OK',
            data: workout,
        });
    }
    catch (error) {
        res.status((error === null || error === void 0 ? void 0 : error.status) || 500).send({
            status: 'FAILED',
            data: {
                error: (error === null || error === void 0 ? void 0 : error.message) || error,
            },
        });
    }
};
const createNewWorkout = (req, res) => {
    const { body } = req;
    if (!body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips) {
        res.status(400).send({
            status: 'FAILED',
            data: {
                error: "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
            },
        });
        return;
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };
    try {
        const createdWorkout = workoutService_1.default.createNewWorkout(newWorkout);
        res.status(201).send({
            status: 'OK',
            data: createdWorkout,
        });
    }
    catch (error) {
        res.status((error === null || error === void 0 ? void 0 : error.status) || 500).send({
            status: 'FAILED',
            data: { error: (error === null || error === void 0 ? void 0 : error.message) || error },
        });
    }
};
const updateOneWorkout = (req, res) => {
    const { params: { workoutId }, body, } = req;
    if (!workoutId) {
        res.status(400).send({
            status: 'FAILED',
            data: {
                error: 'Parameter ":workoutId" can not be empty',
            },
        });
    }
    try {
        const updatedWorkout = workoutService_1.default.updateOneWorkout(workoutId, body);
        res.status(200).send({
            status: 'OK',
            data: updatedWorkout,
        });
    }
    catch (error) {
        res.status((error === null || error === void 0 ? void 0 : error.status) || error).send({
            status: 'FAILED',
            data: {
                error: (error === null || error === void 0 ? void 0 : error.message) || error,
            },
        });
    }
};
const deleteOneWorkout = (req, res) => {
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
        workoutService_1.default.deleteOneWorkout(workoutId);
        res.status(200).send({
            status: 'OK',
            data: {
                message: `Workout with id '${workoutId}' deleted`,
            },
        });
    }
    catch (error) {
        res.status((error === null || error === void 0 ? void 0 : error.status) || error).send({
            status: 'FAILED',
            data: {
                error: (error === null || error === void 0 ? void 0 : error.message) || error,
            },
        });
    }
};
exports.default = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};
