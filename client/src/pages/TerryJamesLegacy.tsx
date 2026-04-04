import { useTranslation } from "react-i18next";
import { Heart, MapPin, Phone, Users, Leaf } from "lucide-react";

export default function TerryJamesLegacy() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const content = {
    en: {
      title: "Terry James McGovern Legacy",
      subtitle: "Honoring a Life Dedicated to Healing Through Horses & Community",
      heroText: "In Memory of Terry James McGovern (1956-2024)",
      
      section1Title: "A Life of Service",
      section1Text: "Terry James McGovern was a dedicated member of the Outaouais community, deeply passionate about horses, ranching, and helping vulnerable children. For decades, he operated Ferme Terry James at 977 Montée McLaren in Gatineau, where he welcomed children in government care (DPJ) to experience healing through connection with animals and nature.",
      
      section2Title: "Ferme Terry James: 977 Montée McLaren",
      section2Text: "Official property records from Gatineau municipal archives (1994-2001+) document Terry James's farm operations under agricultural and recreational zoning. His personal commitment to youth welfare led him to open his farm as a sanctuary for vulnerable children, providing equestrian therapy and animal care programs long before such services were widely recognized.",
      
      propertyDetails: "Property: 977 Montée McLaren, Gatineau, QC | Zoning: Agricultural/Recreational | Contact: 1 (819) 983-3000 | Records: Règlement Numéro 853-94, 1004-2-2001",
      
      section3Title: "His Vision Lives On",
      section3Text: "The McGovern Arts Ranch Healing Centre continues Terry James's pioneering work. With 16 horses, medical clinic, day school, library, gym, and 24/7 support staff, the centre honors his belief that vulnerable children deserve healing, community, and hope.",
      
      section4Title: "The Lisette Le Guerrier Malette Memorial Kitchen",
      section4Text: "The healing centre's kitchen is dedicated to Lisette Le Guerrier Malette, Terry James's mother (age 88), who raised him with values of compassion and service. This kitchen nourishes every child who comes to the centre, embodying the family's commitment to care and healing.",
      
      section5Title: "Family Legacy",
      section5Text: "Terry James is survived by his mother Lisette, half-sister Cindy-Lou McGovern, half-brother Jimmy Robert McGovern, and extended family throughout the Outaouais region. His life's work—helping vulnerable children through horses and nature—continues through the healing centre that bears his name.",
      
      timeline: "Timeline",
      timeline1994: "1994 - Ferme Terry James established at 977 Montée McLaren",
      timeline2000s: "2000s - DPJ youth programs begin at the farm",
      timeline2024: "August 1, 2024 - Terry James passes at age 68",
      timelineFuture: "2026+ - McGovern Arts Ranch Healing Centre opens, continuing his mission",
      
      familySection: "Family & Community",
      mother: "Mother: Lisette Le Guerrier Malette (age 88) - Living Legacy",
      siblings: "Half-siblings: Cindy-Lou McGovern, Jimmy Robert McGovern",
      extended: "Extended Family: Nicole Malette, Pascal, Nicolas, Cécile, and many cousins throughout Outaouais",
      
      callToAction: "Share Your Memories",
      callToActionText: "If you have photos, stories, or documentation of Ferme Terry James and Terry James's work with vulnerable children, please contact us. We're preserving his legacy for future generations.",
      
      contactButton: "Share a Memory",
      learnMoreButton: "Learn About the Healing Centre",
    },
    fr: {
      title: "L'Héritage de Terry James McGovern",
      subtitle: "Honorer une Vie Consacrée à la Guérison par les Chevaux et la Communauté",
      heroText: "À la Mémoire de Terry James McGovern (1956-2024)",
      
      section1Title: "Une Vie de Service",
      section1Text: "Terry James McGovern était un membre dévoué de la communauté de l'Outaouais, passionné par les chevaux, l'élevage et l'aide aux enfants vulnérables. Pendant des décennies, il a exploité la Ferme Terry James au 977 Montée McLaren à Gatineau, où il accueillait les enfants en protection de la jeunesse (DPJ) pour vivre une guérison par la connexion avec les animaux et la nature.",
      
      section2Title: "Ferme Terry James : 977 Montée McLaren",
      section2Text: "Les registres municipaux de Gatineau (1994-2001+) documentent les opérations agricoles de Terry James selon les zones de zonage agricole et récréatif. Son engagement personnel envers le bien-être des jeunes l'a amené à ouvrir sa ferme comme sanctuaire pour les enfants vulnérables, offrant des programmes de thérapie équestre et de soins des animaux bien avant que ces services ne soient largement reconnus.",
      
      propertyDetails: "Propriété : 977 Montée McLaren, Gatineau, QC | Zonage : Agricole/Récréatif | Contact : 1 (819) 983-3000 | Registres : Règlement Numéro 853-94, 1004-2-2001",
      
      section3Title: "Sa Vision Perdure",
      section3Text: "Le Centre de Guérison du Ranch McGovern Arts poursuit l'œuvre pionnière de Terry James. Avec 16 chevaux, une clinique médicale, une école de jour, une bibliothèque, un gymnase et un personnel disponible 24/7, le centre honore sa conviction que les enfants vulnérables méritent la guérison, la communauté et l'espoir.",
      
      section4Title: "La Cuisine Commémorative Lisette Le Guerrier Malette",
      section4Text: "La cuisine du centre de guérison est dédiée à Lisette Le Guerrier Malette, la mère de Terry James (88 ans), qui l'a élevé avec des valeurs de compassion et de service. Cette cuisine nourrit chaque enfant qui vient au centre, incarnant l'engagement de la famille envers le soin et la guérison.",
      
      section5Title: "L'Héritage Familial",
      section5Text: "Terry James est survécu par sa mère Lisette, sa demi-sœur Cindy-Lou McGovern, son demi-frère Jimmy Robert McGovern et sa famille étendue dans toute la région de l'Outaouais. Son œuvre de vie—aider les enfants vulnérables par les chevaux et la nature—se poursuit par le centre de guérison qui porte son nom.",
      
      timeline: "Chronologie",
      timeline1994: "1994 - Établissement de la Ferme Terry James au 977 Montée McLaren",
      timeline2000s: "2000 - Les programmes de la DPJ commencent à la ferme",
      timeline2024: "1er août 2024 - Terry James décède à l'âge de 68 ans",
      timelineFuture: "2026+ - Ouverture du Centre de Guérison du Ranch McGovern Arts, poursuivant sa mission",
      
      familySection: "Famille et Communauté",
      mother: "Mère : Lisette Le Guerrier Malette (88 ans) - Héritage Vivant",
      siblings: "Demi-frères et sœurs : Cindy-Lou McGovern, Jimmy Robert McGovern",
      extended: "Famille Étendue : Nicole Malette, Pascal, Nicolas, Cécile et de nombreux cousins dans l'Outaouais",
      
      callToAction: "Partagez Vos Souvenirs",
      callToActionText: "Si vous avez des photos, des histoires ou de la documentation sur la Ferme Terry James et le travail de Terry James auprès des enfants vulnérables, veuillez nous contacter. Nous préservons son héritage pour les générations futures.",
      
      contactButton: "Partager un Souvenir",
      learnMoreButton: "En Savoir Plus sur le Centre de Guérison",
    },
  };

  const t = content[isEnglish ? "en" : "fr"];

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Memorial Plaque Image */}
      <section className="bg-cream py-12">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex justify-center">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/IMG_8904_d2df9e60.jpeg" 
              alt="Terry James McGovern Memorial Plaque" 
              className="max-w-md rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-forest-green to-amber-orange text-white">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-amber-light" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{t.title}</h1>
          <p className="text-2xl mb-2 font-serif italic">{t.subtitle}</p>
          <p className="text-lg opacity-90">{t.heroText}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container max-w-5xl mx-auto px-4 py-16">
        {/* Section 1: A Life of Service */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-8 border-l-4 border-forest-green">
          <h2 className="text-4xl font-bold text-forest-green mb-6">{t.section1Title}</h2>
          <p className="text-lg leading-relaxed mb-4">{t.section1Text}</p>
        </div>

        {/* Section 2: Ferme Terry James */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-8 border-l-4 border-amber-orange">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-amber-orange" />
            <h2 className="text-4xl font-bold text-amber-orange">{t.section2Title}</h2>
          </div>
          <p className="text-lg leading-relaxed mb-6">{t.section2Text}</p>
          <div className="bg-forest-green/10 p-6 rounded-lg border border-forest-green">
            <p className="text-sm font-mono text-forest-green">{t.propertyDetails}</p>
          </div>
        </div>

        {/* Section 3: Vision Lives On */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-8 border-l-4 border-forest-green">
          <h2 className="text-4xl font-bold text-forest-green mb-6">{t.section3Title}</h2>
          <p className="text-lg leading-relaxed">{t.section3Text}</p>
        </div>

        {/* Section 4: Lisette Memorial Kitchen */}
        <div className="mb-16 bg-gradient-to-r from-amber-light/20 to-forest-green/20 rounded-lg shadow-lg p-8 border-2 border-amber-orange">
          <h2 className="text-4xl font-bold text-amber-orange mb-6">{t.section4Title}</h2>
          <p className="text-lg leading-relaxed">{t.section4Text}</p>
        </div>

        {/* Section 5: Family Legacy */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-8 border-l-4 border-forest-green">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-forest-green" />
            <h2 className="text-4xl font-bold text-forest-green">{t.section5Title}</h2>
          </div>
          <p className="text-lg leading-relaxed mb-8">{t.section5Text}</p>
          
          <div className="space-y-4 bg-cream p-6 rounded-lg">
            <p className="text-lg"><strong>{t.mother}</strong></p>
            <p className="text-lg"><strong>{t.siblings}</strong></p>
            <p className="text-lg"><strong>{t.extended}</strong></p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-bold text-forest-green mb-8">{t.timeline}</h2>
          <div className="space-y-6 relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-forest-green to-amber-orange"></div>
            
            <div className="flex gap-4">
              <div className="w-4 h-4 rounded-full bg-forest-green mt-1 flex-shrink-0"></div>
              <div>
                <p className="font-bold text-forest-green">1994</p>
                <p>{t.timeline1994}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-4 h-4 rounded-full bg-amber-orange mt-1 flex-shrink-0"></div>
              <div>
                <p className="font-bold text-amber-orange">2000s</p>
                <p>{t.timeline2000s}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-4 h-4 rounded-full bg-forest-green mt-1 flex-shrink-0"></div>
              <div>
                <p className="font-bold text-forest-green">August 1, 2024</p>
                <p>{t.timeline2024}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-4 h-4 rounded-full bg-amber-orange mt-1 flex-shrink-0"></div>
              <div>
                <p className="font-bold text-amber-orange">2026+</p>
                <p>{t.timelineFuture}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-forest-green to-amber-orange text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.callToAction}</h2>
          <p className="text-lg mb-8">{t.callToActionText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/share-story" className="bg-white text-forest-green px-8 py-3 rounded-lg font-bold hover:bg-cream transition-colors inline-block">
              {t.contactButton}
            </a>
            <button className="bg-amber-light text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-orange transition-colors">
              {t.learnMoreButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
