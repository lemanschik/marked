import { _defaults } from './defaults.js';
import { _Lexer } from './Lexer.js';
import { _Parser } from './Parser.js';
import type { MarkedOptions } from './MarkedOptions.js';
import type { Token, TokensList } from './Tokens.js';

/**
 * This is designed as extensible Hook Class
 */
export class _Hooks {
  options?: MarkedOptions;
  block?: boolean;

  constructor(options?: MarkedOptions) {
    this.options = Object.assign({}, _defaults, options);
  }

  static passThroughHooks = new Set([
    'preprocess',
    'postprocess',
    'processAllTokens',
  ]);

  /**
   * Process markdown before marked
   */
  preprocess(markdown: string) {
    return markdown;
  }

  /**
   * Process HTML after marked is finished
   */
  postprocess(html: string) {
    return html;
  }

  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens: Token[] | TokensList) {
    return tokens;
  }

  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? _Lexer.lex : _Lexer.lexInline;
  }

  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? _Parser.parse : _Parser.parseInline;
  }
}
