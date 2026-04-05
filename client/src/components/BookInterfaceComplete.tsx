import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TheSilenceClock from './TheSilenceClock';
import { JukeboxPlayer } from './JukeboxPlayer';

interface BookInterfaceProps {
  onClose: () => void;
}

export function BookInterfaceComplete({ onClose }: BookInterfaceProps) {
  const { i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    // PAGE 0: COVER
    {
      title: 'COVER',
      left: (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-gray-800 to-black">
          <h1 className="text-5xl font-black text-white text-center mb-4">SUNDAY BLOODY SUNDAY</h1>
          <h2 className="text-3xl font-bold text-red-600 text-center mb-8">PART TWO</h2>
          <p className="text-xl text-white text-center max-w-md">Indigenous Justice Advocacy</p>
          <p className="text-sm text-gray-400 text-center mt-8">Since February 14, 2021</p>
        </div>
      ),
      right: <TheSilenceClock />,
    },

    // PAGE 1: HISTORICAL CONTEXT
    {
      title: 'PAGE 1: HISTORICAL CONTEXT',
      left: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Bloody Sunday: A Legacy of Violence</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Bloody Sunday refers to violent events where authorities killed unarmed civilians demanding justice. The most notable incident occurred in Derry, Northern Ireland in 1972, when British soldiers killed 13 unarmed civilians during a civil rights march.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            This historical tragedy represents systemic violence against marginalized communities. Today, Indigenous peoples in Canada face ongoing systemic violence and institutional failures that echo this legacy of oppression.
          </p>
          <div className="bg-red-50 p-4 rounded mt-4">
            <p className="text-xs font-bold text-red-900">2008 APOLOGY</p>
            <p className="text-xs text-red-800 mt-2">Prime Minister Harper apologized for residential schools: 150,000+ children taken, cultural genocide, intergenerational trauma.</p>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">But the System Continues</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            In 2025/2026, the same systems still fail Indigenous children. The 2008 apology promised change. It promised accountability. It promised "Never Again."
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Yet today, Indigenous families still experience:
          </p>
          <ul className="text-sm text-gray-700 space-y-2 ml-4">
            <li>✗ Systemic violence and neglect</li>
            <li>✗ Government abandonment</li>
            <li>✗ Institutional failures</li>
            <li>✗ Broken promises</li>
          </ul>
          <p className="text-xs font-bold text-red-600 mt-4">This is Part Two of that story.</p>
        </div>
      ),
    },

    // PAGE 2: FAMILY TRAUMA (2021 onwards)
    {
      title: 'PAGE 2: FAMILY TRAUMA BEGINS',
      left: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Since 2021: System Failure</h3>
          <p className="text-sm text-gray-700 leading-relaxed font-bold">
            An Indigenous family sought help after serious trauma:
          </p>
          <div className="bg-yellow-50 p-4 rounded space-y-2">
            <p className="text-sm font-bold text-yellow-900">INCIDENT</p>
            <p className="text-xs text-yellow-800">Teen stabbed 3 times. Major impacts on family. Serious trauma.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded space-y-2">
            <p className="text-sm font-bold text-blue-900">DPJ INVOLVEMENT</p>
            <p className="text-xs text-blue-800">Department of Youth Protection (DPJ) involved but withdrew January 2023. No adequate follow-up.</p>
          </div>
          <div className="bg-red-50 p-4 rounded space-y-2">
            <p className="text-sm font-bold text-red-900">CONSEQUENCES</p>
            <p className="text-xs text-red-800">Education lost. Mental health destroyed. Family abandoned.</p>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Jordan's Principle: Ignored</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Jordan's Principle guarantees "no-delay services" for First Nations children. It was created after Jordan River Anderson died waiting for government coordination.
          </p>
          <div className="bg-purple-50 p-4 rounded mt-4">
            <p className="text-xs font-bold text-purple-900">JORDAN'S PRINCIPLE</p>
            <p className="text-xs text-purple-800 mt-2">When there's a jurisdictional dispute over funding, the government that receives the request first must pay. No delays. No bureaucracy. Help the child NOW.</p>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            But for this Indigenous family, Jordan's Principle was ignored. Services were delayed. Coordination failed. A child suffered.
          </p>
          <p className="text-xs font-bold text-red-600 mt-4">⚠️ SYSTEMIC FAILURE DOCUMENTED</p>
        </div>
      ),
    },

    // PAGE 3: POLITICAL SILENCE - MNA
    {
      title: 'PAGE 3: POLITICAL SILENCE',
      left: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">MNA Response: Cease & Desist</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            The family asked their MNA (Member of National Assembly) for help on DPJ/IVAC files. Instead of assistance, they received a warning.
          </p>
          <div className="bg-red-50 p-4 rounded mt-4 space-y-2">
            <p className="text-sm font-bold text-red-900">NOVEMBER 19, 2023</p>
            <p className="text-xs text-red-800">MNA's office sent cease-and-desist warning:</p>
            <p className="text-xs text-red-800 font-bold mt-2">Stop all contact (in-person, phone, email, social media) or face criminal harassment complaint and police involvement.</p>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            This is what happens when a constituent asks for help from their elected representative.
          </p>
        </div>
      ),
      right: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Intimidation Instead of Service</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            A family in crisis reached out to their elected representative. Instead of:
          </p>
          <ul className="text-sm text-gray-700 space-y-1 ml-4">
            <li>✓ Listening to their concerns</li>
            <li>✓ Investigating the issue</li>
            <li>✓ Providing support</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            They received:
          </p>
          <ul className="text-sm text-red-700 space-y-1 ml-4 font-bold">
            <li>✗ Intimidation</li>
            <li>✗ Threats of police action</li>
            <li>✗ Silencing tactics</li>
          </ul>
          <p className="text-xs font-bold text-red-600 mt-4">
            This violates the duty of elected officials to serve their constituents.
          </p>
        </div>
      ),
    },

    // PAGE 4: PROVINCIAL GHOSTING
    {
      title: 'PAGE 4: PROVINCIAL GHOSTING',
      left: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Provincial Level: Complete Silence</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Multiple attempts to reach provincial level officials:
          </p>
          <div className="bg-gray-100 p-4 rounded space-y-3 mt-4">
            <div className="border-l-4 border-red-600 pl-3">
              <p className="text-xs font-bold text-gray-900">CAQ MINISTERS</p>
              <p className="text-xs text-gray-700">Ignored pleas for intervention</p>
            </div>
            <div className="border-l-4 border-red-600 pl-3">
              <p className="text-xs font-bold text-gray-900">PROVINCIAL OFFICIALS</p>
              <p className="text-xs text-gray-700">No response, no action</p>
            </div>
            <div className="border-l-4 border-red-600 pl-3">
              <p className="text-xs font-bold text-gray-900">CDPDJ (HUMAN RIGHTS COMMISSION)</p>
              <p className="text-xs text-gray-700">Refused investigation requests 2x</p>
            </div>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Pattern of Abandonment</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            When a family reaches out to their government for help, they expect:
          </p>
          <ul className="text-sm text-gray-700 space-y-1 ml-4">
            <li>✓ Response within reasonable time</li>
            <li>✓ Investigation of claims</li>
            <li>✓ Action to protect children</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            Instead, they found:
          </p>
          <ul className="text-sm text-red-700 space-y-1 ml-4 font-bold">
            <li>✗ Silence</li>
            <li>✗ Refusals</li>
            <li>✗ Abandonment</li>
          </ul>
          <p className="text-xs font-bold text-red-600 mt-4">
            This is not how government should treat Indigenous families seeking justice.
          </p>
        </div>
      ),
    },

    // PAGE 5: FEDERAL SILENCE
    {
      title: 'PAGE 5: FEDERAL SILENCE',
      left: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Federal Level: Same Silence</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Escalated to federal MPs. Same result: silence.
          </p>
          <div className="bg-gray-100 p-4 rounded space-y-3 mt-4">
            <div className="border-l-4 border-red-600 pl-3">
              <p className="text-xs font-bold text-gray-900">FEDERAL MPs</p>
              <p className="text-xs text-gray-700">No response, no action</p>
            </div>
            <div className="border-l-4 border-red-600 pl-3">
              <p className="text-xs font-bold text-gray-900">PROTECTEUR DU CITOYEN</p>
              <p className="text-xs text-gray-700">Claims limits on powers</p>
            </div>
            <div className="border-l-4 border-red-600 pl-3">
              <p className="text-xs font-bold text-gray-900">COMMISSAIRE À L'ÉTHIQUE</p>
              <p className="text-xs text-gray-700">No real change for DPJ decisions</p>
            </div>
            <div className="border-l-4 border-red-600 pl-3">
              <p className="text-xs font-bold text-gray-900">CHRC (REF: 100021349)</p>
              <p className="text-xs text-gray-700">Limited authority acknowledged</p>
            </div>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Every Level Failed</h3>
          <p className="text-sm text-gray-700 leading-relaxed font-bold">
            From local to federal, the response was the same:
          </p>
          <div className="space-y-3 mt-4">
            <div className="bg-red-50 p-3 rounded">
              <p className="text-xs font-bold text-red-900">MUNICIPAL LEVEL</p>
              <p className="text-xs text-red-800">No action</p>
            </div>
            <div className="bg-orange-50 p-3 rounded">
              <p className="text-xs font-bold text-orange-900">PROVINCIAL LEVEL</p>
              <p className="text-xs text-orange-800">Silence & refusals</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded">
              <p className="text-xs font-bold text-yellow-900">FEDERAL LEVEL</p>
              <p className="text-xs text-yellow-800">Same silence</p>
            </div>
          </div>
          <p className="text-xs font-bold text-red-600 mt-4">
            ⚠️ SYSTEMIC FAILURE AT EVERY LEVEL
          </p>
        </div>
      ),
    },

    // PAGE 6: SYSTEMIC FAILURES DOCUMENTED
    {
      title: 'PAGE 6: SYSTEMIC FAILURES DOCUMENTED',
      left: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Nunavik Systemic Inquiry (2025)</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            The CDPDJ's 2025 Nunavik systemic inquiry reveals the truth:
          </p>
          <div className="bg-red-50 p-4 rounded mt-4 space-y-2">
            <p className="text-xs font-bold text-red-900">FINDINGS</p>
            <ul className="text-xs text-red-800 space-y-1 ml-4">
              <li>• Under-resourced systems</li>
              <li>• Culturally inappropriate interventions</li>
              <li>• Harm to Indigenous kids' health</li>
              <li>• Damage to child development</li>
              <li>• Chronic failures across the board</li>
            </ul>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Legal Violations</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            This family's experience breaks multiple laws:
          </p>
          <div className="bg-purple-50 p-4 rounded mt-4 space-y-2">
            <p className="text-xs font-bold text-purple-900">VIOLATIONS</p>
            <ul className="text-xs text-purple-800 space-y-1 ml-4">
              <li>✗ Article 23 UNCRC (child welfare)</li>
              <li>✗ Quebec Charter art. 39 (equality)</li>
              <li>✗ Reconciliation spirit (TRC)</li>
              <li>✗ Jordan's Principle (no-delay services)</li>
              <li>✗ Constitutional duty to consult</li>
            </ul>
          </div>
          <p className="text-xs font-bold text-red-600 mt-4">
            5+ YEARS OF DOCUMENTED VIOLATIONS
          </p>
        </div>
      ),
    },

    // PAGE 7: LEGAL RIGHTS & CONSTITUTIONAL PROTECTION
    {
      title: 'PAGE 7: LEGAL RIGHTS & PROTECTION',
      left: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Constitutional Protection</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Public posts calling for accountability are protected by law:
          </p>
          <div className="bg-blue-50 p-4 rounded mt-4 space-y-2">
            <p className="text-xs font-bold text-blue-900">CANADIAN CHARTER</p>
            <p className="text-xs text-blue-800">Section 2(b) - Freedom of Expression</p>
            <p className="text-xs text-blue-800 mt-2">Grant v Torstar 2009 CSC 61: Responsible communication on public interest is protected.</p>
          </div>
          <div className="bg-green-50 p-4 rounded mt-4 space-y-2">
            <p className="text-xs font-bold text-green-900">INDIGENOUS RIGHTS</p>
            <p className="text-xs text-green-800">2024 CSC 5: Indigenous rights jurisprudence protects advocacy.</p>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Right to Demand Accountability</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            This advocacy is protected because it:
          </p>
          <ul className="text-sm text-gray-700 space-y-2 ml-4">
            <li>✓ Addresses public interest issues</li>
            <li>✓ Calls for government accountability</li>
            <li>✓ Protects Indigenous rights</li>
            <li>✓ Demands justice for children</li>
            <li>✓ Contains no threats or violence</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            The right to speak about government failures is fundamental to democracy.
          </p>
          <p className="text-xs font-bold text-green-600 mt-4">
            ✓ LEGALLY PROTECTED EXPRESSION
          </p>
        </div>
      ),
    },

    // PAGE 8: CHILDREN'S EDUCATION
    {
      title: 'PAGE 8: CHILDREN\'S EDUCATION',
      left: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Know Your Rights</h3>
          <p className="text-sm text-gray-700 leading-relaxed font-bold">
            Every child deserves to know:
          </p>
          <div className="bg-blue-50 p-4 rounded mt-4 space-y-3">
            <div>
              <p className="text-xs font-bold text-blue-900">CANADIAN CONSTITUTION</p>
              <p className="text-xs text-blue-800">Protects your rights and freedoms</p>
            </div>
            <div>
              <p className="text-xs font-bold text-blue-900">CANADIAN CHARTER</p>
              <p className="text-xs text-blue-800">Guarantees equality and freedom</p>
            </div>
            <div>
              <p className="text-xs font-bold text-blue-900">SUPREME COURT</p>
              <p className="text-xs text-blue-800">Interprets laws to protect you</p>
            </div>
            <div>
              <p className="text-xs font-bold text-blue-900">UNITED NATIONS</p>
              <p className="text-xs text-blue-800">Convention on Rights of the Child</p>
            </div>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Your Rights Matter</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            You have the right to:
          </p>
          <ul className="text-sm text-gray-700 space-y-2 ml-4">
            <li>✓ Safety and protection</li>
            <li>✓ Education</li>
            <li>✓ Health care</li>
            <li>✓ Family support</li>
            <li>✓ Freedom of expression</li>
            <li>✓ Participate in decisions affecting you</li>
            <li>✓ Access to justice</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            When government fails to protect these rights, you have the right to speak up and demand change.
          </p>
        </div>
      ),
    },

    // PAGE 9: POLITICAL ACCOUNTABILITY
    {
      title: 'PAGE 9: POLITICAL ACCOUNTABILITY',
      left: (
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/caricature-water-crisis-1-CZc7NH2hcC66YhQoWLkmC8.webp" 
          alt="Political Hypocrisy" 
          className="w-full h-full object-cover"
        />
      ),
      right: (
        <div className="flex flex-col justify-center h-full space-y-4 p-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Hypocrisy Exposed</h3>
          <p className="text-sm text-gray-700 leading-relaxed font-bold">
            Politicians preach "Eat Healthy!" while:
          </p>
          <div className="bg-red-50 p-4 rounded mt-4 space-y-2">
            <p className="text-xs text-red-800">✗ Rez communities have NO CLEAN WATER for DECADES</p>
            <p className="text-xs text-red-800">✗ Kids drink contaminated water daily</p>
            <p className="text-xs text-red-800">✗ Health crisis ignored by government</p>
            <p className="text-xs text-red-800">✗ Billions spent elsewhere, nothing for Rez</p>
          </div>
          <p className="text-xs font-bold text-red-600 mt-4">
            ⚠️ GOVERNMENT HYPOCRISY EXPOSED ⚠️
          </p>
        </div>
      ),
    },

    // PAGE 10: GOVERNMENT SPENDING PRIORITIES
    {
      title: 'PAGE 10: SPENDING PRIORITIES',
      left: (
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/caricature-water-crisis-2-9VaZcD94aE6Cgw9VTMV7nz.webp" 
          alt="Money Tree" 
          className="w-full h-full object-cover"
        />
      ),
      right: (
        <div className="flex flex-col justify-center h-full space-y-4 p-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Billions For Everyone But Rez</h3>
          <p className="text-sm text-gray-700 leading-relaxed font-bold">
            Government spending flows to:
          </p>
          <div className="bg-green-50 p-4 rounded mt-4 space-y-2">
            <p className="text-xs text-green-800">✈️ Overseas aid - BILLIONS</p>
            <p className="text-xs text-green-800">🏢 Corporate friends (Brookfield) - BILLIONS</p>
            <p className="text-xs text-green-800">🏠 Wealthy neighborhoods - BILLIONS</p>
            <p className="text-xs text-green-800 font-bold">❌ Rez gets: NOTHING</p>
          </div>
          <p className="text-xs font-bold text-red-600 mt-4">
            20+ YEARS OF BROKEN PROMISES
          </p>
        </div>
      ),
    },

    // PAGE 11: CALL TO ACTION
    {
      title: 'PAGE 11: CALL TO ACTION',
      left: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">What Can You Do?</h3>
          <div className="space-y-3">
            <div className="bg-blue-50 p-3 rounded">
              <p className="text-xs font-bold text-blue-900">1. DONATE</p>
              <p className="text-xs text-blue-800">Support legal defense and advocacy</p>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <p className="text-xs font-bold text-green-900">2. SHARE</p>
              <p className="text-xs text-green-800">Tell others about this injustice</p>
            </div>
            <div className="bg-purple-50 p-3 rounded">
              <p className="text-xs font-bold text-purple-900">3. CONTACT OFFICIALS</p>
              <p className="text-xs text-purple-800">Demand accountability from your representatives</p>
            </div>
            <div className="bg-red-50 p-3 rounded">
              <p className="text-xs font-bold text-red-900">4. VOTE</p>
              <p className="text-xs text-red-800">Support candidates who care about Indigenous rights</p>
            </div>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Justice Requires Action</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            No threats. No intimidation. Only demanding accountability to protect other Indigenous families.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            Victims today deserve better than "sorry" without change.
          </p>
          <div className="bg-yellow-50 p-4 rounded mt-4 space-y-2">
            <p className="text-xs font-bold text-yellow-900">OPEN TO PUBLIC DEBATE</p>
            <p className="text-xs text-yellow-800">Sources and emails available. Tag/share if you've been ghosted too.</p>
          </div>
          <p className="text-xs font-bold text-red-600 mt-4">
            WHEN WILL THERE BE REAL ACTION?
          </p>
        </div>
      ),
    },

    // PAGE 12: BACK COVER / CONTACT
    {
      title: 'BACK COVER',
      left: (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Contact Us</h3>
          <a 
            href="mailto:contact@justiceforbarran.com" 
            className="text-blue-600 hover:underline font-semibold text-lg"
          >
            contact@justiceforbarran.com
          </a>
          <p className="text-sm text-gray-600">justiceforbarran.com</p>
          <div className="mt-6 space-y-2">
            <p className="text-xs font-bold text-gray-700">Follow Us</p>
            <p className="text-xs text-gray-600">Twitter • Instagram • Facebook</p>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Support Justice</h3>
          <p className="text-sm text-gray-700 text-center">
            Every donation funds legal defense and systemic change.
          </p>
          <div className="bg-green-50 p-4 rounded text-center mt-4">
            <p className="text-xs font-bold text-green-900">DONATE NOW</p>
            <p className="text-xs text-green-800 mt-2">Interac e-Transfer</p>
            <p className="text-xs text-green-800">Credit Cards</p>
            <p className="text-xs text-green-800">QR Codes</p>
          </div>
          <p className="text-xs text-gray-600 mt-4">© 2026 Justice for Barran</p>
        </div>
      ),
    },
  ];

  const canGoPrev = currentPage > 0;
  const canGoNext = currentPage < pages.length - 1;

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-black py-8 px-4">
      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold"
      >
        ✕ Close
      </button>

      {/* BOOK CONTAINER */}
      <div className="max-w-6xl mx-auto">
        {/* PAGE TITLE */}
        <h2 className="text-center text-3xl font-black text-white mb-8">
          {pages[currentPage].title}
        </h2>

        {/* DOUBLE-PAGE SPREAD */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* LEFT PAGE */}
          <div className="p-8 bg-white border-r-4 border-gray-300 min-h-96 flex items-center justify-center">
            {pages[currentPage].left}
          </div>

          {/* RIGHT PAGE */}
          <div className="p-8 bg-gray-50 min-h-96 flex items-center justify-center">
            {pages[currentPage].right}
          </div>
        </div>

        {/* PAGE COUNTER */}
        <div className="text-center mb-8">
          <p className="text-white text-lg font-semibold">
            Page {currentPage + 1} of {pages.length}
          </p>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={!canGoPrev}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
              canGoPrev
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={20} />
            {i18n.language === 'fr' ? 'Précédent' : i18n.language === 'ht' ? 'Anvan' : 'Previous'}
          </button>

          <button
            onClick={() => setCurrentPage(Math.min(pages.length - 1, currentPage + 1))}
            disabled={!canGoNext}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
              canGoNext
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {i18n.language === 'fr' ? 'Suivant' : i18n.language === 'ht' ? 'Apre' : 'Next'}
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
