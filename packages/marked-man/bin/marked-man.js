#!/usr/bin/env node

import markedMan from 'marked-man-src';
import { marked } from 'marked';

const { argv } = process;
argv.forEach((arg, i) => {
  if (arg.startsWith('--version')) {
    argv[i] = arg.replace(/^--version/, '--man-version');
  }
});

let fileArg = argv.slice(-1)[0];
if (fileArg === argv[1] || fileArg.startsWith('-')) {
  fileArg = null;
}

marked.use(Object.assign(markedMan, { fileArg }));

import('marked-cli/bin/marked');
