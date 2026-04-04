import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, TrendingUp, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Sponsors() {
  const { i18n } = useTranslation();

  // Mock sponsor data - will be replaced with dynamic data from database
  const monthlySupporters = [
    {
      name: "Community Ally",
      amount: "$25/month",
      anonymous: false,
    },
    // Add more as they join
  ];

  const oneTimeDonors = [
    {
      name: "Justice Advocate",
      amount: "$100",
      anonymous: false,
    },
    // Add more as they donate
  ];

  const organizationalPartners = [
    {
      name: "Indigenous Rights Organization",
      commitment: "100% Donation Commitment",
      anonymous: false,
    },
    // Add more as they partner
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero */}
      <div className="bg-forest-green text-white py-12 px-4 text-center">
        <Users className="w-12 h-12 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">
          {i18n.language === 'fr' ? 'Nos Partenaires Communautaires' : 'Our Community Partners'}
        </h1>
        <p className="text-lg opacity-90">
          {i18n.language === 'fr'
            ? 'Alliés qui s\'engagent à 100% pour la Justice pour Barran'
            : 'Allies committed 100% to Justice for Barran'
          }
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Transparency Statement */}
        <Card className="p-8 bg-green-50 border-2 border-forest-green mb-12">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-forest-green flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-forest-green mb-3">
                {i18n.language === 'fr' ? 'Engagement 100% Transparent' : '100% Transparent Commitment'}
              </h2>
              <p className="text-gray-700 mb-4">
                {i18n.language === 'fr'
                  ? 'Tous les partenaires et donateurs listés ci-dessous s\'engagent à ce que 100% de leurs contributions soutiennent directement la Fondation Justice pour Barran. Aucun frais administratif, aucune part des bénéfices - 100% pour la cause.'
                  : 'All partners and donors listed below commit to 100% of their contributions directly supporting the Justice for Barran Foundation. No administrative fees, no profit-sharing - 100% to the cause.'
                }
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-forest-green">
                <p className="font-semibold text-forest-green mb-2">
                  {i18n.language === 'fr' ? 'Vérification:' : 'Verification:'}
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ {i18n.language === 'fr' ? 'Tous les dons vérifiés et documentés' : 'All donations verified and documented'}</li>
                  <li>✓ {i18n.language === 'fr' ? 'Rapports d\'impact trimestriels publics' : 'Public quarterly impact reports'}</li>
                  <li>✓ {i18n.language === 'fr' ? 'Transparence complète sur l\'utilisation des fonds' : 'Full transparency on fund usage'}</li>
                  <li>✓ {i18n.language === 'fr' ? 'Aucun partenaire n\'a accès à votre histoire pour profit' : 'No partner has access to your story for profit'}</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Top Donors Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-amber-orange" />
            <h2 className="text-2xl font-bold text-forest-green">
              {i18n.language === 'fr' ? 'Nos Grands Donateurs' : 'Our Top Donors'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Bronze Level */}
            <Card className="p-6 border-2 border-amber-600 bg-amber-50">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">🥉</div>
                <h3 className="font-bold text-lg mb-2">
                  {i18n.language === 'fr' ? 'Bronze' : 'Bronze'}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {i18n.language === 'fr' ? 'CA$500+' : 'CA$500+'}
                </p>
                <p className="text-xs text-gray-700">
                  {i18n.language === 'fr'
                    ? 'Planter un arbre'
                    : 'Plant a tree'
                  }
                </p>
              </div>
            </Card>

            {/* Silver Level */}
            <Card className="p-6 border-2 border-gray-400 bg-gray-50">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-400 mb-2">🥈</div>
                <h3 className="font-bold text-lg mb-2">
                  {i18n.language === 'fr' ? 'Argent' : 'Silver'}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {i18n.language === 'fr' ? 'CA$1000+' : 'CA$1000+'}
                </p>
                <p className="text-xs text-gray-700">
                  {i18n.language === 'fr'
                    ? 'Jardin mémorial'
                    : 'Memorial garden'
                  }
                </p>
              </div>
            </Card>

            {/* Gold Level */}
            <Card className="p-6 border-2 border-yellow-500 bg-yellow-50">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">🥇</div>
                <h3 className="font-bold text-lg mb-2">
                  {i18n.language === 'fr' ? 'Or' : 'Gold'}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {i18n.language === 'fr' ? 'CA$5000+' : 'CA$5000+'}
                </p>
                <p className="text-xs text-gray-700">
                  {i18n.language === 'fr'
                    ? 'Nommer une salle'
                    : 'Name a facility'
                  }
                </p>
              </div>
            </Card>

            {/* Platinum Level */}
            <Card className="p-6 border-2 border-forest-green bg-green-50">
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-green mb-2">👑</div>
                <h3 className="font-bold text-lg mb-2">
                  {i18n.language === 'fr' ? 'Platine' : 'Platinum'}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {i18n.language === 'fr' ? 'CA$10000+' : 'CA$10000+'}
                </p>
                <p className="text-xs text-gray-700">
                  {i18n.language === 'fr'
                    ? 'Projet de paix'
                    : 'Peace project'
                  }
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-amber-50 border-2 border-amber-orange text-center">
            <p className="text-gray-700 mb-4">
              {i18n.language === 'fr'
                ? 'Aucun grand donateur pour le moment. Soyez le premier à créer un héritage durable.'
                : 'No top donors yet. Be the first to create a lasting legacy.'
              }
            </p>
            <Button 
              className="bg-amber-orange hover:bg-amber-light"
              onClick={() => window.location.href = '/donate'}
            >
              {i18n.language === 'fr' ? 'Devenir donateur majeur' : 'Become a Major Donor'}
            </Button>
          </Card>
        </div>

        {/* Legacy Projects Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-forest-green" />
            <h2 className="text-2xl font-bold text-forest-green">
              {i18n.language === 'fr' ? 'Projets d\'Héritage' : 'Legacy Projects'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Tree Planting */}
            <Card className="p-6 border-2 border-green-600">
              <div className="mb-4">
                <div className="text-4xl mb-3">🌱</div>
                <h3 className="text-xl font-bold text-forest-green mb-2">
                  {i18n.language === 'fr' ? 'Forêt de la Paix' : 'Peace Forest'}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {i18n.language === 'fr'
                    ? 'Planter des arbres au centre de guérison'
                    : 'Plant trees at the healing centre'
                  }
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded mb-4">
                <p className="text-sm font-semibold text-forest-green mb-2">
                  {i18n.language === 'fr' ? 'Arbres plantés:' : 'Trees planted:'}
                </p>
                <p className="text-3xl font-bold text-forest-green">0</p>
              </div>
              <p className="text-xs text-gray-600">
                {i18n.language === 'fr'
                  ? 'Chaque arbre représente l\'espoir et la guérison'
                  : 'Each tree represents hope and healing'
                }
              </p>
            </Card>

            {/* Memorial Gardens */}
            <Card className="p-6 border-2 border-amber-orange">
              <div className="mb-4">
                <div className="text-4xl mb-3">🌹</div>
                <h3 className="text-xl font-bold text-forest-green mb-2">
                  {i18n.language === 'fr' ? 'Jardins Mémoriaux' : 'Memorial Gardens'}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {i18n.language === 'fr'
                    ? 'Honorer les familles et les survivants'
                    : 'Honor families and survivors'
                  }
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded mb-4">
                <p className="text-sm font-semibold text-amber-orange mb-2">
                  {i18n.language === 'fr' ? 'Jardins créés:' : 'Gardens created:'}
                </p>
                <p className="text-3xl font-bold text-amber-orange">0</p>
              </div>
              <p className="text-xs text-gray-600">
                {i18n.language === 'fr'
                  ? 'Espaces de réflexion et de paix'
                  : 'Spaces for reflection and peace'
                }
              </p>
            </Card>
          </div>

          {/* Peace Projects */}
          <Card className="p-6 border-2 border-forest-green bg-green-50">
            <div className="mb-4">
              <div className="text-4xl mb-3">☮️</div>
              <h3 className="text-xl font-bold text-forest-green mb-2">
                {i18n.language === 'fr' ? 'Projets de Paix' : 'Peace Projects'}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {i18n.language === 'fr'
                  ? 'Initiatives pour la réconciliation et le changement systémique'
                  : 'Initiatives for reconciliation and systemic change'
                }
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border-l-4 border-forest-green">
                <p className="text-sm font-semibold text-forest-green mb-2">
                  {i18n.language === 'fr' ? 'Familles soutenues' : 'Families supported'}
                </p>
                <p className="text-2xl font-bold text-forest-green">0</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-amber-orange">
                <p className="text-sm font-semibold text-amber-orange mb-2">
                  {i18n.language === 'fr' ? 'Enfants aidés' : 'Children helped'}
                </p>
                <p className="text-2xl font-bold text-amber-orange">0</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-forest-green">
                <p className="text-sm font-semibold text-forest-green mb-2">
                  {i18n.language === 'fr' ? 'Cas gagnés' : 'Cases won'}
                </p>
                <p className="text-2xl font-bold text-forest-green">0</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Monthly Supporters */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-amber-orange" />
            <h2 className="text-2xl font-bold text-forest-green">
              {i18n.language === 'fr' ? 'Soutiens Mensuels' : 'Monthly Supporters'}
            </h2>
          </div>
          
          {monthlySupporters.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {monthlySupporters.map((supporter, idx) => (
                <Card key={idx} className="p-6 border-2 border-amber-orange">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg">
                        {supporter.anonymous ? (i18n.language === 'fr' ? 'Anonyme' : 'Anonymous') : supporter.name}
                      </h3>
                      <p className="text-amber-orange font-semibold">{supporter.amount}</p>
                    </div>
                    <Heart className="w-5 h-5 text-amber-orange" />
                  </div>
                  <p className="text-sm text-gray-600">
                    {i18n.language === 'fr'
                      ? 'Engagement durable pour la justice'
                      : 'Sustained commitment to justice'
                    }
                  </p>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center bg-amber-50 border-2 border-amber-orange">
              <p className="text-gray-600 mb-4">
                {i18n.language === 'fr'
                  ? 'Soyez le premier soutien mensuel'
                  : 'Be the first monthly supporter'
                }
              </p>
              <Button 
                className="bg-amber-orange hover:bg-amber-light"
                onClick={() => window.location.href = '/donate'}
              >
                {i18n.language === 'fr' ? 'Devenir soutien mensuel' : 'Become a Monthly Supporter'}
              </Button>
            </Card>
          )}
        </div>

        {/* One-Time Donors */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-forest-green" />
            <h2 className="text-2xl font-bold text-forest-green">
              {i18n.language === 'fr' ? 'Donateurs Généreux' : 'Generous Donors'}
            </h2>
          </div>
          
          {oneTimeDonors.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {oneTimeDonors.map((donor, idx) => (
                <Card key={idx} className="p-6 border-2 border-forest-green">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg">
                        {donor.anonymous ? (i18n.language === 'fr' ? 'Anonyme' : 'Anonymous') : donor.name}
                      </h3>
                      <p className="text-forest-green font-semibold">{donor.amount}</p>
                    </div>
                    <Heart className="w-5 h-5 text-forest-green fill-forest-green" />
                  </div>
                  <p className="text-sm text-gray-600">
                    {i18n.language === 'fr'
                      ? 'Contribution généreuse à la justice'
                      : 'Generous contribution to justice'
                    }
                  </p>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center bg-green-50 border-2 border-forest-green">
              <p className="text-gray-600 mb-4">
                {i18n.language === 'fr'
                  ? 'Soyez le premier donateur'
                  : 'Be the first donor'
                }
              </p>
              <Button 
                className="bg-forest-green hover:bg-forest-green/90"
                onClick={() => window.location.href = '/donate'}
              >
                {i18n.language === 'fr' ? 'Faire un don' : 'Make a Donation'}
              </Button>
            </Card>
          )}
        </div>

        {/* Organizational Partners */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-amber-orange" />
            <h2 className="text-2xl font-bold text-forest-green">
              {i18n.language === 'fr' ? 'Partenaires Organisationnels' : 'Organizational Partners'}
            </h2>
          </div>
          
          {organizationalPartners.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {organizationalPartners.map((partner, idx) => (
                <Card key={idx} className="p-6 border-2 border-amber-orange">
                  <div className="mb-3">
                    <h3 className="font-bold text-lg mb-2">{partner.name}</h3>
                    <p className="text-amber-orange font-semibold text-sm">{partner.commitment}</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    {i18n.language === 'fr'
                      ? '100% des dons soutiennent directement la Fondation'
                      : '100% of donations directly support the Foundation'
                    }
                  </p>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center bg-amber-50 border-2 border-amber-orange">
              <p className="text-gray-600 mb-4">
                {i18n.language === 'fr'
                  ? 'Votre organisation peut être partenaire'
                  : 'Your organization can be a partner'
                }
              </p>
              <Button 
                variant="outline"
                onClick={() => window.location.href = 'mailto:justiceforbarran@gmail.com'}
              >
                {i18n.language === 'fr' ? 'Nous contacter' : 'Contact Us'}
              </Button>
            </Card>
          )}
        </div>

        {/* How to Become a Sponsor */}
        <Card className="p-8 bg-gradient-to-r from-forest-green to-amber-orange text-white mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {i18n.language === 'fr' ? 'Comment devenir partenaire' : 'How to Become a Partner'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-3">1</div>
              <h3 className="font-bold mb-2">
                {i18n.language === 'fr' ? 'S\'engager' : 'Commit'}
              </h3>
              <p className="text-white/90">
                {i18n.language === 'fr'
                  ? 'S\'engager à ce que 100% de vos dons soutiennent la Fondation'
                  : 'Commit to 100% of your donations supporting the Foundation'
                }
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-3">2</div>
              <h3 className="font-bold mb-2">
                {i18n.language === 'fr' ? 'Donner' : 'Donate'}
              </h3>
              <p className="text-white/90">
                {i18n.language === 'fr'
                  ? 'Faire un don via Stripe ou virement électronique'
                  : 'Donate via Stripe or e-Transfer'
                }
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-3">3</div>
              <h3 className="font-bold mb-2">
                {i18n.language === 'fr' ? 'Être reconnu' : 'Get Recognized'}
              </h3>
              <p className="text-white/90">
                {i18n.language === 'fr'
                  ? 'Être reconnu comme partenaire communautaire'
                  : 'Be recognized as a community partner'
                }
              </p>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-forest-green mb-4">
            {i18n.language === 'fr' ? 'Rejoignez notre communauté' : 'Join Our Community'}
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            {i18n.language === 'fr'
              ? 'Que vous soyez un individu, une organisation ou une entreprise, vous pouvez soutenir la Justice pour Barran. Ensemble, nous créons le changement systémique.'
              : 'Whether you\'re an individual, organization, or business, you can support Justice for Barran. Together, we create systemic change.'
            }
          </p>
          <Button 
            className="bg-forest-green hover:bg-forest-green/90 px-8 py-3 text-lg"
            onClick={() => window.location.href = '/donate'}
          >
            {i18n.language === 'fr' ? 'Devenir partenaire' : 'Become a Partner'}
          </Button>
        </div>
      </div>
    </div>
  );
}
