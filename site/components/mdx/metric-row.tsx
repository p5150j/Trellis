import { Users, Target, TrendingUp, BarChart3, Zap, Globe } from "lucide-react";

interface Metric {
  label: string;
  value: string;
  icon: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  users: Users,
  target: Target,
  trending: TrendingUp,
  chart: BarChart3,
  zap: Zap,
  globe: Globe,
};

export function MetricRow({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-4">
      {metrics.map((metric, i) => {
        const Icon = iconMap[metric.icon] || BarChart3;
        return (
          <div
            key={i}
            className="p-4 bg-muted/50 rounded-xl border border-border/50 text-center"
          >
            <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
            <div className="text-xl font-semibold text-foreground">
              {metric.value}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {metric.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
