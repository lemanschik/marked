import { _Lexer } from './Lexer.js';
import { _Parser } from './Parser.js';
import { _Tokenizer } from './Tokenizer.js';
import { _Renderer } from './Renderer.js';
import { _TextRenderer } from './TextRenderer.js';
import { _Hooks } from './Hooks.js';
import { _getDefaults } from './defaults.js';
import type { MarkedExtension, MarkedOptions } from './MarkedOptions.js';
import type { Token, TokensList } from './Tokens.js';
import type { MaybePromise } from './Instance.js';
/**
 * Compiles markdown to HTML asynchronously.
 *
 * @param src String of markdown source to be compiled
 * @param options Hash of options, having async: true
 * @return Promise of string of compiled HTML
 */
export declare function marked(src: string, options: MarkedOptions & {
    async: true;
}): Promise<string>;
/**
 * Compiles markdown to HTML.
 *
 * @param src String of markdown source to be compiled
 * @param options Optional hash of options
 * @return String of compiled HTML. Will be a Promise of string if async is set to true by any extensions.
 */
export declare function marked(src: string, options: MarkedOptions & {
    async: false;
}): string;
export declare function marked(src: string, options: MarkedOptions & {
    async: true;
}): Promise<string>;
export declare function marked(src: string, options?: MarkedOptions | null): string | Promise<string>;
export declare namespace marked {
    var options: (options: MarkedOptions) => typeof marked;
    var setOptions: (options: MarkedOptions) => typeof marked;
    var getDefaults: typeof _getDefaults;
    var defaults: {
        async: boolean;
        breaks: boolean;
        extensions: any;
        gfm: boolean;
        hooks: any;
        pedantic: boolean;
        renderer: any;
        silent: boolean;
        tokenizer: any;
        walkTokens: any;
    };
    var use: (...args: MarkedExtension[]) => typeof marked;
    var walkTokens: (tokens: Token[] | TokensList, callback: (token: Token) => MaybePromise | MaybePromise[]) => MaybePromise[];
    var parseInline: {
        (src: string, options: MarkedOptions & {
            async: true;
        }): Promise<string>;
        (src: string, options: MarkedOptions & {
            async: false;
        }): string;
        (src: string, options?: MarkedOptions | null): string | Promise<string>;
    };
    var Parser: typeof _Parser;
    var parser: typeof _Parser.parse;
    var Renderer: typeof _Renderer;
    var TextRenderer: typeof _TextRenderer;
    var Lexer: typeof _Lexer;
    var lexer: typeof _Lexer.lex;
    var Tokenizer: typeof _Tokenizer;
    var Hooks: typeof _Hooks;
    var parse: typeof marked;
}
export declare const options: (options: MarkedOptions) => typeof marked;
export declare const setOptions: (options: MarkedOptions) => typeof marked;
export declare const use: (...args: MarkedExtension[]) => typeof marked;
export declare const walkTokens: (tokens: Token[] | TokensList, callback: (token: Token) => MaybePromise | MaybePromise[]) => MaybePromise[];
export declare const parseInline: {
    (src: string, options: MarkedOptions & {
        async: true;
    }): Promise<string>;
    (src: string, options: MarkedOptions & {
        async: false;
    }): string;
    (src: string, options?: MarkedOptions | null): string | Promise<string>;
};
export declare const parse: typeof marked;
export declare const parser: typeof _Parser.parse;
export declare const lexer: typeof _Lexer.lex;
export { _defaults as defaults, _getDefaults as getDefaults } from './defaults.js';
export { _Lexer as Lexer } from './Lexer.js';
export { _Parser as Parser } from './Parser.js';
export { _Tokenizer as Tokenizer } from './Tokenizer.js';
export { _Renderer as Renderer } from './Renderer.js';
export { _TextRenderer as TextRenderer } from './TextRenderer.js';
export { _Hooks as Hooks } from './Hooks.js';
export { Marked } from './Instance.js';
export type * from './MarkedOptions.js';
export type * from './Tokens.js';
