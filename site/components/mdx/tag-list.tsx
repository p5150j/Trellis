export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="my-4 flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent text-accent-foreground"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
