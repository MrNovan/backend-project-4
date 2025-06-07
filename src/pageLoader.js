import fsp from 'fs/promises';
import path from 'path';
import os from 'os';

import {
  getLocalName, downloadHtml, downloadResources, replaceLinks,
} from './utils.js';

export default (url, outputDir = process.cwd()) => {
  const normalizedOutputDir = outputDir.replace(/^~/, os.homedir());
  const filename = getLocalName(url, 'html');
  const filepath = path.resolve(normalizedOutputDir, filename);

  return downloadHtml(url, outputDir)
    .then((htmlPath) => downloadResources(url, normalizedOutputDir, htmlPath))
    .then((imgPaths) => replaceLinks(filepath, imgPaths))
    .then((html) => fsp.writeFile(filepath, html))
    .then(() => filepath);
};
