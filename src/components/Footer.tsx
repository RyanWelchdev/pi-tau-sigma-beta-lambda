import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src="/images/crest.png"
                  alt="Pi Tau Sigma crest"
                  className="h-11 w-11 object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-white">Pi Tau Sigma</h3>
                <p className="text-xs font-sans font-semibold text-niu-red uppercase tracking-widest">
                  Beta Lambda Chapter
                </p>
              </div>
            </div>

            <p className="max-w-md text-slate-400 leading-relaxed mb-6">
              The Pi Tau Sigma chapter at Northern Illinois University, dedicated to scholarship,
              leadership, integrity, and long-term chapter continuity in mechanical engineering.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/about" className="hover:text-niu-red transition-colors">
                  About PTS
                </Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-niu-red transition-colors">
                  Eligibility
                </Link>
              </li>
              <li>
                <Link to="/initiation" className="hover:text-niu-red transition-colors">
                  Initiation
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-niu-red transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-niu-red transition-colors">
                  History
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-niu-red transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/alumni" className="hover:text-niu-red transition-colors">
                  Alumni
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-niu-red shrink-0" />
                <span>
                  NIU College of Engineering and Engineering Technology
                  <br />
                  Engineering Building
                  <br />
                  590 Garden Rd, DeKalb, IL 60115
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-niu-red shrink-0 mt-0.5" />
                <span>ptsbetalambda@gmail.com</span>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-3">
                Chapter Affiliation
              </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Northern Illinois University
              <br />
              Mechanical Engineering
            </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Pi Tau Sigma Beta Lambda Chapter.</p>
          <p>Beta Lambda was founded on February 24, 2018.</p>
        </div>
      </div>
    </footer>
  );
}
