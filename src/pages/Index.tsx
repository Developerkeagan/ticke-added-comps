import RevenueChart from "@/components/dashboard/RevenueChart";
import TotalSalesChart from "@/components/dashboard/TotalSalesChart";
import RadialStatCard from "@/components/dashboard/RadialStatCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6 md:p-10 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl w-full">
        {/* Revenue - spans 1 col on lg, full on md */}
        <div className="md:col-span-1">
          <RevenueChart />
        </div>

        {/* Total Sales */}
        <div className="md:col-span-1">
          <TotalSalesChart />
        </div>

        {/* Successful transaction */}
        <RadialStatCard
          title="Successful transaction"
          percentage={68}
          primaryColor="hsl(var(--chart-cyan))"
          secondaryColor="hsl(var(--chart-gray))"
          legend={[
            { color: "hsl(var(--chart-cyan))", label: "131,432" },
            { color: "hsl(var(--chart-gray))", label: "193,283" },
          ]}
        />

        <RadialStatCard
          title="Returning customer rate"
          percentage={82}
          primaryColor="hsl(var(--chart-yellow))"
          secondaryColor="hsl(var(--chart-gray))"
          legend={[
            { color: "hsl(var(--chart-yellow))", label: "20,053" },
            { color: "hsl(var(--chart-gray))", label: "25,004" },
          ]}
        />

        <RadialStatCard
          title="Sales Target Completed"
          percentage={34}
          primaryColor="hsl(var(--chart-red))"
          secondaryColor="hsl(var(--chart-gray))"
          legend={[
            { color: "hsl(var(--chart-red))", label: "9872" },
            { color: "hsl(var(--chart-gray))", label: "29,035" },
          ]}
        />
      </div>
    </div>
  );
};

export default Index;
