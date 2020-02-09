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
  postGithubLogin,
  getMe,
  facebookLogin,
  postFacebookLogin
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
  postGithubLogin
);

userRouter.get(routes.facebook, facebookLogin);
userRouter.get(
  routes.facebookCallback,
  passport.authenticate('facebook', { failureRedirect: '/user/login' }),
  postFacebookLogin
);

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, changePassword);

userRouter.get(routes.me, getMe);

userRouter.get(routes.userDetail, userDetail);

export default userRouter;
