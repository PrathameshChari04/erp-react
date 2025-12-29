import StatusBadge from "../components/StatusBadge";
import BillingActions from "../components/BillingActions";

const mockData = [
  {
    contractCode: "CTR-001",
    serviceCode: "SRV-NEURO",
    frequencyCode: "M1",
    period: "2025-01",
    amount: "₹ 1,20,000",
    units: 10,
    status: "PENDING"
  },
  {
    contractCode: "CTR-001",
    serviceCode: "SRV-NEURO",
    frequencyCode: "M2",
    period: "2025-02",
    amount: "₹ 1,20,000",
    units: 10,
    status: "VALIDATED"
  },
  {
    contractCode: "CTR-002",
    serviceCode: "SRV-CARDIO",
    frequencyCode: "Q1-M1",
    period: "2025-Q1",
    amount: "₹ 3,60,000",
    units: 30,
    status: "INVOICED"
  }
];

export default function BillingSchedule() {
  return (
    <section className="p-6 bg-gray-50 min-h-screen">

      <h1 className="text-xl font-semibold mb-4">
        Billing Schedule
      </h1>

      {/* Filters */}
      <div className="bg-white border rounded p-4 mb-4 grid md:grid-cols-4 gap-4">
        <input className="border p-2 rounded" placeholder="Contract Code" />
        <input className="border p-2 rounded" placeholder="Service Code" />
        <input className="border p-2 rounded" placeholder="Billing Period" />
        <select className="border p-2 rounded">
          <option>Status</option>
          <option>PENDING</option>
          <option>VALIDATED</option>
          <option>INVOICED</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border rounded overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">Contract</th>
              <th className="p-3 text-left">Service</th>
              <th className="p-3">Freq</th>
              <th className="p-3">Period</th>
              <th className="p-3 text-right">Amount</th>
              <th className="p-3 text-center">Units</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="p-3">{row.contractCode}</td>
                <td className="p-3">{row.serviceCode}</td>
                <td className="p-3 text-center">{row.frequencyCode}</td>
                <td className="p-3">{row.period}</td>
                <td className="p-3 text-right font-medium">{row.amount}</td>
                <td className="p-3 text-center">{row.units}</td>
                <td className="p-3">
                  <StatusBadge status={row.status} />
                </td>
                <td className="p-3">
                  <BillingActions status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  );
}
