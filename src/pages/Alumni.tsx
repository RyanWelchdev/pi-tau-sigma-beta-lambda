import { motion } from 'motion/react';
import { Users, Mail, Network, Archive, ArrowRight, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Alumni() {
  const priorities = [
    {
      title: "Reconnect Alumni",
      description:
        "Rebuild connections with initiated members of the Beta Lambda Chapter and make it easier for alumni to stay informed.",
      icon: <Users className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Preserve Chapter Records",
      description:
        "Strengthen long-term chapter continuity by identifying past members, preserving history, and improving organizational records.",
      icon: <Archive className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Support Networking",
      description:
        "Create opportunities for alumni to support current students through advice, professional encouragement, and chapter connection.",
      icon: <Network className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Keep Outreach Respectful",
      description:
        "Collect and use alumni contact information carefully, with a focus on chapter communication and appropriate follow-up.",
      icon: <Mail className="h-6 w-6 text-niu-red" />
    }
  ];

  const waysToHelp = [
    "Update your preferred contact information",
    "Stay informed about chapter updates and milestones",
    "Be open to future alumni-student networking opportunities",
    "Help preserve Beta Lambda chapter history",
    "Share professional insight or encouragement with current members when possible"
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
            Alumni
          </motion.h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            The Beta Lambda Chapter is working to reconnect with alumni, preserve chapter history,
            and strengthen relationships between past and current members of Pi Tau Sigma at NIU.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              Why Alumni Matter
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              A strong chapter does not begin and end with one officer team or one initiation cycle.
              Alumni are part of the long-term identity of Beta Lambda and help show that the chapter
              is more than a short-term student organization.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              Rebuilding alumni connections supports chapter continuity, strengthens historical records,
              and creates the potential for future networking, mentorship, and professional community.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This page is intended to serve as a welcoming point of reconnection for alumni while
              helping the chapter responsibly organize its outreach efforts.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <Handshake className="h-6 w-6 text-niu-red" />
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Current Chapter Focus
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Beta Lambda is actively working to rebuild chapter records and improve alumni outreach.
              That includes identifying past initiated members, improving contact records, and creating
              a stronger foundation for future chapter continuity.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Over time, this effort can support alumni updates, chapter history, and stronger
              connections between current students and former members.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Alumni Priorities
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              This effort is focused on responsible reconnection, stronger records, and long-term value
              to the chapter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {priorities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              Ways Alumni Can Stay Connected
            </h2>
            <ul className="space-y-4">
              {waysToHelp.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-niu-red shrink-0"></div>
                  <span className="text-slate-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold mb-5">
              Reconnect with Beta Lambda
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you are an initiated member of the Beta Lambda Chapter and would like to reconnect,
              the chapter would be glad to hear from you.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              A future alumni update form may be added here. For now, please use the chapter contact
              page to get in touch.
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
                Learn About the Chapter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
