import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '@/App';
import AdminLogin from '@/admin/login'
import AdminDashboard from '@/admin/dashboard';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Cliente (webapp mobile) */}
        <Route path="/" element={<App />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
