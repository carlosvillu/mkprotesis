import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Eye } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Eye className="h-8 w-8 text-[#ffb990]" />
            <span className="text-xl font-semibold">Vision Artistry</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/portfolio" active={isActive('/portfolio')}>Portfolio</NavLink>
            <NavLink to="/biography" active={isActive('/biography')}>Biography</NavLink>
            <NavLink to="/pricing" active={isActive('/pricing')}>Pricing & Subsidies</NavLink>
            <NavLink to="/testimonials" active={isActive('/testimonials')}>Testimonials</NavLink>
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) => (
  <Link
    to={to}
    className={`${
      active
        ? 'text-[#ffb990] font-semibold'
        : 'text-gray-600 hover:text-[#ffb990]'
    } transition-colors duration-200`}
  >
    {children}
  </Link>
);

export default Header;