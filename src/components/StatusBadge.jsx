export default function StatusBadge({ status }) {
  const styles = {
    PENDING: "bg-amber-100 text-amber-700",
    VALIDATED: "bg-blue-100 text-blue-700",
    INVOICED: "bg-green-100 text-green-700",
    DECLINED: "bg-gray-200 text-gray-600"
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  );
}
