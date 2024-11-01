
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar';
import BackgroundPattern from './components/BackgroundPattern';
import ScrollToTop from './components/ScrollToTop';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <BackgroundPattern />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="faqs" element={<FAQs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;