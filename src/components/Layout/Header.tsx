import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Eye, X, Menu} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <>
      <header className="bg-white shadow-md relative z-20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Eye className="h-8 w-8 text-[#ffb990]" />
              <span className="text-xl font-semibold">MKProtesis</span>
            </Link>

            <div className="hidden md:flex space-x-8">
              <NavLink to="/" active={isActive('/')}>Home</NavLink>
              <NavLink to="/portfolio" active={isActive('/portfolio')}>Portfolio</NavLink>
              <NavLink to="/biography" active={isActive('/biography')}>Biography</NavLink>
              <NavLink to="/pricing" active={isActive('/pricing')}>Pricing & Subsidies</NavLink>
              <NavLink to="/testimonials" active={isActive('/testimonials')}>Testimonials</NavLink>
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay y Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-30 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        {/* Overlay con fade */}
        <div
          onClick={toggleMenu}
          className="absolute inset-0 bg-black bg-opacity-50"
        />

        {/* Drawer con slide */}
        <div
          className={`absolute top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Botón de cierre */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          <div className="pt-20 px-4 space-y-6">
            <MobileNavLink to="/" active={isActive('/')} onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/portfolio" active={isActive('/portfolio')} onClick={toggleMenu}>
              Portfolio
            </MobileNavLink>
            <MobileNavLink to="/biography" active={isActive('/biography')} onClick={toggleMenu}>
              Biography
            </MobileNavLink>
            <MobileNavLink to="/pricing" active={isActive('/pricing')} onClick={toggleMenu}>
              Pricing & Subsidies
            </MobileNavLink>
            <MobileNavLink to="/testimonials" active={isActive('/testimonials')} onClick={toggleMenu}>
              Testimonials
            </MobileNavLink>
          </div>
        </div>
      </div>
    </>
  );
};

const NavLink = ({to, children, active}: {to: string; children: React.ReactNode; active: boolean}) => (
  <Link
    to={to}
    className={`${active ? 'text-[#ffb990] font-semibold' : 'text-gray-600 hover:text-[#ffb990]'
      } transition-colors duration-200`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  to,
  children,
  active,
  onClick
}: {
  to: string;
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block text-lg ${active ? 'text-[#ffb990] font-semibold' : 'text-gray-600 hover:text-[#ffb990]'
      } transition-colors duration-200`}
  >
    {children}
  </Link>
);

export default Header;
