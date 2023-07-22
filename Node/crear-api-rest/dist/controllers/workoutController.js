"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const workoutService_1 = __importDefault(require("../services/workoutService"));
const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService_1.default.getAllWorkouts();
    res.status(200).send({ status: 'OK', data: allWorkouts });
};
const getOneWorkout = (req, res) => {
    const { workoutId } = req.params;
    if (!workoutId)
        return;
    const workout = workoutService_1.default.getOneWorkout(workoutId);
    res.status(200).send({
        status: 'OK',
        data: workout,
    });
};
const createNewWorkout = (req, res) => {
    const { body } = req;
    if (!body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips)
        return;
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };
    const createdWorkout = workoutService_1.default.createNewWorkout(newWorkout);
    res.status(201).send({
        status: 'OK',
        data: createdWorkout,
    });
};
const updateOneWorkout = (req, res) => {
    const { params: { workoutId }, body, } = req;
    if (!workoutId)
        return;
    const updatedWorkout = workoutService_1.default.updateOneWorkout(workoutId, body);
    res.status(200).send({
        status: 'OK',
        data: updatedWorkout,
    });
};
const deleteOneWorkout = (req, res) => {
    const { workoutId } = req.params;
    if (!workoutId)
        return;
    workoutService_1.default.deleteOneWorkout(workoutId);
    res.status(200).send({
        status: 'OK',
    });
};
exports.default = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};
