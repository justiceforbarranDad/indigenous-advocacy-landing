import { Obituary, NewspaperHeader } from '@/components/NewspaperComponents';

export default function Obituaries() {
  const activists = [
    {
      name: "Martin Luther King Jr.",
      title: "Civil Rights Leader & Advocate for Nonviolent Resistance",
      birthYear: 1929,
      deathYear: 1968,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Martin_Luther_King%2C_Jr..jpg",
      achievements: [
        "Led the Civil Rights Movement, advancing racial equality through nonviolent protest",
        "Delivered the iconic 'I Have a Dream' speech during the 1963 March on Washington",
        "Won the Nobel Peace Prize in 1964 at age 35, youngest male recipient at the time",
        "Championed the Civil Rights Act of 1964 and Voting Rights Act of 1965",
        "Assassinated in 1968, but his legacy transformed American society"
      ],
      legacy: "Martin Luther King Jr.'s unwavering commitment to nonviolent resistance and racial equality became a blueprint for justice movements worldwide. His vision of a society judged not by skin color but by character continues to inspire activists fighting against all forms of systemic oppression. Though his life was cut short by violence, his words and principles endure as a moral compass for those seeking justice."
    },
    {
      name: "Viola Desmond",
      title: "Civil Rights Pioneer & Anti-Racism Activist",
      birthYear: 1914,
      deathYear: 1965,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Viola_Desmond.jpg/440px-Viola_Desmond.jpg",
      achievements: [
        "First Black Canadian woman to be arrested for civil disobedience (1946)",
        "Founded Desmond School of Beauty Culture, breaking racial barriers in business",
        "Challenged segregation in Nova Scotia theaters, inspiring civil rights movement",
        "Her legacy led to official pardon in 2010, 45 years after her death",
        "Featured on the Canadian $10 bill, honoring her contributions to civil rights"
      ],
      legacy: "Viola Desmond's courageous stand against racial segregation became a defining moment in Canadian civil rights history. Though she faced arrest and humiliation, her quiet dignity and refusal to accept injustice inspired generations of activists. Today, she is honored on the Canadian $10 bill, a testament to her enduring impact on the struggle for equality and human dignity."
    },
    {
      name: "Mahatma Gandhi",
      title: "Indian Independence Leader & Pioneer of Nonviolent Resistance",
      birthYear: 1869,
      deathYear: 1948,
      achievements: [
        "Led India's independence movement through nonviolent civil disobedience (Satyagraha)",
        "Challenged British colonial rule without resorting to violence, inspiring global movements",
        "Advocated for religious harmony, women's rights, and social equality",
        "Assassinated in 1948, but his philosophy transformed independence movements worldwide",
        "Influenced Martin Luther King Jr., Nelson Mandela, and countless justice advocates"
      ],
      legacy: "Mahatma Gandhi's philosophy of nonviolent resistance (Satyagraha) proved that moral authority and peaceful determination could overcome even the most entrenched systems of oppression. His life demonstrated that individual conscience, when guided by unwavering principles, can move mountains. Though he was assassinated, his legacy continues to guide those fighting for justice through peaceful means."
    },
    {
      name: "Donald Marshall Jr.",
      title: "Indigenous Rights Advocate & Wrongful Conviction Survivor",
      birthYear: 1956,
      deathYear: 2009,
      achievements: [
        "Wrongfully convicted and imprisoned for 11 years for a murder he did not commit",
        "His case led to the Marshall Inquiry, exposing systemic racism in Canadian justice system",
        "Fought for Indigenous rights and criminal justice reform after his exoneration",
        "Became symbol of institutional racism and the need for accountability",
        "His case transformed Canadian criminal procedure and legal safeguards"
      ],
      legacy: "Donald Marshall Jr.'s wrongful conviction and subsequent exoneration exposed deep flaws in Canada's justice system and its disproportionate impact on Indigenous peoples. His fight for justice didn't end with his release—he dedicated his life to ensuring others would not suffer the same injustice. The Marshall Inquiry transformed Canadian criminal procedure and remains a powerful reminder of why systemic accountability matters."
    },
    {
      name: "Harriet Tubman",
      title: "Freedom Fighter & Underground Railroad Conductor",
      birthYear: 1820,
      deathYear: 1913,
      achievements: [
        "Escaped slavery and led approximately 70 enslaved people to freedom",
        "Served as 'conductor' on the Underground Railroad, risking her life repeatedly",
        "Worked as a nurse, cook, and scout for the Union Army during the Civil War",
        "Established a home for elderly African Americans after the war",
        "Never lost a passenger on the Underground Railroad—a perfect safety record"
      ],
      legacy: "Harriet Tubman's unwavering commitment to freedom and justice transcended her own liberation. Despite the constant danger and trauma of slavery, she returned again and again to lead others to freedom, never losing a passenger on the Underground Railroad. Her courage in the face of systemic oppression became a beacon for all freedom fighters, and her legacy reminds us that individual acts of resistance can transform society."
    },
    {
      name: "Nelson Mandela",
      title: "Anti-Apartheid Revolutionary & First Black President of South Africa",
      birthYear: 1918,
      deathYear: 2013,
      achievements: [
        "Led the struggle against apartheid in South Africa for 27 years",
        "Spent 27 years imprisoned for his resistance to racial segregation",
        "Became first Black president of South Africa, promoting reconciliation",
        "Established Truth and Reconciliation Commission to heal national wounds",
        "Won the Nobel Peace Prize in 1993 for his work ending apartheid"
      ],
      legacy: "Nelson Mandela's extraordinary journey from political prisoner to nation-builder demonstrated the transformative power of forgiveness and reconciliation. Rather than seeking revenge after his release, he chose to build bridges and heal a fractured nation. His legacy teaches us that true justice requires not just accountability, but also the courage to forgive and the wisdom to build a shared future."
    },
    {
      name: "Chief Dan George",
      title: "Indigenous Rights Leader & Cultural Ambassador",
      birthYear: 1899,
      deathYear: 1981,
      achievements: [
        "Chief of the Tsleil-Waututh Nation, advocating for Indigenous sovereignty",
        "Powerful voice for Indigenous rights during the civil rights era",
        "Broke barriers as an actor and poet, bringing Indigenous stories to mainstream audiences",
        "Challenged Canadian government policies on Indigenous education and self-determination",
        "His poetry and speeches became foundational texts for Indigenous rights movements"
      ],
      legacy: "Chief Dan George's dignified resistance to colonialism and his eloquent articulation of Indigenous rights made him a moral authority in Canada's struggle for justice. Through his words and actions, he insisted that Indigenous peoples deserved recognition, respect, and the right to determine their own futures. His legacy continues to inspire Indigenous activists fighting for sovereignty and self-determination."
    },
    {
      name: "Gord Downie",
      title: "Artist & Indigenous Rights Advocate",
      birthYear: 1964,
      deathYear: 2018,
      achievements: [
        "Lead singer of The Tragically Hip, using his platform for social justice",
        "Created 'Secret Path' album and graphic novel documenting Chanie Wenjack's death",
        "Raised awareness about residential schools and their devastating impact",
        "Donated millions to Indigenous causes and education initiatives",
        "Brought residential school history to mainstream consciousness through art"
      ],
      legacy: "Gord Downie's artistic courage in confronting Canada's colonial history, particularly through his work on residential schools, demonstrated that artists have a responsibility to speak truth to power. His 'Secret Path' project brought the story of Chanie Wenjack—a 12-year-old who died fleeing residential school—to millions, forcing Canadians to reckon with this dark chapter. His legacy reminds us that creative expression can be a powerful tool for justice."
    },
    {
      name: "Rosa Parks",
      title: "Civil Rights Icon & Activist",
      birthYear: 1913,
      deathYear: 2005,
      achievements: [
        "Refused to give up her bus seat to a white passenger in 1955, sparking the Montgomery Bus Boycott",
        "Her act of civil disobedience became a catalyst for the Civil Rights Movement",
        "Worked as a seamstress and activist throughout her life",
        "Received the Presidential Medal of Freedom in 1996",
        "Her quiet courage demonstrated the power of individual resistance"
      ],
      legacy: "Rosa Parks' simple act of refusing to move from her bus seat became one of the most powerful moments in civil rights history. Her quiet dignity and courage inspired millions to challenge injustice. Though often portrayed as tired, Parks was a seasoned activist whose deliberate act of civil disobedience sparked the Montgomery Bus Boycott and transformed the civil rights movement."
    },
    {
      name: "Thurgood Marshall",
      title: "Civil Rights Lawyer & Supreme Court Justice",
      birthYear: 1908,
      deathYear: 1993,
      achievements: [
        "First African American appointed to the U.S. Supreme Court (1967)",
        "Won 29 of 32 cases argued before the Supreme Court as a civil rights lawyer",
        "Successfully argued Brown v. Board of Education, ending school segregation",
        "Fought for voting rights, desegregation, and equal protection under law",
        "Served 24 years on the Supreme Court, defending civil rights and constitutional protections"
      ],
      legacy: "Thurgood Marshall's legal brilliance and unwavering commitment to constitutional rights transformed American law and society. His victory in Brown v. Board of Education demonstrated that systemic injustice could be challenged through law and moral argument. His presence on the Supreme Court ensured that the voice of the oppressed was heard in the highest court of the land."
    }
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <NewspaperHeader
          title="In Memoriam: Champions of Justice"
          subtitle="Honoring the Legacy of Human Rights Activists Who Fought for Equality"
          date="March 28, 2026"
          masthead="JUSTICE FOR BARRAN"
        />

        <div className="mb-12 p-6 border-4 border-black bg-white">
          <p className="text-lg leading-relaxed mb-4">
            Throughout history, courageous individuals have stood against injustice, systemic oppression, and the denial of human rights. These activists—many of whom faced imprisonment, violence, and death—refused to accept the status quo. Their struggles paved the way for progress, yet their work remains unfinished. As we continue the fight for justice for Barran and all Indigenous children, we honor those whose sacrifice and dedication remind us why this struggle matters.
          </p>
          <p className="text-lg leading-relaxed">
            The obituaries below celebrate the lives and legacies of human rights champions whose courage continues to inspire us. They remind us that individual acts of resistance, when guided by unwavering commitment to justice, can transform societies and save lives. From Martin Luther King Jr. to Harriet Tubman, from Nelson Mandela to Rosa Parks, these heroes demonstrated that systemic injustice can be challenged and overcome through moral courage, strategic action, and unwavering commitment to human dignity.
          </p>
        </div>

        <div className="space-y-8">
          {activists.map((activist, idx) => (
            <Obituary
              key={idx}
              name={activist.name}
              title={activist.title}
              birthYear={activist.birthYear}
              deathYear={activist.deathYear}
              imageUrl={activist.imageUrl}
              achievements={activist.achievements}
              legacy={activist.legacy}
            />
          ))}
        </div>

        <div className="mt-12 p-6 border-4 border-black bg-gray-50">
          <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Their Fight Continues
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            The work of these activists is not finished. Every day, Indigenous children face systemic failures. Every day, families are denied justice. Every day, the promises of reconciliation ring hollow for those still suffering. We honor the legacy of these champions by continuing their fight—demanding accountability, insisting on truth, and refusing to accept injustice.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            These heroes fought for freedom, equality, and human dignity. They challenged systems of oppression that seemed immovable. They sacrificed their comfort, their freedom, and sometimes their lives for the principle that all people deserve respect and protection under law. Their legacy is not just historical—it is a living call to action for those of us who continue their work.
          </p>
          <p className="text-lg leading-relaxed font-bold">
            Justice for Barran is justice for all. Their struggle was our struggle. Our struggle is their legacy.
          </p>
        </div>
      </div>
    </div>
  );
}
