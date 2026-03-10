interface RadialStatCardProps {
  title: string;
  percentage: number;
  primaryColor?: string;
  secondaryColor?: string;
  legend?: { color: string; label: string }[];
}

const RadialStatCard = ({
  title,
  percentage,
  primaryColor = "hsl(var(--chart-blue))",
  secondaryColor = "hsl(var(--chart-gray))",
  legend = [],
}: RadialStatCardProps) => {
  const radius = 58;
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;
  const filled = (percentage / 100) * circumference;
  const gap = circumference - filled;

  return (
    <div className="rounded-lg bg-card p-6 flex flex-col items-center gap-4">
      <h3 className="text-sm font-medium text-muted-foreground self-start">{title}</h3>
      <div className="relative">
        <svg width="140" height="140" viewBox="0 0 140 140">
          {/* Background track */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke={secondaryColor}
            strokeWidth={stroke}
            strokeLinecap="round"
          />
          {/* Filled arc */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke={primaryColor}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${filled} ${gap}`}
            strokeDashoffset={circumference * 0.25}
            transform="rotate(-90 70 70)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-foreground">{percentage}%</span>
        </div>
      </div>
      {legend.length > 0 && (
        <div className="flex items-center gap-4">
          {legend.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RadialStatCard;
