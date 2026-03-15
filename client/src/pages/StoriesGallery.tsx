import { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Filter, Heart, Share2 } from 'lucide-react';
import { trpc } from '@/lib/trpc';

export default function StoriesGallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [limit] = useState(12);
  const [offset, setOffset] = useState(0);

  const { data: stories, isLoading } = trpc.stories.getPublic.useQuery({
    limit,
    offset,
  });

  const categories = [
    { id: 'all', label: 'All Stories' },
    { id: 'child_victim', label: 'Child Victims' },
    { id: 'adult_victim', label: 'Adult Victims' },
    { id: 'family_member', label: 'Family Members' },
    { id: 'advocate', label: 'Advocates' },
  ];

  const filteredStories = useMemo(() => {
    if (!stories) return [];
    
    return stories.filter((story) => {
      const matchesSearch =
        story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.story.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || story.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [stories, searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-forest-green text-cream py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Survivor Stories</h1>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Read the testimonies of families affected by systemic failures. These stories fuel our movement for justice and accountability.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-background border-b border-border py-8 px-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/50" size={20} />
              <input
                type="text"
                placeholder="Search stories by name or content..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setOffset(0);
                }}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <Filter size={20} className="text-foreground/70 self-center" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setOffset(0);
                  }}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-amber-orange text-white'
                      : 'bg-background border border-border text-foreground hover:border-amber-orange'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <p className="text-sm text-foreground/70">
              Showing {filteredStories.length} of {stories?.length || 0} stories
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-foreground/70">Loading stories...</p>
            </div>
          ) : filteredStories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-foreground/70 mb-4">No stories found matching your filters.</p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStories.map((story) => (
                <Card key={story.id} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-forest-green">{story.name}</h3>
                      <p className="text-sm text-foreground/70 capitalize">
                        {story.category.replace('_', ' ')}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-amber-orange/10 text-amber-orange text-xs font-semibold rounded-full">
                      {new Date(story.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="text-foreground/80 mb-6 flex-1 line-clamp-4">
                    {story.story}
                  </p>

                  <div className="flex gap-2 pt-4 border-t border-border">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-amber-orange/10 hover:bg-amber-orange/20 text-amber-orange rounded-lg transition-colors">
                      <Heart size={18} />
                      <span className="text-sm font-semibold">Support</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-forest-green/10 hover:bg-forest-green/20 text-forest-green rounded-lg transition-colors">
                      <Share2 size={18} />
                      <span className="text-sm font-semibold">Share</span>
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Pagination */}
          {filteredStories.length > 0 && (
            <div className="flex justify-center gap-4 mt-12">
              <Button
                onClick={() => setOffset(Math.max(0, offset - limit))}
                disabled={offset === 0}
                variant="outline"
              >
                Previous
              </Button>
              <Button
                onClick={() => setOffset(offset + limit)}
                disabled={!stories || stories.length < limit}
                variant="outline"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-orange/10 py-12 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-forest-green mb-4">Your Story Matters</h2>
          <p className="text-foreground/70 mb-6">
            If you or your family has been affected by systemic failures, share your story to amplify our movement for justice.
          </p>
          <a href="/share-story">
            <Button className="bg-amber-orange hover:bg-amber-light text-white">
              Share Your Story
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
