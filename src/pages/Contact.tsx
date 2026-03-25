import { motion } from 'motion/react';
import { Mail, Users, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const contactOptions = [
    {
      title: "General Chapter Questions",
      description:
        "Use this route for general questions about Pi Tau Sigma, chapter activity, or membership-related clarification.",
      icon: <Mail className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Membership & Initiation",
      description:
        "Students with questions about eligibility, invitations, or initiation can reach out for clarification.",
      icon: <Users className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Alumni Reconnection",
      description:
        "Initiated alumni who want to reconnect with Beta Lambda or update contact information are welcome to get in touch.",
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
            Contact Beta Lambda
          </motion.h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Contact the Beta Lambda Chapter of Pi Tau Sigma at Northern Illinois University
            for questions about membership, chapter information, alumni outreach, or general inquiries.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              Best Way to Reach the Chapter
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              The best long-term setup is a shared chapter email account that can be passed from one
              officer team to the next. That keeps communication organized and avoids tying the website
              too closely to one student’s personal email.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              If your chapter email is already active, replace the placeholder contact information on
              this page with the official address. If not, this page can still serve as a clear public
              contact hub while the chapter finalizes its communication system.
            </p>
            <p className="text-slate-600 leading-relaxed">
              For privacy and continuity, it is usually best to share official chapter contact methods
              rather than personal phone numbers.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <ShieldCheck className="h-6 w-6 text-niu-red" />
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Recommended Public Contact Setup
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <span className="font-semibold text-slate-900">Chapter Email:</span>{' '}
                ptsbetalambda@niu.edu
              </p>
              <p>
                <span className="font-semibold text-slate-900">Faculty Advisor:</span>{' '}
                Add advisor contact here if you want it publicly listed.
              </p>
              <p>
                <span className="font-semibold text-slate-900">Forms:</span>{' '}
                Add membership interest, alumni update, or election forms here as they become available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              What You Can Contact Us About
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              This page is intended to direct common questions to the right chapter contact path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((item, index) => (
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
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
            Ready to get in touch?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            You can update this section with your final chapter email, a faculty advisor contact,
            or public forms once those are ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ptsbetalambda@niu.edu"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Email the Chapter <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/membership"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              View Membership Info
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-400 italic max-w-2xl mx-auto">
            Replace the placeholder email on this page with the chapter’s preferred long-term contact
            address if a different one is being used.
          </p>
        </div>
      </section>
    </div>
  );
}
