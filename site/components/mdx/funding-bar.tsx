interface FundingBarProps {
  amount: string;
  year: string;
  sources?: { name: string; percentage: number }[];
}

export function FundingBar({ amount, year, sources }: FundingBarProps) {
  return (
    <div className="my-8 p-6 bg-muted/50 rounded-xl border border-border/50">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-2xl font-semibold text-foreground">{amount}</span>
        <span className="text-sm text-muted-foreground">({year})</span>
      </div>
      {sources && sources.length > 0 && (
        <>
          <div className="w-full h-3 bg-border/50 rounded-full overflow-hidden flex">
            {sources.map((source, i) => {
              const colors = [
                "bg-trellis",
                "bg-trellis-light",
                "bg-warm",
                "bg-amber-500",
                "bg-green-600",
              ];
              return (
                <div
                  key={i}
                  className={`h-full ${colors[i % colors.length]}`}
                  style={{ width: `${source.percentage}%` }}
                />
              );
            })}
          </div>
          <div className="flex flex-wrap gap-4 mt-3">
            {sources.map((source, i) => {
              const dotColors = [
                "bg-trellis",
                "bg-trellis-light",
                "bg-warm",
                "bg-amber-500",
                "bg-green-600",
              ];
              return (
                <div key={i} className="flex items-center gap-1.5">
                  <div
                    className={`w-2 h-2 rounded-full ${dotColors[i % dotColors.length]}`}
                  />
                  <span className="text-xs text-muted-foreground">
                    {source.name} ({source.percentage}%)
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
