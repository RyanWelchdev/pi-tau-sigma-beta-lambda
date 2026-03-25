import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Membership', path: '/membership' },
    { name: 'Initiation', path: '/initiation' },
    { name: 'Officers', path: '/officers' },
    { name: 'Alumni', path: '/alumni' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-niu-red p-2 rounded-lg group-hover:bg-niu-black transition-colors duration-300">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-niu-black leading-tight tracking-tight">Pi Tau Sigma</span>
                <span className="text-xs font-sans font-semibold text-niu-red uppercase tracking-widest">Beta Lambda Chapter • NIU</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="nav-link">
                {item.name}
              </Link>
            ))}
            <Link to="/membership" className="bg-niu-red text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-niu-black transition-all duration-300">
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-niu-red p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-niu-red rounded-lg"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/membership"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-base font-bold text-white bg-niu-red rounded-lg text-center"
          >
            Join Us
          </Link>
        </div>
      )}
    </nav>
  );
}
