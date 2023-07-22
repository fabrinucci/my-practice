"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const workoutRoutes_1 = __importDefault(require("./v1/routes/workoutRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.send('<h1>Hello world to my people</h1>');
});
app.use(express_1.default.json());
app.use('/api/v1/workouts', workoutRoutes_1.default);
app.listen(PORT, () => {
    console.log(`App listen at http://localhost:${PORT}`);
});
