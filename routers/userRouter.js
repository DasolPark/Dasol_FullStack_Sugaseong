import express from 'express';
import routes from '../routes';
import {
  userDetail,
  editProfile,
  changePassword,
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.join, getJoin);
userRouter.post(routes.join, postJoin);

userRouter.get(routes.login, getLogin);
userRouter.post(routes.login, postLogin);

userRouter.get(routes.logout, logout);

userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
