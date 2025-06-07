import os from 'os';
import path from 'path';
import { promises as fsp } from 'fs';

import getLocalName from './getLocalName.js';
import downloadHtml from './downloadHtml.js';
import downloadResources from './downloadResources.js';
import replaceLinks from './replaceLinks.js';

export default function loadPage(url, outputDir = process.cwd()) {
  // Проверка типа outputDir
  if (typeof outputDir !== 'string') {
    return Promise.reject(new TypeError('outputDir must be a string'));
  }

  const normalizedOutputDir = outputDir.replace(/^~/, os.homedir());
  const filename = getLocalName(url, 'html');
  const filepath = path.resolve(normalizedOutputDir, filename);

  return downloadHtml(url, normalizedOutputDir)
    .then((htmlPath) => downloadResources(url, normalizedOutputDir, htmlPath))
    .then((imgPaths) => replaceLinks(filepath, imgPaths))
    .then((html) => fsp.writeFile(filepath, html))
    .then(() => filepath);
}

