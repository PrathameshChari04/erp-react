import DashboardLayout from "./DashboardLayout";
export default function DashboardHome() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <p className="text-sm text-slate-500">Total Contracts</p>
          <p className="mt-1 text-xl font-semibold text-slate-800">128</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <p className="text-sm text-slate-500">Pending Bills</p>
          <p className="mt-1 text-xl font-semibold text-slate-800">42</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <p className="text-sm text-slate-500">Revenue (MTD)</p>
          <p className="mt-1 text-xl font-semibold text-slate-800">₹ 12.4L</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
