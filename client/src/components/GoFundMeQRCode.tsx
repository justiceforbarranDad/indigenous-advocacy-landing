import { QRCodeSVG } from 'qrcode.react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

export default function GoFundMeQRCode() {
  const { i18n } = useTranslation();

  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border-2 border-red-300 shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* QR Code */}
        <div className="flex-shrink-0">
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-red-200">
            <QRCodeSVG
              value="https://gofund.me/role.flip.tall"
              size={250}
              level="H"
              includeMargin={true}
              fgColor="#000000"
              bgColor="#FFFFFF"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-red-900 mb-2">
            {i18n.language === 'fr' ? 'Soutenez la Justice' : 'Support Justice for Barran'}
          </h3>
          <p className="text-gray-700 mb-4">
            {i18n.language === 'fr'
              ? 'Scannez le code QR ou visitez gofund.me/role.flip.tall pour faire un don sécurisé.'
              : 'Scan the QR code or visit gofund.me/role.flip.tall to donate securely.'}
          </p>

          <a
            href="https://gofund.me/role.flip.tall"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-md hover:shadow-lg"
          >
            {i18n.language === 'fr' ? 'Donner Maintenant' : 'Donate Now'}
            <ExternalLink size={20} />
          </a>

          <p className="text-xs text-gray-600 mt-3">
            {i18n.language === 'fr'
              ? '100% des dons vont directement à la défense juridique et au changement systémique'
              : '100% of donations go directly to legal defense and systemic change'}
          </p>
        </div>
      </div>
    </div>
  );
}
