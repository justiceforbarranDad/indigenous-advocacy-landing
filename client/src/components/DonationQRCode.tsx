import { QRCodeSVG as QRCode } from 'qrcode.react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

export function DonationQRCode() {
  const { t } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [copied, setCopied] = useState(false);

  const donationAmounts = [
    { amount: 5, label: '$5' },
    { amount: 10, label: '$10' },
    { amount: 20, label: '$20' },
    { amount: 50, label: '$50' },
    { amount: 100, label: '$100' },
  ];

  const getCheckoutUrl = (amount: number) => {
    return `${window.location.origin}/donate?amount=${amount}`;
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setShowConfirmation(true);
  };

  const handleConfirmDonation = () => {
    if (selectedAmount !== null) {
      const url = getCheckoutUrl(selectedAmount);
      window.open(url, '_blank');
      setShowConfirmation(false);
      setSelectedAmount(null);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const paymentMethods = [
    { name: 'Visa', icon: '💳' },
    { name: 'Mastercard', icon: '💳' },
    { name: 'Amex', icon: '💳' },
    { name: 'Apple Pay', icon: '🍎' },
    { name: 'Google Pay', icon: '🔵' },
    { name: 'Klarna', icon: '⏰' },
    { name: 'Sezzle', icon: '⏰' },
    { name: 'E-Transfer', icon: '📧' },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* ACCEPTED PAYMENT METHODS */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-400 rounded-lg p-4">
        <p className="text-xs font-bold text-gray-700 mb-2 text-center">
          {t('donate.weAccept')}
        </p>
        <p className="text-xs text-gray-600 mb-3 text-center italic">
          {t('donate.internationalDonations')}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {paymentMethods.map((method, idx) => (
            <div key={idx} className="flex items-center justify-center gap-1 bg-white rounded p-2 border border-gray-200">
              <span className="text-lg">{method.icon}</span>
              <span className="text-xs font-semibold text-gray-700 line-clamp-1">{method.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* STEP 1: SELECT AMOUNT */}
      <div className="border-2 border-blue-400 bg-blue-50 rounded-lg p-4">
        <h4 className="text-lg font-bold mb-3 text-center">
          {t('donate.step1SelectAmount')}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {donationAmounts.map((item) => (
            <button
              key={item.amount}
              onClick={() => handleAmountSelect(item.amount)}
              className={`py-3 px-2 rounded-lg font-bold text-sm transition-all border-2 ${
                selectedAmount === item.amount
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-800 border-gray-300 hover:border-blue-600 hover:bg-blue-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* STEP 2: QR CODE (shows only when amount selected) */}
      {selectedAmount && (
        <div className="border-2 border-green-400 bg-green-50 rounded-lg p-6 text-center">
          <h4 className="text-lg font-bold mb-2">
            {t('donate.step2ScanQR')}
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            {t('donate.amount')}
            <span className="text-2xl font-bold text-green-600">${selectedAmount}</span>
          </p>
          <div className="flex justify-center mb-4">
            <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
              <QRCode
                value={getCheckoutUrl(selectedAmount)}
                size={200}
                level="H"
                includeMargin={true}
                fgColor="#000000"
                bgColor="#FFFFFF"
              />
            </div>
          </div>
          <p className="text-xs text-gray-600 mb-4">
            {t('donate.pointCamera')}
          </p>
          <button
            onClick={() => setSelectedAmount(null)}
            className="text-sm text-blue-600 hover:underline"
          >
            {t('donate.changeAmount')}
          </button>
        </div>
      )}

      {/* E-TRANSFER SECTION */}
      <div className="border-2 border-orange-400 bg-orange-50 p-4 rounded-lg">
        <h5 className="font-bold mb-3 text-sm flex items-center gap-2">
          📧 {t('donate.eTransfer')}
        </h5>
        <div className="flex flex-col sm:flex-row gap-2 mb-3">
          <div className="flex-1 bg-white p-3 rounded border border-orange-300">
            <p className="text-xs font-mono text-center text-gray-800 break-all">
              justiceforbarran@gmail.com
            </p>
          </div>
          <button
            onClick={() => copyToClipboard('justiceforbarran@gmail.com')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded font-bold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap sm:px-4 sm:py-2"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            <span className="hidden sm:inline">{copied ? t('common.copied') : t('common.copy')}</span>
            <span className="sm:hidden">{copied ? '✓' : '📋'}</span>
          </button>
        </div>
        <p className="text-xs text-gray-700 text-center">
          {t('donate.sendETransferEmail')}
        </p>
      </div>

      {/* SECURITY & INFO */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <div className="flex items-start gap-2 mb-2">
          <span className="text-lg">🔒</span>
          <div>
            <p className="text-xs font-bold text-blue-900">
              {t('donate.securePayment')}
            </p>
            <p className="text-xs text-blue-800">
              {t('donate.bankEncryption')}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-lg">✓</span>
          <div>
            <p className="text-xs font-bold text-green-900">
              {t('donate.hundredPercentJustice')}
            </p>
            <p className="text-xs text-green-800">
              {t('donate.mcGovern')}
            </p>
          </div>
        </div>
      </div>

      {/* CONFIRMATION DIALOG */}
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {t('donate.confirmDonation')}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {t('donate.confirmMessage', { amount: selectedAmount })}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex gap-3">
            <AlertDialogCancel>
              {t('common.cancel')}
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDonation}>
              {t('donate.confirm')}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
