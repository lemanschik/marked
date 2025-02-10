import { _Lexer } from './Lexer.js';
import { _Parser } from './Parser.js';
import { _Hooks } from './Hooks.js';
import { _Renderer } from './Renderer.js';
import { _Tokenizer } from './Tokenizer.js';
import { _TextRenderer } from './TextRenderer.js';
import type { MarkedExtension, MarkedOptions } from './MarkedOptions.js';
import type { Token, TokensList } from './Tokens.js';
export type MaybePromise = void | Promise<void>;
export declare class Marked {
    defaults: {
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
    options: (opt: MarkedOptions) => this;
    parse: {
        (src: string, options: MarkedOptions & {
            async: true;
        }): Promise<string>;
        (src: string, options: MarkedOptions & {
            async: false;
        }): string;
        (src: string, options?: MarkedOptions | null): string | Promise<string>;
    };
    parseInline: {
        (src: string, options: MarkedOptions & {
            async: true;
        }): Promise<string>;
        (src: string, options: MarkedOptions & {
            async: false;
        }): string;
        (src: string, options?: MarkedOptions | null): string | Promise<string>;
    };
    Parser: typeof _Parser;
    Renderer: typeof _Renderer;
    TextRenderer: typeof _TextRenderer;
    Lexer: typeof _Lexer;
    Tokenizer: typeof _Tokenizer;
    Hooks: typeof _Hooks;
    constructor(...args: MarkedExtension[]);
    /**
     * Run callback for every token
     */
    walkTokens(tokens: Token[] | TokensList, callback: (token: Token) => MaybePromise | MaybePromise[]): MaybePromise[];
    use(...args: MarkedExtension[]): this;
    setOptions(opt: MarkedOptions): this;
    lexer(src: string, options?: MarkedOptions): TokensList;
    parser(tokens: Token[], options?: MarkedOptions): string;
    private parseMarkdown;
    private onError;
}
