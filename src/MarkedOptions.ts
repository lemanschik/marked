import type { Token, Tokens, TokensList } from './Tokens.js';

/**
 * @typedef {import('./Tokens.js').Token} Token
 * @typedef {import('./Tokens.js').Tokens} Tokens
 * @typedef {import('./Tokens.js').TokensList} TokensList
 */
import { _Parser } from './Parser.js';
import { _Lexer } from './Lexer.js';
import { _Renderer } from './Renderer.js';
import { _Tokenizer } from './Tokenizer.js';
import { _Hooks } from './Hooks.js';

/**
 * @typedef {Object} TokenizerThis
 * @property {_Lexer} lexer
 */

/**
 * @callback TokenizerExtensionFunction
 * @this TokenizerThis
 * @param {string} src
 * @param {Token[] | TokensList} tokens
 * @returns {Tokens.Generic | undefined}
 */

/**
 * @callback TokenizerStartFunction
 * @this TokenizerThis
 * @param {string} src
 * @returns {number | void}
 */

/**
 * @typedef {Object} TokenizerExtension
 * @property {string} name
 * @property {'block' | 'inline'} level
 * @property {TokenizerStartFunction} [start]
 * @property {TokenizerExtensionFunction} tokenizer
 * @property {string[]} [childTokens]
 */

/**
 * @typedef {Object} RendererThis
 * @property {_Parser} parser
 */

/**
 * @callback RendererExtensionFunction
 * @this RendererThis
 * @param {Tokens.Generic} token
 * @returns {string | false | undefined}
 */

/**
 * @typedef {Object} RendererExtension
 * @property {string} name
 * @property {RendererExtensionFunction} renderer
 */

/**
 * @typedef {TokenizerExtension | RendererExtension | (TokenizerExtension & RendererExtension)} TokenizerAndRendererExtension
 */

/**
 * @typedef {Omit<_Hooks, 'constructor' | 'options' | 'block'>} HooksApi
 */

/**
 * @typedef {Object.<keyof HooksApi, function(this: _Hooks, ...args: any[]): any | Promise<any>>} HooksObject
 */

/**
 * @typedef {Omit<_Renderer, 'constructor' | 'options' | 'parser'>} RendererApi
 */

/**
 * @typedef {Object.<keyof RendererApi, function(this: _Renderer, ...args: any[]): any | false>} RendererObject
 */

/**
 * @typedef {Omit<_Tokenizer, 'constructor' | 'options' | 'rules' | 'lexer'>} TokenizerApi
 */

/**
 * @typedef {Object.<keyof TokenizerApi, function(this: _Tokenizer, ...args: any[]): any | false>} TokenizerObject
 */

/**
 * @typedef {Object} SharedOptionsExtension
 * @property {boolean} [async] Enable async parsing.
 * @property {boolean} [breaks] Enable GFM line breaks.
 * @property {boolean} [gfm] Enable GitHub flavored markdown.
 * @property {boolean} [pedantic] Conform to markdown.pl standards.
 * @property {boolean} [silent] Show an HTML error message when rendering fails.
 */

/**
 * @typedef {SharedOptionsExtension} MarkedExtension
 * @property {TokenizerAndRendererExtension[] | null} [extensions] Custom tokenizers and renderers.
 * @property {HooksObject | null} [hooks] Hook methods for preprocessing, parsing, etc.
 * @property {RendererObject | null} [renderer] Custom rendering functions.
 * @property {TokenizerObject | null} [tokenizer] Custom tokenizer functions.
 * @property {((token: Token) => void | Promise<void>) | null} [walkTokens] Function to process tokens.
 */

/**
 * @typedef {SharedOptionsExtension} MarkedOptions
 * @property {_Hooks | null} [hooks] Hook methods for parsing.
 * @property {_Renderer | null} [renderer] Renderer object.
 * @property {_Tokenizer | null} [tokenizer] Tokenizer object.
 * @property {null | {
*   renderers: Object.<string, RendererExtensionFunction>,
*   childTokens: Object.<string, string[]>,
*   inline?: TokenizerExtensionFunction[],
*   block?: TokenizerExtensionFunction[],
*   startInline?: TokenizerStartFunction[],
*   startBlock?: TokenizerStartFunction[]
* }} [extensions] Custom extensions for tokenizing and rendering.
* @property {null | ((token: Token) => void | Promise<void> | (void | Promise<void>)[])} [walkTokens] Function to process tokens asynchronously.
*/
export {}

export interface TokenizerThis {
  lexer: _Lexer;
}

export type TokenizerExtensionFunction = (this: TokenizerThis, src: string, tokens: Token[] | TokensList) => Tokens.Generic | undefined;

export type TokenizerStartFunction = (this: TokenizerThis, src: string) => number | void;

export interface TokenizerExtension {
  name: string;
  level: 'block' | 'inline';
  start?: TokenizerStartFunction;
  tokenizer: TokenizerExtensionFunction;
  childTokens?: string[];
}

export interface RendererThis {
  parser: _Parser;
}

export type RendererExtensionFunction = (this: RendererThis, token: Tokens.Generic) => string | false | undefined;

export interface RendererExtension {
  name: string;
  renderer: RendererExtensionFunction;
}

export type TokenizerAndRendererExtension = TokenizerExtension | RendererExtension | (TokenizerExtension & RendererExtension);

type HooksApi = Omit<_Hooks, 'constructor' | 'options' | 'block'>;
type HooksObject = {
  [K in keyof HooksApi]?: (this: _Hooks, ...args: Parameters<HooksApi[K]>) => ReturnType<HooksApi[K]> | Promise<ReturnType<HooksApi[K]>>
};

type RendererApi = Omit<_Renderer, 'constructor' | 'options' | 'parser'>;
type RendererObject = {
  [K in keyof RendererApi]?: (this: _Renderer, ...args: Parameters<RendererApi[K]>) => ReturnType<RendererApi[K]> | false
};

type TokenizerApi = Omit<_Tokenizer, 'constructor' | 'options' | 'rules' | 'lexer'>;
type TokenizerObject = {
  [K in keyof TokenizerApi]?: (this: _Tokenizer, ...args: Parameters<TokenizerApi[K]>) => ReturnType<TokenizerApi[K]> | false
};


// Omit<MarkedExtension, 'hooks' | 'renderer' | 'tokenizer' | 'extensions' | 'walkTokens'>
export interface sharedOptionsExtension {
  /**
   * True will tell marked to await any walkTokens functions before parsing the tokens and returning an HTML string.
   */
  async?: boolean;

  /**
   * Enable GFM line breaks. This option requires the gfm option to be true.
   */
  breaks?: boolean;

  /**
   * Enable GitHub flavored markdown.
   */
  gfm?: boolean;
  /**
   * Conform to obscure parts of markdown.pl as much as possible. Don't fix any of the original markdown bugs or poor behavior.
   */
  pedantic?: boolean;

  /**
   * Shows an HTML error message when rendering fails.
   */
  silent?: boolean;

}

export interface MarkedExtension extends sharedOptionsExtension {

  /**
   * Add tokenizers and renderers to marked
   */
  extensions?:
    | TokenizerAndRendererExtension[]
    | null;

  /**
   * Hooks are methods that hook into some part of marked.
   * preprocess is called to process markdown before sending it to marked.
   * processAllTokens is called with the TokensList before walkTokens.
   * postprocess is called to process html after marked has finished parsing.
   * provideLexer is called to provide a function to tokenize markdown.
   * provideParser is called to provide a function to parse tokens.
   */
  hooks?: HooksObject | null;



  /**
   * Type: object Default: new Renderer()
   *
   * An object containing functions to render tokens to HTML.
   */
  renderer?: RendererObject | null;



  /**
   * The tokenizer defines how to turn markdown text into tokens.
   */
  tokenizer?: TokenizerObject | null;

  /**
   * The walkTokens function gets called with every token.
   * Child tokens are called before moving on to sibling tokens.
   * Each token is passed by reference so updates are persisted when passed to the parser.
   * The return value of the function is ignored.
   */
  walkTokens?: ((token: Token) => void | Promise<void>) | null;
}
// Omit<MarkedExtension, 'hooks' | 'renderer' | 'tokenizer' | 'extensions' | 'walkTokens'>
export interface MarkedOptions extends sharedOptionsExtension {
  /**
   * Hooks are methods that hook into some part of marked.
   */
  hooks?: _Hooks | null;

  /**
   * Type: object Default: new Renderer()
   *
   * An object containing functions to render tokens to HTML.
   */
  renderer?: _Renderer | null;

  /**
   * The tokenizer defines how to turn markdown text into tokens.
   */
  tokenizer?: _Tokenizer | null;

  /**
   * Custom extensions
   */
  extensions?: null | {
    renderers: {
      [name: string]: RendererExtensionFunction;
    };
    childTokens: {
      [name: string]: string[];
    };
    inline?: TokenizerExtensionFunction[];
    block?: TokenizerExtensionFunction[];
    startInline?: TokenizerStartFunction[];
    startBlock?: TokenizerStartFunction[];
  };

  /**
   * walkTokens function returns array of values for Promise.all
   */
  walkTokens?: null | ((token: Token) => void | Promise<void> | (void | Promise<void>)[]);
}
