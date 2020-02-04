import express from 'express';
import { timeTable } from '../controllers/timeTableController';

const timeTableRouter = express.Router();

timeTableRouter.get('/', timeTable);

export default timeTableRouter;
