import { motion } from 'motion/react';
import { ArrowRight, Users, Award, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/PiTauSigma_20260213-01f.jpg"
            alt="Northern Illinois University engineering building"
            className="w-full h-full object-cover object-[68%_center] opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-niu-red/20 border border-niu-red/30 text-niu-red text-xs font-bold uppercase tracking-widest mb-6">
              Northern Illinois University
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Beta Lambda <br />
              Chapter of <span className="text-niu-red">Pi Tau Sigma</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Recognizing academic excellence, leadership, integrity, and sound
              engineering ability in mechanical engineering students at NIU.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/membership" className="btn-primary flex items-center justify-center gap-2">
                Check Eligibility <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-md font-medium hover:bg-white/20 transition-all duration-200 text-center"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NIU Identity Strip */}
     <section className="py-10 bg-white border-b border-slate-200">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-niu-red mb-2">
      Northern Illinois University
    </p>
    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
      Beta Lambda Chapter of Pi Tau Sigma
    </h2>
    <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
      The Beta Lambda Chapter serves mechanical engineering students at Northern Illinois
      University while building a tradition of scholarship, leadership, continuity, and
      alumni connection.
    </p>
  </div>
</section>

      {/* Action Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              A Legacy of Achievement
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Pi Tau Sigma recognizes students on the basis of scholarship, leadership, service,
              integrity, and sound engineering ability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="card group">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-niu-red transition-colors duration-300">
                <Award className="h-6 w-6 text-niu-red group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Academic Honor</h3>
              <p className="text-slate-600 mb-6">
                Undergraduate membership is based on national Pi Tau Sigma standards, including
                ranking in the upper 25% of a student’s classification and a qualifying GPA.
              </p>
              <Link
                to="/membership"
                className="text-niu-red font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                View Requirements <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="card group">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-niu-red transition-colors duration-300">
                <Users className="h-6 w-6 text-niu-red group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Alumni & Network</h3>
              <p className="text-slate-600 mb-6">
                Beta Lambda is rebuilding alumni connections to strengthen chapter history,
                professional relationships, and long-term continuity.
              </p>
              <Link
                to="/alumni"
                className="text-niu-red font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Explore Alumni <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="card group">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-niu-red transition-colors duration-300">
                <CalendarDays className="h-6 w-6 text-niu-red group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Chapter Legacy</h3>
              <p className="text-slate-600 mb-6">
                Beta Lambda was founded on February 24, 2018, and continues to build a strong
                chapter tradition at Northern Illinois University.
              </p>
              <Link
                to="/about"
                className="text-niu-red font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn About the Chapter <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
                Our Mission at NIU
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  The Beta Lambda Chapter exists to recognize excellence in mechanical engineering
                  students at NIU and to support a chapter culture built on scholarship,
                  leadership, service, integrity, and continuity.
                </p>
                <p className="text-slate-600">
                  As the Pi Tau Sigma chapter at Northern Illinois University, Beta Lambda also
                  serves as a long-term home for chapter records, alumni connection, and officer
                  transition from year to year.
                </p>
                <ul className="space-y-4">
                  {[
                    "Recognition of academic excellence",
                    "Leadership and chapter involvement",
                    "Responsible chapter continuity",
                    "Stronger alumni connection over time"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="h-2 w-2 rounded-full bg-niu-red"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/PiTauSigmaInitiation_20251114-23f.jpg"
                  alt="Pi Tau Sigma initiation group photo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-niu-red text-white p-8 rounded-xl shadow-xl hidden md:block">
                <p className="text-4xl font-serif font-bold mb-1">63</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">
                  Initiated Members & Alumni
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Legacy Teaser */}
<section className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-niu-red mb-3">
      Chapter Legacy
    </p>
    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
      Explore the History of Beta Lambda
    </h2>
    <p className="text-slate-600 max-w-3xl mx-auto mb-8">
      Learn more about the chapter’s founding, symbols, milestones, and initiation history
      as Beta Lambda continues building its long-term legacy at Northern Illinois University.
    </p>

    <div className="flex justify-center">
      <Link
        to="/history"
        className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800 transition"
      >
        View Chapter History <ArrowRight className="h-4 w-4 ml-2" />
      </Link>
    </div>
  </div>
</section>

      {/* Stats / Legacy Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
              <p className="text-4xl font-serif font-bold text-slate-900 mb-2">2018</p>
              <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold">
                Founded
              </p>
              <p className="text-slate-600 mt-4">Beta Lambda was founded on February 24, 2018.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
              <p className="text-4xl font-serif font-bold text-slate-900 mb-2">63</p>
              <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold">
                Total Members & Alumni
              </p>
              <p className="text-slate-600 mt-4">
                Based on current chapter records of initiated members and alumni.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
              <p className="text-4xl font-serif font-bold text-slate-900 mb-2">50+</p>
              <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold">
                Alumni Connections
              </p>
              <p className="text-slate-600 mt-4">
                A growing alumni network is helping strengthen chapter continuity and outreach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-niu-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
            Interested in Pi Tau Sigma?
          </h2>
          <p className="text-red-100 text-xl mb-10 max-w-2xl mx-auto">
            Learn more about eligibility, initiation, and what membership in the Beta Lambda
            Chapter means at NIU.
          </p>
          <Link
            to="/membership"
            className="inline-block bg-white text-niu-red px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
          >
            Check Your Eligibility
          </Link>
        </div>
      </section>
    </div>
  );
}
