import fs from 'fs';
import path from 'path';

import serverRenderer from './server-renderer';

const handleRender = (req, res) => {
  const html = serverRenderer() || 'Loading...';
  const indexFilePath
    = path.resolve(__dirname, '..', 'public', 'index.html');

  fs.readFile(indexFilePath, 'utf8', (err, data) => {
    if (err) throw err;

    // Inserts the rendered React HTML into our main div
    const document
      = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`);

    // Sends the response back to the client
    res.send(document);
  });
};

export default handleRender;
