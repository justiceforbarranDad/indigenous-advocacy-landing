import React, { useState } from 'react';
import { ChevronDown, FileText, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface DocumentEntry {
  id: string;
  date: string;
  category: 'government' | 'medical' | 'legal' | 'school' | 'dpj' | 'support';
  sender: string;
  subject: string;
  excerpt: string;
  status: 'request' | 'acknowledgment' | 'support' | 'abandonment';
  impact: string;
  expanded?: boolean;
}

const documents: DocumentEntry[] = [
  {
    id: 'doc1',
    date: 'February 3, 2021',
    category: 'government',
    sender: 'DPRC - Services Quebec',
    subject: 'Request for Emergency Assistance (Pre-Stabbing)',
    excerpt: 'Nous accusons réception de votre message, soyez assuré que nous traiterons votre demande, dans les meilleurs délais.',
    status: 'acknowledgment',
    impact: '11 days later: Barran is stabbed. No emergency assistance provided.',
  },
  {
    id: 'doc2',
    date: 'February 14, 2021 (Day of Attack)',
    category: 'legal',
    sender: 'Julie Gagnon, Lawyer',
    subject: 'Emergency Custody Request for Paisley',
    excerpt: 'I will call you tomorrow! Good luck, my thoughts are with you. This is horrible!',
    status: 'support',
    impact: 'Lawyer shows compassion but legal system cannot move fast enough for emergency. Paisley traumatized, building unsecured, no immediate protection.',
  },
  {
    id: 'doc3',
    date: 'February 16, 2021',
    category: 'medical',
    sender: 'Christiane Côté, Ergotherapist',
    subject: 'Support During Crisis',
    excerpt: 'Tell him his occupational therapist is thinking of him and I send him strength and courage to get through these difficult moments.',
    status: 'support',
    impact: 'Individual healthcare provider shows genuine care. Barran has 3 sisters who witnessed him exit building covered in blood.',
  },
  {
    id: 'doc4',
    date: 'February 16-22, 2021',
    category: 'government',
    sender: 'Ministry of Labour & Social Solidarity',
    subject: 'Request for Emergency Clothing & Travel Assistance',
    excerpt: 'We are sorry for your son\'s situation and we wish him all the best. For your questions, I\'m still waiting for an answer.',
    status: 'abandonment',
    impact: 'Barran needs clothes (wears 3XL due to medical condition), $250 winter jacket, hospital travel costs. Government offers sympathy but no action. Meanwhile, 8-year-old Paisley has no clothes for a week.',
  },
  {
    id: 'doc5',
    date: 'February 17, 2021',
    category: 'medical',
    sender: 'Dr. Maria Daniela D\'Agostino, McGill University',
    subject: 'Medical Follow-up at Children\'s Hospital',
    excerpt: 'I am aware and will pass by to see Barran on the ward on Wednesday.',
    status: 'support',
    impact: 'Medical geneticist coordinates care despite being on COVID ward. Barran has pre-existing medical conditions (paraparesis, biotinidase deficiency) requiring ongoing specialist care.',
  },
  {
    id: 'doc6',
    date: 'February 25, 2021',
    category: 'school',
    sender: 'Deb Kellman, School Consultant',
    subject: 'Return to School After Stabbing',
    excerpt: 'They are beautiful children. You are a very lucky father.',
    status: 'support',
    impact: 'School staff recognizes trauma. Barran still has nightmares 11 days after attack. Attacker still not found. Private psychological help being sought (government not providing).',
  },
  {
    id: 'doc7',
    date: 'March-October 2020 (Pre-Stabbing)',
    category: 'medical',
    sender: 'Dr. Maria Daniela D\'Agostino & Christiane Côté',
    subject: 'Medical Documentation for Disability & Van Adaptation',
    excerpt: 'We need medical attestation to support the request for family vehicle adaptation. Barran has paralysis issues requiring wheelchair accessibility.',
    status: 'support',
    impact: 'Healthcare providers working to get Barran proper accommodations. Fighting bureaucracy to get disability recognition and van adaptation approved.',
  },
  {
    id: 'doc8',
    date: 'January-February 2021',
    category: 'legal',
    sender: 'Alain Gagnon Avocats',
    subject: 'Custody Battle for Paisley (Ongoing Since September 2019)',
    excerpt: 'I have been fighting for Paisley\'s custody since September 2019. We were told we would go to trial soon. It has been delayed since November 2020.',
    status: 'abandonment',
    impact: 'Legal system slow even in normal circumstances. During crisis (stabbing), custody emergency cannot be resolved quickly. Paisley remains traumatized.',
  },
  {
    id: 'doc9',
    date: 'February 4, 2021 (11 days before stabbing)',
    category: 'legal',
    sender: 'James Robert McGovern',
    subject: 'Court Appearance Impossible - Recent Heart Surgery',
    excerpt: 'Thursday is too soon. I just had surgery on February 4 for my heart. They installed 4 stents in my main arteries.',
    status: 'abandonment',
    impact: 'You are recovering from major heart surgery (4 stents) while managing 6 children, Barran\'s medical conditions, and custody battles. System does not accommodate health crises.',
  },
];

const categoryColors = {
  government: 'bg-red-100 border-red-300 text-red-900',
  medical: 'bg-green-100 border-green-300 text-green-900',
  legal: 'bg-blue-100 border-blue-300 text-blue-900',
  school: 'bg-purple-100 border-purple-300 text-purple-900',
  dpj: 'bg-orange-100 border-orange-300 text-orange-900',
  support: 'bg-emerald-100 border-emerald-300 text-emerald-900',
};

const statusIcons = {
  request: <FileText className="w-5 h-5" />,
  acknowledgment: <AlertCircle className="w-5 h-5" />,
  support: <CheckCircle className="w-5 h-5" />,
  abandonment: <XCircle className="w-5 h-5" />,
};

const statusLabels = {
  request: 'Request Sent',
  acknowledgment: 'Acknowledged (No Action)',
  support: 'Genuine Support',
  abandonment: 'System Failure',
};

export default function Documents() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredDocs = selectedCategory === 'all' 
    ? documents 
    : documents.filter(doc => doc.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Documents & Evidence
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Chronological record of requests for help, institutional responses, and systemic failures
          </p>
          <p className="text-base text-gray-500 italic">
            "Acknowledged but not acted upon" — The pattern of bureaucratic abandonment
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-gray-900 text-white'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            All Documents
          </button>
          {['government', 'medical', 'legal', 'school', 'support'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all capitalize ${
                selectedCategory === cat
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Documents List */}
        <div className="space-y-4">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-lg shadow-md border-l-4 border-gray-300 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Document Header */}
              <button
                onClick={() => toggleExpand(doc.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-start justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${categoryColors[doc.category]}`}>
                      {doc.category.toUpperCase()}
                    </span>
                    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                      doc.status === 'support' ? 'bg-green-100 text-green-900' :
                      doc.status === 'abandonment' ? 'bg-red-100 text-red-900' :
                      'bg-yellow-100 text-yellow-900'
                    }`}>
                      {statusIcons[doc.status]}
                      {statusLabels[doc.status]}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {doc.subject}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>From:</strong> {doc.sender}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    <strong>Date:</strong> {doc.date}
                  </p>
                  <p className="text-gray-700 italic line-clamp-2">
                    "{doc.excerpt}"
                  </p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 flex-shrink-0 ml-4 transition-transform ${
                    expandedId === doc.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expanded Content */}
              {expandedId === doc.id && (
                <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Full Excerpt:</h4>
                    <p className="text-gray-700 italic border-l-4 border-gray-300 pl-4 py-2">
                      "{doc.excerpt}"
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Impact on Family:</h4>
                    <p className="text-gray-700 bg-white p-4 rounded border border-gray-200">
                      {doc.impact}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>
                      <strong>Document Type:</strong> {doc.category === 'government' ? 'Government Correspondence' : 
                                                       doc.category === 'medical' ? 'Medical Records' :
                                                       doc.category === 'legal' ? 'Legal Correspondence' :
                                                       doc.category === 'school' ? 'School Records' :
                                                       'Support Communication'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-12 bg-red-50 border-l-4 border-red-600 p-6 rounded">
          <h2 className="text-2xl font-bold text-red-900 mb-4">The Pattern: Acknowledgment Without Action</h2>
          <ul className="space-y-3 text-red-900">
            <li className="flex items-start gap-3">
              <span className="font-bold">1.</span>
              <span>Family requests help (emergency assistance, medical support, legal protection)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold">2.</span>
              <span>Government/Institution acknowledges: "We received your message. We will process it as soon as possible."</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold">3.</span>
              <span>Silence. No follow-up. No action. No resolution.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold">4.</span>
              <span>Meanwhile: Barran is stabbed, traumatized, needs emergency support. Siblings witness the attack. Family in crisis.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold">5.</span>
              <span>Individual healthcare providers (Shriners Hospital, ergotherapist, school staff) show genuine care and support.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold">6.</span>
              <span>Institutional systems (DPJ, government, city) continue to fail. By 2023, DPJ withdraws support entirely.</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <h3 className="text-xl font-bold text-blue-900 mb-3">What This Evidence Shows</h3>
          <p className="text-blue-900 mb-4">
            These documents prove that systemic failures were not isolated incidents, but part of a pattern of institutional abandonment. The government acknowledged requests but took no action. Meanwhile, individual healthcare providers showed genuine compassion and support.
          </p>
          <p className="text-blue-900 font-semibold">
            Justice requires: Independent inquiry, application of Jordan's Principle, and accountability for institutional failures.
          </p>
        </div>
      </div>
    </div>
  );
}
