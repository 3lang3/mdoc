import path from 'path';
import { get } from 'lodash-es';
import fse from 'fs-extra';
import { createRequire } from 'module';
import { smartOutputFile, normalizePath } from '../common';
import { getCssLang, getCssBaseFile } from '../common/css';
import { STYLE_DEPS_JSON_FILE } from '../common/constant';
import context from '../common/context';

const { existsSync } = fse;

type Options = {
  outputPath: string;
  pathResolver?: (path: string) => string;
};

export function genPackageStyle(options: Options) {
  const require = createRequire(import.meta.url);
  const styleDepsJson = require(STYLE_DEPS_JSON_FILE);
  const CSS_LANG = getCssLang();
  const ext = `.${CSS_LANG}`;

  let content = '';

  let baseFile = getCssBaseFile();

  if (baseFile) {
    if (options.pathResolver) {
      baseFile = options.pathResolver(baseFile);
    }

    content += `@import "${normalizePath(baseFile)}";\n`;
  }

  content += styleDepsJson.sequence
    .map((componentFilePath: string) => {
      let stylePath = path.join(componentFilePath, '..', context.opts?.resolve?.style);

      if (!existsSync(stylePath)) {
        return '';
      }

      if (options.pathResolver) {
        stylePath = options.pathResolver(stylePath);
      }

      return `@import "${normalizePath(stylePath)}";`;
    })
    .filter((item: string) => !!item)
    .join('\n');

  smartOutputFile(options.outputPath, content);
}
