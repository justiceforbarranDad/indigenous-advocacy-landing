import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { ChevronLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function ShareStory() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    story: '',
    category: 'other' as const,
    isPublic: 'no' as const,
  });

  const submitStory = trpc.stories.submit.useMutation({
    onSuccess: () => {
      toast.success('Your story has been submitted! Thank you for sharing.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        story: '',
        category: 'other',
        isPublic: 'no',
      });
      setTimeout(() => setLocation('/'), 2000);
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to submit story');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitStory.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <button
          onClick={() => setLocation('/')}
          className="flex items-center gap-2 text-amber-orange hover:text-amber-light mb-8 transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Home
        </button>

        <Card className="border-amber-orange/20">
          <CardHeader className="bg-forest-green text-cream">
            <CardTitle className="text-3xl">Share Your Story</CardTitle>
            <CardDescription className="text-cream/80">
              Help us document systemic failures and advocate for change
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-amber-orange/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-amber-orange/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Phone Number (Optional)
                </label>
                <Input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-amber-orange/30"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Category *
                  </label>
                  <Select value={formData.category} onValueChange={(value: any) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger className="border-amber-orange/30">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="child_victim">Child Victim</SelectItem>
                      <SelectItem value="adult_victim">Adult Victim</SelectItem>
                      <SelectItem value="family_member">Family Member</SelectItem>
                      <SelectItem value="advocate">Advocate/Supporter</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Make Story Public? *
                  </label>
                  <Select value={formData.isPublic} onValueChange={(value: any) => setFormData({ ...formData, isPublic: value })}>
                    <SelectTrigger className="border-amber-orange/30">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes, share publicly</SelectItem>
                      <SelectItem value="no">No, keep private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Your Story *
                </label>
                <Textarea
                  placeholder="Share your experience. What happened? How did the system fail you? What accountability do you seek?"
                  value={formData.story}
                  onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                  required
                  minLength={10}
                  rows={8}
                  className="border-amber-orange/30 resize-none"
                />
                <p className="text-xs text-charcoal-light mt-2">
                  Minimum 10 characters. Your story will be reviewed before publication.
                </p>
              </div>

              <div className="bg-cream-dark p-4 rounded-lg border-l-4 border-amber-orange">
                <p className="text-sm text-charcoal">
                  <strong>Privacy Note:</strong> Your information is protected. If you choose to keep your story private, only our team will see it for documentation purposes. Public stories help amplify the call for accountability.
                </p>
              </div>

              <Button
                type="submit"
                disabled={submitStory.isPending}
                className="w-full bg-amber-orange hover:bg-amber-light text-white py-3 font-semibold"
              >
                {submitStory.isPending ? 'Submitting...' : 'Submit Your Story'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
