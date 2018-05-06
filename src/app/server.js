import express from 'express';

import config from 'app/config';
import handleRender from 'app/handle-render';
import router from 'app/routers/server';

const app = express();

app.get('/', handleRender);

app.use('/api', router);

app.use(express.static('dist'));

app.listen(config.port, () => {
  console.log(`Server is running on port ${ config.port }...`);
});
