import { InteractiveNewspaper } from '@/components/InteractiveNewspaper';
import { Link } from 'wouter';
import { SocialShareButtons } from '@/components/SocialShareButtons';

export default function Newspaper() {
  const pages = [
    {
      id: 1,
      title: "Front Page",
      columns: 2,
      content: (
        <div className="space-y-6">
          {/* Main Story */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-2 text-black">BREAKING NEWS</p>
            <h2 className="text-3xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              Five Years of Systemic Failure: Justice for Barran
            </h2>
            <p className="text-sm italic mb-3 text-gray-700">
              Indigenous child victim of attempted murder denied psychological services, justice system fails at every level
            </p>
            <p className="text-sm leading-relaxed mb-3">
              <span className="font-bold">QUEBEC, CANADA</span> — For five years, a First Nations youth has fought for justice following a near-fatal stabbing attack. Despite promises of protection and healing, systemic failures at every government level have compounded the trauma.
            </p>
            <p className="text-sm leading-relaxed mb-3">
              The case exposes deep institutional racism, political intimidation, and the systematic denial of services guaranteed under Jordan's Principle—a federal legal obligation to ensure Indigenous children receive equal services.
            </p>
            <p className="text-sm leading-relaxed font-bold">
              Read the full story: This newspaper documents the timeline of failure, the officials who ghosted, and the fight for accountability that continues today.
            </p>
          </div>

          {/* Key Facts Box */}
          <div className="bg-black text-white p-4 border-2 border-black">
            <p className="text-xs font-bold tracking-widest uppercase mb-3">KEY FACTS</p>
            <ul className="space-y-2 text-xs leading-relaxed">
              <li><span className="font-bold">Feb 27, 2021:</span> Attempted murder attack</li>
              <li><span className="font-bold">2021-2023:</span> DPJ involvement, then withdrawal</li>
              <li><span className="font-bold">5 Years:</span> Denial of psychological services</li>
              <li><span className="font-bold">All Levels:</span> Federal, provincial, municipal silence</li>
              <li><span className="font-bold">March 27, 2026:</span> UN complaint filed</li>
              <li><span className="font-bold">March 28, 2026:</span> 20th birthday — justice still pending</li>
            </ul>
          </div>

          {/* Secondary Stories */}
          <div className="border-t-2 border-black pt-4">
            <p className="text-xs font-bold tracking-widest uppercase mb-2 text-black">MULTIMEDIA</p>
            <h3 className="text-xl font-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              French Podcast Series
            </h3>
            <p className="text-xs leading-relaxed">
              Five-episode podcast in French documenting systemic failures and the fight for Indigenous justice. With transcripts in both French and English.
            </p>
          </div>

          <div className="border-t-2 border-black pt-4">
            <p className="text-xs font-bold tracking-widest uppercase mb-2 text-black">PETITION</p>
            <h3 className="text-xl font-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Sign the Petition
            </h3>
            <p className="text-xs leading-relaxed">
              10,847+ signatures demanding accountability and justice. Add your voice to the movement.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "In Memoriam: Human Rights Champions",
      columns: 2,
      content: (
        <div className="space-y-4">
          <p className="text-xs leading-relaxed mb-4">
            Throughout history, courageous individuals have stood against injustice and systemic oppression. These activists—many of whom faced imprisonment, violence, and death—refused to accept the status quo. Their struggles paved the way for progress.
          </p>

          <div className="border-l-4 border-black pl-4">
            <h3 className="font-black text-lg" style={{ fontFamily: 'Georgia, serif' }}>Martin Luther King Jr.</h3>
            <p className="text-xs italic mb-2">1929 - 1968 | Civil Rights Leader</p>
            <p className="text-xs leading-relaxed">
              Led the Civil Rights Movement through nonviolent protest. Delivered the iconic "I Have a Dream" speech. Won Nobel Peace Prize. His legacy continues to inspire activists fighting against systemic oppression.
            </p>
          </div>

          <div className="border-l-4 border-black pl-4">
            <h3 className="font-black text-lg" style={{ fontFamily: 'Georgia, serif' }}>Nelson Mandela</h3>
            <p className="text-xs italic mb-2">1918 - 2013 | Anti-Apartheid Revolutionary</p>
            <p className="text-xs leading-relaxed">
              Spent 27 years imprisoned for resisting racial segregation. Became first Black president of South Africa. Established Truth and Reconciliation Commission. His legacy teaches that forgiveness and reconciliation are paths to justice.
            </p>
          </div>

          <div className="border-l-4 border-black pl-4">
            <h3 className="font-black text-lg" style={{ fontFamily: 'Georgia, serif' }}>Viola Desmond</h3>
            <p className="text-xs italic mb-2">1914 - 1965 | Civil Rights Pioneer</p>
            <p className="text-xs leading-relaxed">
              First Black Canadian woman arrested for civil disobedience. Her refusal to leave a segregated theater sparked Canada's civil rights movement. Now honored on the Canadian $10 bill.
            </p>
          </div>

          <div className="border-l-4 border-black pl-4">
            <h3 className="font-black text-lg" style={{ fontFamily: 'Georgia, serif' }}>Harriet Tubman</h3>
            <p className="text-xs italic mb-2">1820 - 1913 | Freedom Fighter</p>
            <p className="text-xs leading-relaxed">
              Escaped slavery and led 70+ enslaved people to freedom. Served as "conductor" on Underground Railroad. Never lost a passenger—a perfect safety record. Her courage transformed lives.
            </p>
          </div>

          <p className="text-xs font-bold italic border-t-2 border-black pt-4 mt-4">
            These heroes remind us that individual acts of resistance, when guided by unwavering commitment to justice, can transform societies. Their legacy is a living call to action.
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: "Fallen Soldiers: Indigenous Warriors",
      columns: 2,
      content: (
        <div className="space-y-4">
          <p className="text-xs leading-relaxed mb-4">
            Thousands of Indigenous Canadians have served in the Canadian Armed Forces, fighting for freedom abroad while facing discrimination at home. Their sacrifice remains largely unrecognized.
          </p>

          <div className="border-l-4 border-black pl-4">
            <h3 className="font-black text-lg" style={{ fontFamily: 'Georgia, serif' }}>Tommy Prince</h3>
            <p className="text-xs italic mb-2">1915 - 1977 | Most Decorated Indigenous Soldier</p>
            <p className="text-xs leading-relaxed">
              Served in WWII and Korean War with multiple medals for bravery. Fought for freedom abroad while his people were denied freedom at home. His legacy challenges us to ensure soldiers receive the rights they fought for.
            </p>
          </div>

          <div className="border-l-4 border-black pl-4">
            <h3 className="font-black text-lg" style={{ fontFamily: 'Georgia, serif' }}>Henry Norwest</h3>
            <p className="text-xs italic mb-2">1884 - 1918 | WWI Sniper</p>
            <p className="text-xs leading-relaxed">
              115 confirmed kills—one of WWI's deadliest snipers. His exceptional marksmanship saved countless Canadian lives. Yet he returned to a country that denied his people basic rights.
            </p>
          </div>

          <div className="border-l-4 border-black pl-4">
            <h3 className="font-black text-lg" style={{ fontFamily: 'Georgia, serif' }}>Elijah Harper</h3>
            <p className="text-xs italic mb-2">1949 - 2013 | Soldier & Political Leader</p>
            <p className="text-xs leading-relaxed">
              After military service, became National Chief of AFN. Dedicated his life to fighting for Indigenous sovereignty and self-determination. His legacy bridges military service with political activism.
            </p>
          </div>

          <div className="bg-gray-100 p-3 border-2 border-black mt-4">
            <p className="text-xs font-bold mb-2">THE UNFINISHED FIGHT</p>
            <p className="text-xs leading-relaxed">
              Indigenous soldiers fought for freedom, democracy, and human rights. They believed their sacrifice would earn respect and recognition. Instead, they came home to systemic discrimination. Today, we continue their fight by demanding justice for Barran and all Indigenous children.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "How You Can Help",
      columns: 1,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-4 border-black p-4">
              <h3 className="text-xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                💰 Donate
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                Support legal action and healing services through e-Transfer donations. Every contribution helps fight for justice.
              </p>
              <Link href="/donate" className="text-black font-bold hover:underline text-sm">
                Donate now →
              </Link>
            </div>

            <div className="border-4 border-black p-4">
              <h3 className="text-xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                ✍️ Sign Petition
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                Join 10,847+ supporters demanding accountability from officials who ghosted Barran's family.
              </p>
              <Link href="/petition" className="text-black font-bold hover:underline text-sm">
                Sign petition →
              </Link>
            </div>

            <div className="border-4 border-black p-4">
              <h3 className="text-xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                📣 Share Story
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                Amplify this story on social media. Help demand accountability from elected officials.
              </p>
              <p className="text-xs font-bold text-gray-700">Use buttons below to share</p>
            </div>

            <div className="border-4 border-black p-4">
              <h3 className="text-xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                📚 Learn More
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                Read resources on children's rights, Indigenous rights, and how to document systemic failures.
              </p>
              <Link href="/resources" className="text-black font-bold hover:underline text-sm">
                View resources →
              </Link>
            </div>
          </div>

          <div className="border-4 border-black p-6 bg-gray-50">
            <h3 className="text-2xl font-black mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Share This Story
            </h3>
            <div className="mb-4">
              <SocialShareButtons
                title="Justice for Barran - Interactive Newspaper"
                text="Read the complete story of systemic failure and the fight for Indigenous justice. Five years of denial. UN complaint filed. Help demand accountability."
                hashtags={['JusticeForBarran', 'IndigenousRights', 'EveryChildMatters']}
                showLabel={false}
                variant="vertical"
              />
            </div>
          </div>

          <div className="border-4 border-black p-6 bg-black text-white">
            <h3 className="text-2xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              Remember Their Legacy
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              The human rights activists and Indigenous soldiers honored in this newspaper fought for freedom and justice. Their sacrifice demands our action. By supporting Barran's fight for justice, we honor their legacy and ensure that no more Indigenous children suffer systemic harm.
            </p>
            <p className="text-sm font-bold">
              Justice for Barran is justice for all. Their fight was our fight. Our fight is their legacy.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <InteractiveNewspaper
      pages={pages}
      masthead="JUSTICE FOR BARRAN"
      tagline="A Newspaper of Indigenous Rights & Systemic Accountability"
      date="MARCH 28, 2026 — VOLUME 1, ISSUE 3"
    />
  );
}
