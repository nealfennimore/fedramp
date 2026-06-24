import React from "react";
import { CONTROL_PROSE_REGEX, nist80053Url, parseControlId } from "@/lib/nist";

// Auto-link NIST 800-53 control references found in a plain-text segment.
function linkControls(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const re = new RegExp(CONTROL_PROSE_REGEX.source, "g");
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const parsed = parseControlId(m[0]);
    if (parsed) {
      nodes.push(
        <a
          key={`${keyPrefix}-c${i}`}
          href={nist80053Url(parsed)}
          target="_blank"
          rel="noopener noreferrer"
          title={`View NIST SP 800-53 ${parsed.label} ↗`}
        >
          {m[0]}
        </a>
      );
    } else {
      nodes.push(m[0]);
    }
    last = m.index + m[0].length;
    i++;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

// Minimal, safe inline renderer for the **bold**, `code`, and bare-URL markup
// that appears throughout the FedRAMP rule statements and notes. When enabled,
// NIST 800-53 control references in plain text are auto-linked.
function renderInline(text: string, keyPrefix: string, controls: boolean): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|https?:\/\/[^\s)]+)/g;
  const parts = text.split(pattern);
  parts.forEach((part, i) => {
    if (!part) return;
    const key = `${keyPrefix}-${i}`;
    if (part.startsWith("**") && part.endsWith("**")) {
      nodes.push(<strong key={key}>{part.slice(2, -2)}</strong>);
    } else if (part.startsWith("`") && part.endsWith("`")) {
      nodes.push(<code key={key}>{part.slice(1, -1)}</code>);
    } else if (/^https?:\/\//.test(part)) {
      nodes.push(
        <a key={key} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    } else if (controls) {
      nodes.push(<React.Fragment key={key}>{linkControls(part, key)}</React.Fragment>);
    } else {
      nodes.push(<React.Fragment key={key}>{part}</React.Fragment>);
    }
  });
  return nodes;
}

export function RichText({
  text,
  className,
  as: Tag = "p",
  linkControls: controls = true,
}: {
  text?: string | null;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  linkControls?: boolean;
}) {
  if (!text) return null;
  return <Tag className={`richtext ${className ?? ""}`}>{renderInline(text, "rt", controls)}</Tag>;
}

export function InlineRich({
  text,
  linkControls: controls = true,
}: {
  text?: string | null;
  linkControls?: boolean;
}) {
  if (!text) return null;
  return <span className="richtext">{renderInline(text, "ir", controls)}</span>;
}
