import { motion } from 'motion/react';
import { CheckCircle2, GraduationCap, Award, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Membership() {
  const requirements = [
    {
      title: "Undergraduate Eligibility",
      description:
        "Undergraduate membership is based on scholarship, service, leadership, integrity, and sound engineering ability. Eligible students are typically in the last two years of the mechanical engineering program.",
      icon: <GraduationCap className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Class Rank Requirement",
      description:
        "To be considered for undergraduate membership, a student's scholastic ranking must be in the upper 25% of their respective classification.",
      icon: <Award className="h-6 w-6 text-niu-red" />
    },
    {
      title: "GPA Requirement",
      description:
        "Eligible undergraduate candidates must have a cumulative GPA greater than or equal to 3.25 on a 4.0 scale.",
      icon: <BookOpen className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Special Cases",
      description:
        "A last-term senior who meets the academic requirements may be initiated only with permission from the Pi Tau Sigma Board of Directors.",
      icon: <ShieldCheck className="h-6 w-6 text-niu-red" />
    }
  ];

  const benefits = [
    "Recognition of academic excellence in mechanical engineering",
    "Membership in an international mechanical engineering honor society",
    "Connection to the Beta Lambda Chapter at NIU and the broader Pi Tau Sigma network",
    "Opportunities for leadership, service, and chapter involvement",
    "Eligibility to participate in chapter events, initiatives, and alumni connections",
    "Formal initiation, certificate, membership card, and chapter regalia opportunities"
  ];

  const process = [
    {
      step: "01",
      title: "Eligibility Review",
      desc: "Eligible candidates are identified according to Pi Tau Sigma requirements. The faculty advisor is responsible for the selection of eligible candidates, and the list must be approved by active chapter members before invitations are sent."
    },
    {
      step: "02",
      title: "Invitation",
      desc: "Students who meet the requirements may receive a formal invitation from the Beta Lambda Chapter."
    },
    {
      step: "03",
      title: "Chapter Follow-Up",
      desc: "Invited students receive next-step details about membership, chapter expectations, fees, and initiation."
    },
    {
      step: "04",
      title: "Initiation",
      desc: "New members are formally initiated in accordance with Pi Tau Sigma procedures and become permanent members upon initiation."
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Membership & Eligibility
          </motion.h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Pi Tau Sigma membership recognizes academic achievement, leadership potential,
            service, and integrity in mechanical engineering. Beta Lambda membership follows
            national Pi Tau Sigma eligibility standards and chapter procedures.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Undergraduate Membership Requirements
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Membership is not open enrollment. Students must meet national eligibility standards
              and be formally invited through the chapter process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:border-niu-red/30 transition-colors"
              >
                <div className="mb-4">{req.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">{req.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{req.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              A note on graduate and honorary membership
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Pi Tau Sigma also provides for graduate and honorary membership under separate
              national criteria. Graduate eligibility includes residency, ranking, and GPA
              requirements, and honorary membership is based on distinguished professional
              achievement in mechanical engineering.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This website primarily highlights the undergraduate membership pathway most relevant
              to NIU mechanical engineering students. Additional chapter-specific information can
              be shared through officers or the faculty advisor as needed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-niu-red/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                Why Membership Matters
              </h2>
              <p className="text-slate-300 mb-10 leading-relaxed">
                Pi Tau Sigma is both an honor and a long-term professional connection. Membership
                reflects high academic performance while also linking students to a chapter built on
                scholarship, leadership, service, and continuity.
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
              <h3 className="text-2xl font-serif font-bold mb-6">How the Process Works</h3>
              <div className="space-y-8">
                {process.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-niu-red font-bold font-serif text-xl">{item.step}</span>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
            Think you may be eligible?
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            If you believe you meet the academic requirements but have not received an invitation,
            you can contact the chapter for clarification. Interest does not guarantee eligibility
            or membership, but it can help the chapter follow up appropriately.
          </p>

          <a
            href="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Contact the Chapter <ArrowRight className="h-4 w-4" />
          </a>

          <p className="mt-6 text-xs text-slate-400 italic max-w-2xl mx-auto">
            Membership decisions must follow national Pi Tau Sigma requirements, chapter approval
            procedures, and applicable university expectations.
          </p>
        </div>
      </section>
    </div>
  );
}
