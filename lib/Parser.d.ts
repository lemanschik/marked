import { _Renderer } from './Renderer.js';
import { _TextRenderer } from './TextRenderer.js';
import type { Token } from './Tokens.js';
import type { MarkedOptions } from './MarkedOptions.js';
/**
 * Parsing & Compiling
 */
export declare class _Parser {
    options: MarkedOptions;
    renderer: _Renderer;
    textRenderer: _TextRenderer;
    constructor(options?: MarkedOptions);
    /**
     * Static Parse Method
     */
    static parse(tokens: Token[], options?: MarkedOptions): string;
    /**
     * Static Parse Inline Method
     */
    static parseInline(tokens: Token[], options?: MarkedOptions): string;
    /**
     * Parse Loop
     */
    parse(tokens: Token[], top?: boolean): string;
    /**
     * Parse Inline Tokens
     */
    parseInline(tokens: Token[], renderer?: _Renderer | _TextRenderer): string;
}
