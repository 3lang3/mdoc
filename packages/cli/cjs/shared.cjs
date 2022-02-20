const { join, dirname } = require('path');
const { existsSync } = require('fs');

const ACCEPT_FILES = [
  'mdoc.config.ts',
  'mdoc.config.js',
  'mdoc.config.mjs',
  'mdoc.config.json',
]

function findRootDir(dir) {
  if (ACCEPT_FILES.some(cfg => existsSync(join(dir, cfg)))) {
    return dir;
  }

  const parentDir = dirname(dir);
  if (dir === parentDir) {
    return dir;
  }

  return findRootDir(parentDir);
}

const CWD = process.cwd();
const ROOT = findRootDir(CWD);

module.exports = {
  CWD,
  ROOT,
};
