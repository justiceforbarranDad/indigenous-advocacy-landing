import { useState } from 'react';
import { testimonials, getAllCategories } from '@/data/testimonials';
import { Heart, MessageCircle } from 'lucide-react';

export default function TestimonialsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const categories = getAllCategories();
  const categoryLabels: Record<string, string> = {
    indigenous: 'Indigenous Voices',
    haitian: 'Haitian-Canadian Stories',
    family: 'Family Experiences',
    advocate: 'Advocates & Professionals',
    survivor: 'Survivors'
  };

  const filtered = selectedCategory
    ? testimonials.filter(t => t.category === selectedCategory)
    : testimonials;

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Listener Stories & Testimonials
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Voices from those affected by systemic failures. These are real stories from real people who understand the injustice Barran and countless others have faced.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === ''
                ? 'bg-red-700 text-white shadow-lg'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            All Stories
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-red-700 text-white shadow-lg'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-red-700 overflow-hidden"
            >
              {/* Card Header with Avatar */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-red-700"
                />
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-slate-300 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p
                  className={`text-slate-700 leading-relaxed ${
                    expandedId === testimonial.id ? '' : 'line-clamp-3'
                  }`}
                >
                  "{testimonial.story}"
                </p>

                {/* Category Badge */}
                <div className="mt-4 mb-4">
                  <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {categoryLabels[testimonial.category] || testimonial.category}
                  </span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <span className="text-xs text-slate-500">
                    {new Date(testimonial.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                  <div className="flex gap-3">
                    <button className="text-slate-400 hover:text-red-700 transition-colors">
                      <Heart size={18} />
                    </button>
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === testimonial.id ? null : testimonial.id)
                      }
                      className="text-slate-400 hover:text-slate-700 transition-colors"
                    >
                      <MessageCircle size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No testimonials found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-red-700 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Share Your Story</h3>
          <p className="mb-6 text-lg">
            If you or someone you know has been affected by systemic failures, we want to hear your story.
          </p>
          <button className="bg-white text-red-700 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors">
            Submit Your Testimonial
          </button>
        </div>
      </div>
    </section>
  );
}
