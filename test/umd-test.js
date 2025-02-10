import 'marked/dist/marked.umd.js';

// @ts-ignore
if (!globalThis.marked.parse('# test').includes('<h1')) {
  throw new Error('Invalid markdown');
}
