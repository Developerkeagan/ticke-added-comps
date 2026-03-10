import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { MoreHorizontal } from "lucide-react";

interface RevenueDataPoint {
  day: string;
  value: number;
}

interface RevenueChartProps {
  data?: RevenueDataPoint[];
  highlightValue?: string;
  highlightLabel?: string;
}

const defaultData: RevenueDataPoint[] = [
  { day: "Mo", value: 15000 },
  { day: "Tu", value: 25000 },
  { day: "We", value: 18000 },
  { day: "Th", value: 32000 },
  { day: "Fr", value: 23000 },
  { day: "Sa", value: 28000 },
  { day: "Su", value: 35000 },
];

const RevenueChart = ({
  data = defaultData,
  highlightValue = "23k",
  highlightLabel,
}: RevenueChartProps) => {
  return (
    <div className="rounded-lg bg-card p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-foreground">Revenue</h3>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--chart-cyan))" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(var(--chart-cyan))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickFormatter={(v) => `${v / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--foreground))",
              }}
              formatter={(value: number) => [`$${(value / 1000).toFixed(0)}k`, "Revenue"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--chart-cyan))"
              strokeWidth={3}
              fill="url(#revenueGradient)"
              dot={false}
              activeDot={{
                r: 6,
                fill: "hsl(var(--foreground))",
                stroke: "hsl(var(--chart-cyan))",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
