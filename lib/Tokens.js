/* eslint-disable no-use-before-define */
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
export const nsTokens = /** @type {const} */ ({
    ListItem,
    TableCell,
    Blockquote(params) {
        return { type: 'blockquote', ...params };
    },
    Br(params) {
        return { type: 'br', ...params };
    },
    Checkbox(params) {
        return { ...params };
    },
    Code(params) {
        return { type: 'code', ...params };
    },
    Codespan(params) {
        return { type: 'codespan', ...params };
    },
    Def(params) {
        return { type: 'def', ...params };
    },
    Del(params) {
        return { type: 'del', ...params };
    },
    Em(params) {
        return { type: 'em', ...params };
    },
    Escape(params) {
        return { type: 'escape', ...params };
    },
    Generic(params) {
        return { ...params };
    },
    Heading(params) {
        return { type: 'heading', ...params };
    },
    Hr(params) {
        return { type: 'hr', ...params };
    },
    HTML(params) {
        return { type: 'html', ...params };
    },
    Image(params) {
        return { type: 'image', ...params };
    },
    Link(params) {
        return { type: 'link', ...params };
    },
    List(params) {
        return { type: 'list', ...params };
    },
    Paragraph(params) {
        return { type: 'paragraph', ...params };
    },
    Space(params) {
        return { type: 'space', ...params };
    },
    Strong(params) {
        return { type: 'strong', ...params };
    },
    Table(params) {
        return { type: 'table', ...params };
    },
    Tag(params) {
        return { type: 'html', ...params };
    },
    Text(params) {
        return { type: 'text', ...params };
    },
});
