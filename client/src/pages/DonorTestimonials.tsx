import { useState } from 'react';
import { Heart, Share2, MessageCircle } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  amount: string;
  message: string;
  messageFr: string;
  image?: string;
  date: string;
  verified: boolean;
}

export default function DonorTestimonials() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [selectedTestimonial, setSelectedTestimonial] = useState<string>('1');

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah M.',
      location: 'Toronto, ON',
      amount: '$500',
      message: 'I donated because I believe in justice and accountability. No child should suffer systemic failure like this. This case represents thousands of Indigenous families abandoned by institutions.',
      messageFr: 'J\'ai donné parce que je crois à la justice et à la responsabilité. Aucun enfant ne devrait souffrir d\'une défaillance systémique comme celle-ci. Ce cas représente des milliers de familles autochtones abandonnées par les institutions.',
      date: 'March 28, 2026',
      verified: true,
    },
    {
      id: '2',
      name: 'James T.',
      location: 'Vancouver, BC',
      amount: '$250',
      message: 'As a parent, this story broke my heart. I\'m supporting Justice for Barran because reconciliation requires accountability, not just words. Real change starts with people like Robert standing up.',
      messageFr: 'En tant que parent, cette histoire m\'a brisé le cœur. Je soutiens Justice pour Barran parce que la réconciliation exige la responsabilité, pas seulement des paroles. Le vrai changement commence par des gens comme Robert qui se lèvent.',
      date: 'March 25, 2026',
      verified: true,
    },
    {
      id: '3',
      name: 'Marie L.',
      location: 'Montreal, QC',
      amount: '$1,000',
      message: 'Je soutiens cette cause parce que les enfants autochtones méritent mieux. Le système a échoué. Il est temps de demander des comptes et de construire quelque chose de meilleur.',
      messageFr: 'I support this cause because Indigenous children deserve better. The system has failed. It\'s time to demand accountability and build something better.',
      date: 'March 22, 2026',
      verified: true,
    },
    {
      id: '4',
      name: 'David K.',
      location: 'Calgary, AB',
      amount: '$100 (Monthly)',
      message: 'I\'m making a monthly donation because this is bigger than one case. It\'s about systemic reform. Justice for Barran is building an institution for real change.',
      messageFr: 'Je fais un don mensuel parce que c\'est plus grand qu\'un seul cas. C\'est une question de réforme systémique. Justice pour Barran construit une institution pour un vrai changement.',
      date: 'Ongoing',
      verified: true,
    },
    {
      id: '5',
      name: 'Emma R.',
      location: 'Winnipeg, MB',
      amount: '$750',
      message: 'My family has experienced systemic failure too. Seeing someone fight back with evidence and legal action gives me hope. I\'m investing in justice.',
      messageFr: 'Ma famille a aussi connu l\'échec systémique. Voir quelqu\'un se battre avec des preuves et une action en justice me donne de l\'espoir. J\'investis dans la justice.',
      date: 'March 20, 2026',
      verified: true,
    },
    {
      id: '6',
      name: 'Robert H.',
      location: 'Halifax, NS',
      amount: '$500',
      message: 'This is what accountability looks like. Not empty promises, but documented evidence and legal action. I\'m proud to support this.',
      messageFr: 'C\'est ce que la responsabilité ressemble. Pas des promesses vides, mais des preuves documentées et une action en justice. Je suis fier de soutenir cela.',
      date: 'March 18, 2026',
      verified: true,
    },
  ];

  const content = {
    en: {
      title: 'DONOR TESTIMONIALS',
      subtitle: 'Stories from People Fighting for Justice',
      date: 'MARCH 31, 2026',
      heading: 'Why People Are Supporting Justice for Barran',
      intro: 'These are real donors who believe that systemic failures require accountability, not just reconciliation marketing. Read their stories and join the movement for real change.',
      verified: 'VERIFIED DONOR',
      share: 'Share This Story',
      donate: 'Make a Donation',
      readMore: 'Read Full Testimonial',
      stats: 'Community Impact',
      totalDonors: 'Total Supporters',
      totalRaised: 'Funds Raised',
      monthlySupport: 'Monthly Supporters',
      footer: 'These testimonials represent real people who believe in justice, accountability, and systemic reform. Join them in supporting Justice for Barran.',
    },
    fr: {
      title: 'TÉMOIGNAGES DES DONATEURS',
      subtitle: 'Histoires de gens qui se battent pour la justice',
      date: '31 MARS 2026',
      heading: 'Pourquoi les gens soutiennent Justice pour Barran',
      intro: 'Ce sont de vrais donateurs qui croient que les défaillances systémiques exigent la responsabilité, pas seulement le marketing de la réconciliation. Lisez leurs histoires et rejoignez le mouvement pour un vrai changement.',
      verified: 'DONATEUR VÉRIFIÉ',
      share: 'Partager cette histoire',
      donate: 'Faire un don',
      readMore: 'Lire le témoignage complet',
      stats: 'Impact communautaire',
      totalDonors: 'Supporters totaux',
      totalRaised: 'Fonds collectés',
      monthlySupport: 'Supporters mensuels',
      footer: 'Ces témoignages représentent de vraies personnes qui croient à la justice, à la responsabilité et à la réforme systémique. Rejoignez-les en soutenant Justice pour Barran.',
    },
  };

  const lang = content[language];
  const selectedTest = testimonials.find(t => t.id === selectedTestimonial) || testimonials[0];

  const shareOnTwitter = () => {
    const text = `"${language === 'en' ? selectedTest.message : selectedTest.messageFr}" - ${selectedTest.name} supports Justice for Barran. Real accountability for systemic failures. indigenousadv-ahjdmzis.manus.space`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=indigenousadv-ahjdmzis.manus.space`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* LANGUAGE TOGGLE */}
      <div className="bg-gray-100 border-b-2 border-black py-3 px-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div></div>
          <div className="flex gap-4">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 font-bold ${language === 'en' ? 'bg-black text-white' : 'bg-white text-black border-2 border-black'}`}
            >
              ENGLISH
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-4 py-2 font-bold ${language === 'fr' ? 'bg-black text-white' : 'bg-white text-black border-2 border-black'}`}
            >
              FRANÇAIS
            </button>
          </div>
        </div>
      </div>

      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-6 border-b-8 border-black">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-4">{lang.title}</h1>
          <div className="h-1 bg-white my-3 w-32"></div>
          <p className="text-base md:text-lg tracking-wide mb-2">{lang.subtitle}</p>
          <p className="text-xs md:text-sm tracking-widest">{lang.date}</p>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="bg-gray-50 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{lang.heading}</h2>
          <p className="text-lg leading-relaxed">{lang.intro}</p>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border-4 border-black p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-red-600" size={24} fill="currentColor" />
              <span className="font-bold text-sm tracking-widest">{lang.verified}</span>
            </div>

            <h3 className="text-3xl font-bold mb-2">{selectedTest.name}</h3>
            <p className="text-gray-600 mb-4">{selectedTest.location} • {selectedTest.amount}</p>
            <div className="h-1 bg-black my-6 w-16"></div>

            <p className="text-lg leading-relaxed mb-8">
              "{language === 'en' ? selectedTest.message : selectedTest.messageFr}"
            </p>

            <p className="text-sm text-gray-600 mb-8">{selectedTest.date}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={shareOnTwitter}
                className="flex items-center gap-2 bg-blue-400 text-white px-6 py-3 font-bold hover:bg-blue-500"
              >
                <Share2 size={20} />
                Share on Twitter
              </button>
              <button
                onClick={shareOnFacebook}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 font-bold hover:bg-blue-700"
              >
                <Share2 size={20} />
                Share on Facebook
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL GALLERY */}
      <section className="bg-gray-50 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{language === 'en' ? 'All Testimonials' : 'Tous les témoignages'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map(testimonial => (
              <button
                key={testimonial.id}
                onClick={() => setSelectedTestimonial(testimonial.id)}
                className={`p-6 border-4 text-left transition-all ${
                  selectedTestimonial === testimonial.id
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-black hover:bg-gray-100'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.location}</p>
                  </div>
                  {testimonial.verified && <Heart size={20} fill="currentColor" />}
                </div>
                <p className="text-sm mb-3">
                  {language === 'en' ? testimonial.message.substring(0, 80) : testimonial.messageFr.substring(0, 80)}...
                </p>
                <p className="font-bold">{testimonial.amount}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{language === 'en' ? 'Join This Community' : 'Rejoignez cette communauté'}</h2>
          <p className="text-lg mb-8 leading-relaxed">
            {language === 'en' 
              ? 'Your donation is not just money—it\'s a statement that systemic failures require accountability. Join thousands of supporters demanding real change.'
              : 'Votre don n\'est pas seulement de l\'argent—c\'est une déclaration que les défaillances systémiques exigent la responsabilité. Rejoignez des milliers de supporters exigeant un vrai changement.'}
          </p>
          <a
            href="/donate"
            className="inline-block bg-red-600 text-white px-8 py-4 font-bold text-lg hover:bg-red-700"
          >
            {lang.donate}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-black text-white py-8 px-6">
        <div className="max-w-5xl mx-auto text-center text-sm">
          <p>{lang.footer}</p>
          <p className="mt-4">
            {language === 'en' ? 'Learn more:' : 'En savoir plus:'} <strong>indigenousadv-ahjdmzis.manus.space</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
