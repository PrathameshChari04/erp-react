import SidebarNav from "./SideNavBar";

export default function Sidebar({ collapsed }) {
  return (
    <aside
      className={`bg-white border-r border-slate-200
      ${collapsed ? "w-16" : "w-60"} transition-all duration-200`}
    >
      <div className="h-14 flex items-center px-4 border-b border-slate-200">
        <span className="text-sm font-medium text-slate-800">
          {collapsed ? "BS" : "Billing"}
        </span>
      </div>

      <SidebarNav collapsed={collapsed} />
    </aside>
  );
}
