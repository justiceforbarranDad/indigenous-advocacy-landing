import { useState } from 'react';
import { Send, Clock, Users, CheckCircle, AlertCircle } from 'lucide-react';

interface Alert {
  id: string;
  title: string;
  message: string;
  type: 'sms' | 'email' | 'both';
  scheduledFor: string;
  status: 'draft' | 'scheduled' | 'sent';
  recipients: number;
  createdAt: string;
}

export default function AdminAlertDashboard() {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      title: 'Court Hearing Scheduled',
      message: 'Justice for Barran hearing set for April 15. Legal team needs community support.',
      type: 'both',
      scheduledFor: '2026-03-30T10:00:00',
      status: 'scheduled',
      recipients: 3247,
      createdAt: '2026-03-28T14:30:00'
    },
    {
      id: '2',
      title: 'Petition Milestone',
      message: 'We reached 25,000 signatures! Share this victory and keep pushing for 50,000.',
      type: 'both',
      scheduledFor: '2026-03-25T09:00:00',
      status: 'sent',
      recipients: 3247,
      createdAt: '2026-03-25T08:00:00'
    }
  ]);

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState<'sms' | 'email' | 'both'>('both');
  const [scheduledFor, setScheduledFor] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleCreateAlert = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!title.trim()) {
      setError('Please enter alert title');
      return;
    }

    if (!message.trim()) {
      setError('Please enter alert message');
      return;
    }

    if (!scheduledFor) {
      setError('Please select when to send this alert');
      return;
    }

    const newAlert: Alert = {
      id: Date.now().toString(),
      title,
      message,
      type: alertType,
      scheduledFor,
      status: 'scheduled',
      recipients: 3247,
      createdAt: new Date().toISOString()
    };

    setAlerts([newAlert, ...alerts]);
    setTitle('');
    setMessage('');
    setScheduledFor('');
    setSuccess('Alert scheduled successfully!');

    setTimeout(() => setSuccess(''), 3000);
  };

  const sendNow = (id: string) => {
    setAlerts(alerts.map(a => 
      a.id === id ? { ...a, status: 'sent' as const } : a
    ));
    setSuccess('Alert sent to all subscribers!');
    setTimeout(() => setSuccess(''), 3000);
  };

  const deleteAlert = (id: string) => {
    setAlerts(alerts.filter(a => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-4 border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-widest mb-4" style={{ letterSpacing: '0.15em' }}>
            ADMIN ALERTS
          </h1>
          <p className="text-lg md:text-xl">Compose and schedule notifications</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* CREATE NEW ALERT */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Create New Alert</h2>
          
          <form onSubmit={handleCreateAlert} className="space-y-6">
            {/* TITLE */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Alert Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Court Hearing Scheduled"
                className="w-full border-2 border-black p-4 focus:outline-none focus:bg-gray-100"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Message *</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your alert message here..."
                rows={5}
                className="w-full border-2 border-black p-4 focus:outline-none focus:bg-gray-100"
              />
              <p className="text-xs text-gray-600 mt-2">
                SMS: Keep under 160 characters. Email: Can be longer with formatting.
              </p>
            </div>

            {/* ALERT TYPE */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Send Via *</label>
              <div className="flex gap-4">
                {(['sms', 'email', 'both'] as const).map(type => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="alertType"
                      value={type}
                      checked={alertType === type}
                      onChange={(e) => setAlertType(e.target.value as typeof type)}
                      className="w-4 h-4 border-2 border-black"
                    />
                    <span className="text-lg font-bold capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* SCHEDULE */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Schedule For *</label>
              <input
                type="datetime-local"
                value={scheduledFor}
                onChange={(e) => setScheduledFor(e.target.value)}
                className="w-full border-2 border-black p-4 focus:outline-none focus:bg-gray-100"
              />
            </div>

            {/* ERRORS & SUCCESS */}
            {error && (
              <div className="flex items-start gap-3 bg-red-50 border-2 border-red-300 p-4">
                <AlertCircle size={20} className="text-red-700 flex-shrink-0 mt-1" />
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {success && (
              <div className="flex items-start gap-3 bg-green-50 border-2 border-green-300 p-4">
                <CheckCircle size={20} className="text-green-700 flex-shrink-0 mt-1" />
                <p className="text-green-700">{success}</p>
              </div>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Schedule Alert
            </button>
          </form>
        </div>

        {/* ALERTS LIST */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black mb-6">Scheduled & Sent Alerts</h2>
          
          {alerts.length === 0 ? (
            <div className="border-4 border-black p-8 text-center">
              <p className="text-xl text-gray-600">No alerts yet. Create one above to get started.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {alerts.map(alert => (
                <div key={alert.id} className="border-4 border-black p-6">
                  {/* HEADER */}
                  <div className="flex items-start justify-between mb-4 pb-4 border-b-2 border-black">
                    <div className="flex-1">
                      <h3 className="text-2xl font-black mb-2">{alert.title}</h3>
                      <div className="flex items-center gap-4 text-sm font-bold">
                        <span className="uppercase px-2 py-1 bg-gray-200 border border-black">
                          {alert.type}
                        </span>
                        <span className={`uppercase px-2 py-1 border border-black ${
                          alert.status === 'sent' ? 'bg-green-100' : 'bg-yellow-100'
                        }`}>
                          {alert.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <p className="text-lg mb-4 leading-relaxed">{alert.message}</p>

                  {/* DETAILS */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6 pb-6 border-b-2 border-black">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-1">Recipients</p>
                      <p className="text-2xl font-black flex items-center gap-2">
                        <Users size={20} />
                        {alert.recipients.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-1">Scheduled For</p>
                      <p className="text-lg font-bold flex items-center gap-2">
                        <Clock size={20} />
                        {new Date(alert.scheduledFor).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-1">Created</p>
                      <p className="text-lg font-bold">
                        {new Date(alert.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-3">
                    {alert.status === 'scheduled' && (
                      <>
                        <button
                          onClick={() => sendNow(alert.id)}
                          className="flex-1 bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition-colors"
                        >
                          Send Now
                        </button>
                        <button
                          onClick={() => deleteAlert(alert.id)}
                          className="flex-1 bg-gray-300 text-black px-4 py-2 font-bold hover:bg-gray-400 transition-colors"
                        >
                          Cancel
                        </button>
                      </>
                    )}
                    {alert.status === 'sent' && (
                      <div className="flex-1 bg-green-100 border-2 border-green-300 text-green-700 px-4 py-2 font-bold text-center">
                        ✓ Sent to {alert.recipients.toLocaleString()} subscribers
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* STATS */}
        <div className="mt-8 pt-8 border-t-4 border-black grid md:grid-cols-3 gap-6">
          <div className="border-4 border-black p-6 text-center">
            <div className="text-4xl font-black mb-2">{alerts.filter(a => a.status === 'sent').length}</div>
            <p className="text-sm font-bold uppercase tracking-widest">Alerts Sent</p>
          </div>
          <div className="border-4 border-black p-6 text-center">
            <div className="text-4xl font-black mb-2">{alerts.filter(a => a.status === 'scheduled').length}</div>
            <p className="text-sm font-bold uppercase tracking-widest">Scheduled</p>
          </div>
          <div className="border-4 border-black p-6 text-center">
            <div className="text-4xl font-black mb-2">3,247</div>
            <p className="text-sm font-bold uppercase tracking-widest">Total Subscribers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
