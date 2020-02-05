import express from 'express';
import routes from '../routes';
import {
  userDetail,
  changePassword,
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  getEditProfile,
  postEditProfile
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.join, getJoin);
userRouter.post(routes.join, postJoin);

userRouter.get(routes.login, getLogin);
userRouter.post(routes.login, postLogin);

userRouter.get(routes.logout, logout);

userRouter.get(routes.userDetail(), userDetail);

userRouter.get(routes.editProfile, getEditProfile);
userRouter.post(routes.editProfile, postEditProfile);

userRouter.get(routes.changePassword, changePassword);

export default userRouter;
