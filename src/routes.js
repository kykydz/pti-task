// routes.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PTI1 from './tasks/pti-1';
import PTI2 from './tasks/pti-2';
import PTI3 from './tasks/pti-3';
import App from './App';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pti-1" element={<PTI1 />} />
        <Route path="/pti-2" element={<PTI2 />} />
        <Route path="/pti-3" element={<PTI3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;