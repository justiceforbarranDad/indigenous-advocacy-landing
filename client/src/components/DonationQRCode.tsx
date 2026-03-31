import { QRCodeSVG as QRCode } from 'qrcode.react';

export function DonationQRCode() {
  // Create a Stripe checkout session URL for donations
  const donationUrl = `${window.location.origin}/donate`;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200">
        <QRCode
          value={donationUrl}
          size={256}
          level="H"
          includeMargin={true}
          fgColor="#000000"
          bgColor="#FFFFFF"
        />
      </div>
      <div className="text-center max-w-xs">
        <p className="text-sm font-semibold text-gray-800">
          📱 Point camera to donate instantly
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Choose $5, $10, $20, $50, $100 or custom amount
        </p>
        <p className="text-xs text-green-600 font-semibold mt-2">
          ✓ Donations go directly to your bank
        </p>
      </div>
    </div>
  );
}
