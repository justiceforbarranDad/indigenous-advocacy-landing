import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';
import TheSilenceClock from './TheSilenceClock';
import { JukeboxPlayer } from './JukeboxPlayer';

interface BookInterfaceProps {
  onClose: () => void;
}

// Radio Player Component
function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col justify-center h-full bg-gradient-to-b from-purple-900 to-purple-800 p-6 rounded-lg">
      <div className="text-center">
        <Volume2 className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Indigenous Music Radio</h3>
        <p className="text-sm text-purple-200 mb-6">Royalty-free Native music from Pixabay</p>
        
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`px-6 py-3 rounded-lg font-bold text-white transition-all ${
            isPlaying 
              ? 'bg-red-600 hover:bg-red-700' 
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isPlaying ? '⏸ Pause' : '▶ Play Music'}
        </button>

        {isPlaying && (
          <div className="mt-6 space-y-2">
            <div className="flex justify-center gap-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-yellow-300 rounded-full animate-pulse"
                  style={{
                    height: `${20 + Math.random() * 30}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
            <p className="text-xs text-purple-200 mt-4">Now playing: Indigenous music stream</p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-purple-600">
          <p className="text-xs text-purple-300">
            Music by Pixabay<br />
            Royalty-free • No copyright issues
          </p>
        </div>
      </div>
    </div>
  );
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
          <h1 className="text-5xl font-black text-yellow-300 text-center mb-4">SUNDAY BLOODY SUNDAY</h1>
          <h2 className="text-3xl font-bold text-yellow-300 text-center mb-8">PART TWO</h2>
          <p className="text-xl text-yellow-300 text-center max-w-md">Indigenous Justice Advocacy</p>
          <p className="text-sm text-yellow-300 text-center mt-8">Since February 14, 2021</p>
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

    // PAGE 2: PODCAST PLAYER + ARTICLE
    {
      title: 'PAGE 2: LISTEN TO THE PODCAST',
      left: <JukeboxPlayer />,
      right: (
        <div className="flex flex-col justify-center h-full space-y-4 overflow-y-auto">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Podcast: Voices of Justice</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Listen to six powerful episodes documenting the systemic failures, political silence, and ongoing fight for Indigenous justice.
          </p>
          <div className="bg-blue-50 p-4 rounded space-y-3">
            <p className="text-xs font-bold text-blue-900">EPISODE TOPICS:</p>
            <ul className="text-xs text-blue-800 space-y-2">
              <li>• The Silence of Politicians</li>
              <li>• System Failure - DPJ Accountability</li>
              <li>• 1873 Days of Injustice</li>
              <li>• Indigenous Rights Under Attack</li>
              <li>• Justice Delayed is Justice Denied</li>
              <li>• Call to Action: Your Role in Change</li>
            </ul>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            Available in English, Québécois French, and Kreyòl. Each episode includes full transcripts and references.
          </p>
        </div>
      ),
    },

    // PAGE 3: ARTICLE + RADIO PLAYER
    {
      title: 'PAGE 3: INDIGENOUS MUSIC RADIO',
      left: (
        <div className="flex flex-col justify-center h-full space-y-4 overflow-y-auto">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Music as Resistance</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Indigenous music carries the voices of ancestors, the resilience of survivors, and the hope for a better future. Listen as you read.
          </p>
          <div className="bg-green-50 p-4 rounded space-y-2">
            <p className="text-xs font-bold text-green-900">WHY MUSIC MATTERS:</p>
            <p className="text-xs text-green-800">Music is a form of resistance. It heals trauma. It connects us to our roots. It amplifies our voices when institutions silence us.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded space-y-2">
            <p className="text-xs font-bold text-purple-900">ROYALTY-FREE & LEGAL:</p>
            <p className="text-xs text-purple-800">All music is sourced from Pixabay with no copyright restrictions. Support Indigenous artists and creators.</p>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            Play the radio on the right while reading. Let the music accompany your journey through this story of justice and resilience.
          </p>
        </div>
      ),
      right: <RadioPlayer />,
    },

    // PAGE 4: FAMILY TRAUMA BEGINS
    {
      title: 'PAGE 4: FAMILY TRAUMA BEGINS',
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
          <p className="text-xs text-gray-600 mt-4">
            But for this Indigenous family, Jordan's Principle was ignored. Services were delayed. Coordination failed. A child suffered.
          </p>
        </div>
      ),
    },

    // PAGE 5: POLITICAL SILENCE
    {
      title: 'PAGE 5: POLITICAL SILENCE',
      left: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">MNA Cease-and-Desist</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            When seeking help from elected officials, a constituent received a cease-and-desist warning instead of assistance.
          </p>
          <div className="bg-red-50 p-4 rounded space-y-2">
            <p className="text-sm font-bold text-red-900">NOVEMBER 19, 2023</p>
            <p className="text-xs text-red-800 mt-2">MNA Céline Haytayan's office sent warning: Stop all contact (in-person, phone, email, social media) or face criminal harassment complaint and police involvement.</p>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            This is what happens when a constituent asks for help. Intimidation. Silencing. Threats instead of solutions.
          </p>
        </div>
      ),
      right: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Provincial Ghosting</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Multiple CAQ ministers and provincial officials ignored pleas for intervention and inquiry.
          </p>
          <div className="bg-orange-50 p-4 rounded space-y-2">
            <p className="text-sm font-bold text-orange-900">PROVINCIAL LEVEL</p>
            <ul className="text-xs text-orange-800 space-y-1 mt-2">
              <li>• CAQ ministers: No response</li>
              <li>• CDPDJ: Refused investigation 2x</li>
              <li>• Provincial offices: Complete silence</li>
            </ul>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            When local officials fail, you expect provincial support. Instead: more silence, more ghosting.
          </p>
        </div>
      ),
    },

    // PAGE 6: FEDERAL SILENCE
    {
      title: 'PAGE 6: FEDERAL SILENCE',
      left: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">MPs Ignored Pleas</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Escalated to federal MPs. Same silence. No action. No response.
          </p>
          <div className="bg-gray-50 p-4 rounded space-y-2">
            <p className="text-sm font-bold text-gray-900">FEDERAL BODIES CONTACTED:</p>
            <ul className="text-xs text-gray-700 space-y-1 mt-2">
              <li>• Protecteur du citoyen: Limited powers</li>
              <li>• Commissaire à l'éthique: No jurisdiction</li>
              <li>• CHRC Ref 100021349: Limits acknowledged</li>
            </ul>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Systemic Failures Documented</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            CDPDJ's 2025 Nunavik systemic inquiry shows chronic failures affecting Indigenous children.
          </p>
          <div className="bg-red-50 p-4 rounded space-y-2">
            <p className="text-sm font-bold text-red-900">DOCUMENTED VIOLATIONS:</p>
            <ul className="text-xs text-red-800 space-y-1 mt-2">
              <li>• Under-resourced services</li>
              <li>• Culturally inappropriate interventions</li>
              <li>• Harm to children's health/development</li>
              <li>• Article 23 UNCRC violations</li>
              <li>• Quebec Charter art. 39 violations</li>
            </ul>
          </div>
        </div>
      ),
    },

    // PAGE 7: LEGAL RIGHTS
    {
      title: 'PAGE 7: LEGAL RIGHTS & CONSTITUTION',
      left: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Protected Expression</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Public posts calling for accountability are protected by law.
          </p>
          <div className="bg-green-50 p-4 rounded space-y-2">
            <p className="text-sm font-bold text-green-900">CHARTER s.2(b)</p>
            <p className="text-xs text-green-800 mt-2">Freedom of expression. Responsible communication on public interest. Grant v Torstar 2009 CSC 61.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded space-y-2">
            <p className="text-sm font-bold text-blue-900">INDIGENOUS RIGHTS</p>
            <p className="text-xs text-blue-800 mt-2">2024 CSC 5 affirms Indigenous rights to advocate for justice and self-determination.</p>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Children's Rights</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Every child has rights. Know them. Teach them. Defend them.
          </p>
          <div className="bg-purple-50 p-4 rounded space-y-2">
            <p className="text-sm font-bold text-purple-900">UNCRC ARTICLE 3</p>
            <p className="text-xs text-purple-800 mt-2">Best interests of the child shall be a primary consideration in all actions concerning children.</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded space-y-2">
            <p className="text-sm font-bold text-yellow-900">CANADIAN CONSTITUTION</p>
            <p className="text-xs text-yellow-800 mt-2">Section 35: Recognition of Aboriginal peoples' rights. Section 15: Equality rights for all.</p>
          </div>
        </div>
      ),
    },

    // PAGE 8: CALL TO ACTION
    {
      title: 'PAGE 8: CALL TO ACTION',
      left: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">How You Can Help</h3>
          <div className="bg-red-50 p-4 rounded space-y-2">
            <p className="text-sm font-bold text-red-900">DONATE</p>
            <p className="text-xs text-red-800 mt-2">100% of donations go directly to legal advocacy. Every dollar supports justice for Barran and other Indigenous families.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded space-y-2">
            <p className="text-sm font-bold text-blue-900">SHARE</p>
            <p className="text-xs text-blue-800 mt-2">Share this story. Tag elected officials. Demand accountability. Use #JusticeForBarran #SundayBloodySunday</p>
          </div>
          <div className="bg-green-50 p-4 rounded space-y-2">
            <p className="text-sm font-bold text-green-900">VOTE</p>
            <p className="text-xs text-green-800 mt-2">Vote for leaders who support Indigenous rights, child protection, and government accountability.</p>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Justice Requires Action</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Truth and Reconciliation was not a conclusion. It was a beginning that governments chose to ignore.
          </p>
          <div className="bg-gray-50 p-4 rounded space-y-2">
            <p className="text-sm font-bold text-gray-900">WHAT WE DEMAND:</p>
            <ul className="text-xs text-gray-700 space-y-1 mt-2">
              <li>✓ Independent inquiry into DPJ failures</li>
              <li>✓ Jordan's Principle application</li>
              <li>✓ Real support for Indigenous families</li>
              <li>✓ Government accountability</li>
              <li>✓ Systemic change</li>
            </ul>
          </div>
          <p className="text-xs font-bold text-red-600 mt-4">
            The reckoning is coming. History will judge.
          </p>
        </div>
      ),
    },

    // PAGE 9: BACK COVER
    {
      title: 'BACK COVER',
      left: (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-black to-gray-800 p-6">
          <h2 className="text-3xl font-black text-yellow-300 text-center mb-6">JUSTICE FOR BARRAN</h2>
          <p className="text-sm text-yellow-300 text-center mb-8 max-w-sm">
            A story of systemic failure, political silence, and the ongoing fight for Indigenous justice in Canada.
          </p>
          <div className="border-t border-yellow-300 pt-6 w-full text-center">
            <p className="text-xs text-yellow-300 mb-4">📧 Contact: admin@justiceforbarran.com</p>
            <p className="text-xs text-yellow-300 mb-4">🌐 Website: www.indigenousadv-ahjdmzis.manus.space</p>
            <p className="text-xs text-yellow-300">📱 Share: #JusticeForBarran #SundayBloodySunday</p>
          </div>
        </div>
      ),
      right: (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-gray-800 to-black p-6">
          <h3 className="text-2xl font-black text-yellow-300 text-center mb-6">SUPPORT THE CAUSE</h3>
          <div className="space-y-4 w-full">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              💰 Donate Now
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              📢 Share Story
            </button>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              ✍️ Sign Petition
            </button>
          </div>
          <p className="text-xs text-yellow-300 text-center mt-8">
            Every voice matters. Every action counts. Together, we demand justice.
          </p>
        </div>
      ),
    },
  ];

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentPageData = pages[currentPage];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50 p-4">
      {/* Header */}
      <div className="w-full max-w-6xl mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">{currentPageData.title}</h2>
        <button
          onClick={onClose}
          className="text-white hover:text-red-500 text-2xl font-bold"
        >
          ✕ Close
        </button>
      </div>

      {/* Book Pages */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-2xl overflow-hidden flex">
        {/* Left Page */}
        <div className="w-1/2 p-8 overflow-y-auto max-h-96 bg-gradient-to-br from-gray-50 to-white">
          {currentPageData.left}
        </div>

        {/* Right Page */}
        <div className="w-1/2 p-8 overflow-y-auto max-h-96 bg-white border-l border-gray-200">
          {currentPageData.right}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-6xl mt-4 flex justify-between items-center">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 0}
          className="flex items-center gap-2 px-6 py-2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white font-bold rounded transition-colors"
        >
          <ChevronLeft size={20} /> Précédent
        </button>

        <span className="text-white font-bold">
          Page {currentPage + 1} of {pages.length}
        </span>

        <button
          onClick={goToNextPage}
          disabled={currentPage === pages.length - 1}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold rounded transition-colors"
        >
          Suivant <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
