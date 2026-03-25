import { motion } from 'motion/react';
import { CheckCircle2, GraduationCap, Award, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Membership() {
  const requirements = [
    {
      title: "Academic Standing",
      description: "Must be a Mechanical Engineering major in good standing with the University.",
      icon: <GraduationCap className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Junior Eligibility",
      description: "Rank in the upper 25% of the junior mechanical engineering class.",
      icon: <Award className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Senior Eligibility",
      description: "Rank in the upper 33% of the senior mechanical engineering class.",
      icon: <Award className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Character & Personality",
      description: "Demonstrate sound engineering ability, scholarship, and personality.",
      icon: <BookOpen className="h-6 w-6 text-niu-red" />
    }
  ];

  const benefits = [
    "Lifelong recognition of academic excellence",
    "Networking with top-tier engineering professionals",
    "Access to exclusive chapter events and banquets",
    "Leadership opportunities within the NIU College of Engineering",
    "National PTS scholarship opportunities",
    "Distinction at graduation with official PTS regalia"
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Membership & Eligibility
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Joining Pi Tau Sigma is a mark of distinction. Learn about the requirements and the process of becoming a member of the Beta Lambda Chapter.
          </p>
        </div>
      </section>

      {/* Requirements Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Who Can Join?</h2>
            <p className="text-slate-600">Membership is by invitation only, based on the following criteria.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:border-niu-red/30 transition-colors"
              >
                <div className="mb-4">{req.icon}</div>
                <h3 className="text-lg font-bold mb-2">{req.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{req.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-niu-red/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">The Value of Membership</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Pi Tau Sigma is more than just an honor on your resume. It is a community of high-achieving engineers dedicated to the advancement of the profession.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-niu-red shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif font-bold mb-6">The Invitation Process</h3>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Academic Review", desc: "Each semester, the chapter reviews the academic rankings of all ME students." },
                  { step: "02", title: "Formal Invitation", desc: "Eligible students receive an invitation via their NIU email address." },
                  { step: "03", title: "Information Session", desc: "Invitees attend a session to learn about the chapter and initiation requirements." },
                  { step: "04", title: "Initiation Ceremony", desc: "Upon completion of requirements, candidates are formally initiated." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-niu-red font-bold font-serif text-xl">{item.step}</span>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Form CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Didn't receive an invitation?</h2>
          <p className="text-slate-600 mb-10">
            If you believe you meet the academic requirements but have not received an invitation, please let us know. We perform reviews twice a year.
          </p>
          <a 
            href="https://forms.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Submit Interest Form <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-6 text-xs text-slate-400 italic">
            Note: Submission of this form does not guarantee membership. All candidates must meet national and chapter eligibility criteria.
          </p>
        </div>
      </section>
    </div>
  );
}
