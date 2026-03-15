import { ExternalLink, BookOpen, Heart, Scale } from 'lucide-react';

export default function ChildrensRights() {
  const rights = [
    {
      id: 1,
      title: 'Right to Life, Survival & Development',
      description: 'Every child has the right to live, survive, and develop to their full potential.',
      icon: Heart,
    },
    {
      id: 2,
      title: 'Right to Protection',
      description: 'Children have the right to be protected from abuse, neglect, exploitation, and violence.',
      icon: Scale,
    },
    {
      id: 3,
      title: 'Right to Education',
      description: 'Every child has the right to quality education that develops their abilities and talents.',
      icon: BookOpen,
    },
    {
      id: 4,
      title: 'Right to Family & Care',
      description: 'Children have the right to family life, parental care, and protection from separation.',
      icon: Heart,
    },
    {
      id: 5,
      title: 'Right to Health',
      description: 'Every child has the right to the highest attainable standard of health and healthcare.',
      icon: Heart,
    },
    {
      id: 6,
      title: 'Right to Participation',
      description: 'Children have the right to express their views and participate in decisions affecting them.',
      icon: BookOpen,
    },
  ];

  const educationalVideos = [
    {
      id: 1,
      title: 'UN Convention on the Rights of the Child - Overview',
      description: 'Understanding the fundamental rights of all children worldwide.',
      youtubeUrl: 'https://www.youtube.com/watch?v=mzVrsPfTvQI',
      category: 'International Law',
    },
    {
      id: 2,
      title: 'Indigenous Children Rights in Canada',
      description: 'Exploring the specific rights and protections for Indigenous children.',
      youtubeUrl: 'https://www.youtube.com/watch?v=8Yd4lAkXjEQ',
      category: 'Indigenous Rights',
    },
    {
      id: 3,
      title: 'Jordans Principle Explained',
      description: 'How Jordans Principle ensures First Nations children receive services without delay.',
      youtubeUrl: 'https://www.youtube.com/watch?v=5zNfCVGXVJw',
      category: 'Policy',
    },
    {
      id: 4,
      title: 'Child Protection & Welfare Systems',
      description: 'Understanding how child protection services work and childrens rights within the system.',
      youtubeUrl: 'https://www.youtube.com/watch?v=7RJKXvQfKpU',
      category: 'Child Welfare',
    },
    {
      id: 5,
      title: 'Trauma & Mental Health in Children',
      description: 'Supporting childrens mental health and recovery from trauma.',
      youtubeUrl: 'https://www.youtube.com/watch?v=lVRmwVVFZqI',
      category: 'Health & Wellness',
    },
    {
      id: 6,
      title: 'Advocacy & Speaking Up for Children',
      description: 'How to advocate for childrens rights and report abuse or neglect.',
      youtubeUrl: 'https://www.youtube.com/watch?v=Ydq1-7Ys5Qs',
      category: 'Advocacy',
    },
    {
      id: 7,
      title: 'Truth and Reconciliation & Indigenous Children',
      description: 'Understanding the legacy of residential schools and ongoing reconciliation efforts.',
      youtubeUrl: 'https://www.youtube.com/watch?v=VJMhVoKqEi0',
      category: 'History & Reconciliation',
    },
    {
      id: 8,
      title: 'Every Child Matters Movement',
      description: 'The #EveryChildMatters movement and the orange shirt campaign.',
      youtubeUrl: 'https://www.youtube.com/watch?v=2xGFxzqGJXI',
      category: 'Awareness',
    },
  ];

  const categories = Array.from(new Set(educationalVideos.map(v => v.category)));

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Hero Section */}
      <section className="relative py-20 bg-forest-green text-white">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
            Childrens Rights
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            Understanding and protecting the fundamental rights of all children
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Every child deserves protection, education, health, and the opportunity to thrive. Learn about childrens rights and how to advocate for them.
          </p>
        </div>
      </section>

      {/* Rights Overview */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-forest-green mb-12 text-center">
            Universal Childrens Rights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right) => {
              const Icon = right.icon;
              return (
                <div
                  key={right.id}
                  className="bg-cream rounded-lg p-6 border-l-4 border-amber-orange hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="text-amber-orange flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-bold text-forest-green mb-2">
                        {right.title}
                      </h3>
                      <p className="text-charcoal-light">{right.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Educational Videos */}
      <section className="py-20 bg-cream-dark">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-forest-green mb-4 text-center">
            Educational Resources & Videos
          </h2>
          <p className="text-center text-charcoal-light mb-12 max-w-3xl mx-auto">
            Watch these videos to learn more about childrens rights, Indigenous rights, and how to advocate for all children.
          </p>

          {/* Filter by Category */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-amber-orange text-white rounded-full text-sm font-semibold"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {educationalVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-amber-orange uppercase tracking-wider">
                      {video.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-forest-green mb-3">
                    {video.title}
                  </h3>
                  <p className="text-charcoal-light mb-6">
                    {video.description}
                  </p>
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Watch on YouTube
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Documents */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-forest-green mb-12 text-center">
            Key Legal Documents & Frameworks
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-lg p-8 border-l-4 border-forest-green">
              <h3 className="text-2xl font-bold text-forest-green mb-3">
                UN Convention on the Rights of the Child (UNCRC)
              </h3>
              <p className="text-charcoal-light mb-4">
                The most widely ratified human rights treaty, protecting childrens rights globally.
              </p>
              <a
                href="https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-child"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-orange hover:text-amber-light font-semibold"
              >
                Read UNCRC <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-cream rounded-lg p-8 border-l-4 border-forest-green">
              <h3 className="text-2xl font-bold text-forest-green mb-3">
                Jordans Principle
              </h3>
              <p className="text-charcoal-light mb-4">
                Ensures First Nations children receive services without delay or jurisdictional disputes.
              </p>
              <a
                href="https://www.canada.ca/en/indigenous-services/services/jordans-principle.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-orange hover:text-amber-light font-semibold"
              >
                Learn More <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-cream rounded-lg p-8 border-l-4 border-forest-green">
              <h3 className="text-2xl font-bold text-forest-green mb-3">
                Canadian Charter of Rights & Freedoms
              </h3>
              <p className="text-charcoal-light mb-4">
                Protects fundamental rights and freedoms for all Canadians, including children.
              </p>
              <a
                href="https://www.justice.gc.ca/eng/csj-sjc/rfc-dlc/ccrf-ccdl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-orange hover:text-amber-light font-semibold"
              >
                Read Charter <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-cream rounded-lg p-8 border-l-4 border-forest-green">
              <h3 className="text-2xl font-bold text-forest-green mb-3">
                UN Declaration on the Rights of Indigenous Peoples
              </h3>
              <p className="text-charcoal-light mb-4">
                Affirms Indigenous peoples rights, including rights of Indigenous children.
              </p>
              <a
                href="https://www.un.org/development/desa/indigenouspeoples/declaration-on-the-rights-of-indigenous-peoples.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-orange hover:text-amber-light font-semibold"
              >
                Read Declaration <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-forest-green text-white">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Be an Advocate for Childrens Rights
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Every child deserves protection, education, and the chance to thrive. Learn, share, and advocate for childrens rights in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Back to Home
              <ExternalLink size={20} />
            </a>
            <a
              href="/share-story"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white"
            >
              Share Your Story
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-12">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <p className="mb-4">
            #EveryChildMatters · #ChildrensRights · #JusticeForBarran
          </p>
          <p className="text-sm opacity-80">
            Childrens rights are human rights. Learn, advocate, and protect.
          </p>
        </div>
      </footer>
    </div>
  );
}
