import express, { type Request, type Response } from 'express';
import v1WorkoutRouter from './v1/routes/workoutRoutes';
import dotenv from 'dotenv';
dotenv.config();
import { swaggerDocs as V1SwaggerDocs } from './v1/swagger';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req: Request, res: Response) => {
  res.send(
    `<h1>
      <a href='http://localhost:${4000}/api/v1/workouts'>Go to workouts</a>
    </h1>`
  );
});

app.use(express.json());
app.use('/api/v1/workouts', v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`App listen at http://localhost:${PORT}`);
  V1SwaggerDocs(app, PORT);
});
