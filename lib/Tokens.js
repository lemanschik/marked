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
export const ListItem = (params) => {
    return { type: 'list_item', ...params };
};
export const TableCell = (params) => {
    return { ...params };
};
export const Links = () => {
    return {};
};
export const TokensList = (params) => {
    return Object.assign([...params.tokens], { links: params.links });
};
export class TokenTypes {
    constructor({ type = '', raw = '' }) {
        Object.assign(this, { type, raw });
    }
}
