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
export {};
