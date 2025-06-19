import { Navigate, Route, Routes } from 'react-router-dom';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Choose</div>} />
      <Route path="/cats/*" element={<div>Cats</div>} />
      <Route path="/dogs/*" element={<div>Dogs</div>} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
