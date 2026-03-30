import { useEffect, useState } from 'react';
import { useSearchParams } from 'wouter';
import { useLocation } from 'wouter';
import { CheckCircle, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trpc } from '@/lib/trpc';

export default function DonationSuccess() {
  const [searchParams] = useSearchParams();
  const [, setLocation] = useLocation();
  const [paymentStatus, setPaymentStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const sessionId = searchParams.get('session_id');
  const getPaymentStatus = trpc.stripe.getPaymentStatus.useQuery(
    { sessionId: sessionId || '' },
    { enabled: !!sessionId }
  );

  useEffect(() => {
    if (getPaymentStatus.data) {
      setPaymentStatus(getPaymentStatus.data);
      setLoading(false);
    }
  }, [getPaymentStatus.data]);

  const handleDownloadReceipt = () => {
    const receipt = `
DONATION RECEIPT
===============

Thank you for your generous donation to Justice for Barran!

Amount: $${paymentStatus?.amount?.toFixed(2) || '0.00'} ${paymentStatus?.currency?.toUpperCase() || 'USD'}
Status: ${paymentStatus?.status === 'paid' ? 'Confirmed' : 'Processing'}
Date: ${new Date().toLocaleDateString()}

Your donation helps us fight for Indigenous justice and accountability.

For more information, visit: www.justiceforbarran.com
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(receipt));
    element.setAttribute('download', `donation-receipt-${new Date().getTime()}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Justice for Barran',
          text: 'I just donated to support Indigenous justice and accountability. Join me!',
          url: window.location.origin,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your donation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h1>
          <p className="text-gray-600">Your donation has been received</p>
        </div>

        {/* Donation Details */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b">
              <span className="text-gray-600">Amount</span>
              <span className="text-2xl font-bold text-gray-900">
                ${paymentStatus?.amount?.toFixed(2) || '0.00'} {paymentStatus?.currency?.toUpperCase() || 'USD'}
              </span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b">
              <span className="text-gray-600">Status</span>
              <span className="text-green-600 font-semibold">
                {paymentStatus?.status === 'paid' ? 'Confirmed' : 'Processing'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Date</span>
              <span className="text-gray-900">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700">
            Your donation helps us fight for Indigenous justice and accountability. A confirmation email has been sent to your inbox.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          <Button
            onClick={handleDownloadReceipt}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Download Receipt
          </Button>
          <Button
            onClick={handleShare}
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <Share2 size={18} />
            Share Your Support
          </Button>
          <Button
            onClick={() => setLocation('/')}
            variant="outline"
            className="w-full"
          >
            Back to Home
          </Button>
        </div>

        {/* Additional Info */}
        <div className="text-center text-sm text-gray-600">
          <p>Questions? Contact us at:</p>
          <p className="font-semibold text-gray-900">justiceforbarran@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
