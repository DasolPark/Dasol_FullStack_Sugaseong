import express from 'express';
import routes from '../routes';
import {
  postRegisterView,
  postAddComment
} from '../controllers/boardController';

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
