import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const primaryNavItems = [
  { label: 'About', to: '/about' },
  { label: 'Membership', to: '/membership' },
  { label: 'Initiation', to: '/initiation' },
  { label: 'Events', to: '/events' },
  { label: 'Contact', to: '/contact' },
];

const chapterItems = [
  { label: 'Officers', to: '/officers' },
  { label: 'History', to: '/history' },
  { label: 'Resources', to: '/resources' },
  { label: 'Alumni', to: '/alumni' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chapterOpen, setChapterOpen] = useState(false);
  const location = useLocation();
  const chapterMenuRef = useRef<HTMLDivElement | null>(null);

  const linkBase = 'text-sm font-semibold transition-colors duration-200';
  const desktopLink = 'text-slate-600 hover:text-slate-900';
  const activeLink = 'text-slate-900';

  const isChapterActive = chapterItems.some((item) =>
    location.pathname.startsWith(item.to)
  );

  useEffect(() => {
    setMobileOpen(false);
    setChapterOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        chapterMenuRef.current &&
        !chapterMenuRef.current.contains(event.target as Node)
      ) {
        setChapterOpen(false);
      }
    }

    if (chapterOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [chapterOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[88px] flex items-center justify-between gap-6">
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

          <nav className="hidden lg:flex items-center gap-7">
            {primaryNavItems.map((item) => (
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

            <div className="relative" ref={chapterMenuRef}>
              <button
                type="button"
                onClick={() => setChapterOpen((prev) => !prev)}
                className={`${linkBase} inline-flex items-center gap-1 ${
                  isChapterActive ? activeLink : desktopLink
                }`}
                aria-expanded={chapterOpen}
                aria-haspopup="menu"
              >
                Chapter
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    chapterOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {chapterOpen && (
                <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-200 bg-white shadow-xl py-2">
                  {chapterItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-sm font-semibold transition ${
                          isActive
                            ? 'bg-slate-50 text-slate-900'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

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
            {primaryNavItems.map((item) => (
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

            <div className="pt-2">
              <p className="px-3 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Chapter
              </p>
              <div className="flex flex-col gap-2">
                {chapterItems.map((item) => (
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
              </div>
            </div>

            <Link
              to="/membership"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-niu-red px-5 py-3 text-sm font-bold text-white shadow-sm hover:opacity-90 transition"
            >
              View Eligibility
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
