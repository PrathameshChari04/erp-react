import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import { useState } from "react";

export default function DashboardLayout({ children, title }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar collapsed={collapsed} />

      <div className="flex-1 flex flex-col">
        <Header
          title={title}
          onToggleSidebar={() => setCollapsed(!collapsed)}
        />

        <main className="flex-1 px-6 py-4">
          {children}
        </main>
      </div>
    </div>
  );
}
