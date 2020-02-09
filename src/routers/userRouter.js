import express from 'express';
import passport from 'passport';
import routes from '../routes';
import {
  userDetail,
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
  postFacebookLogin,
  getChangePassword,
  postChangePassword
} from '../controllers/userController';
import { onlyPublic, onlyPrivate, uploadAvatar } from '../middlewares';

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
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

userRouter.get(routes.me, getMe);

userRouter.get(routes.userDetail, userDetail);

export default userRouter;
