import { _Lexer } from './Lexer.js';
import { _Parser } from './Parser.js';
import type { MarkedOptions } from './MarkedOptions.js';
import type { Token, TokensList } from './Tokens.js';
export declare class _Hooks {
    options?: MarkedOptions;
    block?: boolean;
    constructor(options?: MarkedOptions);
    static passThroughHooks: Set<string>;
    /**
     * Process markdown before marked
     */
    preprocess(markdown: string): string;
    /**
     * Process HTML after marked is finished
     */
    postprocess(html: string): string;
    /**
     * Process all tokens before walk tokens
     */
    processAllTokens(tokens: Token[] | TokensList): Token[] | TokensList;
    /**
     * Provide function to tokenize markdown
     */
    provideLexer(): typeof _Lexer.lexInline;
    /**
     * Provide function to parse tokens
     */
    provideParser(): typeof _Parser.parse;
}
