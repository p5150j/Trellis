import { ExternalLink } from "lucide-react";

interface Source {
  title: string;
  url: string;
}

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <div className="my-8 pt-6 border-t border-border/50">
      <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3 !mt-0">
        Sources
      </h4>
      <ul className="space-y-2 !my-0 !list-none !pl-0">
        {sources.map((source, i) => (
          <li key={i} className="!pl-0">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              <ExternalLink className="w-3 h-3 shrink-0" />
              {source.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
