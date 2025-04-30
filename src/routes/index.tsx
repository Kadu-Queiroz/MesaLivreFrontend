import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
// import AdminDashboard from '@/admin/dashboard';
// import AdminLogin from '@/admin/login';

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
      {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
    </Routes>
  );
}
