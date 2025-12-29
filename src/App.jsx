import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BillingSchedule from "./pages/BillingSchedule";
export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/billing" element={<BillingSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}
