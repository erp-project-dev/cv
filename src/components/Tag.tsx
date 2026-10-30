export function Tag({ children, strong }: { children: string; strong?: boolean }) {
  return <span className={strong ? "tag tag-strong" : "tag"}>{children}</span>;
}

export function TagList({ items, strong }: { items: string[]; strong?: boolean }) {
  return (
    <div className="tags">
      {items.map((i) => <Tag key={i} strong={strong}>{i}</Tag>)}
    </div>
  );
}
