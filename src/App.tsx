import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/men" element={<CategoryPage />} />
              <Route path="/women" element={<CategoryPage />} />
              <Route path="/kids" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/brands"
                element={
                  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <h1 className="text-2xl font-bold text-gray-900">
                      Brands Page - Coming Soon
                    </h1>
                  </div>
                }
              />
              <Route
                path="/gallery"
                element={
                  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <h1 className="text-2xl font-bold text-gray-900">
                      Gallery Page - Coming Soon
                    </h1>
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
