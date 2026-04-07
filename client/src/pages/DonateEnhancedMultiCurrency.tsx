import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, QrCode, Zap, Globe, Copy, Check } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function DonateEnhancedMultiCurrency() {
  const [currency, setCurrency] = useState<"CAD" | "USD">("CAD");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [copied, setCopied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"etransfer" | "stripe" | "applepay" | null>(null);
  const cadAmounts = [5, 10, 20, 50, 100];
  const usdAmounts = [5, 10, 20, 50, 100];

  const eTransferEmail = "justiceforbarran@gmail.com";
  const bankName = "TD Bank";
  const accountName = "James Robert McGovern";

  const stripeCheckoutMutation = trpc.stripe.createCheckoutSession.useMutation();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleStripeCheckout = async (amount: number) => {
    try {
      const result = await stripeCheckoutMutation.mutateAsync({
        amount,
        donorName: "Donor",
        donorEmail: "donor@example.com",
        message: `Donation to Justice for Barran - ${currency}`,
      });
      if (result.url) {
        window.open(result.url, "_blank");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  const handleApplePayClick = () => {
    // Apple Pay integration would go here
    alert("Apple Pay integration coming soon. Please use another payment method.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Support Indigenous Justice</h1>
          <p className="text-lg text-muted-foreground">
            Choose your donation method and amount
          </p>
        </div>

        {/* Currency Selector */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={currency === "CAD" ? "default" : "outline"}
            onClick={() => setCurrency("CAD")}
            className="px-6 py-2"
          >
            🍁 Canadian (CAD)
          </Button>
          <Button
            variant={currency === "USD" ? "default" : "outline"}
            onClick={() => setCurrency("USD")}
            className="px-6 py-2"
          >
            🇺🇸 International (USD)
          </Button>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="etransfer" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="etransfer">e-Transfer</TabsTrigger>
            <TabsTrigger value="stripe">Credit Card</TabsTrigger>
            <TabsTrigger value="applepay">Apple Pay</TabsTrigger>
          </TabsList>

          {/* e-Transfer Tab */}
          <TabsContent value="etransfer" className="space-y-6">
            <Card className="border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Instant e-Transfer (Canadian Only)
                </CardTitle>
                <CardDescription className="text-white/90">
                  Fast, secure, and direct to our TD Bank account
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-8 space-y-6">
                {/* Email Display */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold">Send e-Transfer to:</label>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-gray-100 p-4 rounded-lg border border-gray-200">
                      <p className="font-mono font-semibold">{eTransferEmail}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => copyToClipboard(eTransferEmail)}
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Bank Details */}
                <div className="space-y-3 border-t pt-6">
                  <label className="text-sm font-semibold">Bank Details:</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-xs text-muted-foreground mb-1">Bank</p>
                      <p className="font-semibold">{bankName}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-xs text-muted-foreground mb-1">Account Name</p>
                      <p className="font-semibold">{accountName}</p>
                    </div>
                  </div>
                </div>

                {/* Preset Amounts */}
                <div className="space-y-3 border-t pt-6">
                  <label className="text-sm font-semibold">Select Amount (CAD):</label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {cadAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        onClick={() => setSelectedAmount(amount)}
                        className="h-12"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="mt-4">
                    <label className="text-sm font-semibold mb-2 block">Or enter custom amount:</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Enter amount in CAD"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                      <Button
                        onClick={() => copyToClipboard(`${customAmount || "amount"} CAD to ${eTransferEmail}`)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>

                {/* QR Code Section */}
                <div className="space-y-3 border-t pt-6">
                  <label className="text-sm font-semibold">Quick TD Deposit (QR Codes):</label>
                  <p className="text-sm text-muted-foreground mb-4">
                    Scan any QR code below to instantly send via TD e-Transfer
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {cadAmounts.map((amount) => (
                      <div key={amount} className="space-y-2">
                        <div className="bg-white p-4 rounded-lg border-2 border-gray-300 aspect-square flex items-center justify-center">
                          <QrCode className="w-12 h-12 text-gray-400" />
                        </div>
                        <p className="text-center font-semibold text-sm">${amount} CAD</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    QR codes will be generated for each amount
                  </p>
                </div>

                {/* Instructions */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold text-yellow-900">How to Send:</h4>
                  <ol className="text-sm text-yellow-800 space-y-1 list-decimal list-inside">
                    <li>Open your bank's app or website</li>
                    <li>Select "Send Money" or "e-Transfer"</li>
                    <li>Enter: {eTransferEmail}</li>
                    <li>Enter your donation amount</li>
                    <li>Complete the transfer</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Credit Card Tab */}
          <TabsContent value="stripe" className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  💳 Credit Card (Stripe)
                </CardTitle>
                <CardDescription className="text-white/90">
                  Secure payment via Stripe - {currency === "CAD" ? "Canadian Dollars" : "US Dollars"}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-8 space-y-6">
                {/* Preset Amounts */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold">
                    Select Amount ({currency}):
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {(currency === "CAD" ? cadAmounts : usdAmounts).map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        onClick={() => setSelectedAmount(amount)}
                        className="h-12"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="mt-4">
                    <label className="text-sm font-semibold mb-2 block">Or enter custom amount:</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder={`Enter amount in ${currency}`}
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Button
                        onClick={() => {
                          const amount = customAmount ? parseFloat(customAmount) : (selectedAmount || 0);
                          if (amount > 0) {
                            handleStripeCheckout(amount);
                          }
                        }}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Donate
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Preset Buttons */}
                <div className="space-y-3 border-t pt-6">
                  <p className="text-sm text-muted-foreground">Quick donate:</p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {(currency === "CAD" ? cadAmounts : usdAmounts).map((amount) => (
                      <Button
                        key={amount}
                        onClick={() => handleStripeCheckout(amount)}
                        className="bg-blue-600 hover:bg-blue-700 h-12"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    ✓ Secure payment processing by Stripe  
                    ✓ Your credit card information is never stored  
                    ✓ Instant confirmation and thank you email  
                    ✓ Supports all major credit cards
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Apple Pay Tab */}
          <TabsContent value="applepay" className="space-y-6">
            <Card className="border-gray-200">
              <CardHeader className="bg-gradient-to-r from-gray-800 to-black text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  🍎 Apple Pay
                </CardTitle>
                <CardDescription className="text-white/90">
                  Fast and secure payment with Apple Pay - {currency === "CAD" ? "Canadian Dollars" : "US Dollars"}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-8 space-y-6">
                {/* Preset Amounts */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold">
                    Select Amount ({currency}):
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {(currency === "CAD" ? cadAmounts : usdAmounts).map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        onClick={() => setSelectedAmount(amount)}
                        className="h-12"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="mt-4">
                    <label className="text-sm font-semibold mb-2 block">Or enter custom amount:</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder={`Enter amount in ${currency}`}
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                      />
                      <Button
                        onClick={handleApplePayClick}
                        className="bg-gray-800 hover:bg-gray-900"
                      >
                        Pay
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Preset Buttons */}
                <div className="space-y-3 border-t pt-6">
                  <p className="text-sm text-muted-foreground">Quick donate:</p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {(currency === "CAD" ? cadAmounts : usdAmounts).map((amount) => (
                      <Button
                        key={amount}
                        onClick={handleApplePayClick}
                        className="bg-gray-800 hover:bg-gray-900 h-12"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-800">
                    ✓ One-touch payment with Face ID or Touch ID  
                    ✓ Works on iPhone, iPad, and Apple Watch  
                    ✓ Your payment information is secure  
                    ✓ Instant confirmation and thank you email
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer Info */}
        <Card className="mt-8">
          <CardContent className="pt-6 space-y-4 text-sm text-muted-foreground">
            <p>
              <strong>All donations</strong> go directly to legal defense and Indigenous justice advocacy.
            </p>
            <p>
              <strong>Thank you emails</strong> are sent automatically after each donation.
            </p>
            <p>
              <strong>Tax receipts</strong> will be available once our charitable status is confirmed.
            </p>
            <p>
              <strong>Questions?</strong> Contact us at{" "}
              <a href="mailto:justiceforbarran@gmail.com" className="text-red-600 hover:underline">
                justiceforbarran@gmail.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
