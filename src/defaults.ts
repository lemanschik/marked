import type { MarkedOptions } from './MarkedOptions.js';

/**
 * Gets the original marked default options.
 * @typedef {import('./MarkedOptions.js').MarkedOptions} MarkedOptions
 */
export function _getDefaults(): MarkedOptions {
  return /** @type {MarkedOptions} */ ({
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null,
  });
}

export let _defaults = _getDefaults();

export function changeDefaults(/** @type {MarkedOptions} */ newDefaults: MarkedOptions) {
  _defaults = newDefaults;
}
