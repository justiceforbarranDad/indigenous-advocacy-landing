import { AlertCircle, DollarSign, Users, Eye, CheckCircle, XCircle } from 'lucide-react';

/**
 * ORANGE SHIRT DAY INVESTIGATION
 * 
 * Who owns the Orange Shirt Movement?
 * Where does the money go?
 * Why do leaders wear orange shirts while refusing to help families?
 * 
 * Performative activism while children suffer
 * Photo ops while families are ghosted
 * Hypocrisy documented
 */

export default function OrangeShirtDayInvestigation() {
  return (
    <div className="min-h-screen bg-charcoal text-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-orange-600 to-charcoal py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            ORANGE SHIRT DAY INVESTIGATION
          </h1>
          <p className="text-xl text-orange-200 mb-6">
            Who Owns the Movement? Where Does the Money Go? Why Do Leaders Wear Orange While Ghosting Families?
          </p>
          <div className="flex items-center justify-center gap-2 text-orange-300">
            <Eye size={24} />
            <span className="font-semibold">Follow the Money. Follow the Hypocrisy.</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-charcoal-light">
        <div className="max-w-4xl mx-auto">
          <div className="bg-charcoal p-8 rounded-lg border-l-4 border-orange-500">
            <p className="text-lg leading-relaxed mb-4">
              Every September 30th, First Nations leaders wear orange shirts. They post photos. They make speeches about reconciliation. 
              They talk about "Every Child Matters." They promote Orange Shirt Day.
            </p>
            <p className="text-lg leading-relaxed font-bold text-orange-300">
              Meanwhile, thousands of families are being ghosted. Children are suffering. Organizations like AFN refuse to help. 
              And the Orange Shirt movement continues as a photo op.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              This is the investigation into who owns Orange Shirt Day, where the money goes, and why the movement has become 
              performative activism while real children suffer.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Ownership */}
      <section className="py-16 px-4 bg-charcoal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-orange-300">WHO OWNS ORANGE SHIRT DAY?</h2>

          <div className="space-y-8">
            {/* Founder */}
            <div className="bg-charcoal-light p-8 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold mb-4 text-white">FOUNDER: Phyllis Webstad</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-orange-300 font-bold mb-2">Who She Is:</p>
                  <ul className="space-y-2 text-white">
                    <li>• Northern Secwepemc (Shuswap) author and activist</li>
                    <li>• From Stswecem'c Xgat'tem First Nation</li>
                    <li>• Created Orange Shirt Day based on her personal residential school experience</li>
                    <li>• Her orange shirt was taken away on her first day at residential school</li>
                    <li>• Now: Founder/CEO and Board Member of Orange Shirt Society</li>
                  </ul>
                </div>
                <div>
                  <p className="text-orange-300 font-bold mb-2">Her Role:</p>
                  <p className="text-white">
                    Phyllis Webstad founded Orange Shirt Day in 2013 and established the Orange Shirt Society in 2015 to manage the movement. 
                    She is the public face of the organization and makes all major decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Organization */}
            <div className="bg-charcoal-light p-8 rounded-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold mb-4 text-white">ORGANIZATION: Orange Shirt Society</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-amber-orange font-bold mb-2">Official Status:</p>
                  <ul className="space-y-2 text-white">
                    <li>• Non-profit organization</li>
                    <li>• Formed: 2015</li>
                    <li>• Location: Williams Lake, BC (where Orange Shirt Day originated)</li>
                    <li>• Registered with BC Registry</li>
                  </ul>
                </div>
                <div>
                  <p className="text-amber-orange font-bold mb-2">Mission Statement:</p>
                  <p className="text-white italic">
                    "Growing awareness of the individual, family and community intergenerational impacts of Residential Schools"
                  </p>
                </div>
              </div>
            </div>

            {/* Board of Directors */}
            <div className="bg-charcoal-light p-8 rounded-lg border-l-4 border-amber-light">
              <h3 className="text-2xl font-bold mb-4 text-white">BOARD OF DIRECTORS (Who Controls the Organization)</h3>
              <div className="space-y-4">
                <div className="bg-charcoal p-4 rounded">
                  <p className="font-bold text-amber-light mb-2">Shannon Henderson - PRESIDENT</p>
                  <p className="text-white text-sm">Leads the board and organization</p>
                </div>
                <div className="bg-charcoal p-4 rounded">
                  <p className="font-bold text-amber-light mb-2">Mary Gerges - SECRETARY</p>
                  <p className="text-white text-sm">Manages board records and communications</p>
                </div>
                <div className="bg-charcoal p-4 rounded">
                  <p className="font-bold text-amber-light mb-2">Joan Charleyboy - BOARD MEMBER</p>
                  <p className="text-white text-sm">Governance and decision-making</p>
                </div>
                <div className="bg-charcoal p-4 rounded">
                  <p className="font-bold text-amber-light mb-2">Chief Willie Sellars - BOARD MEMBER</p>
                  <p className="text-white text-sm">First Nations leadership representation</p>
                </div>
                <div className="bg-charcoal p-4 rounded">
                  <p className="font-bold text-amber-light mb-2">Phyllis Webstad - FOUNDER/CEO + BOARD MEMBER</p>
                  <p className="text-white text-sm">Founder, CEO, and board member - ultimate control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Money & Funding */}
      <section className="py-16 px-4 bg-charcoal-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-orange-300">FOLLOW THE MONEY</h2>

          <div className="space-y-8">
            {/* Revenue Sources */}
            <div className="bg-charcoal p-8 rounded-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-white">WHERE THE MONEY COMES FROM</h3>
              <div className="space-y-4">
                <div className="bg-charcoal-light p-4 rounded">
                  <p className="font-bold text-green-400 mb-2">1. MERCHANDISE SALES</p>
                  <p className="text-white">
                    Orange Shirt Society sells orange t-shirts, merchandise, and branded items. 
                    Funds from merchandise sales go towards public awareness campaigns.
                  </p>
                </div>
                <div className="bg-charcoal-light p-4 rounded">
                  <p className="font-bold text-green-400 mb-2">2. GOVERNMENT FUNDING</p>
                  <p className="text-white">
                    Federal government provides grants for Orange Shirt Day events. 
                    Example: James Smith Cree Nation received $6,700 from Canadian Heritage department (2025) to hold Orange Shirt events.
                  </p>
                </div>
                <div className="bg-charcoal-light p-4 rounded">
                  <p className="font-bold text-green-400 mb-2">3. DONATIONS</p>
                  <p className="text-white">
                    Public donations accepted. Donations over $999.99 must be via cheque, e-transfer, or bank transfer 
                    (CRA regulations). No detailed donor list published.
                  </p>
                </div>
                <div className="bg-charcoal-light p-4 rounded">
                  <p className="font-bold text-green-400 mb-2">4. GRANTS & PROGRAMS</p>
                  <p className="text-white">
                    Orange Shirt Day Fund with grant programs available to organizations. 
                    Orange Shirt Legacy Fund mentioned but details not publicly available.
                  </p>
                </div>
              </div>
            </div>

            {/* Where Money Goes */}
            <div className="bg-charcoal p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-white">WHERE THE MONEY GOES - TRANSPARENCY ISSUES</h3>
              <div className="space-y-4">
                <div className="bg-red-900/30 p-4 rounded border-l-4 border-red-500">
                  <p className="font-bold text-red-300 mb-2">⚠️ NO DETAILED FINANCIAL STATEMENTS</p>
                  <p className="text-white">
                    Orange Shirt Society does not publish detailed financial statements on their website. 
                    No breakdown of revenue vs. expenses. No transparency about budget allocation.
                  </p>
                </div>
                <div className="bg-red-900/30 p-4 rounded border-l-4 border-red-500">
                  <p className="font-bold text-red-300 mb-2">⚠️ NO CLEAR DONATION TRACKING</p>
                  <p className="text-white">
                    Where do donations go? How much goes to administration vs. programs? 
                    No public accounting of donation usage.
                  </p>
                </div>
                <div className="bg-red-900/30 p-4 rounded border-l-4 border-red-500">
                  <p className="font-bold text-red-300 mb-2">⚠️ LIMITED PROGRAM DOCUMENTATION</p>
                  <p className="text-white">
                    Orange Jersey Project, Orange Shirt Legacy Fund, educational resources mentioned but 
                    no detailed budget or impact reports available.
                  </p>
                </div>
                <div className="bg-red-900/30 p-4 rounded border-l-4 border-red-500">
                  <p className="font-bold text-red-300 mb-2">⚠️ STAFF SALARIES NOT DISCLOSED</p>
                  <p className="text-white">
                    No public information about how much staff are paid. No executive compensation disclosure.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Know They Do */}
            <div className="bg-charcoal p-8 rounded-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold mb-4 text-white">DOCUMENTED ACTIVITIES & PROGRAMS</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Orange Jersey Project</span> - Athletes support Truth and Reconciliation</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Educational Resources</span> - Learning materials for schools</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Speaker Programs</span> - Speakers available for events</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Community Events</span> - Endorsed reconciliation events</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Merchandise Sales</span> - Orange shirts and branded items</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Hypocrisy */}
      <section className="py-16 px-4 bg-charcoal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-red-400">THE HYPOCRISY: PHOTO OPS WHILE FAMILIES ARE GHOSTED</h2>

          <div className="space-y-8">
            {/* The Pattern */}
            <div className="bg-charcoal-light p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-white">THE PATTERN</h3>
              <div className="space-y-4">
                <div className="bg-charcoal p-4 rounded">
                  <p className="font-bold text-red-300 mb-2">SEPTEMBER 30 - ORANGE SHIRT DAY</p>
                  <p className="text-white">
                    First Nations leaders, AFN officials, politicians, and organizations wear orange shirts. 
                    They post photos. They make speeches. They talk about reconciliation and "Every Child Matters."
                  </p>
                </div>
                <div className="bg-charcoal p-4 rounded">
                  <p className="font-bold text-red-300 mb-2">OCTOBER 1 - BACK TO GHOSTING</p>
                  <p className="text-white">
                    The same leaders and organizations go back to ignoring families. 
                    AFN refuses to help First Nations children. DYP/DPJ continues systemic abuse. 
                    Politicians don't respond to constituent requests.
                  </p>
                </div>
              </div>
            </div>

            {/* First Nations Leaders Hypocrisy */}
            <div className="bg-charcoal-light p-8 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold mb-4 text-white">FIRST NATIONS LEADERS & AFN HYPOCRISY</h3>
              <div className="space-y-4">
                <div className="bg-charcoal p-4 rounded">
                  <p className="font-bold text-orange-300 mb-2">WHAT THEY SAY:</p>
                  <p className="text-white italic">
                    "Every Child Matters" | "Truth and Reconciliation" | "Honoring Survivors" | 
                    "Supporting Indigenous Children"
                  </p>
                </div>
                <div className="bg-charcoal p-4 rounded">
                  <p className="font-bold text-orange-300 mb-2">WHAT THEY DO:</p>
                  <ul className="space-y-2 text-white">
                    <li>• AFN refuses to help First Nations families (documented in this case)</li>
                    <li>• Ignore Jordan's Principle mandate to help First Nations children</li>
                    <li>• Wear orange shirts for photo ops but take no action</li>
                    <li>• Promote Orange Shirt Day while ghosting families seeking help</li>
                    <li>• No accountability for children still suffering in DYP/DPJ system</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* The Real Numbers */}
            <div className="bg-charcoal-light p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-white">THE REAL NUMBERS: THOUSANDS OF FAMILIES GHOSTED</h3>
              <div className="space-y-4">
                <p className="text-white leading-relaxed">
                  While Orange Shirt Day gets media attention and government funding, 
                  <span className="font-bold text-red-300"> thousands of families are being ghosted by the same institutions that promote it</span>.
                </p>
                <div className="bg-charcoal p-4 rounded border-l-4 border-red-500">
                  <p className="text-red-300 font-bold mb-2">Documented Cases of Ghosting:</p>
                  <ul className="space-y-2 text-white">
                    <li>• AFN - Refused to help First Nations family</li>
                    <li>• DYP/DPJ - Systemic failures across all provinces</li>
                    <li>• Politicians - Cease-and-desist warnings instead of help</li>
                    <li>• PMO - Complete ghosting of federal escalation</li>
                    <li>• Amnesty Canada - No response to human rights violations</li>
                    <li>• Lawyers - Refused to take cases</li>
                  </ul>
                </div>
                <p className="text-white leading-relaxed">
                  This is not an isolated case. This is systemic. Thousands of families. Thousands of children. 
                  All ghosted while institutions wear orange shirts and talk about reconciliation.
                </p>
              </div>
            </div>

            {/* The Question */}
            <div className="bg-red-900/30 p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-white">THE QUESTION</h3>
              <p className="text-lg leading-relaxed text-red-200">
                If Orange Shirt Day is about "Every Child Matters," why do the same leaders and organizations 
                promoting it refuse to help children who are actually suffering?
              </p>
              <p className="text-lg leading-relaxed text-red-200 mt-4">
                Why is it a photo op on September 30th and ghosting the other 364 days of the year?
              </p>
              <p className="text-lg leading-relaxed text-red-200 mt-4 font-bold">
                Because performative activism is easier than real action. Photo ops are easier than accountability. 
                Orange shirts are easier than actually protecting children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What's Missing */}
      <section className="py-16 px-4 bg-charcoal-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-amber-orange">WHAT'S MISSING: WHAT WE COULD NOT FIND</h2>

          <div className="space-y-6">
            <div className="bg-charcoal p-8 rounded-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold mb-4 text-white">No Evidence Found Of:</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <XCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span>Mark Carney involvement or financial connections</span>
                </li>
                <li className="flex gap-3">
                  <XCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span>Trudeau involvement or financial connections</span>
                </li>
                <li className="flex gap-3">
                  <XCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span>Major corporate ownership or control</span>
                </li>
                <li className="flex gap-3">
                  <XCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span>Hidden financial interests or conflicts of interest</span>
                </li>
                <li className="flex gap-3">
                  <XCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span>Corruption or fraud (in public records)</span>
                </li>
              </ul>
            </div>

            <div className="bg-charcoal p-8 rounded-lg border-l-4 border-amber-light">
              <h3 className="text-2xl font-bold mb-4 text-white">But What IS Clear:</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-light flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Limited Financial Transparency</span> - No detailed financial statements published</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-light flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Performative Activism</span> - Photo ops while families are ghosted</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-light flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Systemic Hypocrisy</span> - Leaders promoting reconciliation while refusing to help</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-light flex-shrink-0 mt-1" />
                  <span><span className="font-bold">No Real Action</span> - Orange Shirt Day exists but children still suffer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">THE BOTTOM LINE</h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Orange Shirt Day was created with good intentions - to honor residential school survivors and promote reconciliation.
            </p>
            
            <p>
              But it has become a tool for performative activism. A photo op. A way for leaders to appear to care 
              without actually doing anything.
            </p>

            <p className="text-2xl font-bold">
              While First Nations leaders wear orange shirts on September 30th, 
              they go back to ghosting families on October 1st.
            </p>

            <p>
              AFN refuses to help First Nations children. DYP/DPJ continues systemic abuse. 
              Politicians issue cease-and-desist warnings instead of helping constituents.
            </p>

            <p className="text-xl font-bold">
              EVERY CHILD MATTERS - except when it's inconvenient. Except when it requires real action. 
              Except when it means holding institutions accountable.
            </p>

            <p className="text-xl font-bold mt-8">
              BE A DAD. PROTECT YOUR CUBS AND YOUR QUEEN.
              <br />
              LOVE DAD
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
