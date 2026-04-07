import { RealisticNewspaperReader } from '@/components/RealisticNewspaperReader';

export default function NewspaperReader() {
  const newspaperPages = [
    {
      id: 'page-1',
      pageNumber: 1,
      title: 'Five Years of Systemic Abandonment',
      content: (
        <div className="space-y-4">
          <p className="font-bold text-lg">JUSTICE FOR BARRAN - PART 3</p>
          <p>
            Since 2021, our Indigenous family has fought for justice after serious trauma. A teenager stabbed three times. Major impacts. Mental health destroyed. The system that promised to protect vulnerable children abandoned us instead.
          </p>
          <p>
            The Direction de la Protection de la Jeunesse (DPJ) became involved but withdrew in January 2023 - with no adequate follow-up, no education, no mental health support. Jordan's Principle - which guarantees no-delay services for First Nations children - was completely ignored.
          </p>
          <p className="font-bold">
            This is not an isolated case. This is systemic failure.
          </p>
          <div className="border-l-4 border-black pl-4 my-4">
            <p className="font-bold text-sm">KEY FACTS:</p>
            <ul className="text-sm space-y-1 mt-2">
              <li>• 5+ years of systemic violations</li>
              <li>• 50+ government officials contacted</li>
              <li>• Zero adequate responses</li>
              <li>• Jordan's Principle ignored</li>
              <li>• Family still seeking justice</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'page-2',
      pageNumber: 2,
      title: 'Government Silence = Complicity',
      content: (
        <div className="space-y-4">
          <p>
            We escalated to federal MPs - same silence. Even higher bodies (Protecteur du citoyen, Commissaire à l'éthique, CHRC ref 100021349) say limits on powers, no real change for DPJ decisions.
          </p>
          <p>
            Our MNA, Céline Haytayan (CAQ, Laval-des-Rapides), sent a cease-and-desist warning instead of assistance. This is what happens when a constituent asks for help.
          </p>
          <p className="font-bold">
            Political accountability is not optional. It is a constitutional requirement.
          </p>
          <div className="bg-gray-100 border-2 border-black p-3 my-4">
            <p className="font-bold text-sm mb-2">TIMELINE OF ABANDONMENT:</p>
            <p className="text-xs">2021: Family seeks help after trauma</p>
            <p className="text-xs">2021-2023: DPJ involvement then withdrawal</p>
            <p className="text-xs">2023: Political cease-and-desist warning</p>
            <p className="text-xs">2023-2026: Ongoing systemic failures</p>
            <p className="text-xs">2026: Justice for Barran campaign launched</p>
          </div>
        </div>
      )
    },
    {
      id: 'page-3',
      pageNumber: 3,
      title: 'Corporate Hypocrisy: Who Profits from Reconciliation?',
      content: (
        <div className="space-y-4">
          <p>
            While our family suffered, major corporations profited from "reconciliation" marketing. RBC, TD Bank, Scotiabank, CIBC, Canadian Tire, Walmart Canada, NHL teams - all sponsor Orange Shirt Day and Truth & Reconciliation initiatives.
          </p>
          <p className="font-bold">
            But where were they when we needed help? Where is their accountability?
          </p>
          <p>
            Performative activism is not reconciliation. Real reconciliation requires:
          </p>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Systemic change, not marketing campaigns</li>
            <li>• Government accountability, not corporate virtue signaling</li>
            <li>• Real support for vulnerable families, not empty promises</li>
            <li>• Jordan's Principle enforcement, not selective application</li>
            <li>• Independent inquiries into systemic failures</li>
          </ul>
        </div>
      )
    },
    {
      id: 'page-4',
      pageNumber: 4,
      title: 'How You Can Help - Take Action Now',
      content: (
        <div className="space-y-4">
          <p className="font-bold text-lg">DEMAND ACCOUNTABILITY</p>
          
          <div className="border-l-4 border-black pl-4 my-4">
            <p className="font-bold text-sm mb-2">IMMEDIATE ACTIONS:</p>
            <p className="text-sm">1. Sign the petition demanding independent inquiry</p>
            <p className="text-sm">2. Contact elected officials (links on website)</p>
            <p className="text-sm">3. Tag corporations on social media</p>
            <p className="text-sm">4. Share this newspaper with your network</p>
            <p className="text-sm">5. Donate to legal fund for justice</p>
          </div>

          <p className="font-bold">
            Every child deserves protection. Every family deserves justice. Every voice deserves to be heard.
          </p>

          <p className="text-xs text-center mt-6 border-t-2 border-black pt-4">
            Justice for Barran | Sunday Bloody Sunday, Part 3<br/>
            <br/>
            indigenousadv-ahjdmzis.manus.space
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black p-4">
      <RealisticNewspaperReader
        pages={newspaperPages}
        title="JUSTICE FOR BARRAN"
        subtitle="Part 3 - "
      />
    </div>
  );
}
