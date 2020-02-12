import dotenv from 'dotenv';
import passport from 'passport';
import GithubStrategy from 'passport-github';
import FacebookStrategy from 'passport-facebook';
import User from './models/User';
import {
  githubLoginCallback,
  facebookLoginCallback
} from './controllers/userController';
import routes from './routes';

dotenv.config();

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
      callbackURL: process.env.NODE_ENV
        ? `https://still-hollows-17834.herokuapp.com/user${routes.githubCallback}`
        : `http://localhost:4000/user${routes.githubCallback}`
    },
    githubLoginCallback
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: process.env.NODE_ENV
        ? `https://still-hollows-17834.herokuapp.com/user${routes.facebookCallback}`
        : `http://localhost:4000/user${routes.facebookCallback}`,
      profileFields: ['id', 'displayName', 'photos', 'email'],
      scope: ['public_profile', 'email']
    },
    facebookLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
