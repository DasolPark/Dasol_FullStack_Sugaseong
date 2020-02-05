import dotenv from 'dotenv';
import './db';
import app from './app';
import './models/Board';
import './models/Comment';

dotenv.config();

const PORT = process.env.PORT || 4000;

const onServerListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, onServerListening);
