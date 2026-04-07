import { useEffect, useState } from "react";
import { useSearchParams } from "wouter";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Share2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function DonationThankYou() {
  const [searchParams] = useSearchParams();
  const [, setLocation] = useLocation();
  const [donation, setDonation] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const sessionId = searchParams.get("session_id");

  // Use tRPC query hook properly
  const { data: paymentData, isLoading: isVerifying } = sessionId
    ? trpc.stripe.getPaymentStatus.useQuery({ sessionId })
    : { data: undefined, isLoading: false };

  useEffect(() => {
    if (isVerifying) {
      // Still loading
      return;
    }

    if (!sessionId) {
      setError("No session ID found. Please check your donation confirmation email.");
      return;
    }

    if (paymentData) {
      if (paymentData.status === "paid") {
        setDonation({
          amount: paymentData.amount || 0,
          currency: paymentData.currency || "CAD",
          status: "confirmed",
        });
      } else {
        setError("Payment verification failed. Please check your donation confirmation email.");
      }
    }
  }, [paymentData, isVerifying, sessionId]);

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-8">
            <div className="text-center">
              <div className="animate-spin mb-4">
                <Heart className="w-12 h-12 mx-auto text-red-500" />
              </div>
              <p className="text-muted-foreground">Verifying your donation...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-red-200">
          <CardHeader>
            <CardTitle className="text-red-600">Verification Error</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">{error}</p>
            <Button onClick={() => setLocation("/")} className="w-full">
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!donation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-8">
            <div className="text-center">
              <p className="text-muted-foreground">Loading donation details...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl border-green-200 shadow-lg">
        <CardHeader className="text-center bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-t-lg">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16" />
          </div>
          <CardTitle className="text-3xl">Thank You!</CardTitle>
          <CardDescription className="text-white/90 text-lg">
            Your donation has been received
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-8 space-y-6">
          {/* Donation Amount */}
          <div className="text-center">
            <p className="text-muted-foreground mb-2">You donated</p>
            <p className="text-4xl font-bold text-red-600">
              ${donation.amount.toFixed(2)} {donation.currency}
            </p>
          </div>

          {/* Impact Message */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Your Impact</h3>
            <p className="text-sm text-blue-800">
              Your generous donation directly supports our fight for Indigenous justice and accountability. 
              Every dollar goes toward legal defense, advocacy, and protecting vulnerable families from systemic harm.
            </p>
          </div>

          {/* Confirmation Email */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-2">✓ Confirmation Email Sent</h3>
            <p className="text-sm text-green-800">
              A thank you email has been sent to your email address. 
              Please check your inbox and spam folder.
            </p>
          </div>

          {/* Share Section */}
          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4">Help us reach more people</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => {
                  const text = "I just donated to support Indigenous justice and accountability. Join me in supporting #JusticeForBarran #EveryChildMatters";
                  window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
                    "_blank"
                  );
                }}
              >
                <Share2 className="w-4 h-4" />
                Share on Twitter
              </Button>

              <Button
                variant="outline"
                className="gap-2"
                onClick={() => {
                  const text = "I just donated to support Indigenous justice and accountability. Join me in supporting Justice for Barran.";
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(text)}&href=${encodeURIComponent(window.location.origin)}`,
                    "_blank"
                  );
                }}
              >
                <Share2 className="w-4 h-4" />
                Share on Facebook
              </Button>

              <Button
                variant="outline"
                className="gap-2"
                onClick={() => {
                  const subject = "Support Indigenous Justice Advocacy";
                  const body = "I just donated to support Justice for Barran. Learn more at justiceforbarran.com";
                  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
              >
                <Share2 className="w-4 h-4" />
                Share via Email
              </Button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-3 pt-4">
            <Button
              onClick={() => setLocation("/")}
              className="w-full bg-red-600 hover:bg-red-700"
              size="lg"
            >
              Return to Home
            </Button>
            <Button
              onClick={() => setLocation("/book")}
              variant="outline"
              className="w-full"
              size="lg"
            >
              Read Our Story
            </Button>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 rounded-lg p-4 text-xs text-muted-foreground space-y-2">
            <p>
              <strong>Questions?</strong> Contact us at{" "}
              <a href="mailto:justiceforbarran@gmail.com" className="text-red-600 hover:underline">
                justiceforbarran@gmail.com
              </a>
            </p>
            <p>
              Your donation is secure and processed through Stripe. We never store your credit card information.
            </p>
            <p>
              Tax receipts will be available once our charitable status is confirmed. We'll email them to you automatically.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
