import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, CreditCard, Banknote, Share2, Users, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DonateEnhanced() {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly' | 'sponsorship'>('one-time');
  
  const stripeOneTimeLink = "https://buy.stripe.com/eVqeVdewcema0IBdJf9EI00";
  const stripeMonthlyLink = "https://buy.stripe.com/test_9B63cvgJA8cE3M048T3Ru01"; // Placeholder - update with actual recurring link
  const donationLink = "https://indigenousadv-ahjdmzis.manus.space/donate";
  const etransferEmail = "justiceforbarran@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(donationLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const donationAmounts = [5, 10, 20, 50, 100];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero */}
      <div className="bg-forest-green text-white py-12 px-4 text-center">
        <Heart className="w-12 h-12 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">
          {i18n.language === 'fr' ? 'Soutenir la Justice pour Barran' : 'Support Justice for Barran'}
        </h1>
        <p className="text-lg opacity-90">
          {i18n.language === 'fr' 
            ? 'Chaque don soutient directement l\'action juridique et le changement systémique'
            : 'Every donation directly supports legal advocacy and systemic change'
          }
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Donation Type Selector */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <button
            onClick={() => setDonationType('one-time')}
            className={`p-4 rounded-lg border-2 transition ${
              donationType === 'one-time'
                ? 'border-amber-orange bg-amber-50'
                : 'border-gray-200 hover:border-amber-orange'
            }`}
          >
            <div className="font-bold text-lg mb-1">
              {i18n.language === 'fr' ? 'Don unique' : 'One-Time Donation'}
            </div>
            <div className="text-sm text-gray-600">
              {i18n.language === 'fr' ? 'Contribuer une fois' : 'Contribute once'}
            </div>
          </button>

          <button
            onClick={() => setDonationType('monthly')}
            className={`p-4 rounded-lg border-2 transition ${
              donationType === 'monthly'
                ? 'border-amber-orange bg-amber-50'
                : 'border-gray-200 hover:border-amber-orange'
            }`}
          >
            <div className="font-bold text-lg mb-1">
              {i18n.language === 'fr' ? 'Soutien mensuel' : 'Monthly Support'}
            </div>
            <div className="text-sm text-gray-600">
              {i18n.language === 'fr' ? 'Engagement durable' : 'Sustained commitment'}
            </div>
          </button>

          <button
            onClick={() => setDonationType('sponsorship')}
            className={`p-4 rounded-lg border-2 transition ${
              donationType === 'sponsorship'
                ? 'border-amber-orange bg-amber-50'
                : 'border-gray-200 hover:border-amber-orange'
            }`}
          >
            <div className="font-bold text-lg mb-1">
              {i18n.language === 'fr' ? 'Partenaire' : 'Sponsorship'}
            </div>
            <div className="text-sm text-gray-600">
              {i18n.language === 'fr' ? 'Visibilité communautaire' : 'Community visibility'}
            </div>
          </button>
        </div>

        {/* One-Time Donations */}
        {donationType === 'one-time' && (
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold text-forest-green">
              {i18n.language === 'fr' ? 'Don unique' : 'One-Time Donation'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card Donation */}
              <Card className="p-6 hover:shadow-lg transition border-2 border-amber-orange">
                <CreditCard className="w-8 h-8 text-amber-orange mb-3" />
                <h3 className="text-xl font-bold mb-2">
                  {i18n.language === 'fr' ? 'Payer par carte' : 'Donate by Card'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {i18n.language === 'fr' 
                    ? 'Paiement sécurisé par carte de crédit/débit'
                    : 'Secure credit/debit card payment'
                  }
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => window.open(`${stripeOneTimeLink}?amount=${amount}`, '_blank')}
                      className="px-3 py-2 bg-amber-orange hover:bg-amber-light text-white rounded font-semibold transition text-sm"
                    >
                      CA${amount}
                    </button>
                  ))}
                </div>
                <Button 
                  className="w-full bg-amber-orange hover:bg-amber-light"
                  onClick={() => window.open(stripeOneTimeLink, '_blank')}
                >
                  {i18n.language === 'fr' ? 'Montant personnalisé' : 'Custom Amount'}
                </Button>
              </Card>

              {/* E-Transfer */}
              <Card className="p-6 hover:shadow-lg transition border-2 border-forest-green">
                <Banknote className="w-8 h-8 text-forest-green mb-3" />
                <h3 className="text-xl font-bold mb-2">
                  {i18n.language === 'fr' ? 'Virement électronique' : 'E-Transfer (Canada)'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {i18n.language === 'fr' 
                    ? 'Envoyer à: ' + etransferEmail
                    : 'Send to: ' + etransferEmail
                  }
                </p>
                <div className="bg-gray-50 p-3 rounded mb-4 text-sm font-mono">
                  {etransferEmail}
                </div>
                <Button 
                  className="w-full bg-forest-green hover:bg-forest-green/90"
                  onClick={() => navigator.clipboard.writeText(etransferEmail)}
                >
                  {i18n.language === 'fr' ? 'Copier l\'adresse e-mail' : 'Copy Email'}
                </Button>
              </Card>
            </div>
          </div>
        )}

        {/* Monthly Recurring */}
        {donationType === 'monthly' && (
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold text-forest-green">
              {i18n.language === 'fr' ? 'Soutien mensuel' : 'Monthly Support'}
            </h2>
            <p className="text-gray-700 text-lg">
              {i18n.language === 'fr'
                ? 'Devenez un allié durable de la Justice pour Barran. Vos contributions mensuelles soutiennent directement l\'action juridique et le changement systémique.'
                : 'Become a sustained ally for Justice for Barran. Your monthly contributions directly support legal advocacy and systemic change.'
              }
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Monthly Card Donation */}
              <Card className="p-6 hover:shadow-lg transition border-2 border-amber-orange">
                <TrendingUp className="w-8 h-8 text-amber-orange mb-3" />
                <h3 className="text-xl font-bold mb-2">
                  {i18n.language === 'fr' ? 'Abonnement mensuel' : 'Monthly Subscription'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {i18n.language === 'fr'
                    ? 'Engagement durable avec reconnaissance communautaire'
                    : 'Sustained commitment with community recognition'
                  }
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => window.open(`${stripeMonthlyLink}?amount=${amount}`, '_blank')}
                      className="px-3 py-2 bg-amber-orange hover:bg-amber-light text-white rounded font-semibold transition text-sm"
                    >
                      ${amount}/mo
                    </button>
                  ))}
                </div>
                <Button 
                  className="w-full bg-amber-orange hover:bg-amber-light"
                  onClick={() => window.open(stripeMonthlyLink, '_blank')}
                >
                  {i18n.language === 'fr' ? 'Montant personnalisé' : 'Custom Amount'}
                </Button>
              </Card>

              {/* Benefits */}
              <Card className="p-6 bg-amber-50 border-2 border-amber-orange">
                <h3 className="text-xl font-bold mb-4">
                  {i18n.language === 'fr' ? 'Avantages du soutien mensuel' : 'Monthly Supporter Benefits'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <span className="text-amber-orange font-bold">✓</span>
                    <span>
                      {i18n.language === 'fr'
                        ? 'Reconnaissance sur la page des partenaires'
                        : 'Recognition on sponsors page'
                      }
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-orange font-bold">✓</span>
                    <span>
                      {i18n.language === 'fr'
                        ? 'Rapports d\'impact mensuels'
                        : 'Monthly impact reports'
                      }
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-orange font-bold">✓</span>
                    <span>
                      {i18n.language === 'fr'
                        ? 'Mises à jour exclusives'
                        : 'Exclusive updates'
                      }
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-orange font-bold">✓</span>
                    <span>
                      {i18n.language === 'fr'
                        ? 'Option d\'anonymat disponible'
                        : 'Anonymity option available'
                      }
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        )}

        {/* Sponsorship */}
        {donationType === 'sponsorship' && (
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold text-forest-green">
              {i18n.language === 'fr' ? 'Programme de partenariat' : 'Sponsorship Program'}
            </h2>
            <p className="text-gray-700 text-lg">
              {i18n.language === 'fr'
                ? 'Les organisations et entreprises qui s\'engagent à ce que 100% de leurs dons soutiennent directement la Fondation Justice pour Barran peuvent être reconnues comme partenaires communautaires.'
                : 'Organizations and businesses that commit to 100% of their donations directly supporting the Justice for Barran Foundation can be recognized as community partners.'
              }
            </p>

            <Card className="p-6 bg-green-50 border-2 border-forest-green">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-forest-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    {i18n.language === 'fr' ? 'Engagement 100% transparent' : '100% Transparent Commitment'}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {i18n.language === 'fr'
                      ? 'Tous les dons de nos partenaires vont directement à la Fondation Justice pour Barran. Aucun frais administratif, aucune part des bénéfices - 100% pour la cause.'
                      : 'All donations from our partners go directly to the Justice for Barran Foundation. No administrative fees, no profit-sharing - 100% to the cause.'
                    }
                  </p>
                  <div className="bg-white p-4 rounded border-l-4 border-forest-green mb-4">
                    <p className="font-semibold text-forest-green mb-2">
                      {i18n.language === 'fr' ? 'Ce que vous recevez:' : 'What you receive:'}
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>✓ {i18n.language === 'fr' ? 'Logo/nom sur la page des partenaires' : 'Logo/name on sponsors page'}</li>
                      <li>✓ {i18n.language === 'fr' ? 'Reconnaissance sur les réseaux sociaux' : 'Social media recognition'}</li>
                      <li>✓ {i18n.language === 'fr' ? 'Rapports d\'impact trimestriels' : 'Quarterly impact reports'}</li>
                      <li>✓ {i18n.language === 'fr' ? 'Transparence complète sur l\'utilisation des fonds' : 'Full transparency on fund usage'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition">
                <h3 className="text-lg font-bold mb-3">
                  {i18n.language === 'fr' ? 'Partenaires individuels' : 'Individual Partners'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {i18n.language === 'fr'
                    ? 'Engagement personnel avec reconnaissance optionnelle'
                    : 'Personal commitment with optional recognition'
                  }
                </p>
                <Button 
                  className="w-full bg-forest-green hover:bg-forest-green/90"
                  onClick={() => window.open(stripeOneTimeLink, '_blank')}
                >
                  {i18n.language === 'fr' ? 'Devenir partenaire' : 'Become a Partner'}
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition">
                <h3 className="text-lg font-bold mb-3">
                  {i18n.language === 'fr' ? 'Partenaires organisationnels' : 'Organizational Partners'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {i18n.language === 'fr'
                    ? 'Contactez-nous pour discuter d\'un partenariat personnalisé'
                    : 'Contact us to discuss customized partnership'
                  }
                </p>
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={() => window.location.href = "mailto:justiceforbarran@gmail.com"}
                >
                  {i18n.language === 'fr' ? 'Nous contacter' : 'Contact Us'}
                </Button>
              </Card>
            </div>
          </div>
        )}

        {/* Share Section */}
        <Card className="p-6 bg-amber-50 border-2 border-amber-orange mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Share2 className="w-6 h-6 text-amber-orange" />
            <h3 className="text-xl font-bold">
              {i18n.language === 'fr' ? 'Partager et faire passer le mot' : 'Share & Spread the Word'}
            </h3>
          </div>
          <p className="text-gray-700 mb-4">
            {i18n.language === 'fr'
              ? 'Aidez-nous à atteindre plus de supporters:'
              : 'Help us reach more supporters:'
            }
          </p>
          <div className="flex gap-2 flex-wrap">
            <Button 
              variant="outline"
              onClick={copyToClipboard}
              className="flex-1"
            >
              {copied ? "✓ " : ""}{i18n.language === 'fr' ? 'Copier le lien' : 'Copy Link'}
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                const text = i18n.language === 'fr'
                  ? `Soutenir la Justice pour Barran - Aider à combattre le changement systémique dans la protection des enfants. Donner: ${donationLink}`
                  : `Support Justice for Barran - Help fight for systemic change in child protection. Donate: ${donationLink}`;
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="flex-1"
            >
              {i18n.language === 'fr' ? 'Partager sur Twitter' : 'Share on Twitter'}
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(donationLink)}`, '_blank');
              }}
              className="flex-1"
            >
              {i18n.language === 'fr' ? 'Partager sur Facebook' : 'Share on Facebook'}
            </Button>
          </div>
        </Card>

        {/* Pension Fund & Long-Term Vision */}
        <Card className="p-8 bg-gradient-to-r from-forest-green/10 to-amber-orange/10 border-2 border-forest-green mb-12">
          <h3 className="text-2xl font-bold text-forest-green mb-4">
            {i18n.language === 'fr' ? 'Vision à long terme: Fonds de pension & Durabilité' : 'Long-Term Vision: Pension Fund & Sustainability'}
          </h3>
          <div className="space-y-4 text-gray-700">
            <p>
              {i18n.language === 'fr'
                ? 'Vos dons d\'aujourd\'hui soutiennent les frais juridiques immédiats et les opérations du centre de guérison. Si nous gagnons le jugement du fonds de pension, ces fonds de règlement, combinés à vos dons continus, créeront un financement durable à long terme pour:'
                : 'Your donations today support immediate legal costs and healing centre operations. If we win the Pension Fund Judgement, those settlement funds combined with your ongoing donations will create sustainable long-term funding for:'
              }
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-2">
                <span className="text-forest-green font-bold">✓</span>
                <span>
                  {i18n.language === 'fr'
                    ? 'Maintenance et expansion du McGovern Arts Ranch Healing Centre'
                    : 'Maintenance and expansion of McGovern Arts Ranch Healing Centre'
                  }
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-forest-green font-bold">✓</span>
                <span>
                  {i18n.language === 'fr'
                    ? 'Thérapie équine et programmes de guérison pour les enfants des Premières Nations'
                    : 'Equine therapy and healing programs for First Nations children'
                  }
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-forest-green font-bold">✓</span>
                <span>
                  {i18n.language === 'fr'
                    ? 'Soutien aux familles autochtones en crise'
                    : 'Support for Indigenous families in crisis'
                  }
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-forest-green font-bold">✓</span>
                <span>
                  {i18n.language === 'fr'
                    ? 'Changement systémique dans la protection des enfants'
                    : 'Systemic change in child protection'
                  }
                </span>
              </li>
            </ul>
            <p className="font-semibold text-forest-green mt-4">
              {i18n.language === 'fr'
                ? 'Ensemble, nous créons un héritage durable pour les générations à venir.'
                : 'Together, we create a lasting legacy for generations to come.'
              }
            </p>
          </div>
        </Card>

        {/* Impact Section */}
        <div className="bg-forest-green text-white p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-bold mb-6">
            {i18n.language === 'fr' ? 'Votre impact' : 'Your Impact'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-orange mb-2">100%</div>
              <p className="text-white/90">
                {i18n.language === 'fr'
                  ? 'Les dons soutiennent l\'action juridique'
                  : 'Donations support legal advocacy'
                }
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-orange mb-2">0%</div>
              <p className="text-white/90">
                {i18n.language === 'fr'
                  ? 'Frais administratifs'
                  : 'Administrative fees'
                }
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-orange mb-2">∞</div>
              <p className="text-white/90">
                {i18n.language === 'fr'
                  ? 'Potentiel de changement systémique'
                  : 'Systemic change potential'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            {i18n.language === 'fr'
              ? 'Des questions sur les dons?'
              : 'Questions about donations?'
            }
          </p>
          <Button 
            variant="outline"
            onClick={() => window.location.href = "mailto:justiceforbarran@gmail.com"}
          >
            {i18n.language === 'fr' ? 'Nous contacter' : 'Contact Us'}
          </Button>
        </div>
      </div>
    </div>
  );
}
