import express from 'express';
import crypto from 'crypto';

import config from 'app/config';
import router from 'app/routers/server';
import serverRenderer from 'app/renderers/server';

const app = express();
const randomStaticVersion = (() => {
  const currentDate = (new Date()).valueOf().toString();
  const random = Math.random().toString();
  return crypto.createHash('sha1').update(currentDate + random).digest('hex');
})();

app.set('view engine', 'jade');

app.get('/', async (req, res) => {
  const initialContent = serverRenderer();
  res.render('index', { ...initialContent, staticVersion: randomStaticVersion });
});

app.use('/api', router);

app.use(express.static('dist'));

app.listen(config.port, () => {
  console.log(`Server is running on port ${ config.port }...`);
});
