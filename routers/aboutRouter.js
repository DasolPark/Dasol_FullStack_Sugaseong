import express from 'express';
import routes from '../routes';
import { about, intro, timeTable, map } from '../controllers/aboutController';

const aboutRouter = express.Router();

aboutRouter.get('/', about);
aboutRouter.get(routes.intro, intro);
aboutRouter.get(routes.timeTable, timeTable);
aboutRouter.get(routes.map, map);

export default aboutRouter;
