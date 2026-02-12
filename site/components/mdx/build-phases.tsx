interface Phase {
  name: string;
  timeline: string;
  status: "proposed" | "in-progress" | "complete";
}

const statusStyles = {
  proposed: "border-amber-300 bg-amber-50",
  "in-progress": "border-teal-300 bg-teal-50",
  complete: "border-green-300 bg-green-50",
};

const statusDot = {
  proposed: "bg-amber-400",
  "in-progress": "bg-teal-500",
  complete: "bg-green-500",
};

export function BuildPhases({ phases }: { phases: Phase[] }) {
  return (
    <div className="my-8">
      <h4 className="text-sm font-medium text-muted-foreground mb-4 !mt-0">
        Build Timeline
      </h4>
      <div className="relative">
        {/* Connector line */}
        <div className="absolute left-4 top-6 bottom-6 w-px bg-border" />
        <div className="space-y-3">
          {phases.map((phase, i) => (
            <div
              key={i}
              className={`relative flex items-center gap-4 p-4 rounded-lg border ${statusStyles[phase.status]}`}
            >
              {/* Dot */}
              <div
                className={`w-3 h-3 rounded-full shrink-0 z-10 ring-2 ring-white ${statusDot[phase.status]}`}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-foreground">
                    {phase.name}
                  </span>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {phase.timeline}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
