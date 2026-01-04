import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BillingSchedule from "./pages/BillingSchedule";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./layouts/DashboardLayout";
export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<DashboardLayout />} />

      </Routes>
    </BrowserRouter>
  );
}
