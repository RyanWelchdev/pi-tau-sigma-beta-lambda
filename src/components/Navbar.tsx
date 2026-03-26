import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Membership', to: '/membership' },
  { label: 'Initiation', to: '/initiation' },
  { label: 'Events', to: '/events' },
  { label: 'Officers', to: '/officers' },
  { label: 'Alumni', to: '/alumni' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkBase = 'text-sm font-semibold transition-colors duration-200';
  const desktopLink = 'text-slate-600 hover:text-slate-900';
  const activeLink = 'text-slate-900';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-22 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-4 shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            <div className="h-14 w-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
              <img
                src="/images/crest.png"
                alt="Pi Tau Sigma crest"
                className="h-11 w-11 object-contain"
              />
            </div>

            <div className="leading-tight">
              <span className="text-2xl font-serif font-bold text-slate-950 leading-none block">
                Pi Tau Sigma
              </span>
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-niu-red mt-1">
                Beta Lambda Chapter • NIU
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeLink : desktopLink}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/membership"
              className="inline-flex items-center justify-center rounded-full bg-niu-red px-5 py-3 text-sm font-bold text-white shadow-sm hover:opacity-90 transition"
            >
              View Eligibility
            </Link>
          </nav>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 transition"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/membership"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-niu-red px-5 py-3 text-sm font-bold text-white shadow-sm hover:opacity-90 transition"
            >
              View Eligibility
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
