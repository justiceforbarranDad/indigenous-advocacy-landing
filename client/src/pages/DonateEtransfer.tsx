import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function DonateETransfer() {
  const [, setLocation] = useLocation();
  const [copied, setCopied] = useState(false);

  const email = "justiceforbarran@gmail.com";
  const bankDetails = {
    bank: "TD Bank",
    accountName: "James Robert McGovern",
    description: "Justice for Barran - Indigenous Advocacy Fund",
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Donate via e-Transfer</h1>
          <p className="text-muted-foreground">
            Fast, secure, and direct support for Indigenous justice advocacy
          </p>
        </div>

        {/* Main Card */}
        <Card className="mb-6 border-green-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Send e-Transfer</CardTitle>
            <CardDescription className="text-white/90">
              Available to all Canadian banks
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-8 space-y-6">
            {/* Email Address */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-muted-foreground">
                SEND e-TRANSFER TO:
              </label>
              <div className="flex gap-2">
                <div className="flex-1 bg-gray-100 p-4 rounded-lg border border-gray-200">
                  <p className="font-mono text-lg font-semibold">{email}</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard(email)}
                  className="flex-shrink-0"
                >
                  {copied ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Click the copy button or use your bank's e-Transfer feature
              </p>
            </div>

            {/* Bank Details */}
            <div className="space-y-3 border-t pt-6">
              <label className="text-sm font-semibold text-muted-foreground">
                ACCOUNT DETAILS:
              </label>
              <div className="space-y-2">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-xs text-muted-foreground mb-1">Bank</p>
                  <p className="font-semibold">{bankDetails.bank}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-xs text-muted-foreground mb-1">Account Name</p>
                  <p className="font-semibold">{bankDetails.accountName}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-xs text-muted-foreground mb-1">Purpose</p>
                  <p className="font-semibold">{bankDetails.description}</p>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-3 border-t pt-6">
              <label className="text-sm font-semibold text-muted-foreground">
                HOW TO SEND:
              </label>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <div>
                    <p className="font-semibold">Open your bank's app or website</p>
                    <p className="text-sm text-muted-foreground">
                      Look for "Send Money" or "e-Transfer"
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <div>
                    <p className="font-semibold">Enter the email address</p>
                    <p className="text-sm text-muted-foreground">
                      {email}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <div>
                    <p className="font-semibold">Enter your donation amount</p>
                    <p className="text-sm text-muted-foreground">
                      Any amount helps - $5, $25, $100, or more
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <div>
                    <p className="font-semibold">Add a security question (optional)</p>
                    <p className="text-sm text-muted-foreground">
                      Some banks require this - any question works
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    5
                  </span>
                  <div>
                    <p className="font-semibold">Send and confirm</p>
                    <p className="text-sm text-muted-foreground">
                      Follow your bank's confirmation steps
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Important Info */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 space-y-2">
              <h4 className="font-semibold text-yellow-900">Important Information</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• e-Transfer is available 24/7 from all Canadian banks</li>
                <li>• Transfers are usually received within minutes to 2 hours</li>
                <li>• You'll receive a thank you email confirmation</li>
                <li>• Your donation supports legal defense and Indigenous advocacy</li>
                <li>• Tax receipts will be available once charitable status is confirmed</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Questions?</h4>
              <p className="text-sm text-blue-800 mb-3">
                Contact us for help with your donation:
              </p>
              <a
                href="mailto:justiceforbarran@gmail.com"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
              >
                <Mail className="w-4 h-4" />
                justiceforbarran@gmail.com
              </a>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-6 border-t">
              <Button
                className="w-full bg-red-600 hover:bg-red-700 text-lg h-12"
                onClick={() => copyToClipboard(email)}
              >
                <Copy className="w-5 h-5 mr-2" />
                Copy Email Address
              </Button>
              <Button
                variant="outline"
                className="w-full text-lg h-12"
                onClick={() => setLocation("/")}
              >
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Other Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Other Ways to Donate</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => setLocation("/donate")}
            >
              💳 Credit Card (Stripe)
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => setLocation("/donate")}
            >
              🍎 Apple Pay
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => setLocation("/")}
            >
              📖 Learn Our Story
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
