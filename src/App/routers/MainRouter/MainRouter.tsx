import { Navigate, Route, Routes } from 'react-router-dom';
import { CategoryChoice, PetsList } from '@/pages';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoryChoice />} />
      <Route path="/cats/*" element={<PetsList species="cat" />} />
      <Route path="/dogs/*" element={<PetsList species="dog" />} />
      <Route path="/all/*" element={<PetsList species="all" />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
