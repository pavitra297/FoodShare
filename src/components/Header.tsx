import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">FoodShare</Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-green-200">Home</Link>
            <Link to="/donate" className="hover:text-green-200">Donate</Link>
            <Link to="/find-food" className="hover:text-green-200">Find Food</Link>
            <Link to="/about" className="hover:text-green-200">About</Link>
            <Link to="/signin" className="hover:text-green-200">Sign In</Link>
            <Link to="/signup" className="hover:text-green-200">Sign Up</Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-green-200 py-2">Home</Link>
              <Link to="/donate" className="hover:text-green-200 py-2">Donate</Link>
              <Link to="/find-food" className="hover:text-green-200 py-2">Find Food</Link>
              <Link to="/about" className="hover:text-green-200 py-2">About</Link>
              <Link to="/signin" className="hover:text-green-200 py-2">Sign In</Link>
              <Link to="/signup" className="hover:text-green-200 py-2">Sign Up</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;