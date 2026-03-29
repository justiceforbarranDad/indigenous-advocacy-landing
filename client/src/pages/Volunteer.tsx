import { Users, Heart, Briefcase, Globe } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const volunteerRoles = [
  {
    id: 'legal',
    title: 'Legal Support',
    description: 'Lawyers, law students, and legal researchers',
    icon: Briefcase,
    skills: ['Legal research', 'Document review', 'Court filing assistance'],
  },
  {
    id: 'translation',
    title: 'Translation & Interpretation',
    description: 'French, English, and Indigenous language support',
    icon: Globe,
    skills: ['French translation', 'English writing', 'Indigenous languages'],
  },
  {
    id: 'advocacy',
    title: 'Advocacy & Outreach',
    description: 'Social media, media relations, and public speaking',
    icon: Users,
    skills: ['Social media', 'Public speaking', 'Media relations'],
  },
  {
    id: 'support',
    title: 'Community Support',
    description: 'Peer support, mentoring, and resource coordination',
    icon: Heart,
    skills: ['Peer support', 'Resource coordination', 'Community organizing'],
  },
];

export default function Volunteer() {
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    province: '',
    role: '',
    skills: [] as string[],
    experience: '',
    availability: 'flexible',
    motivation: '',
    languages: [] as string[],
  });

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleLanguageToggle = (lang: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(lang)
        ? prev.languages.filter(l => l !== lang)
        : [...prev.languages, lang],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role) {
      toast.error('Please fill in all required fields');
      return;
    }
    // Submit volunteer application
    console.log('Volunteer application:', formData);
    toast.success('Thank you for volunteering! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      province: '',
      role: '',
      skills: [],
      experience: '',
      availability: 'flexible',
      motivation: '',
      languages: [],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-amber-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-forest-green mb-4 flex items-center justify-center gap-3">
            <Users size={40} className="text-amber-orange" />
            Join Our Movement
          </h1>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto">
            Volunteers are the backbone of our advocacy work. Whether you have legal expertise, language skills, or simply want to support justice for Indigenous families, we need you.
          </p>
        </div>

        {/* Volunteer Roles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-forest-green mb-8 text-center">Volunteer Roles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {volunteerRoles.map(role => {
              const Icon = role.icon;
              return (
                <button
                  key={role.id}
                  onClick={() => {
                    setSelectedRole(role.id);
                    setFormData(prev => ({ ...prev, role: role.id }));
                  }}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${
                    selectedRole === role.id
                      ? 'border-amber-orange bg-amber-orange/10'
                      : 'border-gray-200 hover:border-amber-orange'
                  }`}
                >
                  <Icon size={32} className="text-forest-green mb-3" />
                  <h3 className="font-bold text-forest-green mb-2">{role.title}</h3>
                  <p className="text-sm text-charcoal-light mb-3">{role.description}</p>
                  <div className="space-y-1">
                    {role.skills.map(skill => (
                      <p key={skill} className="text-xs text-amber-orange">• {skill}</p>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Volunteer Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Volunteer Application</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-bold text-forest-green mb-4">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-forest-green mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-forest-green"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-forest-green mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-forest-green"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-forest-green mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-forest-green"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-forest-green mb-2">Province</label>
                  <select
                    value={formData.province}
                    onChange={e => setFormData(prev => ({ ...prev, province: e.target.value }))}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-forest-green"
                  >
                    <option value="">Select province</option>
                    <option value="ON">Ontario</option>
                    <option value="QC">Quebec</option>
                    <option value="BC">British Columbia</option>
                    <option value="AB">Alberta</option>
                    <option value="MB">Manitoba</option>
                    <option value="SK">Saskatchewan</option>
                    <option value="NS">Nova Scotia</option>
                    <option value="NB">New Brunswick</option>
                    <option value="PE">Prince Edward Island</option>
                    <option value="NL">Newfoundland & Labrador</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Volunteer Role */}
            <div>
              <h3 className="text-xl font-bold text-forest-green mb-4">Volunteer Role *</h3>
              <p className="text-sm text-charcoal-light mb-4">Select your primary role from the options above</p>
              {selectedRole && (
                <div className="p-4 bg-forest-green/10 border-2 border-forest-green rounded-lg">
                  <p className="font-bold text-forest-green">
                    Selected: {volunteerRoles.find(r => r.id === selectedRole)?.title}
                  </p>
                </div>
              )}
            </div>

            {/* Skills & Languages */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-forest-green mb-4">Your Skills</h3>
                <div className="space-y-3">
                  {['Legal research', 'Translation', 'Social media', 'Public speaking', 'Writing', 'Community organizing'].map(skill => (
                    <label key={skill} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.skills.includes(skill)}
                        onChange={() => handleSkillToggle(skill)}
                        className="w-4 h-4"
                      />
                      <span className="text-charcoal">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-forest-green mb-4">Languages</h3>
                <div className="space-y-3">
                  {['English', 'French', 'Innu', 'Cree', 'Mohawk', 'Other Indigenous languages'].map(lang => (
                    <label key={lang} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.languages.includes(lang)}
                        onChange={() => handleLanguageToggle(lang)}
                        className="w-4 h-4"
                      />
                      <span className="text-charcoal">{lang}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience & Availability */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-forest-green mb-2">Relevant Experience</label>
                <textarea
                  value={formData.experience}
                  onChange={e => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                  placeholder="Tell us about your relevant experience..."
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-forest-green h-24"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-forest-green mb-2">Availability</label>
                <select
                  value={formData.availability}
                  onChange={e => setFormData(prev => ({ ...prev, availability: e.target.value }))}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-forest-green"
                >
                  <option value="flexible">Flexible</option>
                  <option value="weekends">Weekends only</option>
                  <option value="evenings">Evenings only</option>
                  <option value="limited">Limited hours</option>
                  <option value="fulltime">Full-time</option>
                </select>
              </div>
            </div>

            {/* Motivation */}
            <div>
              <label className="block text-sm font-bold text-forest-green mb-2">Why do you want to volunteer?</label>
              <textarea
                value={formData.motivation}
                onChange={e => setFormData(prev => ({ ...prev, motivation: e.target.value }))}
                placeholder="Share your motivation for joining our movement..."
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-forest-green h-24"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-forest-green text-white font-bold py-3 rounded-lg hover:bg-forest-green/90 transition-colors text-lg"
            >
              Submit Volunteer Application
            </button>
          </form>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-amber-orange mb-2">50+</div>
            <p className="text-charcoal-light">Active Volunteers</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-amber-orange mb-2">1000+</div>
            <p className="text-charcoal-light">Volunteer Hours</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-amber-orange mb-2">8</div>
            <p className="text-charcoal-light">Languages Supported</p>
          </div>
        </div>
      </div>
    </div>
  );
}
