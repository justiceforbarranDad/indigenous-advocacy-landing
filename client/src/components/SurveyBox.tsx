import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertCircle, CheckCircle } from 'lucide-react';

export function SurveyBox() {
  const [hasResponded, setHasResponded] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState<'yes' | 'no' | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const submitSurvey = trpc.survey.submit.useMutation();
  const surveyStats = trpc.survey.getStats.useQuery();

  const handleResponse = async (response: 'yes' | 'no') => {
    setSelectedResponse(response);
    setShowForm(true);
  };

  const handleSubmit = async () => {
    try {
      await submitSurvey.mutateAsync({
        response: selectedResponse!,
        email: email || undefined,
        name: name || undefined,
      });
      setHasResponded(true);
      setShowForm(false);
      setEmail('');
      setName('');
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  };

  if (hasResponded) {
    return (
      <Card className="p-6 bg-green-50 border-green-200 max-w-md mx-auto">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-green-900">Thank You!</h3>
            <p className="text-sm text-green-800 mt-1">
              Your response has been recorded. Together, we're building a record of systemic failures affecting Indigenous families.
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-amber-50 border-amber-200 max-w-md mx-auto">
      <div className="flex items-start gap-3 mb-4">
        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-amber-900">Have You Experienced Similar Issues?</h3>
          <p className="text-sm text-amber-800 mt-1">
            Have you or your family faced similar systemic failures in child protection services or government support?
          </p>
        </div>
      </div>

      {!showForm ? (
        <div className="flex gap-3">
          <Button
            onClick={() => handleResponse('yes')}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
          >
            Yes
          </Button>
          <Button
            onClick={() => handleResponse('no')}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white"
          >
            No
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-amber-900 mb-1">
              Name (optional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-amber-900 mb-1">
              Email (optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleSubmit}
              disabled={submitSurvey.isPending}
              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
            >
              {submitSurvey.isPending ? 'Submitting...' : 'Submit'}
            </Button>
            <Button
              onClick={() => {
                setShowForm(false);
                setSelectedResponse(null);
              }}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {surveyStats.data && (
        <div className="mt-4 pt-4 border-t border-amber-200">
          <p className="text-xs text-amber-700">
            <strong>{surveyStats.data.yes}</strong> people have experienced similar issues • 
            <strong className="ml-1">{surveyStats.data.total}</strong> total responses
          </p>
        </div>
      )}
    </Card>
  );
}
