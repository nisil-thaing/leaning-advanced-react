import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'));

app.listen(config.port, () => {
  console.log(`Server is running on port ${ config.port }...`);
});
