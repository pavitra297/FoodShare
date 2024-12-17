import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import FindFood from './pages/FindFood';
import DonationForm from './components/DonationForm';
import { DonationProvider } from './context/DonationContext';

function App() {
  return (
    <DonationProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/find-food" element={<FindFood />} />
            <Route path="/donate" element={<DonationForm />} />
          </Routes>
        </div>
      </Router>
    </DonationProvider>
  );
}

export default App;