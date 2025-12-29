export default function KpiCard({
  title,
  value,
  subtitle,
  color = "gray"
}) {
  const colorMap = {
    gray: "text-gray-800",
    green: "text-green-600",
    amber: "text-amber-600",
    red: "text-red-600"
  };

  return (
    <div className="bg-white border rounded p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-2xl font-bold mt-1 ${colorMap[color]}`}>
        {value}
      </p>
      <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
    </div>
  );
}
