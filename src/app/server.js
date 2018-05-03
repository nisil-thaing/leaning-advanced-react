import express from 'express';

import config from './config';
import handleRender from './handle-render';

const app = express();

app.get('/', handleRender);

app.use(express.static('public'));

app.listen(config.port, () => {
  console.log(`Server is running on port ${ config.port }...`);
});
