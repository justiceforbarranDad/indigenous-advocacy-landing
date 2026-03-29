import { useAuth } from "@/_core/hooks/useAuth";
import { Link } from 'wouter';
import { AlertCircle, FileText, Globe } from 'lucide-react';
import { useState } from 'react';
import { SurveyBox } from '@/components/SurveyBox';

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const [expandedLetter, setExpandedLetter] = useState('en');

  const unLetterSummary = {
    en: {
      title: "BREAKING NEWS: UN Letter Submitted",
      subtitle: "Urgent Communication to UN Special Rapporteurs",
      date: "March 27, 2026",
      summary: "A formal complaint has been submitted to the United Nations Special Rapporteur on the Rights of Indigenous Peoples and Special Rapporteur on the Rights of the Child, documenting five years of systemic failure, denial of services, and institutional obstruction against a First Nations child victim of attempted murder in Quebec, Canada.",
      highlights: [
        "Five-year denial of psychological services following near-fatal stabbing",
        "Violation of Jordan's Principle - federal legal obligation ignored",
        "Political intimidation and suppression of victim's family",
        "Complete institutional obstruction at all government levels",
        "Request for urgent UN intervention and accountability"
      ],
      reference: "CHRC Reference: 100021349 | CHRC Inquiry: I2303084"
    },
    fr: {
      title: "DERNIÈRES NOUVELLES: Lettre aux Nations Unies",
      subtitle: "Communication Urgente aux Rapporteurs Spéciaux de l'ONU",
      date: "27 mars 2026",
      summary: "Une plainte officielle a été soumise aux Rapporteurs spéciaux des Nations Unies sur les droits des peuples autochtones et sur les droits de l'enfant, documentant cinq ans d'échec systémique, de refus de services et d'obstruction institutionnelle contre une enfant des Premières Nations victime d'une tentative de meurtre au Québec, Canada.",
      highlights: [
        "Cinq ans de refus de services psychologiques suite à une tentative de meurtre",
        "Violation du Principe de Jordan - obligation juridique fédérale ignorée",
        "Intimidation politique et suppression de la famille de la victime",
        "Obstruction institutionnelle complète à tous les niveaux gouvernementaux",
        "Demande d'intervention urgente de l'ONU et de responsabilité"
      ],
      reference: "Référence CHRC: 100021349 | Enquête CHRC: I2303084"
    }
  };

  const letter = unLetterSummary[expandedLetter as keyof typeof unLetterSummary];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Breaking News Banner - UN Letter */}
      <div className="w-full bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-8 px-4 shadow-2xl border-b-4 border-red-900 animate-pulse">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 mb-4">
            <AlertCircle size={32} className="flex-shrink-0 mt-1" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-white text-red-700 font-bold px-3 py-1 rounded-full text-sm">BREAKING NEWS</span>
                <span className="text-sm opacity-90">{letter.date}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{letter.title}</h2>
              <p className="text-xl opacity-95">{letter.subtitle}</p>
            </div>
          </div>

          {/* Language Toggle */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setExpandedLetter('en')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                expandedLetter === 'en'
                  ? 'bg-white text-red-700'
                  : 'bg-red-600 text-white hover:bg-red-500'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setExpandedLetter('fr')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                expandedLetter === 'fr'
                  ? 'bg-white text-red-700'
                  : 'bg-red-600 text-white hover:bg-red-500'
              }`}
            >
              Français
            </button>
          </div>

          {/* Letter Summary */}
          <div className="bg-red-600/50 rounded-lg p-6 mb-4">
            <p className="text-lg leading-relaxed mb-4">{letter.summary}</p>
            <div className="space-y-2 mb-4">
              <p className="font-semibold text-sm">Key Points:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {letter.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm opacity-90 italic">{letter.reference}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#full-letter"
              className="inline-flex items-center gap-2 bg-white text-red-700 font-bold px-6 py-3 rounded-lg hover:bg-red-50 transition-colors"
            >
              <FileText size={20} />
              Read Full Letter
            </a>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-red-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-400 transition-colors"
            >
              <Globe size={20} />
              View Documentation
            </Link>
          </div>
        </div>
      </div>

      {/* French Podcast Announcement Banner */}
      <div className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">🎙️ Nouveau Podcast en Français</h2>
            <p className="text-lg mb-4">Découvrez la série complète de 5 épisodes: <strong>Dimanche Sanglant, Partie Deux</strong></p>
            <p className="text-sm opacity-90">Justice pour Barran - Enquête systémique et appels à la justice</p>
          </div>
          <Link href="/french-podcast" className="bg-white text-amber-700 font-bold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors whitespace-nowrap inline-block">
            Écouter les Épisodes →
          </Link>
        </div>
      </div>

      {/* Additional CTA Section Below Video */}
      <div className="w-full bg-amber-50 py-8 px-4 border-t-4 border-amber-600">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Soutenez Notre Cause</h3>
          <p className="text-lg text-amber-800 mb-6">Écoutez les témoignages, partagez l'histoire, et rejoignez le mouvement pour la justice.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/french-podcast" className="bg-amber-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors inline-block">
              Podcast Français
            </Link>
            <Link href="/donate-etransfer" className="bg-green-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block">
              Donner via e-Transfer
            </Link>
            <a href="https://www.gofundme.com/f/justice-for-barran" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              GoFundMe Campaign
            </a>
          </div>
        </div>
      </div>

      {/* Full Letter Section */}
      <div id="full-letter" className="w-full bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            {expandedLetter === 'en' ? 'Full UN Letter' : 'Lettre Complète aux Nations Unies'}
          </h3>
          <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-red-700 max-h-96 overflow-y-auto">
            {expandedLetter === 'en' ? (
              <div className="text-sm leading-relaxed space-y-4 font-mono text-gray-800">
                <p><strong>March 27, 2026</strong></p>
                <p><strong>Special Rapporteur on the Rights of Indigenous Peoples</strong><br/>
                <strong>Special Rapporteur on the Rights of the Child</strong><br/>
                Office of the United Nations High Commissioner for Human Rights<br/>
                Palais des Nations, 8-14 Avenue de la Paix, 1211 Geneva 10, Switzerland</p>
                
                <p><strong>URGENT COMMUNICATION:</strong> Five-Year Systemic Failure, Denial of Services, and Institutional Obstruction Against a First Nations Child Victim of Attempted Murder — Quebec, Canada</p>
                
                <p><strong>CHRC Reference: 100021349 | CHRC Inquiry: I2303084</strong></p>
                
                <p>Dear Special Rapporteurs,</p>
                
                <p>I am writing to formally request your urgent intervention in a case of systemic racial discrimination, denial of legally mandated services, violation of Jordan's Principle, political intimidation of a victim's family, and complete institutional obstruction that has continued unresolved for over five years against my children and our family.</p>
                
                <p><strong>I. THE INCIDENT — February 14, 2021</strong></p>
                <p>On Valentine's Day 2021, a registered First Nations child was stabbed three times — in the left lung, in the chest, and in the back. An iPhone in his jacket pocket physically deflected two additional stab attempts that medical staff confirmed would likely have been fatal. He was hospitalized for six days at the Montreal Children's Hospital, with a chest tube for three of those days.</p>
                
                <p><strong>II. SYSTEMATIC DENIAL OF SERVICES</strong></p>
                <p>In April 2021, just two months after the stabbing, formal requests for psychological services were made to both the Direction de la protection de la jeunesse (DPJ) and the Centre intégré de santé et de services sociaux (CISSS) of Laval. Both institutions refused. Not a single psychological session was provided in the months following the near-fatal stabbing.</p>
                
                <p><strong>III. VIOLATION OF JORDAN'S PRINCIPLE</strong></p>
                <p>Jordan's Principle is a federal legal obligation of Canada, established specifically to ensure that First Nations children receive government services without delay, without denial, and without jurisdictional disputes being used as a barrier. At no point did any government body inform the family of their rights under Jordan's Principle.</p>
                
                <p><strong>IV. POLITICAL INTIMIDATION AND SUPPRESSION</strong></p>
                <p>On or about November 2023, an elected official's office sent written communication stating that any further contact regarding government agency conduct "could be considered criminal harassment" and that police charges "could be filed." This threat was issued in response to lawful requests for information about why the Indigenous child was denied services.</p>
                
                <p><strong>V. RELIEF REQUESTED</strong></p>
                <p>We respectfully request that your offices issue an urgent communication to the Government of Canada requesting an immediate explanation of the failure to apply Jordan's Principle in this case and the systemic barriers that caused this family to be denied services for over five years.</p>
                
                <p><strong>Respectfully submitted,</strong><br/>
                <strong>Father and Legal Guardian</strong><br/>
                <strong>March 27, 2026</strong></p>
              </div>
            ) : (
              <div className="text-sm leading-relaxed space-y-4 font-mono text-gray-800">
                <p><strong>27 mars 2026</strong></p>
                <p><strong>Rapporteur spécial sur les droits des peuples autochtones</strong><br/>
                <strong>Rapporteur spécial sur les droits de l'enfant</strong><br/>
                Bureau du Haut-Commissariat des Nations Unies aux droits de l'homme<br/>
                Palais des Nations, 8-14 Avenue de la Paix, 1211 Genève 10, Suisse</p>
                
                <p><strong>COMMUNICATION URGENTE:</strong> Cinq ans d'échec systémique, refus de services et obstruction institutionnelle contre une enfant des Premières Nations victime d'une tentative de meurtre — Québec, Canada</p>
                
                <p><strong>Référence CHRC: 100021349 | Enquête CHRC: I2303084</strong></p>
                
                <p>Madame, Monsieur les Rapporteurs spéciaux,</p>
                
                <p>Je vous écris pour demander formellement votre intervention urgente dans une affaire de discrimination raciale systémique, de refus de services légalement obligatoires, de violation du Principe de Jordan, d'intimidation politique d'une famille de victime, et d'obstruction institutionnelle complète qui s'est poursuivie sans résolution pendant plus de cinq ans contre mes enfants et notre famille.</p>
                
                <p><strong>I. L'INCIDENT — 14 février 2021</strong></p>
                <p>Le jour de la Saint-Valentin 2021, une enfant des Premières Nations inscrite a été poignardée trois fois — au poumon gauche, à la poitrine et au dos. Un iPhone dans sa veste a physiquement dévié deux autres tentatives de poignardage que le personnel médical a confirmé auraient probablement été fatales. Elle a été hospitalisée pendant six jours à l'Hôpital de Montréal pour enfants, avec un drain thoracique pendant trois de ces jours.</p>
                
                <p><strong>II. REFUS SYSTÉMATIQUE DE SERVICES</strong></p>
                <p>En avril 2021, seulement deux mois après le poignardage, des demandes formelles de services psychologiques ont été adressées à la Direction de la protection de la jeunesse (DPJ) et au Centre intégré de santé et de services sociaux (CISSS) de Laval. Les deux institutions ont refusé. Aucune séance psychologique n'a été fournie dans les mois suivant la tentative de meurtre.</p>
                
                <p><strong>III. VIOLATION DU PRINCIPE DE JORDAN</strong></p>
                <p>Le Principe de Jordan est une obligation juridique fédérale du Canada, établie spécifiquement pour assurer que les enfants des Premières Nations reçoivent les services gouvernementaux sans délai, sans refus, et sans que les différends de compétence ne soient utilisés comme obstacle. À aucun moment, un organisme gouvernemental n'a informé la famille de ses droits en vertu du Principe de Jordan.</p>
                
                <p><strong>IV. INTIMIDATION POLITIQUE ET SUPPRESSION</strong></p>
                <p>Vers novembre 2023, le bureau d'un élu a envoyé une communication écrite déclarant que tout contact ultérieur concernant la conduite des organismes gouvernementaux « pourrait être considéré comme du harcèlement criminel » et que des accusations policières « pourraient être déposées ». Cette menace a été émise en réponse à des demandes légales d'information sur les raisons pour lesquelles l'enfant autochtone a été privée de services.</p>
                
                <p><strong>V. MESURES DEMANDÉES</strong></p>
                <p>Nous demandons respectueusement que vos bureaux adressent une communication urgente au gouvernement du Canada demandant une explication immédiate de l'échec à appliquer le Principe de Jordan dans cette affaire et des obstacles systémiques qui ont causé cette famille à être privée de services pendant plus de cinq ans.</p>
                
                <p><strong>Respectueusement soumis,</strong><br/>
                <strong>Père et tuteur légal</strong><br/>
                <strong>27 mars 2026</strong></p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Survey Section */}
      <div className="w-full py-12 px-4 bg-cream">
        <div className="max-w-2xl mx-auto">
          <SurveyBox />
        </div>
      </div>
    </div>
  );
}
