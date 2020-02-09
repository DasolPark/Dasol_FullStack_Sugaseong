import express from 'express';
import passport from 'passport';
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
  postEditProfile,
  githubLogin,
  postGithubLogIn,
  getMe
} from '../controllers/userController';
import { onlyPublic, onlyPrivate } from '../middlewares';

const userRouter = express.Router();

userRouter.get(routes.join, onlyPublic, getJoin);
userRouter.post(routes.join, onlyPublic, postJoin, postLogin);

userRouter.get(routes.login, onlyPublic, getLogin);
userRouter.post(routes.login, onlyPublic, postLogin);

userRouter.get(routes.logout, onlyPrivate, logout);

userRouter.get(routes.github, githubLogin);
userRouter.get(
  routes.githubCallback,
  passport.authenticate('github', { failureRedirect: '/user/login' }),
  postGithubLogIn
);

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, changePassword);

userRouter.get(routes.me, getMe);

userRouter.get(routes.userDetail, userDetail);

export default userRouter;
