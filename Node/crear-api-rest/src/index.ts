import express, { type Request, type Response } from 'express';
import v1WorkoutRouter from './v1/routes/workoutRoutes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello world to my people</h1>');
});

app.use(express.json());
app.use('/api/v1/workouts', v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`App listen at http://localhost:${PORT}`);
});
