import { motion } from 'motion/react';
import { CalendarDays, Clock3, MapPin, ArrowRight, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Events() {
  const featuredEvents = [
    {
      title: 'Chapter Meetings',
      date: 'Throughout the Semester',
      time: 'Times announced by officers',
      location: 'NIU / chapter communication',
      description:
        'Regular chapter meetings help members stay informed on initiatives, elections, alumni outreach, and chapter planning.'
    },
    {
      title: 'Membership & Eligibility Outreach',
      date: 'Each Semester',
      time: 'Varies',
      location: 'NIU Mechanical Engineering community',
      description:
        'The chapter may share information about eligibility, invitations, and upcoming initiation-related updates during the semester.'
    },
    {
      title: 'Initiation Activities',
      date: 'As Scheduled',
      time: 'Announced to invited candidates',
      location: 'Shared through chapter communication',
      description:
        'Initiation timing and preparation steps are communicated directly to invited students once details are finalized.'
    }
  ];

  const timeline = [
    {
      month: 'Early Semester',
      items: [
        'Officer planning and chapter kickoff',
        'Membership eligibility review planning',
        'General chapter outreach'
      ]
    },
    {
      month: 'Mid Semester',
      items: [
        'Chapter meetings and member engagement',
        'Potential alumni outreach or networking efforts',
        'Election planning or interest collection when applicable'
      ]
    },
    {
      month: 'Late Semester',
      items: [
        'Initiation-related communication and preparation',
        'Officer transition planning',
        'Semester wrap-up and record updates'
      ]
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
            Events & Chapter Calendar
          </motion.h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Stay up to date with chapter activity, semester planning, and important Pi Tau Sigma
            events for the Beta Lambda Chapter at NIU.
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-niu-red mb-3">
              Upcoming Activity
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Featured Events
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              This page highlights chapter activity, recurring semester events, and important 
              points of engagement for Beta Lambda members and visitors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm"
              >
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                  <CalendarDays className="h-6 w-6 text-niu-red" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">{event.title}</h3>

                <div className="space-y-3 text-sm text-slate-600 mb-6">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="h-4 w-4 text-niu-red mt-0.5 shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock3 className="h-4 w-4 text-niu-red mt-0.5 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-niu-red mt-0.5 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Semester Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-niu-red mb-3">
              Semester View
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Typical Chapter Timeline
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              This section provides a general view of the kinds of chapter activity that may take 
              place across a typical semester.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((block, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-5">
                  {block.month}
                </h3>
                <div className="space-y-4">
                  {block.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-2 h-2.5 w-2.5 rounded-full bg-niu-red shrink-0"></div>
                      <p className="text-slate-600 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Notes */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-10 text-white">
            <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
              <Megaphone className="text-niu-red" />
              Event Information
            </h3>
            <p className="text-slate-300 leading-relaxed mb-5">
              Event details may change throughout the semester as chapter plans are finalized. 
              Members, invited candidates, and visitors should also refer to official chapter 
              communication for the most current event information, especially for meetings, 
              initiation-related activities, and special chapter updates.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-2"><span>•</span> Add specific dates only when they are confirmed.</li>
              <li className="flex gap-2"><span>•</span> Remove outdated events promptly after they pass.</li>
              <li className="flex gap-2"><span>•</span> Keep semester-wide items general if details are still pending.</li>
              <li className="flex gap-2"><span>•</span> Use chapter communication channels for last-minute updates.</li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
              Looking for event details?
            </h3>
            <p className="text-slate-600 leading-relaxed mb-5">
              Event details may change throughout the semester. Members and invited candidates
              should also watch official chapter communication for the most current information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Contact the Chapter <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/membership"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Membership Info
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
