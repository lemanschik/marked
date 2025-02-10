// import type { MarkedOptions } from './MarkedOptions.js';

export const markedDefaultOptions = /** @type {const} */ ({
  /**
   * True will tell marked to await any walkTokens functions
   * before parsing the tokens and returning an HTML string.
   */
  async: false,
  /**
   * Enable GFM line breaks. This option requires the gfm option to be true.
   */
  breaks: false,
  extensions: null,
  /**
   * Enable GitHub flavored markdown.
   */
  gfm: true,
  hooks: null,
  /**
   * Conform to obscure parts of markdown.pl as much as possible.
   * Don't fix any of the original markdown bugs or poor behavior.
   */
  pedantic: false,
  renderer: null,
  /**
   * Shows an HTML error message when rendering fails.
   */
  silent: false,
  tokenizer: null,
  /**
   * walkTokens function returns array of values for Promise.all
   */
  walkTokens: null,
});

/**
 * Gets the original marked default options.
 * @typedef {import('./MarkedOptions.js').MarkedOptions} MarkedOptions
 */
export function _getDefaults() {
  return (/** @type {MarkedOptions} */ (markedDefaultOptions));
}

export const _defaults = _getDefaults();

export function changeDefaults(/** @type {MarkedOptions} */ newDefaults) {
  Object.assign(_defaults, newDefaults);
}
