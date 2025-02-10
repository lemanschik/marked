/* eslint-disable no-use-before-define */

/**
 * @typedef {Object} Blockquote
 * @property {'blockquote'} type
 * @property {string} raw
 * @property {string} text
 * @property {Token[]} tokens
 */

/**
 * @typedef {Object} Br
 * @property {'br'} type
 * @property {string} raw
 */

/**
 * @typedef {Object} Checkbox
 * @property {boolean} checked
 */

/**
 * @typedef {Object} Code
 * @property {'code'} type
 * @property {string} raw
 * @property {'indented'} [codeBlockStyle]
 * @property {string} [lang]
 * @property {string} text
 * @property {boolean} [escaped]
 */

/**
 * @typedef {Object} Codespan
 * @property {'codespan'} type
 * @property {string} raw
 * @property {string} text
 */

/**
 * @typedef {Object} Def
 * @property {'def'} type
 * @property {string} raw
 * @property {string} tag
 * @property {string} href
 * @property {string} title
 */

/**
 * @typedef {Object} Del
 * @property {'del'} type
 * @property {string} raw
 * @property {string} text
 * @property {Token[]} tokens
 */

/**
 * @typedef {Object} Em
 * @property {'em'} type
 * @property {string} raw
 * @property {string} text
 * @property {Token[]} tokens
 */

/**
 * @typedef {Object} Escape
 * @property {'escape'} type
 * @property {string} raw
 * @property {string} text
 */

/**
 * @typedef {Object} Generic
 * @property {string} type
 * @property {string} raw
 * @property {Object.<string, any>} [index]
 * @property {Token[]} [tokens]
 */

/**
 * @typedef {Object} Heading
 * @property {'heading'} type
 * @property {string} raw
 * @property {number} depth
 * @property {string} text
 * @property {Token[]} tokens
 */

/**
 * @typedef {Object} Hr
 * @property {'hr'} type
 * @property {string} raw
 */

/**
 * @typedef {Object} HTML
 * @property {'html'} type
 * @property {string} raw
 * @property {boolean} pre
 * @property {string} text
 * @property {boolean} block
 */

/**
 * @typedef {Object} Image
 * @property {'image'} type
 * @property {string} raw
 * @property {string} href
 * @property {string|null} title
 * @property {string} text
 */

/**
 * @typedef {Object} Link
 * @property {'link'} type
 * @property {string} raw
 * @property {string} href
 * @property {string|null} [title]
 * @property {string} text
 * @property {Token[]} tokens
 */

/**
 * @typedef {Object} List
 * @property {'list'} type
 * @property {string} raw
 * @property {boolean} ordered
 * @property {number|string} start
 * @property {boolean} loose
 * @property {ListItem[]} items
 */

/**
 * @typedef {Object} ListItem
 * @property {'list_item'} type
 * @property {string} raw
 * @property {boolean} task
 * @property {boolean} [checked]
 * @property {boolean} loose
 * @property {string} text
 * @property {Token[]} tokens
 */

/**
 * @typedef {Object} Paragraph
 * @property {'paragraph'} type
 * @property {string} raw
 * @property {boolean} [pre]
 * @property {string} text
 * @property {Token[]} tokens
 */

/**
 * @typedef {Object} Space
 * @property {'space'} type
 * @property {string} raw
 */

/**
 * @typedef {Object} Strong
 * @property {'strong'} type
 * @property {string} raw
 * @property {string} text
 * @property {Token[]} tokens
 */

/**
 * @typedef {Object} Table
 * @property {'table'} type
 * @property {string} raw
 * @property {Array<'center' | 'left' | 'right' | null>} align
 * @property {TableCell[]} header
 * @property {TableCell[][]} rows
 */

/**
 * @typedef {Object} TableCell
 * @property {string} text
 * @property {Token[]} tokens
 * @property {boolean} header
 * @property {'center' | 'left' | 'right' | null} align
 */

/**
 * @typedef {Object} Tag
 * @property {'html'} type
 * @property {string} raw
 * @property {boolean} inLink
 * @property {boolean} inRawBlock
 * @property {string} text
 * @property {boolean} block
 */

/**
 * @typedef {Object} Text
 * @property {'text'} type
 * @property {string} raw
 * @property {string} text
 * @property {Token[]} [tokens]
 * @property {boolean} [escaped]
 */

/**
 * @typedef {Blockquote | Br | Code | Codespan | Def | Del | Em | Escape | Heading | Hr | HTML | Image | Link | List | ListItem | Paragraph | Space | Strong | Table | Tag | Text} MarkedToken
 */

/**
 * @typedef {MarkedToken | Generic} Token
 */

/**
 * @typedef {Object.<string, {href: string, title: string|null}>} Links
 */

/**
 * @typedef {Token[] & {links: Links}} TokensList
 */

export const ListItem = (params: { raw: string; task: boolean; loose: boolean; text: string; tokens: Token[]; checked?: boolean }) => {
  return { type: 'list_item', ...params };
};

export const TableCell = (params: { text: string; tokens: Token[]; header: boolean; align: 'center' | 'left' | 'right' | null }) => {
  return { ...params };
};

export const Links = () => {
  return {};
};

export const TokensList = (params: { links: Links; tokens: Token[] }) => {
  return Object.assign([...params.tokens], { links: params.links });
};

export class TokenTypes {
  constructor({ type = '', raw = '' }) {
    Object.assign(this, { type, raw });
  }
}

export type MarkedToken = (Tokens.Blockquote | Tokens.Br | Tokens.Code | Tokens.Codespan | Tokens.Def | Tokens.Del | Tokens.Em | Tokens.Escape | Tokens.Heading | Tokens.Hr | Tokens.HTML | Tokens.Image | Tokens.Link | Tokens.List | Tokens.ListItem | Tokens.Paragraph | Tokens.Space | Tokens.Strong | Tokens.Table | Tokens.Tag | Tokens.Text);
export type Token = (MarkedToken | Tokens.Generic);

export namespace Tokens {
  export interface Blockquote {
    type: 'blockquote';
    raw: string;
    text: string;
    tokens: Token[];
  }

  export interface Br {
    type: 'br';
    raw: string;
  }

  export interface Checkbox {
    checked: boolean;
  }

  export interface Code {
    type: 'code';
    raw: string;
    codeBlockStyle?: 'indented';
    lang?: string;
    text: string;
    escaped?: boolean;
  }

  export interface Codespan {
    type: 'codespan';
    raw: string;
    text: string;
  }

  export interface Def {
    type: 'def';
    raw: string;
    tag: string;
    href: string;
    title: string;
  }

  export interface Del {
    type: 'del';
    raw: string;
    text: string;
    tokens: Token[];
  }

  export interface Em {
    type: 'em';
    raw: string;
    text: string;
    tokens: Token[];
  }

  export interface Escape {
    type: 'escape';
    raw: string;
    text: string;
  }

  export interface Generic {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [index: string]: any;
    type: string;
    raw: string;
    tokens?: Token[];
  }

  export interface Heading {
    type: 'heading';
    raw: string;
    depth: number;
    text: string;
    tokens: Token[];
  }

  export interface Hr {
    type: 'hr';
    raw: string;
  }

  export interface HTML {
    type: 'html';
    raw: string;
    pre: boolean;
    text: string;
    block: boolean;
  }

  export interface Image {
    type: 'image';
    raw: string;
    href: string;
    title: string | null;
    text: string;
  }

  export interface Link {
    type: 'link';
    raw: string;
    href: string;
    title?: string | null;
    text: string;
    tokens: Token[];
  }

  export interface List {
    type: 'list';
    raw: string;
    ordered: boolean;
    start: number | '';
    loose: boolean;
    items: ListItem[];
  }

  export interface ListItem {
    type: 'list_item';
    raw: string;
    task: boolean;
    checked?: boolean;
    loose: boolean;
    text: string;
    tokens: Token[];
  }

  export interface Paragraph {
    type: 'paragraph';
    raw: string;
    pre?: boolean;
    text: string;
    tokens: Token[];
  }

  export interface Space {
    type: 'space';
    raw: string;
  }

  export interface Strong {
    type: 'strong';
    raw: string;
    text: string;
    tokens: Token[];
  }

  export interface Table {
    type: 'table';
    raw: string;
    align: Array<'center' | 'left' | 'right' | null>;
    header: TableCell[];
    rows: TableCell[][];
  }

  export interface TableCell {
    text: string;
    tokens: Token[];
    header: boolean;
    align: 'center' | 'left' | 'right' | null;
  }

  export interface TableRow {
    text: string;
  }

  export interface Tag {
    type: 'html';
    raw: string;
    inLink: boolean;
    inRawBlock: boolean;
    text: string;
    block: boolean;
  }

  export interface Text {
    type: 'text';
    raw: string;
    text: string;
    tokens?: Token[];
    escaped?: boolean;
  }
}

export type Links = Record<string, Pick<Tokens.Link | Tokens.Image, 'href' | 'title'>>;

export type TokensList = Token[] & {
  links: Links;
};
