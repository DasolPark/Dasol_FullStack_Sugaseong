import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/sugaseong', {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const onOpen = () => console.log('Connected to DB');
const onError = () => console.log(`Error on DB Connection:${error}`);

db.once('open', onOpen);
db.on('error', onError);
