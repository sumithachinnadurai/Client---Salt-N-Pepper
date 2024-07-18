
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeSection from './components/WelcomeSection';
import TableInput from './components/TableInput';
import PopularDishes from './components/PopularDishes';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<div><WelcomeSection /><TableInput /><PopularDishes /></div>} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
