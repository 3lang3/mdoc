import { relative, sep, join } from 'path';
import fse from 'fs-extra';
import { getCssLang } from '../common/css';
import { getDeps, clearDepsCache, fillExt } from './get-deps';
import { getComponents, smartOutputFile } from '../common';
import { PROJECT_SRC_DIR, STYLE_DEPS_JSON_FILE } from '../common/constant';

const { existsSync } = fse;

function matchPath(path: string, component: string): boolean {
  const p = relative(PROJECT_SRC_DIR, path);
  const arr = p.split(sep);
  return arr.includes(component);
}

function getStylePath(component: string) {
  const CSS_LANG = getCssLang();
  return join(PROJECT_SRC_DIR, `${component}/style/index.${CSS_LANG}`);
}

export function checkStyleExists(component: string) {
  return existsSync(getStylePath(component));
}

// analyze component dependencies
function analyzeComponentDeps(components: string[], component: string) {
  const checkList: string[] = [];
  const componentEntry = fillExt(join(PROJECT_SRC_DIR, component, 'index'));
  const record = new Set();

  function search(filePath: string) {
    record.add(filePath);

    getDeps(filePath).forEach((key) => {
      if (record.has(key)) {
        return;
      }
      search(key);
      components
        .filter((item) => matchPath(key, item))
        .forEach((item) => {
          if (!checkList.includes(item) && item !== component) {
            checkList.push(item);
          }
        });
    });
  }

  search(componentEntry);
  return checkList.filter(checkStyleExists);
}

type DepsMap = Record<string, string[]>;

function getSequence(components: string[], depsMap: DepsMap) {
  const sequence: string[] = [];
  const record = new Set();

  function add(item: string) {
    const deps = depsMap[item];

    if (sequence.includes(item) || !deps) {
      return;
    }

    if (record.has(item)) {
      sequence.push(item);
      return;
    }

    record.add(item);

    if (!deps.length) {
      sequence.push(item);
      return;
    }

    deps.forEach(add);

    if (sequence.includes(item)) {
      return;
    }

    const maxIndex = Math.max(...deps.map((dep) => sequence.indexOf(dep)));

    sequence.splice(maxIndex + 1, 0, item);
  }

  components.forEach(add);

  return sequence;
}

export async function genStyleDepsMap() {
  const components = getComponents();

  const CSS_LANG = getCssLang();
  console.log(CSS_LANG)

  return new Promise((resolve) => {
    clearDepsCache();

    const map = {} as DepsMap;

    components.forEach((component) => {
      map[component] = analyzeComponentDeps(components, component);
    });
    const sequence = getSequence(components, map);

    Object.keys(map).forEach((key) => {
      map[key] = map[key].sort((a, b) => sequence.indexOf(a) - sequence.indexOf(b));
    });

    smartOutputFile(STYLE_DEPS_JSON_FILE, JSON.stringify({ map, sequence }, null, 2));

    resolve(true);
  });
}
