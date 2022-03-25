import {
  smartOutputFile,
  normalizePath,
  replaceExt,
} from '../common';
import {
  getPackageJson,
  SITE_SHARED_FILE,
  SITE_SHARD_CONFIG_FILE,
  PACKAGE_STYLE_FILE,
  SITE_SHARED_MENU_FILE,
} from '../common/constant';
import { genSiteMenu } from './gen-site-menu'
import { getCssLang } from '../common/css';
import { genSiteMenuShared } from './gen-site-menu-shared'
import { genSiteRoutesShared } from './gen-site-routes-shared'

// Import all json file
function genImportJSON() {
  return `
export { default as config} from '${normalizePath(SITE_SHARD_CONFIG_FILE)}';
export { default as menus} from '${normalizePath(SITE_SHARED_MENU_FILE)}';
  `;
}

function genStyles() {
  const CSS_LANG = getCssLang();
  return `import '${replaceExt(PACKAGE_STYLE_FILE, `.${CSS_LANG}`)}'`
}

function genExportVersion() {
  const projectPackageJson = getPackageJson();
  return `export const packageVersion = '${projectPackageJson.version}';`;
}

export async function genSiteDesktopShared() {
  const { menus, routes } = genSiteMenu()
  const code = `${genImportJSON()}
${genStyles()}
${genExportVersion()}
`;
  genSiteMenuShared(menus);
  genSiteRoutesShared(routes);
  smartOutputFile(SITE_SHARED_FILE, code);
}
