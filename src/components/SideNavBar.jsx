import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/dashboard", short: "D" },
  { name: "Billing Schedule", path: "/billing-schedule", short: "BS" },
  { name: "Billing Master", path: "/billing-master", short: "BM" },
  { name: "Invoices", path: "/invoices", short: "I" },
];

export default function SidebarNav({ collapsed }) {
  return (
    <nav className="px-3 py-4 space-y-1">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-md px-3 py-2 text-sm
             ${
               isActive
                 ? "bg-indigo-50 text-indigo-700 font-medium"
                 : "text-slate-600 hover:bg-slate-100"
             }`
          }
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-xs font-semibold text-slate-600">
            {item.short}
          </span>

          {!collapsed && <span>{item.name}</span>}
        </NavLink>
      ))}
    </nav>
  );
}
