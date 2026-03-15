/**
 * IN MEMORIAM PAGE
 * Newspaper memorial aesthetic honoring elders and justice figures
 * Global Express News style with biographical tributes
 */

export default function InMemoriam() {
  const memorials = [
    {
      id: 1,
      name: "Gord Downie",
      title: "Musician & Activist (1964-2018)",
      contribution: "The Tragically Hip frontman used his platform to amplify Indigenous voices and support reconciliation. His final tour became a national conversation about Canadian identity and Indigenous rights.",
      legacy: "Inspired millions to engage with Indigenous justice through music and activism",
      nation: "Canadian ally"
    },
    {
      id: 2,
      name: "Elijah Harper",
      title: "Politician & Leader (1949-2013)",
      contribution: "Cree member of Parliament who held up the Meech Lake Accord in 1990, preventing constitutional changes that would have harmed Indigenous rights. A pivotal moment in Canadian constitutional history.",
      legacy: "Demonstrated that Indigenous voices can stop unjust government action",
      nation: "Cree Nation"
    },
    {
      id: 3,
      name: "Phil Fontaine",
      title: "Residential School Survivor & Leader (1944-2024)",
      contribution: "Former National Chief of the Assembly of First Nations who publicly disclosed his residential school abuse in 1990, breaking the silence and inspiring thousands of survivors to come forward.",
      legacy: "His courage opened the door to Truth and Reconciliation",
      nation: "Ojibwe Nation"
    },
    {
      id: 4,
      name: "Cindy Blackstock",
      title: "Child Welfare Advocate (Living)",
      contribution: "Executive Director of First Nations Child and Family Caring Society. Led the fight against systemic discrimination in child welfare, winning landmark cases at the Canadian Human Rights Tribunal.",
      legacy: "Jordan's Principle exists because of her relentless advocacy",
      nation: "Gitxaala Nation"
    },
    {
      id: 5,
      name: "Beverley Jacobs",
      title: "MMIWG Advocate (1965-2021)",
      contribution: "Indigenous women's rights activist and former president of Native Women's Association of Canada. Dedicated her life to fighting violence against Indigenous women and girls.",
      legacy: "Her work led to the National Inquiry into Missing and Murdered Indigenous Women and Girls",
      nation: "Mohawk Nation"
    },
    {
      id: 6,
      name: "Viola Desmond",
      title: "Civil Rights Pioneer (1914-1965)",
      contribution: "Black Canadian who refused to leave the 'whites only' section of a Nova Scotia cinema in 1946, becoming a symbol of resistance to racial discrimination decades before the Civil Rights Movement.",
      legacy: "Her courage challenged systemic racism in Canada",
      nation: "Canadian hero"
    },
    {
      id: 7,
      name: "Hazel McCallion",
      title: "Mayor & Advocate (1921-2023)",
      contribution: "Long-serving mayor of Mississauga who became an ally to Indigenous communities and spoke out against systemic injustice. A bridge-builder between Indigenous and non-Indigenous leaders.",
      legacy: "Demonstrated that leadership means standing up for the marginalized",
      nation: "Canadian ally"
    },
    {
      id: 8,
      name: "Dene Moore",
      title: "Residential School Survivor & Activist (1946-2020)",
      contribution: "Dene residential school survivor who dedicated his life to documenting the impacts of residential schools and advocating for survivor justice and healing.",
      legacy: "His testimony helped expose the systemic abuse of residential schools",
      nation: "Dene Nation"
    },
    {
      id: 9,
      name: "Shanley Spence",
      title: "Youth Advocate & Activist (2000-2020)",
      contribution: "Young Indigenous activist who spoke out about systemic racism and violence against Indigenous youth. Her voice represented a new generation demanding change.",
      legacy: "Her activism inspired youth across Canada to demand accountability",
      nation: "Indigenous youth leader"
    },
    {
      id: 10,
      name: "Tina Fontaine",
      title: "Victim of Systemic Failure (2000-2014)",
      contribution: "15-year-old Métis girl whose murder exposed the catastrophic failures of child welfare systems. Her case became a rallying point for systemic reform.",
      legacy: "Her death sparked national outrage and demands for child welfare accountability",
      nation: "Métis Nation"
    }
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal" style={{ fontFamily: 'Georgia, serif' }}>
      {/* NEWSPAPER MASTHEAD */}
      <header className="bg-black text-white py-8 border-b-8 border-amber-orange">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-xs uppercase tracking-widest text-amber-orange mb-2">Sunday Bloody Sunday Justice Movement</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              IN MEMORIAM
            </h1>
            <p className="text-lg italic">Honoring Elders, Activists, and Justice Fighters</p>
          </div>
          <div className="border-t-2 border-b-2 border-amber-orange py-3 text-center">
            <p className="text-sm">We remember those who fought for Indigenous justice, systemic accountability, and the protection of our children. Their legacy continues through our movement.</p>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* INTRODUCTION */}
        <section className="mb-12 bg-white border-4 border-black p-8">
          <h2 className="text-3xl font-bold mb-4">Those Who Came Before Us</h2>
          <p className="text-lg leading-relaxed mb-4">
            This page honors the elders, activists, survivors, and justice fighters who have dedicated their lives—and in some cases, given their lives—to the fight for Indigenous justice, systemic accountability, and the protection of our children.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Some are no longer with us. Others continue the fight. All have shaped the movement we carry forward today. Their courage, sacrifice, and unwavering commitment to justice inspire us to demand real change.
          </p>
          <p className="text-lg leading-relaxed">
            We do not forget. We do not move on. We honor their memory by finishing what they started.
          </p>
        </section>

        {/* MEMORIAL GRID */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {memorials.map((person) => (
              <div key={person.id} className="bg-white border-4 border-black p-6 hover:shadow-lg transition-shadow">
                {/* Header */}
                <div className="border-b-2 border-amber-orange pb-4 mb-4">
                  <h3 className="text-2xl font-bold text-forest-green">{person.name}</h3>
                  <p className="text-sm font-bold text-amber-orange uppercase tracking-wider">{person.title}</p>
                  <p className="text-xs text-charcoal/60 italic mt-1">{person.nation}</p>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-charcoal/70 mb-2">Contribution</h4>
                    <p className="text-sm leading-relaxed text-charcoal/80">{person.contribution}</p>
                  </div>

                  <div className="bg-amber-orange/10 border-l-4 border-amber-orange p-3">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-forest-green mb-1">Legacy</h4>
                    <p className="text-sm leading-relaxed text-charcoal/80">{person.legacy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-black text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Finish What They Started</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            The fight for Indigenous justice is not over. The systemic failures continue. The children still need protection. We honor these heroes by continuing their work and demanding the accountability they fought for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="inline-block bg-amber-orange hover:bg-amber-light text-white px-8 py-3 rounded font-bold transition-colors">
              Support This Movement
            </a>
            <a href="/electoral-reform-demands" className="inline-block bg-forest-green hover:bg-forest-green/90 text-white px-8 py-3 rounded font-bold transition-colors">
              Demand Electoral Reform
            </a>
          </div>
        </section>

        {/* FOOTER NOTE */}
        <section className="mt-12 text-center text-charcoal/70 border-t-4 border-black pt-8">
          <p className="text-sm italic mb-4">
            This page is dedicated to all Indigenous peoples, activists, and allies who have fought for justice. If you know of someone whose story should be honored here, please contact us.
          </p>
          <a href="mailto:justiceforbarran@gmail.com" className="text-amber-orange hover:text-amber-light font-bold">
            justiceforbarran@gmail.com
          </a>
        </section>
      </div>
    </div>
  );
}
