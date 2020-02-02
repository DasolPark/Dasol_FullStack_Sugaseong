import express from 'express';

const app = express();

const PORT = 4000;

const onServerListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

const onHomeListening = (req, res) => {
  res.send('Hi Home!');
};

app.get('/', onHomeListening);

app.listen(PORT, onServerListening);
