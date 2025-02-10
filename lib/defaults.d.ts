export declare const markedDefaultOptions: {
    /**
     * True will tell marked to await any walkTokens functions
     * before parsing the tokens and returning an HTML string.
     */
    async: boolean;
    /**
     * Enable GFM line breaks. This option requires the gfm option to be true.
     */
    breaks: boolean;
    extensions: any;
    /**
     * Enable GitHub flavored markdown.
     */
    gfm: boolean;
    hooks: any;
    /**
     * Conform to obscure parts of markdown.pl as much as possible.
     * Don't fix any of the original markdown bugs or poor behavior.
     */
    pedantic: boolean;
    renderer: any;
    /**
     * Shows an HTML error message when rendering fails.
     */
    silent: boolean;
    tokenizer: any;
    /**
     * walkTokens function returns array of values for Promise.all
     */
    walkTokens: any;
};
/**
 * Gets the original marked default options.
 * @typedef {import('./MarkedOptions.js').MarkedOptions} MarkedOptions
 */
export declare function _getDefaults(): {
    /**
     * True will tell marked to await any walkTokens functions
     * before parsing the tokens and returning an HTML string.
     */
    async: boolean;
    /**
     * Enable GFM line breaks. This option requires the gfm option to be true.
     */
    breaks: boolean;
    extensions: any;
    /**
     * Enable GitHub flavored markdown.
     */
    gfm: boolean;
    hooks: any;
    /**
     * Conform to obscure parts of markdown.pl as much as possible.
     * Don't fix any of the original markdown bugs or poor behavior.
     */
    pedantic: boolean;
    renderer: any;
    /**
     * Shows an HTML error message when rendering fails.
     */
    silent: boolean;
    tokenizer: any;
    /**
     * walkTokens function returns array of values for Promise.all
     */
    walkTokens: any;
};
export declare const _defaults: {
    /**
     * True will tell marked to await any walkTokens functions
     * before parsing the tokens and returning an HTML string.
     */
    async: boolean;
    /**
     * Enable GFM line breaks. This option requires the gfm option to be true.
     */
    breaks: boolean;
    extensions: any;
    /**
     * Enable GitHub flavored markdown.
     */
    gfm: boolean;
    hooks: any;
    /**
     * Conform to obscure parts of markdown.pl as much as possible.
     * Don't fix any of the original markdown bugs or poor behavior.
     */
    pedantic: boolean;
    renderer: any;
    /**
     * Shows an HTML error message when rendering fails.
     */
    silent: boolean;
    tokenizer: any;
    /**
     * walkTokens function returns array of values for Promise.all
     */
    walkTokens: any;
};
export declare function changeDefaults(/** @type {MarkedOptions} */ newDefaults: any): void;
