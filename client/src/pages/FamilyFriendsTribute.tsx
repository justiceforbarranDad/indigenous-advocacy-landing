import { Heart, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function FamilyFriendsTribute() {
  const [isEnglish, setIsEnglish] = useState(true);

  const content = {
    en: {
      title: "Family & Friends Tribute",
      subtitle: "Honoring the Legacy of Joe McGovern, Terry James, Gerry Barber & Dryden",
      introduction: "This page honors the men who shaped our family's story and inspired the McGovern Arts Ranch Healing Centre. Their dedication to community, hard work, and compassion continues to guide our mission.",
      
      joeSection: {
        title: "Joe McGovern",
        subtitle: "Our Father, Our Foundation",
        description: "Joe McGovern worked at Chez Henry, Standish Hall, and La Chaudière in Aylmer. He was a dedicated worker and community member in the Outaouais region. When Joe passed away on May 27, 1984, his son Terry James stepped in as guardian, continuing the family's commitment to caring for those in need.",
        legacy: "Joe's memory lives on through the healing centre and the values he instilled in his children."
      },

      terrySection: {
        title: "Terry James McGovern",
        subtitle: "Guardian, Healer, Pioneer",
        description: "When your father Joe passed away, Terry James became your legal guardian at age 17 (9 months before your 18th birthday). He took you, your sister Cindy, and worked together at his ranch, providing the stability, care, and healing that would later inspire the McGovern Arts Ranch Healing Centre. Terry's pioneering work with vulnerable children at Ferme Terry James (977 Montée McLaren) showed that healing through animals, nature, and community care is possible.",
        legacy: "Terry James's vision of equestrian therapy and ranch-based healing is the foundation of the healing centre."
      },

      gerrySection: {
        title: "Gerry Barber & Dryden",
        subtitle: "Lifelong Friends, Community Pillars",
        description: "Gerry Barber and Dryden worked alongside Joe McGovern at Chez Henry, Standish Hall, and La Chaudière in Aylmer. They were more than colleagues—they were family friends who embodied the spirit of community and hard work. On May 27, 1984, Joe and Gerry passed away a few hours apart, ending a lifelong friendship but never diminishing their impact on the community.",
        legacy: "Their dedication to work and community inspires us to build spaces where all people are valued and cared for."
      },

      locations: {
        title: "Community Landmarks",
        chez: "Chez Henry - Gatineau",
        standish: "Standish Hall - Gatineau Area",
        chaudiere: "La Chaudière - Aylmer, Quebec"
      },

      memorial: {
        title: "May 27, 1984 - A Day We Remember",
        text: "On this day, Joe McGovern and Gerry Barber passed away a few hours apart. They left behind a legacy of hard work, friendship, and community service that continues to inspire the McGovern Arts Ranch Healing Centre."
      },

      gallery: {
        title: "Family Photos",
        photo1: "Terry James at the Ranch with Family",
        photo2: "Joe McGovern & Gerry Barber - Lifelong Friends",
        photo3: "Community Leaders - Chez Henry Era",
        photo4: "Three Generations - Family Legacy"
      },

      callToAction: "Share Your Memories",
      callToActionText: "Do you have photos or memories of Joe, Terry James, Gerry, Dryden, or the Outaouais community? We'd love to hear from you.",
      contactButton: "Share Your Story"
    },

    fr: {
      title: "Hommage à la Famille et aux Amis",
      subtitle: "Honorer l'Héritage de Joe McGovern, Terry James, Gerry Barber et Dryden",
      introduction: "Cette page honore les hommes qui ont façonné l'histoire de notre famille et inspiré le Centre de Guérison du Ranch McGovern Arts. Leur dévouement à la communauté, leur travail acharné et leur compassion continuent de guider notre mission.",
      
      joeSection: {
        title: "Joe McGovern",
        subtitle: "Notre Père, Notre Fondation",
        description: "Joe McGovern a travaillé chez Henry, Standish Hall et à La Chaudière à Aylmer. C'était un travailleur dévoué et un membre de la communauté de l'Outaouais. Quand Joe est décédé le 27 mai 1984, son fils Terry James a pris la relève en tant que tuteur, poursuivant l'engagement de la famille à prendre soin de ceux qui en ont besoin.",
        legacy: "La mémoire de Joe vit à travers le centre de guérison et les valeurs qu'il a inculquées à ses enfants."
      },

      terrySection: {
        title: "Terry James McGovern",
        subtitle: "Tuteur, Guérisseur, Pionnier",
        description: "Quand votre père Joe est décédé, Terry James est devenu votre tuteur légal à 17 ans (9 mois avant votre 18e anniversaire). Il vous a pris, votre sœur Cindy, et a travaillé ensemble au ranch, fournissant la stabilité, les soins et la guérison qui inspireraient plus tard le Centre de Guérison du Ranch McGovern Arts. Le travail pionnier de Terry avec les enfants vulnérables à la Ferme Terry James (977 Montée McLaren) a montré que la guérison par les animaux, la nature et les soins communautaires est possible.",
        legacy: "La vision de Terry James de la thérapie équestre et de la guérison basée sur le ranch est le fondement du centre de guérison."
      },

      gerrySection: {
        title: "Gerry Barber et Dryden",
        subtitle: "Amis de Toujours, Piliers de la Communauté",
        description: "Gerry Barber et Dryden ont travaillé aux côtés de Joe McGovern chez Henry, Standish Hall et à La Chaudière à Aylmer. C'étaient bien plus que des collègues—c'étaient des amis de la famille qui incarnaient l'esprit de communauté et de travail acharné. Le 27 mai 1984, Joe et Gerry sont décédés à quelques heures d'intervalle, mettant fin à une amitié de toute une vie mais ne diminuant jamais leur impact sur la communauté.",
        legacy: "Leur dévouement au travail et à la communauté nous inspire à créer des espaces où tous sont valorisés et soignés."
      },

      locations: {
        title: "Repères Communautaires",
        chez: "Chez Henry - Gatineau",
        standish: "Standish Hall - Région de Gatineau",
        chaudiere: "La Chaudière - Aylmer, Québec"
      },

      memorial: {
        title: "27 mai 1984 - Un Jour que Nous Nous Souvenons",
        text: "Ce jour-là, Joe McGovern et Gerry Barber sont décédés à quelques heures d'intervalle. Ils ont laissé derrière eux un héritage de travail acharné, d'amitié et de service communautaire qui continue d'inspirer le Centre de Guérison du Ranch McGovern Arts."
      },

      gallery: {
        title: "Photos de Famille",
        photo1: "Terry James au Ranch avec la Famille",
        photo2: "Joe McGovern et Gerry Barber - Amis de Toujours",
        photo3: "Chefs de Communauté - Époque de Chez Henry",
        photo4: "Trois Générations - Héritage Familial"
      },

      callToAction: "Partagez Vos Souvenirs",
      callToActionText: "Avez-vous des photos ou des souvenirs de Joe, Terry James, Gerry, Dryden ou de la communauté de l'Outaouais? Nous aimerions vous entendre.",
      contactButton: "Partagez Votre Histoire"
    }
  };

  const t = content[isEnglish ? "en" : "fr"];

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Language Toggle */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-forest-green">{t.title}</h1>
          <div className="flex gap-3">
            <button
              onClick={() => setIsEnglish(true)}
              className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                isEnglish
                  ? "bg-forest-green text-white"
                  : "bg-gray-200 text-charcoal hover:bg-gray-300"
              }`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => setIsEnglish(false)}
              className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                !isEnglish
                  ? "bg-forest-green text-white"
                  : "bg-gray-200 text-charcoal hover:bg-gray-300"
              }`}
            >
              🇫🇷 Français
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-forest-green to-amber-orange text-white">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-amber-light" />
          <h2 className="text-5xl md:text-6xl font-bold mb-4">{t.subtitle}</h2>
          <p className="text-xl mb-8">{t.introduction}</p>
        </div>
      </section>

      {/* Joe McGovern Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold text-forest-green mb-2">{t.joeSection.title}</h2>
              <h3 className="text-2xl text-amber-orange mb-6 font-serif italic">{t.joeSection.subtitle}</h3>
              <p className="text-lg leading-relaxed mb-6">{t.joeSection.description}</p>
              <div className="bg-cream p-6 rounded-lg border-2 border-amber-orange">
                <p className="text-lg font-semibold text-forest-green">{t.joeSection.legacy}</p>
              </div>
            </div>
            <div className="bg-cream p-8 rounded-lg text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-orange" />
              <h4 className="text-xl font-bold text-forest-green mb-4">{t.locations.title}</h4>
              <ul className="space-y-3 text-lg">
                <li className="font-semibold">{t.locations.chez}</li>
                <li className="font-semibold">{t.locations.standish}</li>
                <li className="font-semibold">{t.locations.chaudiere}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Terry James Section */}
      <section className="py-16 bg-gradient-to-r from-amber-orange/10 to-forest-green/10">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/IMG_8904_d2df9e60.jpeg" 
                alt="Terry James McGovern Memorial Plaque" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-forest-green mb-2">{t.terrySection.title}</h2>
              <h3 className="text-2xl text-amber-orange mb-6 font-serif italic">{t.terrySection.subtitle}</h3>
              <p className="text-lg leading-relaxed mb-6">{t.terrySection.description}</p>
              <div className="bg-white p-6 rounded-lg border-2 border-forest-green">
                <p className="text-lg font-semibold text-amber-orange">{t.terrySection.legacy}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gerry & Dryden Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-forest-green mb-2 text-center">{t.gerrySection.title}</h2>
          <h3 className="text-2xl text-amber-orange mb-12 font-serif italic text-center">{t.gerrySection.subtitle}</h3>
          <p className="text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">{t.gerrySection.description}</p>
          <div className="bg-cream p-8 rounded-lg border-2 border-amber-orange text-center">
            <p className="text-lg font-semibold text-forest-green">{t.gerrySection.legacy}</p>
          </div>
        </div>
      </section>

      {/* Memorial Date Section */}
      <section className="py-16 bg-gradient-to-r from-forest-green to-amber-orange text-white">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-amber-light" />
          <h2 className="text-4xl font-bold mb-4">{t.memorial.title}</h2>
          <p className="text-xl">{t.memorial.text}</p>
        </div>
      </section>

      {/* Family Photos Gallery */}
      <section className="py-16 bg-cream">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-forest-green mb-12 text-center">{t.gallery.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_ZDH3rx_image_a6ceb323.png" 
                alt={t.gallery.photo1}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-forest-green">{t.gallery.photo1}</h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_1rjbdq_image_2c2276a5.png" 
                alt={t.gallery.photo2}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-forest-green">{t.gallery.photo2}</h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_LMWfUa_image_86e0e686.png" 
                alt={t.gallery.photo3}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-forest-green">{t.gallery.photo3}</h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_eUYdGS_image_12a692c7.png" 
                alt={t.gallery.photo4}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-forest-green">{t.gallery.photo4}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-forest-green to-amber-orange text-white">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.callToAction}</h2>
          <p className="text-lg mb-8">{t.callToActionText}</p>
          <a href="/share-story" className="bg-white text-forest-green px-8 py-3 rounded-lg font-bold hover:bg-cream transition-colors inline-block">
            {t.contactButton}
          </a>
        </div>
      </section>
    </div>
  );
}
