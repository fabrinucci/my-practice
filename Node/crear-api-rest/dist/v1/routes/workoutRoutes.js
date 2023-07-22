"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workoutController_1 = __importDefault(require("../../controllers/workoutController"));
const router = (0, express_1.Router)();
router.route('/').get(workoutController_1.default.getAllWorkouts);
router.route('/:workoutId').get(workoutController_1.default.getOneWorkout);
router.route('/').post(workoutController_1.default.createNewWorkout);
router.route('/:workoutId').patch(workoutController_1.default.updateOneWorkout);
router.route('/:workoutId').delete(workoutController_1.default.deleteOneWorkout);
exports.default = router;
