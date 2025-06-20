import { Navigate, Route, Routes } from 'react-router-dom';
import { CategoryChoice } from '@/pages';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoryChoice />} />
      <Route path="/cats/*" element={<div>Cats</div>} />
      <Route path="/dogs/*" element={<div>Dogs</div>} />
      <Route path="/all/*" element={<div>All</div>} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
