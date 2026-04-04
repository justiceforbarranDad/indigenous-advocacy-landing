import { Card } from "@/components/ui/card";
import { Heart, Banknote, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export default function DonateEnhanced() {
  const { i18n } = useTranslation();
  const [copied, setCopied] = useState(false);
  
  const etransferEmail = "justiceforbarran@gmail.com";
  const tdBankAccount = "justiceforbarran@gmail.com"; // TD e-Transfer email
  const donationAmounts = [5, 10, 20, 50, 100, 250];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDirectETransfer = (amount: number) => {
    // Open banking app with e-Transfer protocol
    const etransferLink = `interac://etransfer?email=${etransferEmail}&amount=${amount}`;
    window.location.href = etransferLink;
    
    // Fallback: Show instructions
    setTimeout(() => {
      alert(`Send CA$${amount} e-Transfer to: ${etransferEmail}\n\nIf your banking app didn't open, manually enter this email in your bank's e-Transfer form.`);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero */}
      <div className="bg-forest-green text-white py-16 px-4 text-center">
        <Heart className="w-12 h-12 mx-auto mb-4 text-amber-orange" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {i18n.language === 'fr' ? 'Soutenir la Justice pour Barran' : i18n.language === 'ht' ? 'Sipòte Jistis pou Barran' : 'Support Justice for Barran'}
        </h1>
        <p className="text-lg opacity-90 mb-2">
          {i18n.language === 'fr' 
            ? 'Chaque don soutient directement l\'action juridique et le changement systémique'
            : i18n.language === 'ht'
            ? 'Chak don sipòte dirèkteman aksyon legal ak chanjman sistematik'
            : 'Every donation directly supports legal advocacy and systemic change'
          }
        </p>
        <p className="text-amber-orange font-semibold">✓ 100% of donations go directly to advocacy and legal support</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Main Donation Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-forest-green mb-8 text-center">
            {i18n.language === 'fr' ? 'Donner maintenant' : i18n.language === 'ht' ? 'Donnen kounye a' : 'Donate Now'}
          </h2>
          
          {/* Direct TD e-Transfer */}
          <Card className="p-8 bg-white border-4 border-amber-orange hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-6">
              <Banknote className="w-8 h-8 text-amber-orange" />
              <h3 className="text-2xl font-bold text-forest-green">
                {i18n.language === 'fr' ? 'Virement électronique TD' : i18n.language === 'ht' ? 'Transfè Elektwonik TD' : 'TD e-Transfer - Direct Deposit'}
              </h3>
            </div>
            
            <p className="text-lg text-charcoal mb-6">
              {i18n.language === 'fr' 
                ? 'Le moyen le plus rapide et le plus simple de soutenir. Pas de frais. Pas de formulaire. Juste un clic.'
                : i18n.language === 'ht'
                ? 'Fason ki pi vit ak pi senp pou sipòte. Pa gen frè. Pa gen fòm. Jis yon klik.'
                : 'The fastest and simplest way to support. No fees. No forms. Just one click.'
              }
            </p>

            {/* Quick Amount Selection */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-charcoal mb-4">
                {i18n.language === 'fr' ? 'Choisir un montant:' : i18n.language === 'ht' ? 'Chwazi yon montan:' : 'Choose an amount:'}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleDirectETransfer(amount)}
                    className="px-4 py-3 bg-amber-orange hover:bg-amber-light text-white rounded-lg font-bold transition transform hover:scale-105"
                  >
                    CA${amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Manual Entry Instructions */}
            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-orange/30">
              <p className="text-sm font-semibold text-charcoal mb-3">
                {i18n.language === 'fr' ? 'Ou entrez manuellement:' : i18n.language === 'ht' ? 'Oswa antre manyèlman:' : 'Or enter manually:'}
              </p>
              <div className="flex items-center gap-3 bg-white p-4 rounded border border-amber-orange">
                <code className="flex-1 font-mono text-charcoal">{etransferEmail}</code>
                <button
                  onClick={() => copyToClipboard(etransferEmail)}
                  className="flex items-center gap-2 px-3 py-2 bg-amber-orange hover:bg-amber-light text-white rounded font-semibold transition"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <p className="text-xs text-charcoal-light mt-3">
                {i18n.language === 'fr' 
                  ? 'Collez cette adresse e-mail dans votre application bancaire pour envoyer un virement électronique.'
                  : i18n.language === 'ht'
                  ? 'Kole adrès imèl sa a nan aplikasyon bank ou pou voye yon transfè elektwonik.'
                  : 'Paste this email address into your banking app to send an e-Transfer.'
                }
              </p>
            </div>
          </Card>
        </div>

        {/* Impact Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 bg-white border-2 border-forest-green/20 hover:shadow-lg transition">
            <div className="text-3xl font-bold text-amber-orange mb-2">$5</div>
            <p className="text-sm text-charcoal-light">
              {i18n.language === 'fr' 
                ? 'Soutient la portée de la campagne sur les médias sociaux'
                : i18n.language === 'ht'
                ? 'Sipòte ranje kampay medya sosyal'
                : 'Supports social media campaign reach'
              }
            </p>
          </Card>
          <Card className="p-6 bg-white border-2 border-forest-green/20 hover:shadow-lg transition">
            <div className="text-3xl font-bold text-amber-orange mb-2">$25</div>
            <p className="text-sm text-charcoal-light">
              {i18n.language === 'fr' 
                ? 'Finance la préparation des documents juridiques'
                : i18n.language === 'ht'
                ? 'Finansman pou dokiman legal'
                : 'Funds legal document preparation'
              }
            </p>
          </Card>
          <Card className="p-6 bg-white border-2 border-forest-green/20 hover:shadow-lg transition">
            <div className="text-3xl font-bold text-amber-orange mb-2">$100+</div>
            <p className="text-sm text-charcoal-light">
              {i18n.language === 'fr' 
                ? 'Soutient les frais de consultation juridique'
                : i18n.language === 'ht'
                ? 'Sipòte frè konsiltasyon legal'
                : 'Supports legal consultation fees'
              }
            </p>
          </Card>
        </div>

        {/* FAQ */}
        <div className="bg-cream p-8 rounded-lg border-2 border-forest-green/20">
          <h3 className="text-2xl font-bold text-forest-green mb-6">
            {i18n.language === 'fr' ? 'Questions fréquentes' : i18n.language === 'ht' ? 'Kesyon Souvan Poze' : 'Frequently Asked Questions'}
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-charcoal mb-2">
                {i18n.language === 'fr' ? 'Est-ce sûr?' : i18n.language === 'ht' ? 'Èske li an sekirite?' : 'Is it safe?'}
              </p>
              <p className="text-charcoal-light">
                {i18n.language === 'fr' 
                  ? 'Oui. e-Transfer est sécurisé et chiffré par votre banque. Aucune information de carte de crédit n\'est partagée.'
                  : i18n.language === 'ht'
                  ? 'Wi. e-Transfer an sekirite ak chifre pa bank ou. Pa gen enfòmasyon kat kredi ki pataje.'
                  : 'Yes. e-Transfer is secure and encrypted by your bank. No credit card information is shared.'
                }
              </p>
            </div>
            <div>
              <p className="font-bold text-charcoal mb-2">
                {i18n.language === 'fr' ? 'Y a-t-il des frais?' : i18n.language === 'ht' ? 'Èske gen frè?' : 'Are there fees?'}
              </p>
              <p className="text-charcoal-light">
                {i18n.language === 'fr' 
                  ? 'Non. e-Transfer n\'a pas de frais. 100% de votre don va directement à la Justice pour Barran.'
                  : i18n.language === 'ht'
                  ? 'Non. e-Transfer pa gen frè. 100% nan don ou ale dirèkteman nan Jistis pou Barran.'
                  : 'No. e-Transfer has no fees. 100% of your donation goes directly to Justice for Barran.'
                }
              </p>
            </div>
            <div>
              <p className="font-bold text-charcoal mb-2">
                {i18n.language === 'fr' ? 'Puis-je faire un don mensuel?' : i18n.language === 'ht' ? 'Èske mwen ka fè yon don chak mwa?' : 'Can I make a monthly donation?'}
              </p>
              <p className="text-charcoal-light">
                {i18n.language === 'fr' 
                  ? 'Oui. Envoyez simplement un e-Transfer chaque mois au même montant. Votre soutien durable aide à financer l\'action juridique continue.'
                  : i18n.language === 'ht'
                  ? 'Wi. Jis voye yon e-Transfer chak mwa nan menm montan an. Sipòt ou ki dire ede finansman aksyon legal kontinyèl.'
                  : 'Yes. Simply send an e-Transfer each month for the same amount. Your sustained support helps fund ongoing legal action.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
