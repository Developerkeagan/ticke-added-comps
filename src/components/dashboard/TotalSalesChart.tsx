import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";

interface SalesDataPoint {
  day: string;
  value: number;
}

interface TotalSalesChartProps {
  data?: SalesDataPoint[];
  total?: string;
}

const defaultData: SalesDataPoint[] = [
  { day: "Mo", value: 60 },
  { day: "Tu", value: 45 },
  { day: "We", value: 70 },
  { day: "Th", value: 55 },
  { day: "Fr", value: 80 },
  { day: "Sa", value: 90 },
  { day: "Su", value: 65 },
];

const barColors = [
  "hsl(var(--chart-primary))",
  "hsl(var(--chart-cyan))",
  "hsl(var(--chart-yellow))",
  "hsl(var(--chart-green))",
  "hsl(var(--chart-red))",
  "hsl(var(--chart-primary))",
  "hsl(var(--chart-cyan))",
];

const TotalSalesChart = ({
  data = defaultData,
  total = "$10,643",
}: TotalSalesChartProps) => {
  return (
    <div className="rounded-lg bg-card p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium text-muted-foreground">Total sales</h3>
        <p className="text-3xl font-bold text-foreground">{total}</p>
      </div>
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={16}>
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalSalesChart;
