import dotenv from 'dotenv';
import app from './app';
import './db';

dotenv.config();

const PORT =
  process.env.NODE_ENV === 'development'
    ? process.env.DEV_PORT || 4000
    : process.env.PROD_PORT || 5050;

const onServerListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, onServerListening);
