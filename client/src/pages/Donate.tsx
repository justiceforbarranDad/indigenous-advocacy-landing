import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { ChevronLeft, Copy, Check } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Donate() {
  const [, setLocation] = useLocation();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<{
    donorName: string;
    donorEmail: string;
    amount: string;
    method: 'etransfer' | 'gofundme' | 'other';
    message: string;
    isAnonymous: 'yes' | 'no';
  }>({
    donorName: '',
    donorEmail: '',
    amount: '',
    method: 'etransfer',
    message: '',
    isAnonymous: 'no',
  });

  const { data: totalData } = trpc.donations.getTotal.useQuery();
  const submitDonation = trpc.donations.submit.useMutation({
    onSuccess: () => {
      toast.success('Thank you for your donation!');
      setFormData({
        donorName: '',
        donorEmail: '',
        amount: '',
        method: 'etransfer',
        message: '',
        isAnonymous: 'no',
      });
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to process donation');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.amount || parseFloat(formData.amount) < 0.01) {
      toast.error('Please enter a valid amount');
      return;
    }
    submitDonation.mutate({
      ...formData,
      amount: parseFloat(formData.amount),
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => setLocation('/')}
          className="flex items-center gap-2 text-amber-orange hover:text-amber-light mb-8 transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Home
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* e-Transfer Section */}
          <Card className="border-amber-orange/20 h-fit">
            <CardHeader className="bg-forest-green text-cream">
              <CardTitle className="text-2xl">Direct e-Transfer (Canada)</CardTitle>
              <CardDescription className="text-cream/80">
                No fees - funds go directly to support
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8 space-y-6">
              <div className="bg-amber-orange/10 p-6 rounded-lg border-2 border-amber-orange">
                <p className="text-sm text-charcoal-light mb-3">Send e-Transfer to:</p>
                <div className="flex items-center gap-2 mb-4">
                  <code className="flex-1 bg-white p-3 rounded font-mono text-sm break-all">
                    justiceforbarran@gmail.com
                  </code>
                  <button
                    onClick={() => copyToClipboard('justiceforbarran@gmail.com')}
                    className="p-2 hover:bg-amber-orange/20 rounded transition-colors"
                  >
                    {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                  </button>
                </div>
                <p className="text-xs text-charcoal-light">
                  Security Question Answer: <strong>JUSTICE</strong>
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-charcoal">Why e-Transfer?</h4>
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li className="flex gap-2">
                    <span className="text-amber-orange">✓</span>
                    <span>No platform fees - 100% reaches the cause</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-orange">✓</span>
                    <span>Direct support to Indigenous advocacy</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-orange">✓</span>
                    <span>Available to all Canadian banks</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-orange">✓</span>
                    <span>Instant transfer confirmation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cream-dark p-4 rounded-lg border-l-4 border-amber-orange">
                <p className="text-xs text-charcoal">
                  <strong>Privacy:</strong> e-Transfer donations are tracked separately for transparency and accountability.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Donation Form */}
          <Card className="border-amber-orange/20">
            <CardHeader className="bg-forest-green text-cream">
              <CardTitle className="text-2xl">Donation Form</CardTitle>
              <CardDescription className="text-cream/80">
                Track your support for justice
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Full name"
                    value={formData.donorName}
                    onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
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
                    value={formData.donorEmail}
                    onChange={(e) => setFormData({ ...formData, donorEmail: e.target.value })}
                    required
                    className="border-amber-orange/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Amount (CAD) *
                  </label>
                  <Input
                    type="number"
                    placeholder="25.00"
                    step="0.01"
                    min="0.01"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    required
                    className="border-amber-orange/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Donation Method *
                  </label>
                  <Select value={formData.method} onValueChange={(value: any) => setFormData({ ...formData, method: value })}>
                    <SelectTrigger className="border-amber-orange/30">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="etransfer">e-Transfer (Recommended - No Fees)</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    placeholder="Leave a message of support..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="border-amber-orange/30 resize-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={formData.isAnonymous === 'yes'}
                    onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked ? 'yes' : 'no' })}
                    className="rounded"
                  />
                  <label htmlFor="anonymous" className="text-sm text-charcoal">
                    Keep my donation anonymous
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={submitDonation.isPending}
                  className="w-full bg-amber-orange hover:bg-amber-light text-white py-3 font-semibold"
                >
                  {submitDonation.isPending ? 'Processing...' : 'Record Donation'}
                </Button>
              </form>

              {totalData && (
                <div className="mt-6 p-4 bg-cream-dark rounded-lg text-center">
                  <p className="text-xs text-charcoal-light mb-1">Total Donations Received</p>
                  <p className="text-2xl font-bold text-amber-orange">
                    ${totalData.totalCAD}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Alternative Donation Methods */}
        <Card className="mt-8 border-amber-orange/20">
          <CardHeader className="bg-charcoal-light text-cream">
            <CardTitle>Alternative Donation Methods</CardTitle>
            <CardDescription className="text-cream/80">
              If you prefer other platforms, you can also support through:
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="space-y-4">
              <a
                href="https://gofund.me/role.flip.tall"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border-2 border-amber-orange/30 rounded-lg hover:border-amber-orange hover:bg-cream-dark transition-colors"
              >
                <h4 className="font-semibold text-forest-green mb-1">GoFundMe</h4>
                <p className="text-sm text-charcoal-light mb-3">Support through GoFundMe platform (platform fees apply)</p>
                <span className="inline-flex items-center gap-2 text-amber-orange font-semibold text-sm">
                  Visit GoFundMe Campaign →
                </span>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Impact Section */}
        <Card className="mt-8 border-amber-orange/20">
          <CardHeader className="bg-forest-green text-cream">
            <CardTitle>Your Impact</CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-orange mb-2">$25</p>
                <p className="text-sm text-charcoal-light">Supports legal documentation</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-orange mb-2">$100</p>
                <p className="text-sm text-charcoal-light">Funds advocacy materials</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-orange mb-2">$500+</p>
                <p className="text-sm text-charcoal-light">Supports public awareness campaign</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
