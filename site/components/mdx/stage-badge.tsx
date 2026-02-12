import { cn } from "@/lib/utils";

const stageConfig = {
  proposal: {
    label: "Proposal",
    className: "bg-amber-100 text-amber-800 border-amber-200",
  },
  incubation: {
    label: "Incubation",
    className: "bg-teal-100 text-teal-800 border-teal-200",
  },
  active: {
    label: "Active",
    className: "bg-green-100 text-green-800 border-green-200",
  },
};

export function StageBadge({ stage }: { stage: "proposal" | "incubation" | "active" }) {
  const config = stageConfig[stage];
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border",
        config.className
      )}
    >
      {config.label}
    </span>
  );
}
