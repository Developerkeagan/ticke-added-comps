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
          primaryColor="hsl(var(--chart-blue))"
          secondaryColor="hsl(var(--chart-gray))"
          legend={[
            { color: "hsl(var(--chart-blue))", label: "131,432" },
            { color: "hsl(var(--chart-gray))", label: "193,283" },
          ]}
        />

        {/* Returning customer rate - hidden on small, shown on md+ to fill grid */}
        <RadialStatCard
          title="Returning customer rate"
          percentage={82}
          primaryColor="hsl(var(--chart-orange))"
          secondaryColor="hsl(var(--chart-gray))"
          legend={[
            { color: "hsl(var(--chart-orange))", label: "20,053" },
            { color: "hsl(var(--chart-gray))", label: "25,004" },
          ]}
        />

        <RadialStatCard
          title="Sales Target Completed"
          percentage={34}
          primaryColor="hsl(var(--chart-pink))"
          secondaryColor="hsl(var(--chart-gray))"
          legend={[
            { color: "hsl(var(--chart-pink))", label: "9872" },
            { color: "hsl(var(--chart-gray))", label: "29,035" },
          ]}
        />
      </div>
    </div>
  );
};

export default Index;
