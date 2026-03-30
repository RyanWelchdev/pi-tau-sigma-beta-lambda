import { motion } from 'motion/react';
import { Users, Crown, Mail, Wallet, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const officers = [
  {
    name: 'Gabe Pekarek',
    role: 'President',
    image: '/images/officers/2025-2026/president-gabe-pekarek.jpg',
    description:
      'Leads the chapter, helps guide chapter priorities, and supports long-term direction and continuity.',
    icon: <Crown className="h-5 w-5 text-niu-red" />
  },
  {
    name: 'Paul Lehmann',
    role: 'Vice President',
    image: null,
    description:
      'Supports chapter operations, planning, and internal coordination across the semester.',
    icon: <Users className="h-5 w-5 text-niu-red" />
  },
  {
    name: 'Ryan Welch',
    role: 'Corresponding & Recording Secretary',
    image: '/images/officers/2025-2026/secretary-ryan-welch.jpg',
    description:
      'Maintains chapter records, meeting documentation, and communication that support continuity.',
    icon: <Mail className="h-5 w-5 text-niu-red" />
  },
  {
    name: 'Matthew Smalley',
    role: 'Treasurer',
    image: null,
    description:
      'Oversees financial matters, dues-related coordination, and chapter financial organization.',
    icon: <Wallet className="h-5 w-5 text-niu-red" />
  },
  {
    name: 'Dr. Nicholas Pohlman',
    role: 'Faculty Advisor',
    image: null,
    description:
      'Provides chapter guidance, supports continuity, and helps advise the chapter’s development.',
    icon: <GraduationCap className="h-5 w-5 text-niu-red" />
  }
];

export default function Officers() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Chapter Officers
          </motion.h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            The Beta Lambda officer team supports chapter operations, communication, records,
            finances, continuity, and long-term chapter health.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-niu-red mb-3">
              2025–2026 Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Current Officer Team
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              This roster can be updated each academic year as officer roles and photos change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {officers.map((officer, index) => (
              <motion.div
                key={officer.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
              >
                {officer.image ? (
                  <div className="aspect-[4/5] bg-slate-100">
                    <img
                      src={officer.image}
                      alt={`${officer.name}, ${officer.role}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/5] bg-slate-100 flex items-center justify-center border-b border-slate-200">
                    <div className="text-center px-6">
                      <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 text-xl font-bold">
                        {officer.name
                          .split(' ')
                          .map((part) => part[0])
                          .slice(0, 2)
                          .join('')}
                      </div>
                      <p className="text-sm font-semibold text-slate-500">Photo coming soon</p>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {officer.icon}
                    <p className="text-sm font-bold uppercase tracking-widest text-niu-red">
                      {officer.role}
                    </p>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                    {officer.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {officer.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              Why the Officer Team Matters
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              A strong officer team does more than organize meetings. It helps preserve records,
              support communication, maintain chapter continuity, and carry Beta Lambda forward from
              one academic year to the next.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This page is designed so future officer teams can easily update names, photos, and
              roles without rebuilding the entire layout.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold mb-5">
              Want to help lead the chapter?
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Chapter leadership is one of the best ways to strengthen Beta Lambda, support future
              members, and contribute to long-term chapter growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Contact the Chapter <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/events"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                View Chapter Activity
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
