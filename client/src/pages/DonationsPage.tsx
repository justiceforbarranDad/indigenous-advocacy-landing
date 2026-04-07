import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function DonationsPage() {
  const { t, i18n } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [showWarning, setShowWarning] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'qr' | 'direct' | 'etransfer'>('qr');

  const amounts = [5, 10, 20, 50, 100];

  // QR codes for Interac e-Transfer (CDN + USD)
  const qrCodes = {
    cdn: {
      5: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_QrTSqz_qr_9B68wP73Kb9Y4YR7kR9EI0c_6a2b4d14.png',
      10: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_1ap9Yp_qr_6oUeVdafWdi6ajb6gN9EI0b_b3ce9feb.png',
      20: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_BP83kb_qr_3cIcN51Jq5PEezreNj9EI0k_ebeae29c.png',
      50: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_6XKClA_qr_4gMdR987O0vkajb7kR9EI0n_ee6f0648.png',
      100: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_RnBI0p_qr_00w00jco47XM3UNfRn9EI0m_d74e5542.png',
    },
    usd: {
      5: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/5-usd_bd2c5f7d.png',
      10: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/10-usd_2e8626ac.png',
      20: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_U39AdB_20-usd_8f33553c.png',
      50: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/50-usd_a1384294.png',
      100: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/100-usd_fc5313c8.png',
    },
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4" style={{ background: '#0a0a0a' }}>
      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(255, 255, 0, 0.5), 0 0 20px rgba(255, 255, 0, 0.3), inset 0 0 10px rgba(255, 255, 0, 0.1); }
          50% { box-shadow: 0 0 20px rgba(255, 255, 0, 0.8), 0 0 40px rgba(255, 255, 0, 0.5), inset 0 0 15px rgba(255, 255, 0, 0.2); }
        }
        
        .glow-yellow {
          color: #ffff00;
          text-shadow: 0 0 10px rgba(255, 255, 0, 0.8), 0 0 20px rgba(255, 255, 0, 0.5);
        }
        
        .glow-frame {
          border: 3px solid #ffff00;
          border-radius: 12px;
          padding: 16px;
          background: rgba(255, 255, 0, 0.05);
          animation: glow 2s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(255, 255, 0, 0.5), 0 0 20px rgba(255, 255, 0, 0.3), inset 0 0 10px rgba(255, 255, 0, 0.1);
        }
        
        .glow-button {
          background: linear-gradient(135deg, #ffff00 0%, #ffff88 100%);
          color: #000;
          border: 2px solid #ffff00;
          font-weight: bold;
          box-shadow: 0 0 15px rgba(255, 255, 0, 0.6), 0 0 30px rgba(255, 255, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .glow-button:hover {
          box-shadow: 0 0 25px rgba(255, 255, 0, 0.8), 0 0 50px rgba(255, 255, 0, 0.5);
          transform: scale(1.05);
        }
        
        .glow-warning {
          background: linear-gradient(135deg, #ffff00 0%, #ffff88 100%);
          border: 3px solid #ffff00;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 0 30px rgba(255, 255, 0, 0.8), 0 0 60px rgba(255, 255, 0, 0.5), inset 0 0 20px rgba(255, 255, 0, 0.2);
          animation: glow 1.5s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold glow-yellow mb-4">💛 SUPPORT OUR MISSION 💛</h1>
          <p className="text-2xl glow-yellow mb-2">Multiple Ways to Donate</p>
          <p className="text-lg glow-yellow opacity-90">Every dollar helps Indigenous families get justice</p>
        </div>

        {/* PAYMENT METHOD TABS */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setPaymentMethod('qr')}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              paymentMethod === 'qr'
                ? 'glow-button'
                : 'border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300/10'
            }`}
          >
            📱 QR Codes
          </button>
          <button
            onClick={() => setPaymentMethod('etransfer')}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              paymentMethod === 'etransfer'
                ? 'glow-button'
                : 'border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300/10'
            }`}
          >
            💳 E-Transfer
          </button>
          <button
            onClick={() => setPaymentMethod('direct')}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              paymentMethod === 'direct'
                ? 'glow-button'
                : 'border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300/10'
            }`}
          >
            🏦 Direct Deposit
          </button>
        </div>

        {/* QR CODES SECTION */}
        {paymentMethod === 'qr' && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold glow-yellow text-center mb-12">📱 SCAN TO DONATE</h2>
          
          {/* CDN QR Codes */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold glow-yellow text-center mb-8">🍁 Canadian Dollars (CAD)</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {amounts.map((amount) => (
                <div key={`cdn-${amount}`} className="glow-frame">
                  <div className="text-center mb-4">
                    <p className="text-xl font-bold glow-yellow">${amount} CAD</p>
                  </div>
                  <img 
                    src={qrCodes.cdn[amount as keyof typeof qrCodes.cdn]} 
                    alt={`$${amount} CAD QR Code`}
                    className="w-full h-auto mb-4"
                  />
                  <p className="text-center glow-yellow font-semibold">Scan to pay</p>
                </div>
              ))}
            </div>
          </div>

          {/* USD QR Codes */}
          <div>
            <h3 className="text-2xl font-bold glow-yellow text-center mb-8">🇺🇸 US Dollars (USD)</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {amounts.map((amount) => (
                <div key={`usd-${amount}`} className="glow-frame">
                  <div className="text-center mb-4">
                    <p className="text-xl font-bold glow-yellow">${amount} USD</p>
                  </div>
                  <img 
                    src={qrCodes.usd[amount as keyof typeof qrCodes.usd]} 
                    alt={`$${amount} USD QR Code`}
                    className="w-full h-auto mb-4"
                  />
                  <p className="text-center glow-yellow font-semibold">Scan to pay</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        )}

        {/* E-TRANSFER SECTION */}
        {paymentMethod === 'etransfer' && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold glow-yellow text-center mb-12">💳 INTERAC E-TRANSFER</h2>
          <div className="glow-frame max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-2xl font-bold glow-yellow mb-4">Send funds via Interac e-Transfer</p>
              <p className="text-xl glow-yellow mb-8">Email: <span className="font-bold">justice.for.barran@gmail.com</span></p>
              <div className="bg-black/50 p-6 rounded-lg mb-8">
                <p className="text-lg glow-yellow mb-4">✅ Instant delivery</p>
                <p className="text-lg glow-yellow mb-4">✅ Secure and private</p>
                <p className="text-lg glow-yellow">✅ Any amount accepted</p>
              </div>
              <p className="text-sm glow-yellow opacity-75">Note: You can send e-transfers to the email above. No password required.</p>
            </div>
          </div>
        </div>
        )}

        {/* DIRECT DEPOSIT SECTION */}
        {paymentMethod === 'direct' && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold glow-yellow text-center mb-12">🏦 DIRECT DEPOSIT</h2>
          <div className="glow-frame max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-2xl font-bold glow-yellow mb-6">Bank Account Information</p>
              <div className="bg-black/50 p-6 rounded-lg space-y-4 text-left">
                <div>
                  <p className="text-sm text-yellow-300/70 mb-1">Account Holder</p>
                  <p className="text-xl font-bold glow-yellow">McGovern Arts Institute of Human Rights</p>
                </div>
                <div>
                  <p className="text-sm text-yellow-300/70 mb-1">Bank Name</p>
                  <p className="text-xl font-bold glow-yellow">Royal Bank of Canada (RBC)</p>
                </div>
                <div>
                  <p className="text-sm text-yellow-300/70 mb-1">Transit Number</p>
                  <p className="text-xl font-bold glow-yellow">00002</p>
                </div>
                <div>
                  <p className="text-sm text-yellow-300/70 mb-1">Institution Number</p>
                  <p className="text-xl font-bold glow-yellow">003</p>
                </div>
                <div>
                  <p className="text-sm text-yellow-300/70 mb-1">Account Number</p>
                  <p className="text-xl font-bold glow-yellow">1234567890</p>
                </div>
              </div>
              <p className="text-sm glow-yellow opacity-75 mt-6">✅ All donations are secure and tax-deductible</p>
            </div>
          </div>
        </div>
        )}

        {/* INSTANT DONATION WARNING */}
        {showWarning && paymentMethod === 'qr' && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="glow-warning max-w-md">
              <h2 className="text-4xl font-bold text-center mb-6" style={{ color: '#000' }}>
                ⚡ INSTANT DONATION ⚡
              </h2>
              <p className="text-xl text-center font-semibold mb-8" style={{ color: '#000' }}>
                This is an immediate, non-refundable donation to support Indigenous families seeking justice.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowWarning(false)}
                  className="flex-1 py-3 px-4 bg-black text-yellow-300 font-bold rounded-lg border-2 border-yellow-300 hover:bg-gray-900"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowWarning(false);
                  }}
                  className="flex-1 py-3 px-4 glow-button rounded-lg"
                >
                  Confirm Donation
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FOOTER INFO */}
        <div className="text-center mt-16 pt-8 border-t border-yellow-500/30">
          <p className="text-lg glow-yellow mb-4">
            💰 All donations go directly to supporting Indigenous families
          </p>
          <p className="text-lg glow-yellow mb-4">
            ✊ Together we demand justice and accountability
          </p>
          <p className="text-sm glow-yellow opacity-75">
            Choose your preferred payment method above. Every donation makes a difference.
          </p>
        </div>
      </div>
    </div>
  );
}
