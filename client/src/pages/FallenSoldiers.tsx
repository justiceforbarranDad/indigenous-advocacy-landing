import { SoldierMemorial, NewspaperHeader } from '@/components/NewspaperComponents';

export default function FallenSoldiers() {
  const soldiers = [
    {
      name: "Tommy Prince",
      rank: "Major",
      birthYear: 1915,
      deathYear: 1977,
      unit: "1st Canadian Parachute Battalion",
      service: "World War II & Korean War - Decorated war hero with multiple medals for bravery including the Military Medal and Bar",
      sacrifice: "Fought for freedom abroad while his people were denied freedom at home. His legacy challenges us to ensure that those who sacrifice for our rights actually receive them."
    },
    {
      name: "Henry Norwest",
      rank: "Private",
      birthYear: 1884,
      deathYear: 1918,
      unit: "50th Battalion, Canadian Expeditionary Force",
      service: "World War I - Credited with 115 confirmed kills as a sniper, one of the deadliest snipers of WWI. His exceptional marksmanship saved countless Canadian lives.",
      sacrifice: "His extraordinary courage and skill saved countless lives, yet he returned to a country that denied his people basic rights and dignity."
    },
    {
      name: "Norbert Beaumont",
      rank: "Corporal",
      birthYear: 1920,
      deathYear: 1944,
      unit: "North Shore Regiment",
      service: "World War II - Died in the D-Day landings at Normandy, June 6, 1944. Gave his life liberating Europe from Nazi tyranny.",
      sacrifice: "Gave his life liberating Europe from fascism, fighting for the freedom that his own people were denied in Canada."
    },
    {
      name: "Joseph Dion",
      rank: "Private",
      birthYear: 1921,
      deathYear: 1944,
      unit: "Canadian Army",
      service: "World War II - Killed in action in Europe. Served with honor and distinction during the critical years of the war.",
      sacrifice: "Fought overseas for democracy and freedom while residential schools were destroying his people's culture and children."
    },
    {
      name: "Elijah Harper",
      rank: "Soldier & Political Leader",
      birthYear: 1949,
      deathYear: 2013,
      unit: "Canadian Armed Forces & Assembly of First Nations",
      service: "Military service followed by decades of political activism for Indigenous rights. Served as National Chief of the Assembly of First Nations.",
      sacrifice: "After military service, dedicated his life to fighting for Indigenous sovereignty and self-determination in Canada."
    },
    {
      name: "James Gladstone",
      rank: "Soldier & Senator",
      birthYear: 1887,
      deathYear: 1971,
      unit: "Canadian Expeditionary Force",
      service: "World War I veteran who later became first Indigenous Canadian appointed to the Senate. Bridged military service with political advocacy.",
      sacrifice: "Fought for Canada in war, then fought for his people's rights in Parliament, demonstrating that military service should lead to equal citizenship."
    },
    {
      name: "Fred Gaffen",
      rank: "Historian & Advocate",
      birthYear: 1932,
      deathYear: 2005,
      unit: "Canadian Armed Forces & Historian",
      service: "Served in the Canadian Armed Forces and dedicated his life to documenting and honoring the contributions of Indigenous soldiers to Canadian military history.",
      sacrifice: "Fought to ensure that Indigenous military contributions were recognized and remembered in Canadian history."
    },
    {
      name: "Ovide Mercredi",
      rank: "National Chief & Advocate",
      birthYear: 1946,
      deathYear: 2026,
      unit: "National Chief of the Assembly of First Nations",
      service: "Lifetime of service fighting for Indigenous rights, treaty recognition, and self-determination. Served as National Chief during critical negotiations.",
      sacrifice: "Continues the fight for justice, carrying forward the legacy of those who sacrificed before him."
    },
    {
      name: "Thousands of Unnamed Indigenous Soldiers",
      rank: "Indigenous Soldiers",
      birthYear: 1900,
      deathYear: 2026,
      unit: "Canadian Armed Forces - Multiple Conflicts",
      service: "Estimated 4,000+ Indigenous Canadians served in World War II alone, fighting for freedom abroad. Thousands more served in WWI, Korean War, and peacekeeping missions.",
      sacrifice: "Their sacrifice remains largely unrecognized. They fought for a country that denied their people basic human rights."
    },
    {
      name: "Chanie Wenjack",
      rank: "Child Victim",
      birthYear: 1954,
      deathYear: 1966,
      unit: "Residential School Survivor",
      service: "Died fleeing Cecilia Jeffrey Indian Residential School at age 12. His death represents the systemic violence against Indigenous children.",
      sacrifice: "Though not a soldier, Chanie represents the children who died under Canadian institutional care while soldiers fought for freedom abroad."
    }
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <NewspaperHeader
          title="Lest We Forget: Indigenous Soldiers Who Fought for Freedom"
          subtitle="Honoring Those Who Sacrificed for Rights They Were Denied at Home"
          date="March 28, 2026"
          masthead="JUSTICE FOR BARRAN"
        />

        <div className="mb-12 p-6 border-4 border-black bg-white">
          <p className="text-lg leading-relaxed mb-4">
            Thousands of Indigenous Canadians have served in the Canadian Armed Forces, fighting in World War I, World War II, the Korean War, and numerous peacekeeping missions. They fought with courage and honor, defending democracy and freedom on foreign soil. Yet when they returned home, many faced discrimination, denial of voting rights, and systemic exclusion from the very society they had sacrificed to protect.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            This injustice represents a profound betrayal. Indigenous soldiers were told their service made them equal, yet they returned to a country that denied them basic rights. Children were stolen for residential schools while their parents fought overseas. Families were displaced while soldiers fought for others' freedom. This contradiction—fighting for freedom while being denied freedom—remains one of Canada's greatest moral failures.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            From Tommy Prince, the most decorated Indigenous soldier in Canadian history, to Henry Norwest, one of the deadliest snipers of World War I, these men and women demonstrated exceptional courage and commitment. Yet their sacrifice was met with systemic racism and institutional indifference. We honor their memory by finally delivering the justice and recognition they deserve.
          </p>
          <p className="text-lg leading-relaxed font-bold">
            We honor their sacrifice by finally delivering the justice and recognition they deserve. We honor them by protecting Indigenous children from systemic harm. We honor them by demanding accountability for institutional failures. Their fight was our fight. Our fight is their legacy.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Fallen Heroes & Living Advocates
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {soldiers.map((soldier, idx) => (
              <SoldierMemorial
                key={idx}
                name={soldier.name}
                rank={soldier.rank}
                birthYear={soldier.birthYear}
                deathYear={soldier.deathYear}
                unit={soldier.unit}
                service={soldier.service}
                sacrifice={soldier.sacrifice}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 border-4 border-black bg-gray-50">
          <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            The Unfinished Fight
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Indigenous soldiers fought for freedom, democracy, and human rights. They believed their sacrifice would earn respect and recognition for their people. Instead, they came home to systemic discrimination and institutional indifference. Their children were taken to residential schools. Their communities were marginalized. Their rights were denied.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Tommy Prince returned from two wars to face racism and poverty. Henry Norwest's exceptional marksmanship saved countless lives, yet he was denied basic respect. Thousands of Indigenous soldiers returned home only to discover that their service had not changed the systemic racism they faced. Some, like Elijah Harper and James Gladstone, dedicated their lives to fighting for Indigenous rights through political channels. Others were forgotten by history.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Today, we continue their fight. We fight for Barran, whose stabbing was followed by five years of denial of psychological services. We fight for every Indigenous child failed by the systems meant to protect them. We fight for recognition of systemic racism in Canadian institutions. We fight for the accountability that these soldiers deserved but never received.
          </p>
          <p className="text-lg leading-relaxed font-bold text-red-700">
            Their sacrifice demands our action. Their legacy demands our justice. Their memory demands our commitment to ensure that no more Indigenous children suffer systemic harm. This is not just about the past—it is about building a future where Indigenous peoples finally receive the respect, rights, and protection they have always deserved.
          </p>
        </div>

        <div className="mt-8 p-6 border-2 border-black bg-amber-50">
          <h3 className="text-xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            How You Can Honor Their Legacy
          </h3>
          <ul className="space-y-2 text-base">
            <li className="flex gap-3">
              <span className="font-bold">1.</span>
              <span>Learn the true history of Indigenous soldiers and their contributions to Canada—from Tommy Prince to the thousands who fought in multiple conflicts</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">2.</span>
              <span>Support Indigenous-led initiatives for justice, healing, and self-determination in honor of those who sacrificed</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">3.</span>
              <span>Demand accountability from institutions that have failed Indigenous peoples, just as they failed returning soldiers</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">4.</span>
              <span>Protect Indigenous children by supporting organizations fighting systemic abuse and institutional failures</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">5.</span>
              <span>Sign the petition demanding justice for Barran and all Indigenous children—ensuring their sacrifice was not in vain</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">6.</span>
              <span>Share the stories of Indigenous soldiers with your community to ensure their contributions are remembered and honored</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
