import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import path from 'path';
import mongoose from 'mongoose';

import { localMiddlewares } from './middlewares';
import userRouter from './routers/userRouter';
import globalRouter from './routers/globalRouter';
import aboutRouter from './routers/aboutRouter';
import timeTableRouter from './routers/timeTableRouter';
import boardRouter from './routers/boardRouter';
import mapRouter from './routers/mapRouter';
import routes from './routes';

import './passport';
import apiRouter from './routers/apiRouter';

dotenv.config();

const CookieStore = MongoStore(session);

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(localMiddlewares);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/uploads', express.static('uploads'));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.use(routes.user, userRouter);
app.use(routes.home, globalRouter);
app.use(routes.about, aboutRouter);
app.use(routes.timeTable, timeTableRouter);
app.use(routes.board, boardRouter);
app.use(routes.map, mapRouter);
app.use(routes.api, apiRouter);

export default app;
