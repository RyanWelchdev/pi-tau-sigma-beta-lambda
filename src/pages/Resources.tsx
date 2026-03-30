import { motion } from 'motion/react';
import { FileText, ShieldCheck, Archive, ExternalLink, FolderOpen } from 'lucide-react';

export default function Resources() {
  const coreDocuments = [
    {
      title: 'Beta Lambda Chapter Constitution',
      description:
        'The governing document for the Beta Lambda Chapter, including chapter structure, elections, membership, and chapter operations.',
      href: '/documents/chapter-constitution.pdf',
      type: 'PDF'
    },
    {
      title: 'Pi Tau Sigma National Constitution',
      description:
        'The national governing document for Pi Tau Sigma, outlining eligibility, chapter responsibilities, and society-wide standards.',
      href: '/documents/national-constitution.pdf',
      type: 'PDF'
    }
  ];

  const futureResources = [
    'Chapter bylaws or supporting governance documents',
    'Officer transition guides',
    'Initiation checklists and semester planning materials',
    'Election information and chapter forms',
    'Annual reports or chapter records appropriate for public sharing'
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
            Resources
          </motion.h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Public documents and chapter resources for the Beta Lambda Chapter of Pi Tau Sigma
            at Northern Illinois University.
          </p>
        </div>
      </section>

      {/* Core Documents */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-niu-red mb-3">
              Core Documents
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Foundational Chapter Resources
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              These documents help explain how the chapter and the broader honor society are structured.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreDocuments.map((doc, index) => (
              <motion.a
                key={index}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="block bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm hover:border-niu-red/40 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 text-niu-red" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {doc.type}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                  {doc.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {doc.description}
                </p>

                <div className="inline-flex items-center gap-2 text-niu-red font-semibold">
                  Open Document <ExternalLink className="h-4 w-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Public vs Internal */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
              <ShieldCheck className="h-6 w-6 text-niu-red" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Public Resources
            </h3>
            <p className="text-slate-600 leading-relaxed">
              This page is best used for documents that are appropriate to share publicly, such as
              constitutions, chapter overviews, and general information that helps members,
              prospective candidates, alumni, and visitors understand the chapter.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
              <Archive className="h-6 w-6 text-niu-red" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Internal Chapter Materials
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Internal-only files such as officer transition documents, private member lists,
              financial records, and planning materials are usually better kept outside the public
              website in a shared chapter folder system.
            </p>
          </div>
        </div>
      </section>

      {/* Future Expansion */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-niu-red mb-3">
              Future Expansion
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Resources That Can Be Added Later
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              This page can grow over time as the chapter organizes more public-facing materials.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <FolderOpen className="h-6 w-6 text-niu-red" />
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Possible Additions
              </h3>
            </div>

            <div className="space-y-4">
              {futureResources.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-niu-red shrink-0"></div>
                  <p className="text-slate-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
