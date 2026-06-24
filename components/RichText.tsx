import React from "react";

// Minimal, safe inline renderer for the **bold**, `code`, and bare-URL markup
// that appears throughout the FedRAMP rule statements and notes.
function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Split on bold, code, or URL tokens while keeping the delimiters.
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
}: {
  text?: string | null;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  if (!text) return null;
  return (
    <Tag className={`richtext ${className ?? ""}`}>{renderInline(text, "rt")}</Tag>
  );
}

export function InlineRich({ text }: { text?: string | null }) {
  if (!text) return null;
  return <span className="richtext">{renderInline(text, "ir")}</span>;
}
