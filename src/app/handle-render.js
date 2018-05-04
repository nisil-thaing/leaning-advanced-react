import fs from 'fs';
import path from 'path';

import serverRenderer from './renderers/server';

const handleRender = (req, res) => {
  const initializeData = serverRenderer() || 'Loading...';
  const indexFilePath
    = path.resolve('views', 'index.html');

  fs.readFile(indexFilePath, 'utf8', (err, data) => {
    if (err) throw err;

    // Inserts the rendered React HTML into our main div
    const document
      = data.replace(/<div id="root"><\/div>/, `<div id="root">${ initializeData }</div>`);

    // Sends the response back to the client
    res.send(document);
  });
};

export default handleRender;
