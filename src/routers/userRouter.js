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
import { onlyPublic, onlyPrivate } from '../middlewares';

const userRouter = express.Router();

userRouter.get(routes.join, onlyPublic, getJoin);
userRouter.post(routes.join, onlyPublic, postJoin, postLogin);

userRouter.get(routes.login, onlyPublic, getLogin);
userRouter.post(routes.login, onlyPublic, postLogin);

userRouter.get(routes.logout, logout);

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, changePassword);

userRouter.get(routes.userDetail, userDetail);

export default userRouter;
