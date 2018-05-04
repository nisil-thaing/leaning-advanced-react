import express from 'express';

import config from 'app/config';
import handleRender from 'app/handle-render';

const app = express();

app.get('/', handleRender);

app.use(express.static('dist'));

app.listen(config.port, () => {
  console.log(`Server is running on port ${ config.port }...`);
});
