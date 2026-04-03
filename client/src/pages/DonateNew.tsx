import React, { useState } from 'react';
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

import TDDirectDonation from '@/components/TDDirectDonation';
import InternationalDonation from '@/components/InternationalDonation';

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
  const { data: campaignData } = trpc.donations.getActiveCampaign.useQuery();
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
      {/* Large QR Code Banner at Top */}
      <div className="w-full bg-white py-12 border-b-4 border-amber-orange">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-green text-center">
              Support McGovern Arts Institute Community Healing Centre
            </h2>
            <p className="text-sm md:text-base text-charcoal-light text-center max-w-3xl">
              Terry James Foundation wellness retreat for autistic & First Nations kids – after-hours and weekend programs
            </p>
            
            {/* Large Printable QR Code */}
            <div className="bg-white p-8 rounded-lg border-4 border-forest-green shadow-lg">
              <p className="text-sm font-semibold text-charcoal mb-4 text-center">Scan to Donate</p>
              <div className="w-72 h-72 bg-white rounded-lg flex items-center justify-center border-2 border-charcoal p-4">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://donate.stripe.com/test_9B63cvgJA8cE3M048T3Ru01"
                  alt="Donate QR Code - CAD"
                  className="w-full h-full"
                />
              </div>
              <p className="text-xs text-charcoal-light text-center mt-4 font-semibold">
                Scan with your phone camera or Stripe app
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-12">
        {/* CAD and USD Donation Sections Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* CAD Donations */}
          <Card className="border-amber-orange/20 bg-gradient-to-br from-amber-orange/5 to-forest-green/5">
            <CardHeader className="bg-forest-green text-cream">
              <CardTitle className="text-2xl">💳 Donate in CAD</CardTitle>
              <CardDescription className="text-cream/80">Canadian Dollars</CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="space-y-3 mb-6">
                <a
                  href="https://donate.stripe.com/test_9B63cvgJA8cE3M048T3Ru01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-orange hover:bg-amber-light text-white font-semibold py-4 px-4 rounded-lg text-center transition-colors text-lg"
                >
                  Donate $5 CAD
                </a>
                <a
                  href="https://donate.stripe.com/test_9B63cvgJA8cE3M048T3Ru01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-orange hover:bg-amber-light text-white font-semibold py-4 px-4 rounded-lg text-center transition-colors text-lg"
                >
                  Donate $10 CAD
                </a>
                <a
                  href="https://donate.stripe.com/test_9B63cvgJA8cE3M048T3Ru01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-orange hover:bg-amber-light text-white font-semibold py-4 px-4 rounded-lg text-center transition-colors text-lg"
                >
                  Donate $20 CAD
                </a>
                <a
                  href="https://donate.stripe.com/test_9B63cvgJA8cE3M048T3Ru01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-orange hover:bg-amber-light text-white font-semibold py-4 px-4 rounded-lg text-center transition-colors text-lg"
                >
                  Donate $50 CAD
                </a>
                <a
                  href="https://donate.stripe.com/test_9B63cvgJA8cE3M048T3Ru01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-orange hover:bg-amber-light text-white font-semibold py-4 px-4 rounded-lg text-center transition-colors text-lg"
                >
                  Donate $100 CAD
                </a>
                <a
                  href="https://donate.stripe.com/test_9B63cvgJA8cE3M048T3Ru01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-forest-green hover:bg-forest-green/80 text-white font-semibold py-4 px-4 rounded-lg text-center transition-colors text-lg"
                >
                  Custom Amount
                </a>
              </div>
              <div className="bg-amber-orange/10 p-4 rounded-lg border-l-4 border-amber-orange">
                <p className="text-sm text-charcoal font-semibold mb-2">✓ Secure & Fast</p>
                <p className="text-xs text-charcoal-light">
                  No password required. Stripe handles all payments securely.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* USD Donations */}
          <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-forest-green/5">
            <CardHeader className="bg-blue-600 text-cream">
              <CardTitle className="text-2xl">💳 Donate in USD</CardTitle>
              <CardDescription className="text-cream/80">United States Dollars</CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="space-y-3 mb-6">
                <a
                  href="https://buy.stripe.com/test_bJeeVdeBsgJaeqE6h13Ru02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-lg text-center transition-colors text-lg"
                >
                  Donate $5 USD
                </a>
                <a
                  href="https://buy.stripe.com/test_bJeeVdeBsgJaeqE6h13Ru02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-lg text-center transition-colors text-lg"
                >
                  Donate $10 USD
                </a>
                <a
                  href="https://buy.stripe.com/test_bJeeVdeBsgJaeqE6h13Ru02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-lg text-center transition-colors text-lg"
                >
                  Donate $20 USD
                </a>
                <a
                  href="https://buy.stripe.com/test_bJeeVdeBsgJaeqE6h13Ru02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-lg text-center transition-colors text-lg"
                >
                  Donate $50 USD
                </a>
                <a
                  href="https://buy.stripe.com/test_bJeeVdeBsgJaeqE6h13Ru02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-lg text-center transition-colors text-lg"
                >
                  Donate $100 USD
                </a>
                <a
                  href="https://buy.stripe.com/test_bJeeVdeBsgJaeqE6h13Ru02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-forest-green hover:bg-forest-green/80 text-white font-semibold py-4 px-4 rounded-lg text-center transition-colors text-lg"
                >
                  Custom Amount
                </a>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-charcoal font-semibold mb-2">✓ Secure & Fast</p>
                <p className="text-xs text-charcoal-light">
                  No password required. Stripe handles all payments securely.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* TD Direct Donation Section */}
        <div className="mb-12">
          <TDDirectDonation />
        </div>
        
        {/* International Donation Section */}
        <div className="mb-12">
          <InternationalDonation />
        </div>

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
                <div className="flex flex-col md:flex-row items-center gap-2 mb-4">
                  <code className="w-full md:flex-1 bg-white p-3 rounded font-mono text-xs md:text-sm break-words overflow-hidden">
                    justiceforbarran@gmail.com
                  </code>
                  <button
                    onClick={() => copyToClipboard('justiceforbarran@gmail.com')}
                    className="p-2 hover:bg-amber-orange/20 rounded transition-colors flex-shrink-0"
                  >
                    {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                  </button>
                </div>
                <p className="text-xs text-charcoal-light mb-4 text-amber-orange font-semibold">
                  ✓ NO PASSWORD REQUIRED - Direct Deposit to Account
                </p>
                
                {/* QR Code */}
                <div className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg overflow-hidden">
                  <p className="text-xs text-charcoal-light font-semibold">Scan to Send e-Transfer</p>
                  <div className="w-full flex justify-center">
                    <img src="/etransfer-qr.png" alt="e-Transfer QR Code" className="w-40 h-40 border-2 border-forest-green rounded" />
                  </div>
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
                  className="w-full bg-forest-green hover:bg-forest-green/80 text-white font-semibold py-3"
                  disabled={submitDonation.isPending}
                >
                  {submitDonation.isPending ? 'Processing...' : 'Submit Donation'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>


      </div>
    </div>
  );
}
