import express from 'express';
import routes from '../routes';
import {
  postRegisterView,
  postAddComment,
  postDelComment
} from '../controllers/boardController';

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);
apiRouter.post(routes.delComment, postDelComment);

export default apiRouter;