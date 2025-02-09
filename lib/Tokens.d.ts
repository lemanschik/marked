export declare const ListItem: (params: {
    raw: string;
    task: boolean;
    loose: boolean;
    text: string;
    tokens: Token[];
    checked?: boolean;
}) => {
    raw: string;
    task: boolean;
    loose: boolean;
    text: string;
    tokens: Token[];
    checked?: boolean;
    type: string;
};
export declare const TableCell: (params: {
    text: string;
    tokens: Token[];
    header: boolean;
    align: "center" | "left" | "right" | null;
}) => {
    text: string;
    tokens: Token[];
    header: boolean;
    align: "center" | "left" | "right" | null;
};
export declare const Links: () => {};
export declare const TokensList: (params: {
    links: Links;
    tokens: Token[];
}) => Token[] & {
    links: Links;
};
export declare const nsTokens: {
    ListItem: (params: {
        raw: string;
        task: boolean;
        loose: boolean;
        text: string;
        tokens: Token[];
        checked?: boolean;
    }) => {
        raw: string;
        task: boolean;
        loose: boolean;
        text: string;
        tokens: Token[];
        checked?: boolean;
        type: string;
    };
    TableCell: (params: {
        text: string;
        tokens: Token[];
        header: boolean;
        align: "center" | "left" | "right" | null;
    }) => {
        text: string;
        tokens: Token[];
        header: boolean;
        align: "center" | "left" | "right" | null;
    };
    Blockquote(params: {
        raw: string;
        text: string;
        tokens: Token[];
    }): {
        raw: string;
        text: string;
        tokens: Token[];
        type: string;
    };
    Br(params: {
        raw: string;
    }): {
        raw: string;
        type: string;
    };
    Checkbox(params: {
        checked: boolean;
    }): {
        checked: boolean;
    };
    Code(params: {
        raw: string;
        text: string;
        lang?: string;
        codeBlockStyle?: "indented";
        escaped?: boolean;
    }): {
        raw: string;
        text: string;
        lang?: string;
        codeBlockStyle?: "indented";
        escaped?: boolean;
        type: string;
    };
    Codespan(params: {
        raw: string;
        text: string;
    }): {
        raw: string;
        text: string;
        type: string;
    };
    Def(params: {
        raw: string;
        tag: string;
        href: string;
        title: string;
    }): {
        raw: string;
        tag: string;
        href: string;
        title: string;
        type: string;
    };
    Del(params: {
        raw: string;
        text: string;
        tokens: Token[];
    }): {
        raw: string;
        text: string;
        tokens: Token[];
        type: string;
    };
    Em(params: {
        raw: string;
        text: string;
        tokens: Token[];
    }): {
        raw: string;
        text: string;
        tokens: Token[];
        type: string;
    };
    Escape(params: {
        raw: string;
        text: string;
    }): {
        raw: string;
        text: string;
        type: string;
    };
    Generic(params: {
        type: string;
        raw: string;
        tokens?: Token[];
    }): {
        type: string;
        raw: string;
        tokens?: Token[];
    };
    Heading(params: {
        raw: string;
        depth: number;
        text: string;
        tokens: Token[];
    }): {
        raw: string;
        depth: number;
        text: string;
        tokens: Token[];
        type: string;
    };
    Hr(params: {
        raw: string;
    }): {
        raw: string;
        type: string;
    };
    HTML(params: {
        raw: string;
        pre: boolean;
        text: string;
        block: boolean;
    }): {
        raw: string;
        pre: boolean;
        text: string;
        block: boolean;
        type: string;
    };
    Image(params: {
        raw: string;
        href: string;
        title: string | null;
        text: string;
    }): {
        raw: string;
        href: string;
        title: string | null;
        text: string;
        type: string;
    };
    Link(params: {
        raw: string;
        href: string;
        text: string;
        tokens: Token[];
        title?: string | null;
    }): {
        raw: string;
        href: string;
        text: string;
        tokens: Token[];
        title?: string | null;
        type: string;
    };
    List(params: {
        raw: string;
        ordered: boolean;
        start: number | "";
        loose: boolean;
        items: ReturnType<typeof ListItem>[];
    }): {
        raw: string;
        ordered: boolean;
        start: number | "";
        loose: boolean;
        items: ReturnType<typeof ListItem>[];
        type: string;
    };
    Paragraph(params: {
        raw: string;
        text: string;
        tokens: Token[];
        pre?: boolean;
    }): {
        raw: string;
        text: string;
        tokens: Token[];
        pre?: boolean;
        type: string;
    };
    Space(params: {
        raw: string;
    }): {
        raw: string;
        type: string;
    };
    Strong(params: {
        raw: string;
        text: string;
        tokens: Token[];
    }): {
        raw: string;
        text: string;
        tokens: Token[];
        type: string;
    };
    Table(params: {
        raw: string;
        align: Array<"center" | "left" | "right" | null>;
        header: ReturnType<typeof TableCell>[];
        rows: ReturnType<typeof TableCell>[][];
    }): {
        raw: string;
        align: Array<"center" | "left" | "right" | null>;
        header: ReturnType<typeof TableCell>[];
        rows: ReturnType<typeof TableCell>[][];
        type: string;
    };
    Tag(params: {
        raw: string;
        inLink: boolean;
        inRawBlock: boolean;
        text: string;
        block: boolean;
    }): {
        raw: string;
        inLink: boolean;
        inRawBlock: boolean;
        text: string;
        block: boolean;
        type: string;
    };
    Text(params: {
        raw: string;
        text: string;
        tokens?: Token[];
        escaped?: boolean;
    }): {
        raw: string;
        text: string;
        tokens?: Token[];
        escaped?: boolean;
        type: string;
    };
};
export type MarkedToken = (Tokens.Blockquote | Tokens.Br | Tokens.Code | Tokens.Codespan | Tokens.Def | Tokens.Del | Tokens.Em | Tokens.Escape | Tokens.Heading | Tokens.Hr | Tokens.HTML | Tokens.Image | Tokens.Link | Tokens.List | Tokens.ListItem | Tokens.Paragraph | Tokens.Space | Tokens.Strong | Tokens.Table | Tokens.Tag | Tokens.Text);
export type Token = (MarkedToken | Tokens.Generic);
export declare namespace Tokens {
    interface Blockquote {
        type: 'blockquote';
        raw: string;
        text: string;
        tokens: Token[];
    }
    interface Br {
        type: 'br';
        raw: string;
    }
    interface Checkbox {
        checked: boolean;
    }
    interface Code {
        type: 'code';
        raw: string;
        codeBlockStyle?: 'indented';
        lang?: string;
        text: string;
        escaped?: boolean;
    }
    interface Codespan {
        type: 'codespan';
        raw: string;
        text: string;
    }
    interface Def {
        type: 'def';
        raw: string;
        tag: string;
        href: string;
        title: string;
    }
    interface Del {
        type: 'del';
        raw: string;
        text: string;
        tokens: Token[];
    }
    interface Em {
        type: 'em';
        raw: string;
        text: string;
        tokens: Token[];
    }
    interface Escape {
        type: 'escape';
        raw: string;
        text: string;
    }
    interface Generic {
        [index: string]: any;
        type: string;
        raw: string;
        tokens?: Token[];
    }
    interface Heading {
        type: 'heading';
        raw: string;
        depth: number;
        text: string;
        tokens: Token[];
    }
    interface Hr {
        type: 'hr';
        raw: string;
    }
    interface HTML {
        type: 'html';
        raw: string;
        pre: boolean;
        text: string;
        block: boolean;
    }
    interface Image {
        type: 'image';
        raw: string;
        href: string;
        title: string | null;
        text: string;
    }
    interface Link {
        type: 'link';
        raw: string;
        href: string;
        title?: string | null;
        text: string;
        tokens: Token[];
    }
    interface List {
        type: 'list';
        raw: string;
        ordered: boolean;
        start: number | '';
        loose: boolean;
        items: ListItem[];
    }
    interface ListItem {
        type: 'list_item';
        raw: string;
        task: boolean;
        checked?: boolean;
        loose: boolean;
        text: string;
        tokens: Token[];
    }
    interface Paragraph {
        type: 'paragraph';
        raw: string;
        pre?: boolean;
        text: string;
        tokens: Token[];
    }
    interface Space {
        type: 'space';
        raw: string;
    }
    interface Strong {
        type: 'strong';
        raw: string;
        text: string;
        tokens: Token[];
    }
    interface Table {
        type: 'table';
        raw: string;
        align: Array<'center' | 'left' | 'right' | null>;
        header: TableCell[];
        rows: TableCell[][];
    }
    interface TableCell {
        text: string;
        tokens: Token[];
        header: boolean;
        align: 'center' | 'left' | 'right' | null;
    }
    interface TableRow {
        text: string;
    }
    interface Tag {
        type: 'html';
        raw: string;
        inLink: boolean;
        inRawBlock: boolean;
        text: string;
        block: boolean;
    }
    interface Text {
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
