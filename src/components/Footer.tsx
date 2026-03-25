import { GraduationCap, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-8 w-8 text-niu-red" />
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
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-niu-red shrink-0" />
                <span>
                  NIU College of Engineering
                  <br />
                  DeKalb, IL 60115
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-niu-red shrink-0 mt-0.5" />
                <span>Chapter email coming soon</span>
              </li>
            </ul>
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
