import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const onOpen = () => console.log('Connected to DB');
const onError = error => console.log(`Error on DB Connection:${error}`);

db.once('open', onOpen);
db.on('error', onError);
