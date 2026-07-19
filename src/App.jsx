import { HashRouter, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import School from './pages/School';
// import { Ministries, News, Donation } from './pages/Placeholders';

// Global styles (CSS variables, fonts, animations)
import './styles/globals.css';

export default function App() {
  return (
    <HashRouter>
      {/* Navbar is always visible — lives outside <Routes> */}
      <Navbar />

      {/* Main content area — swaps based on URL */}
      <main>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/about"       element={<About />} />
          <Route path="/school"      element={<School />} />
          {/* <Route path="/ministries"  element={<Ministries />} />
          <Route path="/news"        element={<News />} />
          <Route path="/donation"    element={<Donation />} /> */}
          {/* Catch-all: redirect unknown URLs back to Home */}
          <Route path="*"            element={<Home />} />
        </Routes>
      </main>

      {/* Footer is always visible — lives outside <Routes> */}
      <Footer />
    </HashRouter>
  );
}