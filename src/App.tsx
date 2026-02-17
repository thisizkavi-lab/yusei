import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Materials from './pages/Materials';
import Gallery from './pages/Gallery';
import ProductDetail from './pages/ProductDetail';
import CustomOrders from './pages/CustomOrders';
import Shipping from './pages/Shipping';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="materials" element={<Materials />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="gallery/:productId" element={<ProductDetail />} />
          <Route path="custom-orders" element={<CustomOrders />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
