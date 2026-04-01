import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, CreditCard, Banknote, Share2 } from "lucide-react";
import { useState } from "react";

export default function DonateQuick() {
  const [copied, setCopied] = useState(false);
  const stripePaymentLink = "https://buy.stripe.com/eVqeVdewcema0IBdJf9EI00";
  const donationLink = "https://indigenousadv-ahjdmzis.manus.space/donate";
  const etransferEmail = "justiceforbarran@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(donationLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero */}
      <div className="bg-red-600 text-white py-12 px-4 text-center">
        <Heart className="w-12 h-12 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">Support Justice for Barran</h1>
        <p className="text-lg opacity-90">Every donation directly supports legal advocacy and systemic change</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Donation Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Card Donation */}
          <Card className="p-6 hover:shadow-lg transition">
            <CreditCard className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold mb-2">Donate by Card</h3>
            <p className="text-gray-600 mb-4">Secure credit/debit card payment</p>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => window.open(stripePaymentLink, '_blank')}
            >
              Donate Now
            </Button>
          </Card>

          {/* E-Transfer */}
          <Card className="p-6 hover:shadow-lg transition">
            <Banknote className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-xl font-bold mb-2">E-Transfer (Canada)</h3>
            <p className="text-gray-600 mb-4">Send to: {etransferEmail}</p>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => window.location.href = "https://indigenousadv-ahjdmzis.manus.space/donate-etransfer"}
            >
              View QR Code
            </Button>
          </Card>
        </div>

        {/* Share Section */}
        <Card className="p-6 bg-blue-50 border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <Share2 className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold">Share & Spread the Word</h3>
          </div>
          <p className="text-gray-700 mb-4">Help us reach more supporters:</p>
          <div className="flex gap-2 flex-wrap">
            <Button 
              variant="outline"
              onClick={copyToClipboard}
              className="flex-1"
            >
              {copied ? "✓ Copied!" : "Copy Link"}
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                const text = `Support Justice for Barran - Help fight for systemic change in child protection. Donate: ${donationLink}`;
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="flex-1"
            >
              Share on Twitter
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(donationLink)}`, '_blank');
              }}
              className="flex-1"
            >
              Share on Facebook
            </Button>
          </div>
        </Card>

        {/* Impact Section */}
        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Your Impact</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <p className="text-gray-700">Donations go to legal advocacy</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">0%</div>
              <p className="text-gray-700">Administrative fees</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">∞</div>
              <p className="text-gray-700">Systemic change potential</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Questions about donations?</p>
          <Button 
            variant="outline"
            onClick={() => window.location.href = "mailto:justiceforbarran@gmail.com"}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
