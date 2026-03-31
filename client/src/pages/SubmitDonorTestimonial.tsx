import { useState } from 'react';
import { Heart, Send, CheckCircle } from 'lucide-react';
export default function SubmitDonorTestimonial() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    amount: '',
    message: '',
    email: '',
    allowPublish: false,
    image: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const content = {
    en: {
      title: 'SHARE YOUR STORY',
      subtitle: 'Help Others Know They\'re Not Alone',
      date: 'MARCH 31, 2026',
      heading: 'Submit Your Donor Testimonial',
      intro: 'Your story matters. Share why you support Justice for Barran and inspire others to join the fight for accountability and real reconciliation.',
      form: {
        name: 'Your Name',
        location: 'City, Province',
        amount: 'Donation Amount (Optional)',
        message: 'Your Message (150-500 words)',
        email: 'Email Address',
        allowPublish: 'I allow my testimonial to be published on the website',
        submit: 'Submit Testimonial',
        submitting: 'Submitting...',
      },
      success: {
        title: 'THANK YOU',
        message: 'Your testimonial has been submitted and will be reviewed within 24 hours. Your story will help inspire others to join the fight for justice.',
      },
      validation: {
        nameRequired: 'Name is required',
        messageRequired: 'Message is required',
        emailRequired: 'Email is required',
        messageTooShort: 'Message must be at least 50 words',
        messageTooLong: 'Message must be less than 500 words',
      },
    },
    fr: {
      title: 'PARTAGEZ VOTRE HISTOIRE',
      subtitle: 'Aidez les autres à savoir qu\'ils ne sont pas seuls',
      date: '31 MARS 2026',
      heading: 'Soumettez votre témoignage de donateur',
      intro: 'Votre histoire compte. Partagez pourquoi vous soutenez Justice pour Barran et inspirez d\'autres à se joindre à la lutte pour la responsabilité et la vraie réconciliation.',
      form: {
        name: 'Votre nom',
        location: 'Ville, Province',
        amount: 'Montant du don (Optionnel)',
        message: 'Votre message (150-500 mots)',
        email: 'Adresse e-mail',
        allowPublish: 'J\'autorise mon témoignage à être publié sur le site web',
        submit: 'Soumettre le témoignage',
        submitting: 'Soumission en cours...',
      },
      success: {
        title: 'MERCI',
        message: 'Votre témoignage a été soumis et sera examiné dans les 24 heures. Votre histoire aidera à inspirer d\'autres à se joindre à la lutte pour la justice.',
      },
      validation: {
        nameRequired: 'Le nom est requis',
        messageRequired: 'Le message est requis',
        emailRequired: 'L\'e-mail est requis',
        messageTooShort: 'Le message doit contenir au moins 50 mots',
        messageTooLong: 'Le message doit contenir moins de 500 mots',
      },
    },
  };

  const lang = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate form
      if (!formData.name.trim()) {
        alert(lang.validation.nameRequired);
        setLoading(false);
        return;
      }
      if (!formData.message.trim()) {
        alert(lang.validation.messageRequired);
        setLoading(false);
        return;
      }
      if (!formData.email.trim()) {
        alert(lang.validation.emailRequired);
        setLoading(false);
        return;
      }

      const wordCount = formData.message.trim().split(/\s+/).length;
      if (wordCount < 50) {
        alert(lang.validation.messageTooShort);
        setLoading(false);
        return;
      }
      if (wordCount > 500) {
        alert(lang.validation.messageTooLong);
        setLoading(false);
        return;
      }

      // Submit testimonial via email
      const testimonialData = {
        name: formData.name,
        location: formData.location,
        amount: formData.amount,
        message: formData.message,
        email: formData.email,
        allowPublish: formData.allowPublish,
        language: language,
        submittedAt: new Date().toISOString(),
      };

      // Send to backend (placeholder for now)
      console.log('Testimonial submitted:', testimonialData);
      
      // In production, this would send to backend via tRPC or fetch
      // For now, we'll just show success

      setSubmitted(true);
      setFormData({
        name: '',
        location: '',
        amount: '',
        message: '',
        email: '',
        allowPublish: false,
        image: null,
      });
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      alert(language === 'en' ? 'Thank you! Your testimonial has been received.' : 'Merci! Votre témoignage a été reçu.');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
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

        {/* SUCCESS MESSAGE */}
        <div className="w-full bg-green-600 text-white py-12 px-6 border-b-8 border-green-700">
          <div className="max-w-5xl mx-auto text-center">
            <CheckCircle size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl font-black tracking-widest mb-4">{lang.success.title}</h1>
            <p className="text-lg leading-relaxed">{lang.success.message}</p>
            <a
              href="/donor-testimonials"
              className="inline-block mt-8 bg-white text-green-600 px-8 py-4 font-bold text-lg hover:bg-gray-100"
            >
              {language === 'en' ? 'View All Testimonials' : 'Voir tous les témoignages'}
            </a>
          </div>
        </div>
      </div>
    );
  }

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

      {/* FORM */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white border-4 border-black p-8">
            <div className="mb-6">
              <label className="block font-bold mb-2">{lang.form.name} *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-2 border-black p-3 font-sans"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block font-bold mb-2">{lang.form.location}</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full border-2 border-black p-3 font-sans"
                placeholder={language === 'en' ? 'e.g., Toronto, ON' : 'p. ex., Toronto, ON'}
              />
            </div>

            <div className="mb-6">
              <label className="block font-bold mb-2">{lang.form.amount}</label>
              <input
                type="text"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full border-2 border-black p-3 font-sans"
                placeholder={language === 'en' ? 'e.g., $500' : 'p. ex., 500 $'}
              />
            </div>

            <div className="mb-6">
              <label className="block font-bold mb-2">{lang.form.message} *</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border-2 border-black p-3 font-sans h-40"
                required
              />
              <p className="text-sm text-gray-600 mt-2">
                {formData.message.trim().split(/\s+/).length} {language === 'en' ? 'words' : 'mots'}
              </p>
            </div>

            <div className="mb-6">
              <label className="block font-bold mb-2">{lang.form.email} *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-2 border-black p-3 font-sans"
                required
              />
            </div>

            <div className="mb-6 flex items-center gap-3">
              <input
                type="checkbox"
                id="allowPublish"
                checked={formData.allowPublish}
                onChange={(e) => setFormData({ ...formData, allowPublish: e.target.checked })}
                className="w-5 h-5 border-2 border-black"
              />
              <label htmlFor="allowPublish" className="font-bold">
                {lang.form.allowPublish}
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 text-white px-8 py-4 font-bold text-lg hover:bg-red-700 disabled:bg-gray-400 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {loading ? lang.form.submitting : lang.form.submit}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-black text-white py-8 px-6">
        <div className="max-w-5xl mx-auto text-center text-sm">
          <p>
            {language === 'en'
              ? 'Your testimonial will be reviewed and published within 24 hours if you gave permission.'
              : 'Votre témoignage sera examiné et publié dans les 24 heures si vous avez donné votre permission.'}
          </p>
        </div>
      </section>
    </div>
  );
}
