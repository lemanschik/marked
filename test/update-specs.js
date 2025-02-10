import { writeFile, readdir, unlink } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { load } from 'cheerio';
import { htmlIsEqual } from '@markedjs/testutils';
import { Marked } from '../lib/marked.js';

const fullpath = (dir = '') => (file = '') => join(dir, file);
const removeFiles = dir => readdir(dir).then(
  files => Promise.all(files.map(fullpath(dir)).map(unlink)),
).then(() => dir);

const commonmarkVersionSpecsPromise = fetch(
  'https://raw.githubusercontent.com/commonmark/commonmark.js/master/package.json',
).then(r => r.json()).then(
  ({ version }) => fetch(`https://spec.commonmark.org/${version}/spec.json`).then(
    specsResponse => specsResponse.json().then(
      specs => ({ version, specs }),
    )),
);

function updateCommonmark(dir = '') {
  const gfm = dir.endsWith('gfm');

  return commonmarkVersionSpecsPromise.then(({ version, specs }) =>
    writeFile(
      resolve(dir, `./commonmark.${version}.json`),
      JSON.stringify(specs.map(
        spec =>
          !htmlIsEqual(
            new Marked().parse(spec.markdown, { gfm, pedantic: false }),
            spec.html,
          )
            ? Object.assign(spec, { shouldFail: true })
            : spec,

      ), null, 2) + '\n',
    ).then(() => {
      console.log(`Saved CommonMark v${version} specs`);
      if (gfm) {
        return updateGfm(dir);
      }
    }),
  );
}

function updateGfm(dir) {
  return fetch('https://github.github.com/gfm/').then(r => r.text()).then(html => {
    const $ = load(html);
    // const version = $('.version').text().match(/\d+\.\d+/)[0];
    const version = html.split('"version">Version ', 2).at(1).split('-').at(0);
    if (!version) {
      throw new Error('No version found');
    }
    const specs = [];
    $('.extension').each((i, ext) => {
      const section = $('.definition', ext).text().trim().replace(
        /^\d+\.\d+(.*?) \(extension\)[\s\S]*$/,
        '$1',
      );

      $('.example', ext).each((j, exa) => {
        const example = +$(exa).attr('id').replace(/\D/g, '');
        const markdown = $('.language-markdown', exa).text().trim();
        const html = $('.language-html', exa).text().trim();
        specs.push({
          section: `[extension] ${section}`,
          html,
          markdown,
          example,
        });
      });
    });
    return { version, specs };
  }).then(({ version, specs }) =>
    writeFile(
      resolve(dir, `./gfm.${version}.json`),
      `${JSON.stringify(specs.map((spec) =>
        !htmlIsEqual(
          new Marked().parse(
            spec.markdown, { gfm: true, pedantic: false },
          ),
          spec.html,
        )
          ? Object.assign(spec, { shouldFail: true })
          : spec,
      ), null, 2)}\n`,
    ).then(() => console.log(`Saved GFM v${version} specs.`)),
  );
}

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  console.error(`Caught exception: ${error}\n` + `Exception origin: ${error.stack}`);
});

removeFiles(resolve(import.meta.dirname, './specs/commonmark')).then(updateCommonmark);
removeFiles(resolve(import.meta.dirname, './specs/gfm')).then(updateCommonmark);
