import express from 'express';
import routes from '../routes';
import { about, intro } from '../controllers/aboutController';

const aboutRouter = express.Router();

aboutRouter.get('/', about);
aboutRouter.get(routes.intro, intro);

export default aboutRouter;
