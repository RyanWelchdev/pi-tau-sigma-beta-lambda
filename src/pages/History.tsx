import { motion } from 'motion/react';
import { CalendarDays, Archive, Users, GraduationCap } from 'lucide-react';

export default function History() {
  const milestones = [
    {
      year: '2018',
      title: 'Beta Lambda Founded',
      description:
        'The Beta Lambda Chapter of Pi Tau Sigma at Northern Illinois University was founded on February 24, 2018.'
    },
    {
      year: '2018–Present',
      title: 'Chapter Growth',
      description:
        'Since its founding, the chapter has continued building a record of initiation, recognition, and academic tradition in mechanical engineering at NIU.'
    },
    {
      year: 'Today',
      title: 'Rebuilding Continuity',
      description:
        'The chapter is actively strengthening its records, reconnecting with alumni, and preserving materials that will support future officer teams.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Chapter History & Legacy
          </motion.h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            The Beta Lambda Chapter of Pi Tau Sigma is building a lasting tradition at Northern
            Illinois University through scholarship, initiation, records, and alumni connection.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              A Chapter Built to Last
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Pi Tau Sigma is not only about recognition at one point in time. For Beta Lambda, it
              is also about preserving a chapter identity that can be carried forward by future
              members, officers, and alumni.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              This page helps preserve the chapter’s story by documenting its founding, growth,
              symbols, and continuing effort to rebuild chapter records and alumni connections.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Over time, this page can continue to expand with more milestones, officer history,
              chapter photos, and notable initiatives.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/PiTauSigma_20260213-20f.jpg"
                alt="Pi Tau Sigma chapter group photo"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-niu-red text-white px-6 py-4 rounded-xl shadow-lg hidden md:block">
              <p className="text-sm font-bold uppercase tracking-widest">Beta Lambda</p>
              <p className="text-xs opacity-90">History, tradition, and continuity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-niu-red mb-3">
              Milestones
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Chapter Timeline
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              A growing record of Beta Lambda’s development at NIU.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0">
                    <div className="bg-red-50 text-niu-red rounded-xl px-4 py-3 font-bold text-lg">
                      {item.year}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <CalendarDays className="h-8 w-8 text-niu-red mb-5" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Founded</h3>
              <p className="text-slate-600 leading-relaxed">
                Beta Lambda was founded on February 24, 2018.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <Users className="h-8 w-8 text-niu-red mb-5" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">63 Initiated Members & Alumni</h3>
              <p className="text-slate-600 leading-relaxed">
                Current chapter records show a growing legacy of initiated members and alumni.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <Archive className="h-8 w-8 text-niu-red mb-5" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Continuity in Progress</h3>
              <p className="text-slate-600 leading-relaxed">
                The chapter is actively organizing records, documents, and alumni outreach for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symbols & Tradition */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-niu-red mb-3">
              Tradition
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Symbols of the Chapter
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              The crest and key connect Beta Lambda members to Pi Tau Sigma’s broader identity and
              the traditions of membership and initiation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
              <img
                src="/images/crest.png"
                alt="Pi Tau Sigma crest"
                className="h-28 w-auto object-contain shrink-0"
              />
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 text-center md:text-left">
                  The Crest
                </h3>
                <p className="text-slate-600 leading-relaxed text-center md:text-left">
                  The Pi Tau Sigma crest is the formal symbol of the honor society and reflects the
                  chapter’s connection to the national organization.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
              <img
                src="/images/key.png"
                alt="Pi Tau Sigma key"
                className="h-28 w-auto object-contain shrink-0"
              />
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 text-center md:text-left">
                  The Key
                </h3>
                <p className="text-slate-600 leading-relaxed text-center md:text-left">
                  The Pi Tau Sigma key represents recognition of achievement and a lasting connection
                  to the chapter’s traditions and membership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-niu-red mb-3">
              Chapter Photos
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Recent Chapter Moments
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              This page can grow over time into a fuller visual record of Beta Lambda chapter history.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="aspect-[3/2]">
                <img
                  src="/images/PiTauSigmaInitiation_20251114-23f.jpg"
                  alt="Fall 2025 Pi Tau Sigma initiation group"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fall 2025</h3>
                <p className="text-slate-600">
                  A chapter group photo capturing Beta Lambda’s continuing initiation tradition.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="aspect-[3/2]">
                <img
                  src="/images/PiTauSigma_20260213-15f.jpg"
                  alt="Spring 2026 Pi Tau Sigma initiation group"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Spring 2026</h3>
                <p className="text-slate-600">
                  Another chapter milestone as Beta Lambda continues building its record and legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 bg-niu-red">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="h-10 w-10 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Building a Legacy That Lasts
          </h2>
          <p className="text-red-100 text-lg md:text-xl max-w-3xl mx-auto">
            Beta Lambda’s history is still being written through each officer team, initiation
            cycle, and alumni connection that helps carry the chapter forward.
          </p>
        </div>
      </section>
    </div>
  );
}
