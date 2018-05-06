import fs from 'fs';
import path from 'path';

import serverRenderer from './renderers/server';

const handleRender = async (req, res) => {
  const initializeContent = await serverRenderer() || 'Loading...';
  const indexFilePath
    = path.resolve('dist', 'index.html');
  const { initializeMarkup, initializeData } = initializeContent;

  try {
    const data = fs.readFileSync(indexFilePath, 'utf8');
    let document = '';

    document = data.replace(
      /<\/head>/,
      `<script>window.initialData = ${ JSON.stringify(initializeData) }</script></head>`
    );
    document = document.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${ initializeMarkup }</div>`
    );

    res.send(document);
  } catch(err) {
    throw err;
  }
};

export default handleRender;
