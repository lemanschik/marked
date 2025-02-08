import { _defaults } from './defaults.ts';
import {
  cleanUrl,
  escape,
} from './helpers.ts';
import { other } from './rules.ts';
import type { MarkedOptions } from './MarkedOptions.ts';
import type { Tokens } from './Tokens.ts';
import type { _Parser } from './Parser.ts';

/**
 * Renderer
 */
export class _Renderer {
  options: MarkedOptions;
  parser!: _Parser; // set by the parser
  constructor(options?: MarkedOptions) {
    this.options = options || _defaults;
  }

  space(token: Tokens.Space): string {
    return '';
  }

  code({ text, lang, escaped }: Tokens.Code): string {
    const langString = (lang || '').match(other.notSpaceStart)?.[0];
    const code = text.replace(other.endingNewline, '') + '\n';
    
    return `<pre><code${
      langString 
        ? ` class="language-${escape(langString)}"`
        : ''
    }>${(escaped ? code : escape(code, true)}</code></pre>\n`;
  }

  blockquote({ tokens }: Tokens.Blockquote): string {
    return `<blockquote>\n${
      this.parser.parse(tokens)
    }</blockquote>\n`;
  }

  html({ text }: Tokens.HTML | Tokens.Tag) : string {
    return text;
  }

  heading({ tokens, depth }: Tokens.Heading): string {
    return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>\n`;
  }

  hr(token: Tokens.Hr): string {
    return '<hr>\n';
  }

  list(token: Tokens.List): string {
    const ordered = token.ordered;
    const start = token.start;
    const type = ordered ? 'ol' : 'ul';
    const startAttr = (ordered && start !== 1) ? (' start="' + start + '"') : '';
    
    return `<${type}${startAttr}>\n${
      token.items.map(this.listitem).join("")
    }</${type}>\n`;
  }

  listitem(item: Tokens.ListItem): string {
  const checkbox = item.task && `${this.checkbox({ checked: Boolean(item.checked }))} `;
  if (checkbox) { 
      if (item.loose && item.tokens.length) {
        if (item.tokens[0]?.type === 'paragraph') {
          item.tokens[0].text = `${checkbox}${item.tokens[0].text}`;
          if (item.tokens[0]?.tokens?.length && item.tokens[0].tokens[0].type === 'text') {
            item.tokens[0].tokens[0].text = `${checkbox}${escape(item.tokens[0].tokens[0].text)}`;
            item.tokens[0].tokens[0].escaped = true;
          }
        } else {
          item.tokens.unshift({
            type: 'text',
            raw: checkbox,
            text: checkbox,
            escaped: true,
          });
        }
      } 
    }
    
    return `<li>${
      (checkbox && !item.loose) ? checkbox : ""
    }${
      this.parser.parse(item.tokens, Boolean(item.loose))
    }</li>\n`;
  }

  checkbox({ checked }: Tokens.Checkbox): string {
    return '<input '
      + (checked ? 'checked="" ' : '')
      + 'disabled="" type="checkbox">';
  }

  paragraph({ tokens }: Tokens.Paragraph): string {
    return `<p>${
      this.parser.parseInline(tokens)
    }</p>\n`;
  }

  table(token: Tokens.Table): string {
    const body = token.rows.map(row =>
      this.tablerow({ text: this.tablecell(row) })
    ).join("");
    
    return `<table>\n<thead>\n${
      this.tablerow({ 
              text: token.header.map(
                this.tablecell
              ).join("") 
            })
      }\n</thead>\n${
      body ? `<tbody>${body}</tbody>` : ""
      }\n</table>\n`;
  }

  tablerow({ text }: Tokens.TableRow): string {
    return `<tr>\n${text}</tr>\n`;
  }

  tablecell(token: Tokens.TableCell): string {
    const type = token.header ? 'th' : 'td';
    return `${token.align
      ? `<${type} align="${token.align}">`
      : `<${type}>`}${this.parser.parseInline(token.tokens)}</${type}>\n`;
  }

  /**
   * span level renderer
   */
  strong({ tokens }: Tokens.Strong): string {
    return `<strong>${
      this.parser.parseInline(tokens)
    }</strong>`;
  }

  em({ tokens }: Tokens.Em): string {
    return `<em>${this.parser.parseInline(tokens)}</em>`;
  }

  codespan({ text }: Tokens.Codespan): string {
    return `<code>${escape(text, true)}</code>`;
  }

  br(token: Tokens.Br): string {
    return '<br>';
  }

  del({ tokens }: Tokens.Del): string {
    return `<del>${
      this.parser.parseInline(tokens)
    }</del>`;
  }

  link({ href, title, tokens }: Tokens.Link): string {
    const cleanHref = cleanUrl(href);
    return cleanHref === null 
      ? escape(text) 
      : `<a href="${cleanHref}"${title ? ` title="${escape(title)}"` : ""}>${
        this.parser.parseInline(tokens)
      }</a>`;

  }

  image({ href, title, text }: Tokens.Image): string {
    const cleanHref = cleanUrl(href);
    return cleanHref === null 
      ? escape(text) 
      : `<img src="${cleanHref}" alt="${text}"${title ? ` title="${escape(title)}"` : ""}>`;
  }

  text(token: Tokens.Text | Tokens.Escape) : string {
    return 'tokens' in token && token.tokens
      ? this.parser.parseInline(token.tokens)
      : ('escaped' in token && token.escaped 
         ? token.text 
         : escape(token.text));
  }
}
