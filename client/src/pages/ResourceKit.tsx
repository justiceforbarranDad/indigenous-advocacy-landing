import { Download, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const resources = [
  {
    category: 'Complaint Templates',
    items: [
      {
        title: 'DPJ Complaint Form',
        description: 'Template for filing formal complaints with Direction de la protection de la jeunesse',
        format: 'PDF',
        size: '245 KB',
        language: 'French/English',
        downloadUrl: '#',
      },
      {
        title: 'CDPDJ Complaint Form',
        description: 'Official template for submitting complaints to Quebec\'s human rights commission',
        format: 'PDF',
        size: '312 KB',
        language: 'French/English',
        downloadUrl: '#',
      },
      {
        title: 'Jordan\'s Principle Request',
        description: 'Template for requesting no-delay services under Jordan\'s Principle',
        format: 'PDF',
        size: '198 KB',
        language: 'French/English',
        downloadUrl: '#',
      },
      {
        title: 'Ombudsman Complaint',
        description: 'Template for filing complaints with provincial/federal ombudsman offices',
        format: 'PDF',
        size: '267 KB',
        language: 'French/English',
        downloadUrl: '#',
      },
    ],
  },
  {
    category: 'Documentation Guides',
    items: [
      {
        title: 'How to Document Abuse',
        description: 'Step-by-step guide for documenting systemic failures and institutional abuse',
        format: 'PDF',
        size: '456 KB',
        language: 'French/English',
        downloadUrl: '#',
      },
      {
        title: 'Evidence Collection Checklist',
        description: 'Comprehensive checklist of documents and evidence to collect for legal cases',
        format: 'PDF',
        size: '189 KB',
        language: 'French/English',
        downloadUrl: '#',
      },
      {
        title: 'Timeline Documentation Template',
        description: 'Template for creating detailed timelines of systemic failures and institutional responses',
        format: 'PDF',
        size: '134 KB',
        language: 'French/English',
        downloadUrl: '#',
      },
    ],
  },
  {
    category: 'Rights & Legal Resources',
    items: [
      {
        title: 'Your Rights Guide',
        description: 'Comprehensive guide to fundamental human rights and legal protections',
        format: 'PDF',
        size: '523 KB',
        language: 'French/English',
        downloadUrl: '#',
      },
      {
        title: 'Jordan\'s Principle Explained',
        description: 'Detailed explanation of Jordan\'s Principle and how to enforce it',
        format: 'PDF',
        size: '287 KB',
        language: 'French/English',
        downloadUrl: '#',
      },
      {
        title: 'Contact Directory',
        description: 'Complete directory of government agencies, ombudsman offices, and support organizations',
        format: 'PDF',
        size: '198 KB',
        language: 'French/English',
        downloadUrl: '#',
      },
      {
        title: 'UN Complaint Process Guide',
        description: 'Step-by-step guide for submitting complaints to UN Special Rapporteurs',
        format: 'PDF',
        size: '312 KB',
        language: 'French/English',
        downloadUrl: '#',
      },
    ],
  },
  {
    category: 'Support & Advocacy',
    items: [
      {
        title: 'Media Kit',
        description: 'Press releases, fact sheets, and media materials for advocacy campaigns',
        format: 'ZIP',
        size: '1.2 MB',
        language: 'French/English',
        downloadUrl: '#',
      },
      {
        title: 'Social Media Templates',
        description: 'Ready-to-use social media posts and graphics for raising awareness',
        format: 'ZIP',
        size: '856 KB',
        language: 'French/English',
        downloadUrl: '#',
      },
      {
        title: 'Letter to Elected Officials',
        description: 'Template letter to send to MPs, MNAs, and municipal representatives',
        format: 'PDF',
        size: '145 KB',
        language: 'French/English',
        downloadUrl: '#',
      },
    ],
  },
];

export default function ResourceKit() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-amber-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-forest-green mb-4 flex items-center justify-center gap-3">
            <FileText size={40} />
            Resource Kit
          </h1>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto">
            Download templates, guides, and tools to help you document systemic failures, file complaints, and advocate for change
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-amber-orange mb-2">18+</div>
            <p className="text-charcoal-light">Downloadable Resources</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-amber-orange mb-2">100%</div>
            <p className="text-charcoal-light">Free & Open Access</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-amber-orange mb-2">2</div>
            <p className="text-charcoal-light">Languages (FR/EN)</p>
          </div>
        </div>

        {/* Resources by Category */}
        <div className="space-y-12">
          {resources.map((category, categoryIdx) => (
            <div key={categoryIdx}>
              <h2 className="text-3xl font-bold text-forest-green mb-6 pb-3 border-b-2 border-amber-orange">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-forest-green flex-1">{item.title}</h3>
                      <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded ml-2">
                        {item.format}
                      </span>
                    </div>
                    <p className="text-charcoal-light text-sm mb-4">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-charcoal-light mb-4 pb-4 border-b">
                      <span>{item.language}</span>
                      <span>{item.size}</span>
                    </div>
                    <a
                      href={item.downloadUrl}
                      className="inline-flex items-center gap-2 bg-forest-green text-white px-4 py-2 rounded-lg hover:bg-forest-green/90 transition-colors font-semibold text-sm"
                    >
                      <Download size={16} />
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* How to Use Guide */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-forest-green mb-6">How to Use These Resources</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-bold text-forest-green mb-2">Download the Template</h3>
                <p className="text-charcoal-light">Choose the template that matches your situation and download it to your computer.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-bold text-forest-green mb-2">Fill in Your Information</h3>
                <p className="text-charcoal-light">Complete the template with your specific details, dates, and documentation of systemic failures.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-bold text-forest-green mb-2">Gather Supporting Documents</h3>
                <p className="text-charcoal-light">Use the Evidence Collection Checklist to gather all relevant documents and evidence.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-bold text-forest-green mb-2">Submit Your Complaint</h3>
                <p className="text-charcoal-light">Follow the instructions in the template to submit to the appropriate agency or organization.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h3 className="font-bold text-forest-green mb-2">Track Your Case</h3>
                <p className="text-charcoal-light">Use our Legal Case Tracker to document the progress of your complaint and follow-up actions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <div className="flex gap-3 mb-3">
              <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-1" />
              <h3 className="font-bold text-blue-900">Confidentiality</h3>
            </div>
            <p className="text-blue-800 text-sm">
              You can submit complaints anonymously. Use the anonymous submission option if you're concerned about retaliation.
            </p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <div className="flex gap-3 mb-3">
              <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-1" />
              <h3 className="font-bold text-red-900">Keep Copies</h3>
            </div>
            <p className="text-red-800 text-sm">
              Always keep copies of everything you submit. Document all correspondence and keep detailed records.
            </p>
          </div>
        </div>

        {/* Support CTA */}
        <div className="mt-16 bg-gradient-to-r from-forest-green to-amber-orange text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Our support team is available to answer questions about these resources and help you navigate the complaint process.
          </p>
          <button className="bg-white text-forest-green font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
