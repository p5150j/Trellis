"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface ScoreRadarProps {
  scores: {
    ai_ml: number;
    tech_gap: number;
    impact: number;
    size: number;
    viability: number;
    growth: number;
  };
}

const labels: Record<string, string> = {
  ai_ml: "AI/ML Fit",
  tech_gap: "Tech Gap",
  impact: "Impact",
  size: "Org Size",
  viability: "Viability",
  growth: "Growth",
};

export function ScoreRadar({ scores }: ScoreRadarProps) {
  const data = Object.entries(scores).map(([key, value]) => ({
    dimension: labels[key] || key,
    score: value,
    fullMark: 5,
  }));

  return (
    <div className="my-8 flex justify-center">
      <div className="w-full max-w-md">
        <h4 className="text-sm font-medium text-muted-foreground mb-2 text-center">
          Fit Matrix
        </h4>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={data}>
            <PolarGrid stroke="#E8E7E3" />
            <PolarAngleAxis
              dataKey="dimension"
              tick={{ fontSize: 11, fill: "#6B6B6B" }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 5]}
              tick={{ fontSize: 10, fill: "#6B6B6B" }}
              tickCount={6}
            />
            <Radar
              name="Score"
              dataKey="score"
              stroke="#1B4D4A"
              fill="#1B4D4A"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
