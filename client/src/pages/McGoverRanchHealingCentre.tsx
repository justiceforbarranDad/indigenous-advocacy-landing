import React, { useState } from 'react';
import { ChevronLeft, Heart, Stethoscope, BookOpen, Zap, Users, Home, Utensils, Activity } from 'lucide-react';
import { useLocation } from 'wouter';

type Language = 'en' | 'fr';

const translations = {
  en: {
    title: 'McGovern Arts Ranch Healing Centre',
    subtitle: 'Presented by Terry James Foundation',
    tagline: 'True Healing for Indigenous & Autistic Children',
    description: 'Year-round healing, education, and community support - not a one-day event',
    backHome: 'Back to Home',
    
    // Hero Section
    heroTitle: 'This is TRUE HEALING',
    heroSubtitle: 'Not a one-day awareness event. A permanent centre for year-round support.',
    heroDesc: 'Where Indigenous and autistic children receive comprehensive healing, education, medical care, and community support.',
    
    // Mission
    mission: 'Our Mission',
    missionDesc: 'To create a permanent healing sanctuary where First Nations and Indigenous children receive year-round support through equine therapy, education, medical care, and community healing.',
    
    // Access
    accessTitle: 'Who We Serve',
    accessDesc: 'Priority Access Model',
    priority1: 'First Nations Children',
    priority1Desc: 'Primary focus and priority access',
    priority2: 'Indigenous & Métis Children',
    priority2Desc: 'Secondary focus - equal commitment',
    priority3: 'Autistic Children',
    priority3Desc: 'All backgrounds welcome',
    priority4: 'All Children',
    priority4Desc: 'As space and resources allow',
    
    // Facilities
    facilities: 'Complete Healing Centre',
    facilitiesDesc: 'All services FREE - funded by settlement, government, and community support',
    
    medicalClinic: 'Medical Clinic',
    medicalDesc: 'Full-time healthcare, mental health counseling, trauma support',
    
    equineTherapy: 'Equine Therapy Program',
    equineDesc: '16 horses for therapeutic riding and animal-assisted healing',
    
    daySchool: 'Day School',
    schoolDesc: 'Culturally-responsive education with Indigenous curriculum',
    
    libraryCenter: 'Library & Knowledge Centre',
    libraryDesc: 'Resources, research, Indigenous knowledge preservation',
    
    indoorGym: 'Indoor Wellness Gym',
    gymDesc: 'Sports, fitness, physical wellness programs',
    
    meals: 'Free Meals & Nutrition',
    mealsDesc: 'Breakfast, lunch, dinner - culturally appropriate food',
    
    counseling: 'Counseling & Mental Health',
    counselingDesc: '24/7 support from trained counselors and therapists',
    
    transportation: 'Transportation & Accommodations',
    transportDesc: 'Free transport and overnight stays for families who need them',
    
    // Funding
    fundingTitle: 'How We\'re Funded',
    fundingDesc: 'Settlement funds create permanent healing infrastructure',
    
    settlement: 'Legal Settlement',
    settlementDesc: 'Funds recovered from government negligence and systemic failures',
    
    government: 'Government Funding',
    governmentDesc: 'Jordan\'s Principle & Indigenous health programs',
    
    corporate: 'Corporate Sponsors',
    corporateDesc: 'Businesses supporting the mission (with or without branding)',
    
    donors: 'Individual Donors',
    donorsDesc: 'Community members funding healing (no advertising required)',
    
    foundation: 'Terry James Foundation',
    foundationDesc: 'Primary partner and operational support',
    
    // Programs
    programs: 'Year-Round Programs',
    programsDesc: 'Continuous healing, not seasonal or temporary',
    
    equineProgram: 'Equine Therapy',
    equineProgramDesc: 'Weekly riding sessions, horse care education, animal bonding',
    
    educationProgram: 'Education',
    educationProgramDesc: 'Full curriculum with Indigenous teachings and cultural practices',
    
    healthProgram: 'Health & Wellness',
    healthProgramDesc: 'Medical care, mental health support, nutrition, fitness',
    
    artProgram: 'Arts & Culture',
    artProgramDesc: 'Creative expression, traditional arts, cultural ceremonies',
    
    communityProgram: 'Community Healing',
    communityProgramDesc: 'Family support, peer connections, intergenerational healing',
    
    // Impact
    impact: 'The Impact of True Healing',
    impactDesc: 'Generational change through sustained support',
    
    impact1: 'Trauma Healing',
    impact1Desc: 'Children process trauma with professional support and animal therapy',
    
    impact2: 'Education Access',
    impact2Desc: 'Continuous schooling keeps children engaged and learning',
    
    impact3: 'Health Foundation',
    impact3Desc: 'Medical care and nutrition create healthy development',
    
    impact4: 'Community Connection',
    impact4Desc: 'Belonging and cultural identity strengthen resilience',
    
    impact5: 'Family Support',
    impact5Desc: 'Parents and siblings receive support and healing too',
    
    impact6: 'Generational Legacy',
    impact6Desc: 'Healed children become healers for their communities',
    
    // Difference
    difference: 'Why This is Different',
    differenceDesc: 'True Healing vs. Performative Activism',
    
    oneDay: 'One-Day Events',
    oneDayDesc: 'Orange Shirt Day, awareness campaigns, photo ops',
    
    ourApproach: 'Our Approach',
    ourApproachDesc: 'Year-round healing, permanent infrastructure, systemic change',
    
    // Call to Action
    getInvolved: 'Get Involved',
    donate: 'Support the Mission',
    sponsor: 'Corporate Partnership',
    volunteer: 'Volunteer',
    refer: 'Refer a Family',
    
    // Stats
    horses: '16 Horses',
    horsesDesc: 'For therapeutic healing',
    
    staff: '24/7 Staff',
    staffDesc: 'Dedicated support team',
    
    services: 'Complete Services',
    servicesDesc: 'Medical to education',
    
    free: 'Completely FREE',
    freeDesc: 'No cost to families',
    
    // Testimonial
    testimonial: 'What True Healing Looks Like',
    testimonialDesc: 'Families experience transformation through year-round support',
    
    // Footer
    terryJames: 'Terry James Foundation',
    terryJamesDesc: 'Committed to Indigenous healing and community transformation',
  },
  fr: {
    title: 'Centre de Guérison McGovern Arts Ranch',
    subtitle: 'Présenté par la Fondation Terry James',
    tagline: 'Véritable Guérison pour les Enfants Autochtones et Autistes',
    description: 'Soutien toute l\'année - pas un événement d\'une journée',
    backHome: 'Retour à l\'Accueil',
    
    // Hero Section
    heroTitle: 'Ceci est une VÉRITABLE GUÉRISON',
    heroSubtitle: 'Pas un événement de sensibilisation d\'une journée. Un centre permanent pour le soutien toute l\'année.',
    heroDesc: 'Où les enfants des Premières Nations et autochtones reçoivent une guérison complète, une éducation, des soins médicaux et un soutien communautaire.',
    
    // Mission
    mission: 'Notre Mission',
    missionDesc: 'Créer un sanctuaire de guérison permanent où les enfants des Premières Nations et autochtones reçoivent un soutien toute l\'année par la thérapie équine, l\'éducation, les soins médicaux et la guérison communautaire.',
    
    // Access
    accessTitle: 'Qui Nous Servons',
    accessDesc: 'Modèle d\'Accès Prioritaire',
    priority1: 'Enfants des Premières Nations',
    priority1Desc: 'Priorité principale et accès prioritaire',
    priority2: 'Enfants Autochtones et Métis',
    priority2Desc: 'Priorité secondaire - engagement égal',
    priority3: 'Enfants Autistes',
    priority3Desc: 'Tous les horizons bienvenue',
    priority4: 'Tous les Enfants',
    priority4Desc: 'Selon l\'espace et les ressources disponibles',
    
    // Facilities
    facilities: 'Centre de Guérison Complet',
    facilitiesDesc: 'Tous les services GRATUITS - financés par le règlement, le gouvernement et le soutien communautaire',
    
    medicalClinic: 'Clinique Médicale',
    medicalDesc: 'Soins de santé à temps plein, counseling en santé mentale, soutien aux traumatismes',
    
    equineTherapy: 'Programme de Thérapie Équine',
    equineDesc: '16 chevaux pour l\'équitation thérapeutique et la guérison assistée par les animaux',
    
    daySchool: 'École de Jour',
    schoolDesc: 'Éducation culturellement adaptée avec curriculum autochtone',
    
    libraryCenter: 'Centre de Bibliothèque et de Connaissances',
    libraryDesc: 'Ressources, recherche, préservation des connaissances autochtones',
    
    indoorGym: 'Gym de Bien-Être Intérieure',
    gymDesc: 'Programmes de sports, fitness et bien-être physique',
    
    meals: 'Repas Gratuits et Nutrition',
    mealsDesc: 'Petit-déjeuner, déjeuner, dîner - nourriture culturellement appropriée',
    
    counseling: 'Counseling et Santé Mentale',
    counselingDesc: 'Soutien 24/7 de conseillers et thérapeutes formés',
    
    transportation: 'Transport et Hébergement',
    transportDesc: 'Transport gratuit et séjours nocturnes pour les familles qui en ont besoin',
    
    // Funding
    fundingTitle: 'Comment Nous Sommes Financés',
    fundingDesc: 'Les fonds de règlement créent une infrastructure de guérison permanente',
    
    settlement: 'Règlement Juridique',
    settlementDesc: 'Fonds récupérés de la négligence gouvernementale et des défaillances systémiques',
    
    government: 'Financement Gouvernemental',
    governmentDesc: 'Principe de Jordan et programmes de santé autochtones',
    
    corporate: 'Commanditaires Corporatifs',
    corporateDesc: 'Entreprises soutenant la mission (avec ou sans marque)',
    
    donors: 'Donateurs Individuels',
    donorsDesc: 'Membres de la communauté finançant la guérison (aucune publicité requise)',
    
    foundation: 'Fondation Terry James',
    foundationDesc: 'Partenaire principal et soutien opérationnel',
    
    // Programs
    programs: 'Programmes Toute l\'Année',
    programsDesc: 'Guérison continue, pas saisonnière ou temporaire',
    
    equineProgram: 'Thérapie Équine',
    equineProgramDesc: 'Séances d\'équitation hebdomadaires, éducation aux soins des chevaux, liaison animale',
    
    educationProgram: 'Éducation',
    educationProgramDesc: 'Curriculum complet avec enseignements autochtones et pratiques culturelles',
    
    healthProgram: 'Santé et Bien-Être',
    healthProgramDesc: 'Soins médicaux, soutien en santé mentale, nutrition, fitness',
    
    artProgram: 'Arts et Culture',
    artProgramDesc: 'Expression créative, arts traditionnels, cérémonies culturelles',
    
    communityProgram: 'Guérison Communautaire',
    communityProgramDesc: 'Soutien familial, connexions entre pairs, guérison intergénérationnelle',
    
    // Impact
    impact: 'L\'Impact de la Véritable Guérison',
    impactDesc: 'Changement générationnel par le soutien soutenu',
    
    impact1: 'Guérison des Traumatismes',
    impact1Desc: 'Les enfants traitent les traumatismes avec le soutien professionnel et la thérapie animale',
    
    impact2: 'Accès à l\'Éducation',
    impact2Desc: 'L\'école continue maintient les enfants engagés et apprenant',
    
    impact3: 'Fondation de Santé',
    impact3Desc: 'Les soins médicaux et la nutrition créent un développement sain',
    
    impact4: 'Connexion Communautaire',
    impact4Desc: 'L\'appartenance et l\'identité culturelle renforcent la résilience',
    
    impact5: 'Soutien Familial',
    impact5Desc: 'Les parents et les frères et sœurs reçoivent aussi du soutien et de la guérison',
    
    impact6: 'Héritage Générationnel',
    impact6Desc: 'Les enfants guéris deviennent des guérisseurs pour leurs communautés',
    
    // Difference
    difference: 'Pourquoi C\'est Différent',
    differenceDesc: 'Véritable Guérison vs. Activisme de Façade',
    
    oneDay: 'Événements d\'Une Journée',
    oneDayDesc: 'Jour de la Chemise Orange, campagnes de sensibilisation, photos',
    
    ourApproach: 'Notre Approche',
    ourApproachDesc: 'Guérison toute l\'année, infrastructure permanente, changement systémique',
    
    // Call to Action
    getInvolved: 'S\'Impliquer',
    donate: 'Soutenir la Mission',
    sponsor: 'Partenariat Corporatif',
    volunteer: 'Bénévole',
    refer: 'Référer une Famille',
    
    // Stats
    horses: '16 Chevaux',
    horsesDesc: 'Pour la guérison thérapeutique',
    
    staff: 'Personnel 24/7',
    staffDesc: 'Équipe de soutien dévouée',
    
    services: 'Services Complets',
    servicesDesc: 'Médical à l\'éducation',
    
    free: 'Complètement GRATUIT',
    freeDesc: 'Aucun coût pour les familles',
    
    // Testimonial
    testimonial: 'À Quoi Ressemble la Véritable Guérison',
    testimonialDesc: 'Les familles expérimentent la transformation par le soutien soutenu toute l\'année',
    
    // Footer
    terryJames: 'Fondation Terry James',
    terryJamesDesc: 'Engagée envers la guérison autochtone et la transformation communautaire',
  },
};

export default function McGoverRanchHealingCentre() {
  const [, setLocation] = useLocation();
  const [language, setLanguage] = useState<Language>('en');
  const [expandedFacility, setExpandedFacility] = useState<string | null>(null);

  const t = translations[language];

  const facilities = [
    { id: 'medical', titleKey: 'medicalClinic', descKey: 'medicalDesc', icon: Stethoscope, color: 'bg-red-100 border-red-300' },
    { id: 'equine', titleKey: 'equineTherapy', descKey: 'equineDesc', icon: Activity, color: 'bg-amber-100 border-amber-300' },
    { id: 'school', titleKey: 'daySchool', descKey: 'schoolDesc', icon: BookOpen, color: 'bg-blue-100 border-blue-300' },
    { id: 'library', titleKey: 'libraryCenter', descKey: 'libraryDesc', icon: BookOpen, color: 'bg-purple-100 border-purple-300' },
    { id: 'gym', titleKey: 'indoorGym', descKey: 'gymDesc', icon: Zap, color: 'bg-green-100 border-green-300' },
    { id: 'meals', titleKey: 'meals', descKey: 'mealsDesc', icon: Utensils, color: 'bg-orange-100 border-orange-300' },
    { id: 'counseling', titleKey: 'counseling', descKey: 'counselingDesc', icon: Heart, color: 'bg-pink-100 border-pink-300' },
    { id: 'transport', titleKey: 'transportation', descKey: 'transportDesc', icon: Home, color: 'bg-indigo-100 border-indigo-300' },
  ];

  const programs = [
    { titleKey: 'equineProgram', descKey: 'equineProgramDesc' },
    { titleKey: 'educationProgram', descKey: 'educationProgramDesc' },
    { titleKey: 'healthProgram', descKey: 'healthProgramDesc' },
    { titleKey: 'artProgram', descKey: 'artProgramDesc' },
    { titleKey: 'communityProgram', descKey: 'communityProgramDesc' },
  ];

  const impacts = [
    { titleKey: 'impact1', descKey: 'impact1Desc' },
    { titleKey: 'impact2', descKey: 'impact2Desc' },
    { titleKey: 'impact3', descKey: 'impact3Desc' },
    { titleKey: 'impact4', descKey: 'impact4Desc' },
    { titleKey: 'impact5', descKey: 'impact5Desc' },
    { titleKey: 'impact6', descKey: 'impact6Desc' },
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Language Toggle */}
      <div className="flex justify-end gap-2 p-4 bg-forest-green/10">
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded font-bold transition-all ${
            language === 'en'
              ? 'bg-forest-green text-white'
              : 'bg-white text-forest-green border-2 border-forest-green'
          }`}
        >
          🇬🇧 English
        </button>
        <button
          onClick={() => setLanguage('fr')}
          className={`px-4 py-2 rounded font-bold transition-all ${
            language === 'fr'
              ? 'bg-forest-green text-white'
              : 'bg-white text-forest-green border-2 border-forest-green'
          }`}
        >
          🇫🇷 Français
        </button>
      </div>

      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-r from-forest-green to-forest-green/80 py-20 border-b-8 border-amber-orange">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p className="text-amber-orange font-bold text-lg mb-2">{t.subtitle}</p>
          <h1 className="text-6xl md:text-7xl font-bold text-cream mb-4">
            {t.title}
          </h1>
          <p className="text-2xl md:text-3xl text-cream/90 mb-6 font-bold">
            {t.tagline}
          </p>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            {t.heroTitle}
          </p>
          <p className="text-lg text-cream/70 max-w-3xl mx-auto mt-4">
            {t.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto px-4 py-12">
        
        {/* Mission */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-forest-green mb-4">{t.mission}</h2>
          <div className="h-1 w-24 bg-amber-orange mx-auto mb-8"></div>
          <p className="text-lg text-charcoal-light max-w-3xl mx-auto leading-relaxed">
            {t.missionDesc}
          </p>
        </div>

        {/* Access Model */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-forest-green text-center mb-4">{t.accessTitle}</h2>
          <p className="text-center text-amber-orange font-bold text-lg mb-8">{t.accessDesc}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titleKey: 'priority1', descKey: 'priority1Desc' },
              { titleKey: 'priority2', descKey: 'priority2Desc' },
              { titleKey: 'priority3', descKey: 'priority3Desc' },
              { titleKey: 'priority4', descKey: 'priority4Desc' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-forest-green/10 to-amber-orange/10 rounded-lg p-6 border-2 border-forest-green">
                <h3 className="text-xl font-bold text-forest-green mb-2">
                  {t[item.titleKey as keyof typeof t]}
                </h3>
                <p className="text-charcoal-light">
                  {t[item.descKey as keyof typeof t]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-forest-green text-center mb-4">{t.facilities}</h2>
          <p className="text-center text-amber-orange font-bold text-lg mb-8">{t.facilitiesDesc}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map((facility) => {
              const Icon = facility.icon;
              const title = t[facility.titleKey as keyof typeof t];
              const desc = t[facility.descKey as keyof typeof t];
              const isExpanded = expandedFacility === facility.id;
              
              return (
                <div
                  key={facility.id}
                  className={`rounded-lg border-2 cursor-pointer transition-all ${facility.color} p-4`}
                  onClick={() => setExpandedFacility(isExpanded ? null : facility.id)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={24} className="text-forest-green" />
                    <h3 className="font-bold text-forest-green text-sm">
                      {title}
                    </h3>
                  </div>
                  <p className="text-xs text-charcoal-light">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16 grid md:grid-cols-4 gap-6">
          {[
            { titleKey: 'horses', descKey: 'horsesDesc' },
            { titleKey: 'staff', descKey: 'staffDesc' },
            { titleKey: 'services', descKey: 'servicesDesc' },
            { titleKey: 'free', descKey: 'freeDesc' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-forest-green to-forest-green/80 text-cream rounded-lg p-6 text-center border-4 border-amber-orange">
              <p className="text-3xl font-bold mb-2">{t[stat.titleKey as keyof typeof t]}</p>
              <p className="text-cream/80">{t[stat.descKey as keyof typeof t]}</p>
            </div>
          ))}
        </div>

        {/* Programs */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-forest-green text-center mb-4">{t.programs}</h2>
          <p className="text-center text-amber-orange font-bold text-lg mb-8">{t.programsDesc}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-amber-orange shadow-lg">
                <h3 className="text-xl font-bold text-forest-green mb-3">
                  {t[program.titleKey as keyof typeof t]}
                </h3>
                <p className="text-charcoal-light">
                  {t[program.descKey as keyof typeof t]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-forest-green text-center mb-4">{t.impact}</h2>
          <p className="text-center text-charcoal-light mb-8">{t.impactDesc}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {impacts.map((impact, idx) => (
              <div key={idx} className="bg-gradient-to-br from-amber-orange/10 to-forest-green/10 rounded-lg p-6 border-2 border-amber-orange">
                <h3 className="text-lg font-bold text-forest-green mb-3">
                  {t[impact.titleKey as keyof typeof t]}
                </h3>
                <p className="text-charcoal-light text-sm">
                  {t[impact.descKey as keyof typeof t]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Funding */}
        <div className="mb-16 bg-gradient-to-r from-forest-green/10 to-amber-orange/10 rounded-2xl p-8 border-4 border-forest-green">
          <h2 className="text-4xl font-bold text-forest-green text-center mb-4">{t.fundingTitle}</h2>
          <p className="text-center text-charcoal-light mb-8">{t.fundingDesc}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titleKey: 'settlement', descKey: 'settlementDesc' },
              { titleKey: 'government', descKey: 'governmentDesc' },
              { titleKey: 'corporate', descKey: 'corporateDesc' },
              { titleKey: 'donors', descKey: 'donorsDesc' },
              { titleKey: 'foundation', descKey: 'foundationDesc' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-amber-orange">
                <p className="font-bold text-forest-green mb-2">
                  {t[item.titleKey as keyof typeof t]}
                </p>
                <p className="text-sm text-charcoal-light">
                  {t[item.descKey as keyof typeof t]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Difference */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-forest-green text-center mb-4">{t.difference}</h2>
          <p className="text-center text-charcoal-light mb-8">{t.differenceDesc}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-lg p-8 border-4 border-red-300">
              <h3 className="text-2xl font-bold text-red-700 mb-4">❌ {t.oneDay}</h3>
              <p className="text-charcoal-light">{t.oneDayDesc}</p>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-light">
                <li>• One-time awareness only</li>
                <li>• Photo opportunities</li>
                <li>• No systemic change</li>
                <li>• Performative activism</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-8 border-4 border-green-300">
              <h3 className="text-2xl font-bold text-green-700 mb-4">✅ {t.ourApproach}</h3>
              <p className="text-charcoal-light">{t.ourApproachDesc}</p>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-light">
                <li>• Year-round support</li>
                <li>• Real healing services</li>
                <li>• Permanent infrastructure</li>
                <li>• Generational impact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-16 py-12 px-8 bg-gradient-to-r from-forest-green to-forest-green/90 text-cream rounded-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.getInvolved}</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-amber-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-light transition-colors">
              {t.donate}
            </button>
            <button className="bg-white text-forest-green px-8 py-3 rounded-lg font-bold hover:bg-cream transition-colors">
              {t.sponsor}
            </button>
            <button className="bg-amber-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-light transition-colors">
              {t.volunteer}
            </button>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => setLocation('/')}
          className="flex items-center gap-2 text-amber-orange hover:text-amber-light transition-colors font-bold text-lg"
        >
          <ChevronLeft size={24} />
          {t.backHome}
        </button>
      </div>
    </div>
  );
}
