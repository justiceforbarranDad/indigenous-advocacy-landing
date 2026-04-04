import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function DonationsPage() {
  const { t, i18n } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

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
      5: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_FXeDJJ_qr_eVq7sL5ZG91Q4YR8oV9EI0h_ae3c53e8.png',
      10: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_vJvcea_qr_28E4gz87O7XMgHz8oV9EI0g_924f5fff.png',
      20: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_xwck1X_qr_fZufZh3Rydi62QJdJf9EI08_51f358ee.png',
      50: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_2zVWTq_qr_14AaEX5ZGguifDv5cJ9EI0q_63f1c31a.png',
      100: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_H559Zk_qr_aFa00jafW6TIbnf48F9EI0d_e63c3f04.png',
    },
  };

  // Payment buttons
  const paymentButtons = {
    cdn: {
      5: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_7DhUgn_5-cdn_8f07100b.png',
      10: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_QpzChK_10-cdn_68170b86.png',
      20: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_mIQcqF_20-cdn_38a35bfc.png',
      50: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_sNDa0x_50-cdn_790ec0ee.png',
      100: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_VxnpA8_100-cdn_0e47674c.png',
    },
    usd: {
      5: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_fGBAtF_5-usd_38100bfa.png',
      10: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_bbbnpm_10-usd_042ce5a4.png',
      20: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_U39AdB_20-usd_e1d0a09c.png',
      50: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_5gJSrV_50-usd_a2f4197c.png',
      100: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_vzY7aT_100-usd_a883f4cc.png',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-white mb-4">💚 DONATE NOW 💚</h1>
          <p className="text-xl text-gray-300 mb-2">Support Justice for Barran</p>
          <p className="text-gray-400">Every donation helps fight for Indigenous rights and accountability</p>
        </div>

        {/* INTERAC e-TRANSFER SECTION */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-green-400 mb-8 text-center">📱 INTERAC e-TRANSFER (Direct to TD)</h2>
          <p className="text-center text-gray-300 mb-8">Scan QR code with your phone camera or click button to donate instantly</p>

          {/* CDN DONATIONS */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🍁 Canadian Dollars (CAD)</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {amounts.map((amount) => (
                <div key={`cdn-${amount}`} className="flex flex-col items-center">
                  {/* QR Code */}
                  <div className="mb-4 p-2 bg-white rounded-lg">
                    <img
                      src={qrCodes.cdn[amount as keyof typeof qrCodes.cdn]}
                      alt={`Donate $${amount} CAD`}
                      className="w-32 h-32 object-cover"
                    />
                  </div>
                  {/* Payment Button */}
                  <button
                    onClick={() => setSelectedAmount(amount)}
                    className="w-full"
                  >
                    <img
                      src={paymentButtons.cdn[amount as keyof typeof paymentButtons.cdn]}
                      alt={`Pay $${amount} CAD`}
                      className="w-full h-auto hover:opacity-80 transition-opacity"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* USD DONATIONS */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🇺🇸 US Dollars (USD)</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {amounts.map((amount) => (
                <div key={`usd-${amount}`} className="flex flex-col items-center">
                  {/* QR Code */}
                  <div className="mb-4 p-2 bg-white rounded-lg">
                    <img
                      src={qrCodes.usd[amount as keyof typeof qrCodes.usd]}
                      alt={`Donate $${amount} USD`}
                      className="w-32 h-32 object-cover"
                    />
                  </div>
                  {/* Payment Button */}
                  <button
                    onClick={() => setSelectedAmount(amount)}
                    className="w-full"
                  >
                    <img
                      src={paymentButtons.usd[amount as keyof typeof paymentButtons.usd]}
                      alt={`Pay $${amount} USD`}
                      className="w-full h-auto hover:opacity-80 transition-opacity"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CREDIT CARD SECTION */}
        <div className="bg-purple-900 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">💳 CREDIT CARD DONATIONS</h2>
          <p className="text-gray-300 mb-6">Visa, Mastercard, Amex - Secure Stripe Payment</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
            Donate with Credit Card
          </button>
        </div>

        {/* THANK YOU */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">🙏 Thank you for supporting justice and accountability 🙏</p>
        </div>
      </div>

      {/* WARNING MODAL */}
      {selectedAmount && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-yellow-300 rounded-lg p-8 max-w-md text-center animate-pulse">
            <p className="text-4xl font-black text-yellow-900 mb-4">⚡ INSTANT DONATION ⚡</p>
            <p className="text-xl font-bold text-yellow-900 mb-6">This is an instant donation</p>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedAmount(null)}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded font-bold"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Process donation
                  setSelectedAmount(null);
                }}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-bold"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
