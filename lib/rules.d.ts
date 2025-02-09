export declare const other: {
    codeRemoveIndent: RegExp;
    outputLinkReplace: RegExp;
    indentCodeCompensation: RegExp;
    beginningSpace: RegExp;
    endingHash: RegExp;
    startingSpaceChar: RegExp;
    endingSpaceChar: RegExp;
    nonSpaceChar: RegExp;
    newLineCharGlobal: RegExp;
    tabCharGlobal: RegExp;
    multipleSpaceGlobal: RegExp;
    blankLine: RegExp;
    doubleBlankLine: RegExp;
    blockquoteStart: RegExp;
    blockquoteSetextReplace: RegExp;
    blockquoteSetextReplace2: RegExp;
    listReplaceTabs: RegExp;
    listReplaceNesting: RegExp;
    listIsTask: RegExp;
    listReplaceTask: RegExp;
    anyLine: RegExp;
    hrefBrackets: RegExp;
    tableDelimiter: RegExp;
    tableAlignChars: RegExp;
    tableRowBlankLine: RegExp;
    tableAlignRight: RegExp;
    tableAlignCenter: RegExp;
    tableAlignLeft: RegExp;
    startATag: RegExp;
    endATag: RegExp;
    startPreScriptTag: RegExp;
    endPreScriptTag: RegExp;
    startAngleBracket: RegExp;
    endAngleBracket: RegExp;
    pedanticHrefTitle: RegExp;
    unicodeAlphaNumeric: RegExp;
    escapeTest: RegExp;
    escapeReplace: RegExp;
    escapeTestNoEncode: RegExp;
    escapeReplaceNoEncode: RegExp;
    unescapeTest: RegExp;
    caret: RegExp;
    percentDecode: RegExp;
    findPipe: RegExp;
    splitPipe: RegExp;
    slashPipe: RegExp;
    carriageReturn: RegExp;
    spaceLine: RegExp;
    notSpaceStart: RegExp;
    endingNewline: RegExp;
    listItemRegex: (bull: string) => RegExp;
    nextBulletRegex: (indent: number) => RegExp;
    hrRegex: (indent: number) => RegExp;
    fencesBeginRegex: (indent: number) => RegExp;
    headingBeginRegex: (indent: number) => RegExp;
    htmlBeginRegex: (indent: number) => RegExp;
};
/**
 * Normal Block Grammar
 */
declare const blockNormal: {
    blockquote: RegExp;
    code: RegExp;
    def: RegExp;
    fences: RegExp;
    heading: RegExp;
    hr: RegExp;
    html: RegExp;
    lheading: RegExp;
    list: RegExp;
    newline: RegExp;
    paragraph: RegExp;
    table: RegExp;
    text: RegExp;
};
type BlockKeys = keyof typeof blockNormal;
/**
 * Normal Inline Grammar
 */
declare const inlineNormal: {
    _backpedal: RegExp;
    anyPunctuation: RegExp;
    autolink: RegExp;
    blockSkip: RegExp;
    br: RegExp;
    code: RegExp;
    del: RegExp;
    emStrongLDelim: RegExp;
    emStrongRDelimAst: RegExp;
    emStrongRDelimUnd: RegExp;
    escape: RegExp;
    link: RegExp;
    nolink: RegExp;
    punctuation: RegExp;
    reflink: RegExp;
    reflinkSearch: RegExp;
    tag: RegExp;
    text: RegExp;
    url: RegExp;
};
type InlineKeys = keyof typeof inlineNormal;
/**
 * exports
 */
export declare const block: {
    normal: {
        blockquote: RegExp;
        code: RegExp;
        def: RegExp;
        fences: RegExp;
        heading: RegExp;
        hr: RegExp;
        html: RegExp;
        lheading: RegExp;
        list: RegExp;
        newline: RegExp;
        paragraph: RegExp;
        table: RegExp;
        text: RegExp;
    };
    gfm: Record<"blockquote" | "code" | "def" | "heading" | "hr" | "html" | "list" | "paragraph" | "table" | "text" | "fences" | "lheading" | "newline", RegExp>;
    pedantic: Record<"blockquote" | "code" | "def" | "heading" | "hr" | "html" | "list" | "paragraph" | "table" | "text" | "fences" | "lheading" | "newline", RegExp>;
};
export declare const inline: {
    normal: {
        _backpedal: RegExp;
        anyPunctuation: RegExp;
        autolink: RegExp;
        blockSkip: RegExp;
        br: RegExp;
        code: RegExp;
        del: RegExp;
        emStrongLDelim: RegExp;
        emStrongRDelimAst: RegExp;
        emStrongRDelimUnd: RegExp;
        escape: RegExp;
        link: RegExp;
        nolink: RegExp;
        punctuation: RegExp;
        reflink: RegExp;
        reflinkSearch: RegExp;
        tag: RegExp;
        text: RegExp;
        url: RegExp;
    };
    gfm: Record<"br" | "code" | "del" | "escape" | "link" | "text" | "tag" | "reflink" | "nolink" | "_backpedal" | "anyPunctuation" | "autolink" | "blockSkip" | "emStrongLDelim" | "emStrongRDelimAst" | "emStrongRDelimUnd" | "punctuation" | "reflinkSearch" | "url", RegExp>;
    breaks: Record<"br" | "code" | "del" | "escape" | "link" | "text" | "tag" | "reflink" | "nolink" | "_backpedal" | "anyPunctuation" | "autolink" | "blockSkip" | "emStrongLDelim" | "emStrongRDelimAst" | "emStrongRDelimUnd" | "punctuation" | "reflinkSearch" | "url", RegExp>;
    pedantic: Record<"br" | "code" | "del" | "escape" | "link" | "text" | "tag" | "reflink" | "nolink" | "_backpedal" | "anyPunctuation" | "autolink" | "blockSkip" | "emStrongLDelim" | "emStrongRDelimAst" | "emStrongRDelimUnd" | "punctuation" | "reflinkSearch" | "url", RegExp>;
};
export interface Rules {
    other: typeof other;
    block: Record<BlockKeys, RegExp>;
    inline: Record<InlineKeys, RegExp>;
}
export {};
