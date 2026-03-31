import { motion } from 'motion/react';
import { ClipboardCheck, CreditCard, PenTool, FileText, Info, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Initiation() {
  const steps = [
    {
      title: "Review Your Invitation Materials",
      desc: "Invited candidates should carefully review the chapter’s instructions, deadlines, and required initiation materials.",
      icon: <FileText className="h-6 w-6" />,
      status: "Required"
    },
    {
      title: "Complete Required Forms",
      desc: "Candidates may be asked to complete chapter and national forms before initiation can be finalized.",
      icon: <ClipboardCheck className="h-6 w-6" />,
      status: "Required"
    },
    {
      title: "Submit Fees if Applicable",
      desc: "Initiation-related fees may include national membership items and chapter-specific costs as communicated by the chapter.",
      icon: <CreditCard className="h-6 w-6" />,
      status: "Required"
    },
    {
      title: "Complete Chapter-Specific Tasks",
      desc: "The chapter may provide additional pre-initiation steps, traditions, or instructions for invited candidates.",
      icon: <PenTool className="h-6 w-6" />,
      status: "Varies by Semester"
    }
  ];

  const reminders = [
    "Watch for chapter announcements and officer communication.",
    "Complete all required materials before the stated deadline.",
    "Ask questions early if anything is unclear.",
    "Keep records of submitted forms and payments when applicable."
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Initiation
          </motion.h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Initiation marks the formal transition from invited candidate to member of the
            Beta Lambda Chapter of Pi Tau Sigma. Chapter-specific instructions are shared
            directly with eligible and invited students.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              What Initiation Means
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Pi Tau Sigma initiation is the formal process through which invited candidates
              become members of the honor society. It is both a recognition of academic
              achievement and an entry point into the long-term life of the chapter.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              Because chapter practices and timelines can vary by semester, invited candidates
              should rely on official communication from Beta Lambda officers and the faculty
              advisor for the most current details.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This page provides a general overview. Final instructions should always come from
              the chapter’s current initiation process and materials.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/PiTauSigma_20260213-15f.jpg"
                alt="Pi Tau Sigma initiation group photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-niu-red text-white px-6 py-4 rounded-xl shadow-lg hidden md:block">
              <p className="text-sm font-bold uppercase tracking-widest">Beta Lambda</p>
              <p className="text-xs opacity-90">Initiation tradition and chapter continuity</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                General Initiation Checklist
              </h2>
              <p className="text-slate-600">
                Exact steps may vary by semester, but invited candidates should expect a process
                similar to the following.
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="p-8 flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-slate-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-niu-red shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider rounded-full">
                    {step.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 flex items-center gap-3">
              <ShieldCheck className="text-niu-red" /> Important Notes for Candidates
            </h2>
            <div className="space-y-6">
              {reminders.map((item, i) => (
                <div key={i} className="flex gap-4 pb-6 border-b border-slate-100 last:border-0">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-niu-red shrink-0"></div>
                  <p className="text-slate-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
              <Info className="text-niu-red" /> Chapter Symbol
            </h3>

            <div className="bg-white rounded-2xl p-6 mb-6 flex justify-center">
              <img
                src="/images/key.png"
                alt="Pi Tau Sigma key"
                className="h-40 w-auto object-contain"
              />
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">
              The Pi Tau Sigma key is closely associated with membership and initiation, representing
              both recognition of achievement and connection to the traditions of the honor society.
            </p>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
  <h4 className="font-bold mb-4 text-niu-red uppercase text-xs tracking-widest">
    Important Note
  </h4>
  <p className="text-sm text-slate-300 leading-relaxed">
    Specific initiation dates, deadlines, and candidate instructions are shared directly
    with invited students as details are finalized. Candidates should rely on official
    chapter communication for the most current information.
  </p>
</div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/membership"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Membership <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Contact the Chapter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
