import { useState } from 'react';
import React from 'react';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { ChevronLeft, Copy, Check } from 'lucide-react';
import { useLocation } from 'wouter';
import QRCode from 'qrcode';

export default function Donate() {
  const [, setLocation] = useLocation();
  const [copied, setCopied] = useState(false);

  // Generate QR code on mount
  React.useEffect(() => {
    const canvas = document.getElementById('qrcode-canvas') as HTMLCanvasElement;
    if (canvas) {
      QRCode.toCanvas(canvas, 'etransfer:justiceforbarran@gmail.com', {
        width: 200,
        margin: 2,
        color: {
          dark: '#2D5016',
          light: '#FFFEF5',
        },
      });
    }
  }, []);
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
              <CardTitle className="text-2xl">✓ Direct e-Transfer (Canada)</CardTitle>
              <CardDescription className="text-cream/80">
                100% of your donation goes directly to justice — NO PLATFORM FEES
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
                <p className="text-xs text-charcoal-light mb-4 text-amber-orange font-semibold">
                  ✓ NO PASSWORD REQUIRED - Direct Deposit to Account
                </p>
                
                {/* QR Code */}
                <div className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg">
                  <p className="text-xs text-charcoal-light font-semibold">Scan to Send e-Transfer</p>
                  <canvas id="qrcode-canvas" className="border-2 border-forest-green rounded" />
                  <p className="text-xs text-charcoal-light text-center">
                    Scan with your banking app for instant direct deposit
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-charcoal">Why Direct e-Transfer?</h4>
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li className="flex gap-2">
                    <span className="text-amber-orange font-bold">✓</span>
                    <span><strong>100% of funds</strong> go directly to justice efforts</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-orange font-bold">✓</span>
                    <span><strong>ZERO platform fees</strong> (vs. 2-3% on other platforms)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-orange font-bold">✓</span>
                    <span>Available to all Canadian banks</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-orange font-bold">✓</span>
                    <span>Instant transfer confirmation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-orange font-bold">✓</span>
                    <span>Direct support for accountability & justice</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-orange/10 p-4 rounded-lg border-l-4 border-amber-orange">
                <p className="text-sm text-charcoal font-semibold mb-2">
                  💰 Save 2-3% in fees compared to other platforms
                </p>
                <p className="text-xs text-charcoal-light">
                  Every dollar counts. Direct e-Transfer ensures maximum impact for justice and accountability.
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
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <Input
                    type="text"
                    placeholder="Your name (or leave blank for anonymous)"
                    value={formData.donorName}
                    onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                    className="bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.donorEmail}
                    onChange={(e) => setFormData({ ...formData, donorEmail: e.target.value })}
                    required
                    className="bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Donation Amount (CAD)</label>
                  <Input
                    type="number"
                    placeholder="25.00"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    required
                    step="0.01"
                    min="0"
                    className="bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Donation Method</label>
                  <Select value={formData.method} onValueChange={(value: any) => setFormData({ ...formData, method: value })}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="etransfer">e-Transfer (Recommended)</SelectItem>
                      <SelectItem value="gofundme">GoFundMe</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message (Optional)</label>
                  <Textarea
                    placeholder="Share why you're supporting this cause..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={formData.isAnonymous === 'yes'}
                    onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked ? 'yes' : 'no' })}
                    className="w-4 h-4"
                  />
                  <label htmlFor="anonymous" className="text-sm">Keep my donation anonymous</label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-orange hover:bg-amber-light text-white font-semibold py-3"
                  disabled={submitDonation.isPending}
                >
                  {submitDonation.isPending ? 'Processing...' : 'Submit Donation'}
                </Button>
              </form>

              {totalData && (
                <div className="mt-6 p-4 bg-forest-green/10 rounded-lg text-center">
                  <p className="text-sm text-charcoal-light mb-1">Total Raised</p>
                  <p className="text-2xl font-bold text-amber-orange">${totalData.totalCAD}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* YouTube Channel */}
        <Card className="mt-8 border-red-600/30 bg-red-50">
          <CardHeader>
            <CardTitle className="text-lg text-red-700">Follow the Journey on YouTube</CardTitle>
            <CardDescription>
              Subscribe to @justiceforBarran for ongoing updates, evidence, and accountability documentation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <a
              href="https://www.youtube.com/@justiceforBarran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Subscribe to @justiceforBarran
            </a>
          </CardContent>
        </Card>

        {/* GoFundMe Alternative */}
        <Card className="mt-8 border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Alternative: GoFundMe</CardTitle>
            <CardDescription>
              If you prefer using GoFundMe, the link is available below. However, e-Transfer is recommended to avoid platform fees.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <a
              href="https://gofund.me/role.flip.tall"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Donate on GoFundMe
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
