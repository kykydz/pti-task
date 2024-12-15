// routes.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PTI1 from './tasks/pti-1';
import PTI2 from './tasks/pti-2';
import PTI3 from './tasks/pti-3';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PTI1 />} />
        <Route path="/pageB" element={<PTI2 />} />
        <Route path="/pageC" element={<PTI3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;