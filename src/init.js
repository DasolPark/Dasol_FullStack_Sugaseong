import dotenv from 'dotenv';
import app from './app';
import './db';

dotenv.config();

const PORT = process.env.PORT || 4000;

const onServerListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, onServerListening);
