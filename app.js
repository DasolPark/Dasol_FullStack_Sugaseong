import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import { userRouter } from './router';

const app = express();

const onHomeListening = (req, res) => {
  console.log(req.cookies);
  res.send('Hi Home!');
};

app.use(helmet());
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', onHomeListening);

app.use('/user', userRouter);

export default app;
