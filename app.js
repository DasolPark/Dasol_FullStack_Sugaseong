import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

const PORT = 4000;

const onHomeListening = (req, res) => {
  console.log(req.cookies);
  res.send('Hi Home!');
};

const onServerListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

app.use(helmet());
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', onHomeListening);

app.listen(PORT, onServerListening);
