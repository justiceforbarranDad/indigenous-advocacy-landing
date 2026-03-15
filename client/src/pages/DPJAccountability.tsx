import { ChevronLeft, AlertTriangle, FileText, Clock } from 'lucide-react';
import { useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DPJAccountability() {
  const [, setLocation] = useLocation();

  const failures = [
    {
      year: '2013',
      title: 'Paternity & Custody Battle Begins',
      description: 'Fought for paternity and custody of Barran\'s sister when she was born. DPJ involvement started but remained ineffective throughout.',
      details: [
        'Reported concerns about mother\'s actions to DPJ',
        'DPJ refused to conduct house checks',
        'Only phone calls and school contacts made',
        'No meaningful intervention despite reports'
      ]
    },
    {
      year: '2013-2021',
      title: 'Years of Ignored Reports',
      description: 'Continuous reporting of family trauma and systemic failures. DPJ repeatedly refused proper investigation.',
      details: [
        'Multiple reports filed by biological father',
        'DPJ refused house checks (only calls/school contacts)',
        'No documentation of concerns',
        'No follow-up on reported issues',
        'Children remained in unsafe situation'
      ]
    },
    {
      year: '2021+',
      title: 'Serious Family Trauma - Teen Stabbed 3x',
      description: 'Major incident occurred requiring intervention. DPJ still failed to provide adequate support.',
      details: [
        'Teen stabbed 3 times in serious attack',
        'Major impacts on family',
        'DPJ involvement but inadequate response',
        'Education lost',
        'Mental health destroyed'
      ]
    },
    {
      year: 'January 2023',
      title: 'DPJ Finally Withdrawn',
      description: 'After 10 years of involvement, DPJ withdrew without adequate follow-up or support services.',
      details: [
        'DPJ ordered out of family\'s life',
        'No transition plan',
        'No ongoing support services',
        'Children left without resources',
        'Omissions and lies covered up by DPJ staff'
      ]
    },
    {
      year: '2026',
      title: 'Current Status - Still Fighting',
      description: 'Barran is now 20, sister is 14. Custody finally obtained but systemic harm already done.',
      details: [
        'Barran: 20 years old',
        'Sister: 14 years old',
        'Custody finally obtained after stabbing incident',
        'Education severely impacted',
        'Mental health ongoing issues',
        'Fighting for justice and accountability'
      ]
    }
  ];

  const systemicIssues = [
    {
      issue: 'Refusal of House Checks',
      impact: 'DPJ refused to conduct proper in-home investigations despite multiple reports. Only phone calls and school contacts made.',
      evidence: 'Documented reports from 2013-2023 showing pattern of refusal'
    },
    {
      issue: 'Omissions & Lies by DPJ Staff',
      impact: 'Government employees made omissions and false statements to cover up failures.',
      evidence: 'National Day for Truth and Reconciliation message: "Omissions, lies made by DYP Staff"'
    },
    {
      issue: 'Violation of Jordan\'s Principle',
      impact: 'No-delay services for First Nations kids ignored. Child welfare system failed Indigenous family.',
      evidence: 'Slide 3: "Jordan\'s Principle (no-delay services for First Nations kids) ignored"'
    },
    {
      issue: 'Violation of 12 Rights of Users',
      impact: 'Children denied fundamental rights including right to information, right to be heard, right to protection.',
      evidence: 'Poster showing 12 rights - all violated in this case'
    },
    {
      issue: 'Education Loss',
      impact: 'Child lost secondary education completely due to system failures.',
      evidence: 'Simon Jolin-Barrette post: "Mon fils lui a perdu son secondaire au complet à cause le système"'
    },
    {
      issue: 'Mental Health Destruction',
      impact: 'Systemic failures led to severe mental health impacts on children.',
      evidence: 'Documented trauma from stabbing incident and ongoing institutional failures'
    }
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <div className="container max-w-5xl mx-auto px-4 py-12">
        <button
          onClick={() => setLocation('/')}
          className="flex items-center gap-2 text-amber-orange hover:text-amber-light mb-8 transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Home
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-forest-green mb-4">
            DPJ Accountability
          </h1>
          <p className="text-xl text-charcoal-light leading-relaxed">
            A 13-year timeline of systemic failures, refusals, omissions, and lies by the Department of Youth Protection (DPJ/DYP) that destroyed a family's future.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-amber-orange mb-8">Timeline of Institutional Failure</h2>
          <div className="space-y-6">
            {failures.map((failure, idx) => (
              <Card key={idx} className="border-amber-orange/20 overflow-hidden">
                <CardHeader className="bg-forest-green/10 border-b border-amber-orange/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-orange text-white px-4 py-2 rounded font-bold text-lg min-w-fit">
                      {failure.year}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-forest-green">{failure.title}</CardTitle>
                      <CardDescription className="text-charcoal-light mt-2">{failure.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {failure.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 text-charcoal-light">
                        <span className="text-amber-orange font-bold mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Systemic Issues */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-amber-orange mb-8">Systemic Issues Documented</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systemicIssues.map((item, idx) => (
              <Card key={idx} className="border-red-600/20 bg-red-50">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={24} />
                    <CardTitle className="text-lg text-red-700">{item.issue}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-charcoal mb-1">Impact:</p>
                    <p className="text-sm text-charcoal-light">{item.impact}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal mb-1">Evidence:</p>
                    <p className="text-sm text-charcoal-light italic">{item.evidence}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Findings */}
        <Card className="border-forest-green/30 bg-forest-green/5 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-forest-green flex items-center gap-2">
              <FileText size={28} />
              Key Findings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-bold text-charcoal mb-2">It Took a STABBING to Get Custody</h4>
              <p className="text-charcoal-light leading-relaxed">
                Despite 10 years of reports and concerns, it took a serious violent attack (teen stabbed 3 times) for custody to finally be obtained. This demonstrates the complete failure of preventive systems.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-charcoal mb-2">Education & Mental Health Destroyed</h4>
              <p className="text-charcoal-light leading-relaxed">
                Child lost secondary education completely. Mental health severely impacted. These are permanent damages that cannot be undone.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-charcoal mb-2">DPJ Withdrawal Without Support</h4>
              <p className="text-charcoal-light leading-relaxed">
                After 10 years of involvement, DPJ simply withdrew in January 2023 without adequate transition planning or ongoing support services.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-charcoal mb-2">Cover-Up by Government Employees</h4>
              <p className="text-charcoal-light leading-relaxed">
                Omissions and lies made by DPJ staff to cover up systemic failures. This is not just negligence—it's institutional dishonesty.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="border-amber-orange/30 bg-amber-orange/5">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-orange">This Is Not Isolated</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-charcoal-light leading-relaxed">
              The CDPDJ's 2025 Nunavik systemic inquiry shows chronic failures: under-resourced, culturally inappropriate interventions, harm to Indigenous kids' health/development. This family's story is one of thousands.
            </p>
            <p className="text-charcoal-light leading-relaxed">
              <strong>Breaks:</strong> Article 23 UNCRC, Quebec Charter art. 39, reconciliation spirit
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-amber-orange mt-4">
              <p className="text-sm text-charcoal font-semibold mb-2">Protected Expression</p>
              <p className="text-sm text-charcoal-light">
                This documentation is protected by Canadian Charter s.2(b) freedom of expression and Indigenous rights jurisprudence (2024 CSC 5). All claims are supported by documented evidence.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
