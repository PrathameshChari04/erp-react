export default function Header({ title, onToggleSidebar }) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center px-6 gap-4">
      <button
        onClick={onToggleSidebar}
        className="rounded-md p-2 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <div className="space-y-1">
          <span className="block h-0.5 w-5 bg-slate-600"></span>
          <span className="block h-0.5 w-5 bg-slate-600"></span>
          <span className="block h-0.5 w-5 bg-slate-600"></span>
        </div>
      </button>

      <h2 className="text-base font-medium text-slate-800 flex-1">
        {title}
      </h2>

      <button className="text-sm text-slate-600 hover:text-slate-800">
        Logout
      </button>
    </header>
  );
}
