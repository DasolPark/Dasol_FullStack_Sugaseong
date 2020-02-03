import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import aboutRouter from './routers/aboutRouter';
import boardRouter from './routers/boardRouter';
import routes from './routes';

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(logger('dev'));

app.set('view engine', 'pug');

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.about, aboutRouter);
app.use(routes.board, boardRouter);

export default app;
