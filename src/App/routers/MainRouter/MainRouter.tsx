import { Route, Routes } from 'react-router-dom';
import { CategoryChoice, Pet, PetsList } from '@/pages';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoryChoice />} />
      <Route path="/cats/*" element={<PetsList species="cat" />} />
      <Route path="/dogs/*" element={<PetsList species="dog" />} />
      <Route path=":id" element={<Pet />} />
    </Routes>
  );
};
