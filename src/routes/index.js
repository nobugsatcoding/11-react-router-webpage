import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Error from '../pages/Error';
import SharedLayout from '../components/layout/SharedLayout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
