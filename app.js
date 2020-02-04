import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import userRouter from './routers/userRouter';
import globalRouter from './routers/globalRouter';
import aboutRouter from './routers/aboutRouter';
import timeTableRouter from './routers/timeTableRouter';
import boardRouter from './routers/boardRouter';
import mapRouter from './routers/mapRouter';
import routes from './routes';
import { localMiddlewares } from './middlewares';

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(localMiddlewares);

app.set('view engine', 'pug');

app.use(routes.user, userRouter);
app.use(routes.home, globalRouter);
app.use(routes.about, aboutRouter);
app.use(routes.timeTable, timeTableRouter);
app.use(routes.board, boardRouter);
app.use(routes.map, mapRouter);

export default app;
