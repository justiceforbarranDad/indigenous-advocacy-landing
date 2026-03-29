import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can we help you today? We\'re here to answer questions about systemic failures, available resources, and how to file complaints.',
      sender: 'support',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate support response
    setTimeout(() => {
      const supportMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateSupportResponse(inputValue),
        sender: 'support',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, supportMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const generateSupportResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('complaint') || lowerMessage.includes('file')) {
      return 'To file a complaint about systemic failures, you can: 1) Contact CDPDJ (Commission des droits de la personne) at 1-800-361-6477, 2) File with your provincial ombudsman, or 3) Download our complaint template from the Resource Kit. Would you like more specific guidance?';
    }
    if (lowerMessage.includes('jordan') || lowerMessage.includes('principle')) {
      return 'Jordan\'s Principle ensures First Nations children receive services without delay. If services are being denied, you can: 1) Request immediate application of Jordan\'s Principle, 2) File with Indigenous Services Canada, or 3) Contact the First Nations Child and Family Caring Society. Need more details?';
    }
    if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return 'We offer several resources: 1) Legal case tracking, 2) Provincial resource guides, 3) Downloadable complaint templates, 4) Information about your rights. What specific help do you need?';
    }
    if (lowerMessage.includes('story') || lowerMessage.includes('share')) {
      return 'We\'d love to hear your story. You can submit anonymously or with your name. Visit our "Share Your Story" page to contribute. Your experience helps us document systemic failures and advocate for change.';
    }
    if (lowerMessage.includes('podcast') || lowerMessage.includes('listen')) {
      return 'Our French podcast series covers systemic failures, political accountability, and Jordan\'s Principle. Visit the French Podcast page to listen to all 5 episodes with transcripts in French and English.';
    }
    
    return 'Thank you for your question. For more information, please visit our Resource Guide, Provincial Resources page, or Legal Case Tracker. You can also submit a detailed question and we\'ll get back to you within 24 hours.';
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-forest-green text-white p-4 rounded-full shadow-lg hover:bg-forest-green/90 transition-all hover:scale-110 z-40"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 bg-white rounded-lg shadow-2xl flex flex-col h-96 z-50 border-2 border-forest-green">
      {/* Header */}
      <div className="bg-forest-green text-white p-4 rounded-t-lg flex items-center justify-between">
        <div>
          <h3 className="font-bold">Support Chat</h3>
          <p className="text-xs opacity-90">We typically respond within minutes</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="hover:bg-forest-green/80 p-1 rounded transition-colors"
            aria-label="Minimize chat"
          >
            {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-forest-green/80 p-1 rounded transition-colors"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Messages */}
      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-forest-green text-white rounded-br-none'
                      : 'bg-gray-200 text-charcoal rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-charcoal px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-charcoal rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-charcoal rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-charcoal rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-4 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your question..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-forest-green"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="bg-forest-green text-white p-2 rounded-lg hover:bg-forest-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
