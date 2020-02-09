import express from 'express';
import routes from '../routes';
import { postRegisterView } from '../controllers/boardController';

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);

export default apiRouter;
