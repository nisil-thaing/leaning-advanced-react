import fs from 'fs';
import path from 'path';

import serverRenderer from './renderers/server';

const handleRender = async (req, res) => {
  const initializeData = await serverRenderer() || 'Loading...';
  const indexFilePath
    = path.resolve('dist', 'index.html');

  try {
    const data = fs.readFileSync(indexFilePath, 'utf8');
    const document = data.replace(/<div id="root"><\/div>/, `<div id="root">${ initializeData }</div>`);
    res.send(document);
  } catch(err) {
    throw err;
  }
};

export default handleRender;
