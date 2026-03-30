import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { trpc } from '@/lib/trpc';
import { Loader2 } from 'lucide-react';

interface StripeCheckoutButtonProps {
  amount: number;
  donorName: string;
  donorEmail: string;
  message?: string;
  onSuccess?: () => void;
}

export function StripeCheckoutButton({
  amount,
  donorName,
  donorEmail,
  message,
  onSuccess,
}: StripeCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const createCheckout = trpc.stripe.createCheckoutSession.useMutation();

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const result = await createCheckout.mutateAsync({
        amount,
        donorName,
        donorEmail,
        message,
      });

      if (result.url) {
        window.open(result.url, '_blank');
        onSuccess?.();
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to create checkout session. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      disabled={isLoading || amount < 0.50}
      className="bg-blue-600 hover:bg-blue-700 text-white"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        `Donate $${amount.toFixed(2)} with Stripe`
      )}
    </Button>
  );
}
