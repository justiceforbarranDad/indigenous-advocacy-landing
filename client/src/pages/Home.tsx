import { useAuth } from "@/_core/hooks/useAuth";
import { Link } from 'wouter';
import { AlertCircle, FileText, Globe, Play, Heart, Signature } from 'lucide-react';
import { useState } from 'react';
import { SurveyBox } from '@/components/SurveyBox';

const BG_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_ljzvky_image_dac505a0.png";

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
      {/* Barran's 20th Birthday Celebration Banner */}
      <div className="w-full bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 text-white py-6 px-4 shadow-2xl border-b-4 border-purple-900 animate-pulse">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">🎉 Celebrating Barran's 20th Birthday 🎉</h2>
          <p className="text-lg mb-4">Today, March 28, 2026 - A New Chapter Begins</p>
          <p className="text-base mb-4 max-w-2xl mx-auto">
            "The day of real truth will come out shortly. Thank you for all your support. Together, we will achieve justice and accountability."
          </p>
          <Link href="/donate" className="inline-flex items-center gap-2 bg-white text-purple-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-colors drop-shadow-lg">
            <Heart size={20} /> Donate Now - Support Barran's Journey
          </Link>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-screen flex items-center justify-center py-12 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${BG_IMAGE}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Current Truth Before Reconciliation
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Justice for Indigenous Children • Systemic Accountability • Truth & Healing
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="/french-podcast" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors drop-shadow-lg">
              <Play size={20} /> Listen to Podcast
            </Link>
            <Link href="/volunteer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors drop-shadow-lg">
              <Heart size={20} /> Get Involved
            </Link>
            <Link href="/petition" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors drop-shadow-lg">
              <Signature size={20} /> Sign Petition
            </Link>
          </div>
        </div>
      </section>

      {/* Breaking News Banner - UN Letter */}
      <div className="w-full bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-8 px-4 shadow-2xl border-b-4 border-red-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 mb-4">
            <AlertCircle size={32} className="flex-shrink-0 mt-1" />
            <div>
              <div className="inline-block bg-white text-red-700 px-3 py-1 rounded-full font-bold text-sm mb-2">
                BREAKING NEWS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{letter.title}</h2>
              <p className="text-lg opacity-90">{letter.subtitle}</p>
              <p className="text-sm opacity-75 mt-1">{letter.date}</p>
            </div>
          </div>

          {/* Language Toggle */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setExpandedLetter('en')}
              className={`px-4 py-2 rounded font-semibold transition-colors ${
                expandedLetter === 'en'
                  ? 'bg-white text-red-700'
                  : 'bg-red-600 text-white hover:bg-red-500'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setExpandedLetter('fr')}
              className={`px-4 py-2 rounded font-semibold transition-colors ${
                expandedLetter === 'fr'
                  ? 'bg-white text-red-700'
                  : 'bg-red-600 text-white hover:bg-red-500'
              }`}
            >
              Français
            </button>
          </div>

          {/* Letter Summary */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
            <p className="text-lg leading-relaxed mb-6">{letter.summary}</p>
            
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3">Key Points:</h3>
              <ul className="space-y-2">
                {letter.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-amber-300 font-bold mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm opacity-90 italic">{letter.reference}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link href="/human-rights" className="inline-flex items-center gap-2 bg-white text-red-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              <FileText size={20} /> Read Full Letter
            </Link>
            <Link href="/legal-cases" className="inline-flex items-center gap-2 bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              <Globe size={20} /> View Documentation
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get Involved</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Video Testimonials */}
            <Link href="/video-testimonials" className="group bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all p-6 border-l-4 border-red-600">
              <div className="flex items-center gap-3 mb-3">
                <Play className="text-red-600" size={24} />
                <h3 className="text-xl font-bold">Video Testimonials</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Share your story or listen to survivors' experiences</p>
            </Link>

            {/* SMS Alerts */}
            <Link href="/sms-alerts" className="group bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all p-6 border-l-4 border-blue-600">
              <div className="flex items-center gap-3 mb-3">
                <AlertCircle className="text-blue-600" size={24} />
                <h3 className="text-xl font-bold">SMS Alerts</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Get real-time updates on case progress and advocacy wins</p>
            </Link>

            {/* Sign Petition */}
            <Link href="/petition" className="group bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all p-6 border-l-4 border-amber-600">
              <div className="flex items-center gap-3 mb-3">
                <Signature className="text-amber-600" size={24} />
                <h3 className="text-xl font-bold">Sign Petition</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Join thousands demanding justice and accountability</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Survey Section */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-2xl mx-auto">
          <SurveyBox />
        </div>
      </section>
    </div>
  );
}
