import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import BoiCanh from './pages/BoiCanh';
import DaiHoiVI from './pages/DaiHoiVI';
import BienDong from './pages/BienDong';
import ThanhTuu from './pages/ThanhTuu';
import KetLuan from './pages/KetLuan';
import TroChoi from './pages/TroChoi';
import TaiLieuThamKhao from './pages/TaiLieuThamKhao';
import AiUsage from './pages/AiUsage';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Navigate to="/boi-canh" replace />} />
        <Route path="/boi-canh"       element={<BoiCanh />} />
        <Route path="/dai-hoi-vi"     element={<DaiHoiVI />} />
        <Route path="/bien-dong"      element={<BienDong />} />
        <Route path="/thanh-tuu"      element={<ThanhTuu />} />
        <Route path="/ket-luan"       element={<KetLuan />} />
        <Route path="/tro-choi"       element={<TroChoi />} />
        <Route path="/tai-lieu"       element={<TaiLieuThamKhao />} />
        <Route path="/ai-usage"       element={<AiUsage />} />
      </Route>
    </Routes>
  );
}
