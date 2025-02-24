import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Topbar from "./components/Topbar";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Topbar from './components/TopBar';

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
      <Topbar />
      
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;