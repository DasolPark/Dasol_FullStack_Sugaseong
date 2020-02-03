import express from 'express';
import routes from '../routes';
import {
  user,
  userDetail,
  editProfile,
  changePassword,
  join,
  login,
  logout
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/', user);

userRouter.get(routes.join, join);
userRouter.get(routes.login, login);
userRouter.get(routes.logout, logout);

userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
