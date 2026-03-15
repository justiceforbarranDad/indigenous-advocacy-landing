import { Heart, QrCode, Send, CreditCard, Globe, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function DonateComprehensive() {
  const donationAmounts = [5, 10, 25, 50, 100];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white text-charcoal">
      {/* Hero Section */}
      <section className="bg-forest-green text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 text-amber-orange" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Justice for Barran</h1>
          <p className="text-lg opacity-90 mb-6">
            Your donation directly supports the fight for Indigenous children's rights and systemic accountability.
            Every contribution helps amplify this message of justice and reconciliation.
          </p>
          <p className="text-amber-orange font-semibold">✓ 100% of donations go directly to advocacy and legal support</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Donation Impact */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 bg-white border-2 border-forest-green/20">
            <div className="text-3xl font-bold text-amber-orange mb-2">$5</div>
            <p className="text-sm text-charcoal-light">Supports social media campaign reach to 1,000+ people</p>
          </Card>
          <Card className="p-6 bg-white border-2 border-forest-green/20">
            <div className="text-3xl font-bold text-amber-orange mb-2">$25</div>
            <p className="text-sm text-charcoal-light">Funds legal document preparation and evidence compilation</p>
          </Card>
          <Card className="p-6 bg-white border-2 border-forest-green/20">
            <div className="text-3xl font-bold text-amber-orange mb-2">$100+</div>
            <p className="text-sm text-charcoal-light">Supports court proceedings and lawyer consultation fees</p>
          </Card>
        </div>

        {/* Quick Donate Section - QR Codes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-forest-green mb-8 text-center">Quick Donate - Scan to Support</h2>
          <p className="text-center text-charcoal-light mb-8">Choose your preferred method - all donations go directly to Justice for Barran</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Option 1: Direct e-Transfer QR */}
            <Card className="p-8 bg-white border-3 border-amber-orange">
              <div className="flex items-center gap-2 mb-4">
                <QrCode className="w-6 h-6 text-amber-orange" />
                <h3 className="text-xl font-bold text-forest-green">Option 1: Direct e-Transfer</h3>
              </div>
              <p className="text-sm text-charcoal-light mb-6">
                Fastest way for Canadian donors. Scan with your banking app - no email visible.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg text-center mb-6">
                <p className="text-xs font-semibold text-charcoal mb-4">Scan with your banking app</p>
                <div className="bg-white p-4 rounded border-2 border-amber-orange inline-block">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/etransfer-direct-qr-code_ab8f0c7a.png" alt="Direct e-Transfer QR Code" className="w-40 h-40 rounded" />
                </div>
              </div>
              <div className="space-y-2 text-xs text-charcoal-light mb-6">
                <p>✓ Works with all Canadian banks</p>
                <p>✓ RBC, TD, Scotiabank, BMO, CIBC, Tangerine, EQ Bank</p>
                <p>✓ No fees - direct to your account</p>
                <p>✓ Funds go straight to Justice for Barran</p>
              </div>
              <Button className="w-full bg-amber-orange hover:bg-amber-light text-white font-semibold py-3">
                Send e-Transfer Now
              </Button>
            </Card>

            {/* Option 2: Donation Page Link QR */}
            <Card className="p-8 bg-white border-3 border-forest-green">
              <div className="flex items-center gap-2 mb-4">
                <QrCode className="w-6 h-6 text-forest-green" />
                <h3 className="text-xl font-bold text-forest-green">Option 2: Full Donation Page</h3>
              </div>
              <p className="text-sm text-charcoal-light mb-6">
                Access all payment methods - e-Transfer, wire, Wise, PayPal, and more.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg text-center mb-6">
                <p className="text-xs font-semibold text-charcoal mb-4">Scan to visit donation page</p>
                <div className="bg-white p-4 rounded border-2 border-forest-green inline-block">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/donate-link-qr-code_27a0ee4c.png" alt="Donation Page QR Code" className="w-40 h-40 rounded" />
                </div>
              </div>
              <div className="space-y-2 text-xs text-charcoal-light mb-6">
                <p>✓ All payment methods available</p>
                <p>✓ Canadian and international donors</p>
                <p>✓ Choose your preferred currency</p>
                <p>✓ All funds go to Justice for Barran</p>
              </div>
              <Button variant="outline" className="w-full border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white font-semibold py-3">
                Visit Donation Page
              </Button>
            </Card>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-forest-green mb-12 text-center">All Payment Methods</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CANADIAN DONORS - e-Transfer */}
            <Card className="p-8 bg-white border-2 border-amber-orange">
              <div className="flex items-center gap-2 mb-4">
                <Send className="w-6 h-6 text-amber-orange" />
                <h3 className="text-2xl font-bold text-forest-green">Canadian Donors: e-Transfer</h3>
              </div>
              <p className="text-sm text-charcoal-light mb-6">
                Fast, secure, and no fees. Works with all Canadian banks.
              </p>

              {/* Manual Entry */}
              <div className="bg-amber-orange/10 p-4 rounded-lg mb-6">
                <p className="text-sm font-semibold text-forest-green mb-2">Send to:</p>
                <p className="text-lg font-mono bg-white p-3 rounded border border-amber-orange text-center">
                  justiceforbarran@gmail.com
                </p>
                <p className="text-xs text-charcoal-light mt-2">✓ NO PASSWORD REQUIRED - Direct Deposit</p>
              </div>

              {/* Suggested Amounts */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-charcoal mb-3">Suggested amounts:</p>
                <div className="grid grid-cols-2 gap-2">
                  {donationAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className="border-amber-orange text-amber-orange hover:bg-amber-orange hover:text-white"
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-amber-orange hover:bg-amber-light text-white font-semibold py-3">
                Send e-Transfer Now
              </Button>
            </Card>

            {/* US DONORS - Multiple Options */}
            <div className="space-y-6">
              {/* Wire Transfer */}
              <Card className="p-6 bg-white border-2 border-forest-green/20">
                <div className="flex items-center gap-2 mb-3">
                  <Send className="w-5 h-5 text-forest-green" />
                  <h4 className="font-bold text-forest-green">Wire Transfer (US)</h4>
                </div>
                <p className="text-xs text-charcoal-light mb-3">Most direct method for US donors</p>
                <p className="text-xs mb-2"><strong>Fee:</strong> $15-30 USD</p>
                <p className="text-xs mb-2"><strong>Speed:</strong> 1-3 business days</p>
                <p className="text-xs text-charcoal-light mb-4">
                  Contact us for Canadian bank account details for wire transfer.
                </p>
                <Button variant="outline" className="w-full border-forest-green text-forest-green hover:bg-forest-green hover:text-white">
                  Get Wire Details
                </Button>
              </Card>

              {/* Wise */}
              <Card className="p-6 bg-white border-2 border-forest-green/20">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-forest-green" />
                  <h4 className="font-bold text-forest-green">Wise (Lowest Fees)</h4>
                </div>
                <p className="text-xs text-charcoal-light mb-3">Fast international transfers with best rates</p>
                <p className="text-xs mb-2"><strong>Fee:</strong> 1-2% + competitive rates</p>
                <p className="text-xs mb-2"><strong>Speed:</strong> 1-2 business days</p>
                <p className="text-xs text-charcoal-light mb-4">
                  Send directly to justiceforbarran@gmail.com
                </p>
                <a href="https://wise.com" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-forest-green hover:bg-forest-green/80 text-white">
                    Send via Wise
                  </Button>
                </a>
              </Card>

              {/* PayPal */}
              <Card className="p-6 bg-white border-2 border-forest-green/20">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard className="w-5 h-5 text-forest-green" />
                  <h4 className="font-bold text-forest-green">PayPal (Easiest)</h4>
                </div>
                <p className="text-xs text-charcoal-light mb-3">Quick and familiar payment method</p>
                <p className="text-xs mb-2"><strong>Fee:</strong> 2.2% + $0.30 USD</p>
                <p className="text-xs mb-2"><strong>Speed:</strong> Instant</p>
                <p className="text-xs text-charcoal-light mb-4">
                  Placeholder - PayPal account details coming soon
                </p>
                <Button disabled className="w-full bg-gray-300 text-gray-600 cursor-not-allowed">
                  Coming Soon
                </Button>
              </Card>

              {/* Stripe / Credit Card */}
              <Card className="p-6 bg-white border-2 border-forest-green/20">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard className="w-5 h-5 text-forest-green" />
                  <h4 className="font-bold text-forest-green">Credit Card (Stripe)</h4>
                </div>
                <p className="text-xs text-charcoal-light mb-3">All major credit cards accepted</p>
                <p className="text-xs mb-2"><strong>Fee:</strong> 2.9% + $0.30 USD</p>
                <p className="text-xs mb-2"><strong>Speed:</strong> Instant</p>
                <p className="text-xs text-charcoal-light mb-4">
                  Placeholder - Stripe integration coming soon
                </p>
                <Button disabled className="w-full bg-gray-300 text-gray-600 cursor-not-allowed">
                  Coming Soon
                </Button>
              </Card>

              {/* Western Union */}
              <Card className="p-6 bg-white border-2 border-forest-green/20">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-5 h-5 text-forest-green" />
                  <h4 className="font-bold text-forest-green">Western Union</h4>
                </div>
                <p className="text-xs text-charcoal-light mb-3">Available worldwide with agent locations</p>
                <p className="text-xs mb-2"><strong>Fee:</strong> 3-5% depending on amount</p>
                <p className="text-xs mb-2"><strong>Speed:</strong> Same day to 3 days</p>
                <p className="text-xs text-charcoal-light mb-4">
                  Contact us for Western Union receiver details
                </p>
                <Button variant="outline" className="w-full border-forest-green text-forest-green hover:bg-forest-green hover:text-white">
                  Get WU Details
                </Button>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-forest-green/5 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold text-forest-green mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-charcoal mb-2">Is my donation secure?</h4>
              <p className="text-sm text-charcoal-light">
                Yes. All payment methods use bank-level encryption and security protocols. Your financial information is protected.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-charcoal mb-2">What currency should I send?</h4>
              <p className="text-sm text-charcoal-light">
                Canadian donors: CAD via e-Transfer. US donors: USD via wire, Wise, PayPal, or credit card. Exchange rates handled automatically.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-charcoal mb-2">Will I receive a receipt?</h4>
              <p className="text-sm text-charcoal-light">
                Yes. Donation receipts are sent automatically to your email address. Keep for tax purposes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-charcoal mb-2">Can I make a recurring donation?</h4>
              <p className="text-sm text-charcoal-light">
                Yes. Contact us directly to set up monthly or quarterly recurring donations. Email: justiceforbarran@gmail.com
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-charcoal mb-2">Is this a registered charity?</h4>
              <p className="text-sm text-charcoal-light">
                This is a grassroots advocacy campaign. Donations support direct legal action and public awareness. Consult a tax professional about deductibility.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-amber-orange/10 border-2 border-amber-orange p-8 rounded-lg text-center">
          <Heart className="w-8 h-8 text-amber-orange mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-forest-green mb-4">Your Donation Matters</h3>
          <p className="text-charcoal mb-4">
            Every dollar supports the fight for Indigenous children's rights, systemic accountability, and justice for Barran.
            Together, we can create real change.
          </p>
          <p className="text-sm text-charcoal-light italic">
            "Justice delayed is justice denied. Your support accelerates the path to accountability."
          </p>
        </div>
      </div>
    </div>
  );
}
