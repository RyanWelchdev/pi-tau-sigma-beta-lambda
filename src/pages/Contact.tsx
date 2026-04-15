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
              The Beta Lambda Chapter can be contacted for questions related to membership, initiation, alumni outreach, chapter information, and general inquiries.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              The chapter’s preferred public contact method should be used for communication so inquiries can be directed appropriately and maintained from year to year.
            </p>
            <p className="text-slate-600 leading-relaxed">
              As chapter communication systems continue to develop, this page may be updated with additional public contact options when appropriate.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <ShieldCheck className="h-6 w-6 text-niu-red" />
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Chapter Contact Information
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <span className="font-semibold text-slate-900">Chapter Email:</span>{' '}
                ptsbetalambda@gmail.com
              </p>
              <p>
                <span className="font-semibold text-slate-900">Faculty Advisor:</span>{' '}
                Faculty advisor information may be listed here when appropriate for public contact.
              </p>
              <p>
                <span className="font-semibold text-slate-900">Forms:</span>{' '}
                Public forms may be added here once they are finalized and in active use.
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
            Additional public contact options may be added as the chapter’s communication system continues to develop.
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
            ptsbetalambda@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
