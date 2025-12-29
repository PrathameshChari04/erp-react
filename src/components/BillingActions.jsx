export default function BillingActions({ status }) {
  return (
    <div className="flex gap-2 text-sm">
      {status === "PENDING" && (
        <>
          <button className="text-blue-600">Validate</button>
          <button className="text-red-600">Decline</button>
        </>
      )}

      {status === "VALIDATED" && (
        <button className="text-green-600">Invoice</button>
      )}

      {status === "INVOICED" && (
        <button className="text-gray-500">View</button>
      )}
    </div>
  );
}
