import { motion } from 'motion/react';
import { BookOpen, Users, ShieldCheck, Landmark, ArrowRight, ScrollText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const pillars = [
    {
      title: "Scholarship",
      description:
        "Pi Tau Sigma recognizes high academic achievement in mechanical engineering and encourages continued excellence in study, research, and professional growth.",
      icon: <BookOpen className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Leadership & Service",
      description:
        "Membership reflects more than grades alone. The society values leadership, service, integrity, and sound engineering ability.",
      icon: <Users className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Chapter Responsibility",
      description:
        "Each chapter is responsible for its own affairs while remaining consistent with the national constitution and bylaws of Pi Tau Sigma.",
      icon: <ShieldCheck className="h-6 w-6 text-niu-red" />
    },
    {
      title: "Continuity",
      description:
        "A strong chapter preserves records, develops officers, supports members, and builds lasting alumni connections from year to year.",
      icon: <Landmark className="h-6 w-6 text-niu-red" />
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
            About Pi Tau Sigma
          </motion.h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Pi Tau Sigma is the international honor society for mechanical engineering.
            The Beta Lambda Chapter at Northern Illinois University exists to recognize
            excellence, strengthen chapter continuity, and support the development of
            mechanical engineering students and alumni.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              What Pi Tau Sigma Represents
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Pi Tau Sigma is built around recognition of academic achievement in mechanical
              engineering together with leadership, service, integrity, and professional promise.
              Membership is organized nationally, but lived locally through individual chapters.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              Nationally, the society includes undergraduate, graduate, and honorary membership
              pathways. Locally, chapters are responsible for carrying out the mission of the
              society through selection, initiation, chapter operations, and member engagement.
            </p>
            <p className="text-slate-600 leading-relaxed">
              For Beta Lambda, that means maintaining a chapter that is credible, organized,
              academically grounded, and sustainable from one officer team to the next.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <ScrollText className="h-6 w-6 text-niu-red" />
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                How the Chapter Fits In
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Beta Lambda operates as the Pi Tau Sigma chapter at Northern Illinois University.
              Like all chapters, it is expected to manage its own affairs while staying consistent
              with the national constitution and bylaws of the honor society.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Chapter leadership is structured around officers such as president, vice-president,
              recording secretary, corresponding secretary, treasurer, and faculty advisor, with
              some flexibility permitted in how secretary roles are combined.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This website helps communicate that structure clearly while also supporting
              membership information, chapter records, alumni outreach, and long-term continuity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Core Chapter Principles
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              A high-functioning chapter should be more than ceremonial. It should be clear in
              purpose, responsible in governance, and useful to its members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
              >
                <div className="mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              What This Website Is For
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              This site is intended to be more than a simple student organization page. It serves
              as a public-facing home for the chapter and as a continuity tool that helps future
              officers maintain accurate information and organized records.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              It is designed to help students understand eligibility and initiation, provide a
              clear picture of chapter leadership, support alumni reconnection, and preserve
              important documents and chapter history over time.
            </p>
            <p className="text-slate-600 leading-relaxed">
              It also helps communicate the chapter’s mission, officer structure, membership
              information, and long-term commitment to continuity at NIU.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold mb-6">
              Looking for something specific?
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                Visit the Membership page to learn about eligibility standards and how initiation works.
              </p>
              <p>
                Visit the Officers page to see how chapter leadership is structured.
              </p>
              <p>
                Visit the Alumni page to reconnect with Beta Lambda and support chapter continuity.
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
}          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            About Pi Tau Sigma
          </motion.h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Pi Tau Sigma is the international honor society for mechanical engineering.
            The Beta Lambda Chapter at Northern Illinois University exists to recognize
            excellence, strengthen chapter continuity, and support the development of
            mechanical engineering students and alumni.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              What Pi Tau Sigma Represents
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Pi Tau Sigma is built around recognition of academic achievement in mechanical
              engineering together with leadership, service, integrity, and professional promise.
              Membership is organized nationally, but lived locally through individual chapters.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              Nationally, the society includes undergraduate, graduate, and honorary membership
              pathways. Locally, chapters are responsible for carrying out the mission of the
              society through selection, initiation, chapter operations, and member engagement.  [oai_citation:5‡Constitution-of-Pi-Tau-Sigma-Amend-March-2023.pdf](sediment://file_000000000ce8722fae840d24403cb81e)  [oai_citation:6‡Constitution-of-Pi-Tau-Sigma-Amend-March-2023.pdf](sediment://file_000000000ce8722fae840d24403cb81e)
            </p>
            <p className="text-slate-600 leading-relaxed">
              For Beta Lambda, that means maintaining a chapter that is credible, organized,
              academically grounded, and sustainable from one officer team to the next.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <ScrollText className="h-6 w-6 text-niu-red" />
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                How the Chapter Fits In
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Beta Lambda operates as the Pi Tau Sigma chapter at Northern Illinois University.
              Like all chapters, it is expected to manage its own affairs while staying consistent
              with the national constitution and bylaws of the honor society.  [oai_citation:7‡Constitution-of-Pi-Tau-Sigma-Amend-March-2023.pdf](sediment://file_000000000ce8722fae840d24403cb81e)
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Chapter leadership is structured around officers such as president, vice-president,
              recording secretary, corresponding secretary, treasurer, and faculty advisor, with
              some flexibility permitted in how secretary roles are combined.  [oai_citation:8‡Constitution-of-Pi-Tau-Sigma-Amend-March-2023.pdf](sediment://file_000000000ce8722fae840d24403cb81e)
            </p>
            <p className="text-slate-600 leading-relaxed">
              This website helps communicate that structure clearly while also supporting
              membership information, chapter records, alumni outreach, and long-term continuity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Core Chapter Principles
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              A high-functioning chapter should be more than ceremonial. It should be clear in
              purpose, responsible in governance, and useful to its members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
              >
                <div className="mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              What This Website Is For
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              This site is intended to be more than a simple student organization page. It serves
              as a public-facing home for the chapter and as a continuity tool that helps future
              officers maintain accurate information and organized records.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              It is designed to help students understand eligibility and initiation, provide a
              clear picture of chapter leadership, support alumni reconnection, and preserve
              important documents and chapter history over time.
            </p>
            <p className="text-slate-600 leading-relaxed">
              It also helps demonstrate the kinds of organizational clarity expected of a student
              chapter: mission, membership requirements, officer structure, advisor involvement,
              elections, transition, and responsible governance.  [oai_citation:9‡Constitution Checklist.pdf](sediment://file_000000002164722f9e6ac495eaa6934f)
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold mb-6">
              Looking for something specific?
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                Visit the Membership page to learn about eligibility standards and how initiation works.
              </p>
              <p>
                Visit the Officers page to see how chapter leadership is structured.
              </p>
              <p>
                Visit the Alumni page to reconnect with Beta Lambda and support chapter continuity.
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
