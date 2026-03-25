import { motion } from 'motion/react';
import { Users, Crown, Mail, Wallet, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Officers() {
  const roles = [
    {
      title: "President",
      description:
        "Leads the chapter, presides over meetings, helps guide chapter priorities, and supports long-term direction and continuity.",
      icon: <Crown className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Vice President",
      description:
        "Supports the president, assists with chapter operations, and may help coordinate events, planning, and internal organization.",
      icon: <Users className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Recording Secretary",
      description:
        "Maintains chapter records, meeting minutes, and documentation that supports continuity from one officer team to the next.",
      icon: <Mail className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Corresponding Secretary",
      description:
        "Handles chapter communication, notices, outreach, and correspondence with members, alumni, and outside contacts.",
      icon: <Mail className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Treasurer",
      description:
        "Oversees chapter financial records, dues-related matters, and any chapter funds or financial reporting responsibilities.",
      icon: <Wallet className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Faculty Advisor",
      description:
        "Provides chapter guidance, supports eligibility review and chapter policy, and helps ensure continuity and alignment with Pi Tau Sigma expectations.",
      icon: <GraduationCap className="h-6 w-6 text-niu-red" />
    }
  ];

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
            Beta Lambda chapter leadership supports chapter operations, membership,
            records, communication, continuity, and long-term chapter health.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              Officer Structure
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Pi Tau Sigma chapters are typically organized around officer roles such as
              president, vice president, recording secretary, corresponding secretary,
              treasurer, and faculty advisor.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              Depending on chapter needs, some roles may be combined. For example, the
              recording secretary and corresponding secretary responsibilities may be held
              by one officer when appropriate.
            </p>
            <p className="text-slate-600 leading-relaxed">
              A strong officer team does more than run meetings. It preserves records,
              communicates clearly, manages chapter operations responsibly, and helps the
              chapter remain active and sustainable from year to year.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-5">
              Why officer clarity matters
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Clear officer responsibilities help members understand who handles chapter
              communication, records, finances, elections, and membership processes.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              It also makes the chapter more resilient during officer transition by making
              responsibilities visible rather than informal.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This page is intended to show the chapter’s leadership structure and provide
              a clear starting point for future officer updates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Core Officer Roles
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              These descriptions are intended to communicate the structure of chapter
              leadership clearly and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
              >
                <div className="mb-4">{role.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{role.title}</h3>
                <p className="text-slate-600 leading-relaxed">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              Current Officers
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              This section can be updated each year with the current Beta Lambda officer team,
              including names, positions, and contact information appropriate for public display.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              For privacy and maintenance reasons, it is often best to list names and chapter
              email contacts rather than personal phone numbers or unnecessary personal details.
            </p>
            <p className="text-slate-600 leading-relaxed">
              If the current roster is still being updated, this page can remain focused on the
              officer structure until the latest information is confirmed.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold mb-5">
              Want to help lead the chapter?
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Chapter leadership is one of the best ways to strengthen Beta Lambda, support
              future members, and help preserve the chapter’s long-term success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Contact the Chapter <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
