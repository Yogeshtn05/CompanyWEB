import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Form from './Form';
import Home from './Home.jsx';
import Contact from './Contact';
import About from './About';
import './App.css'; // Ensure the CSS file is imported

function App() {
  return (
    <>
      <Router>
        <header className="app-header">
          <div className="logo-container">
            <img src={reactLogo} alt="React Logo" className="logo" />
            <Link to="." className="company-name">ABC</Link>
          </div>
          <nav>
            <ol className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact Us</Link>
              </li>
            </ol>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/ContactUs" element={<Contact />} />
          </Routes>
        </main>
      </Router>
      <footer>All rights reserved @ 2024</footer>
    </>
  );
}

export default App;
