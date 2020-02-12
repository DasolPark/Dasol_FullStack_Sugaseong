import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(
  process.env.NODE_ENV === 'development'
    ? process.env.MONGO_URL
    : process.env.MONGO_URL_PROD,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

const onOpen = () => console.log('Connected to DB');
const onError = error => console.log(`Error on DB Connection:${error}`);

db.once('open', onOpen);
db.on('error', onError);

export default db;
