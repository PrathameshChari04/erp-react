import KpiCard from "../components/KpiCard";

export default function Dashboard() {
  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      
      <h1 className="text-xl font-semibold mb-4">
        Billing Dashboard
      </h1>

      {/* Row 1 */}
      <div className="grid md:grid-cols-4 gap-4 mb-4">
        <KpiCard
          title="Total Revenue"
          value="₹ 12.5 Cr"
          subtitle="All time"
          color="green"
        />
        <KpiCard
          title="Pending Billing"
          value="₹ 1.8 Cr"
          subtitle="Generated, not invoiced"
          color="amber"
        />
        <KpiCard
          title="Invoiced Amount"
          value="₹ 10.2 Cr"
          subtitle="Confirmed invoices"
          color="gray"
        />
        <KpiCard
          title="Outstanding Due"
          value="₹ 95 L"
          subtitle="Payment pending"
          color="red"
        />
      </div>

      {/* Row 2 */}
      <div className="grid md:grid-cols-4 gap-4">
        <KpiCard
          title="This Month Billing"
          value="₹ 1.2 Cr"
          subtitle="Current cycle"
        />
        <KpiCard
          title="Last Month Billing"
          value="₹ 1.0 Cr"
          subtitle="Previous cycle"
        />
        <KpiCard
          title="YTD Revenue"
          value="₹ 6.4 Cr"
          subtitle="FY 2025"
        />
        <KpiCard
          title="Growth"
          value="+18%"
          subtitle="Month over Month"
          color="green"
        />
      </div>

    </section>
  );
}
