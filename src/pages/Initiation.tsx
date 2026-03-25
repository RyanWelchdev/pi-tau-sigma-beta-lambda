import { motion } from 'motion/react';
import { ClipboardCheck, CreditCard, PenTool, FileText, Calendar, Info } from 'lucide-react';

export default function Initiation() {
  const steps = [
    {
      title: "1. Complete the Pledging Form",
      desc: "Fill out the official chapter pledging form to confirm your intent to join.",
      icon: <FileText className="h-6 w-6" />,
      status: "Required"
    },
    {
      title: "2. Pay Initiation Fees",
      desc: "Fees cover your national lifetime membership, key/pin, and chapter dues.",
      icon: <CreditCard className="h-6 w-6" />,
      status: "Required"
    },
    {
      title: "3. Polish the Bent",
      desc: "A time-honored tradition. Every initiate must polish their brass PTS bent.",
      icon: <PenTool className="h-6 w-6" />,
      status: "Required"
    },
    {
      title: "4. Obtain Signatures",
      desc: "Meet with current officers and faculty to learn more about the chapter legacy.",
      icon: <ClipboardCheck className="h-6 w-6" />,
      status: "Required"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-niu-red py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Initiation Journey
          </motion.h1>
          <p className="text-red-100 max-w-2xl mx-auto text-lg">
            Congratulations on your invitation. Follow this guide to complete your journey into the Beta Lambda Chapter.
          </p>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">The Initiate Checklist</h2>
              <p className="text-slate-600">All steps must be completed prior to the formal ceremony.</p>
            </div>
            
            <div className="divide-y divide-slate-100">
              {steps.map((step, index) => (
                <div key={index} className="p-8 flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-niu-red shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.desc}</p>
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

      {/* Important Dates */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Calendar className="text-niu-red" /> Spring 2026 Key Dates
              </h2>
              <div className="space-y-6">
                {[
                  { date: "March 30", event: "Information Session", loc: "EB 201, 5:00 PM" },
                  { date: "April 15", event: "Deadline for Fees & Forms", loc: "Online / Secretary" },
                  { date: "April 20", event: "Bent Polishing Workshop", loc: "Machine Shop, 4:00 PM" },
                  { date: "May 02", event: "Formal Initiation Ceremony", loc: "Altgeld Hall, 6:00 PM" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 pb-6 border-b border-slate-100 last:border-0">
                    <div className="text-center shrink-0">
                      <p className="text-niu-red font-bold text-xl leading-none">{item.date.split(' ')[1]}</p>
                      <p className="text-slate-400 text-xs uppercase font-bold">{item.date.split(' ')[0]}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.event}</h4>
                      <p className="text-slate-500 text-sm">{item.loc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                <Info className="text-niu-red" /> Polishing the Bent
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                The Pi Tau Sigma "Bent" is our official insignia. As a candidate, you will receive a raw brass casting that must be filed and polished to a mirror finish.
              </p>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="font-bold mb-4 text-niu-red uppercase text-xs tracking-widest">Pro Tips:</h4>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-2"><span>•</span> Start with a fine-tooth file for the edges.</li>
                  <li className="flex gap-2"><span>•</span> Use progressively finer sandpaper (400 to 2000 grit).</li>
                  <li className="flex gap-2"><span>•</span> Finish with Brasso or similar metal polish.</li>
                  <li className="flex gap-2"><span>•</span> Do not use power tools; the effort is part of the tradition.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
