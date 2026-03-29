import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

export interface HighlightData {
  id: string;
  text: string;
  title: string;
  description: string;
  details: string;
  sources?: Array<{
    label: string;
    url: string;
  }>;
  color?: 'yellow' | 'blue' | 'red' | 'green' | 'purple';
}

interface InteractiveHighlightProps {
  highlight: HighlightData;
  children: React.ReactNode;
}

export function InteractiveHighlight({ highlight, children }: InteractiveHighlightProps) {
  const [isOpen, setIsOpen] = useState(false);

  const colorClasses = {
    yellow: 'bg-yellow-200 hover:bg-yellow-300 text-yellow-900',
    blue: 'bg-blue-200 hover:bg-blue-300 text-blue-900',
    red: 'bg-red-200 hover:bg-red-300 text-red-900',
    green: 'bg-green-200 hover:bg-green-300 text-green-900',
    purple: 'bg-purple-200 hover:bg-purple-300 text-purple-900',
  };

  const modalColorClasses = {
    yellow: 'border-yellow-400 bg-yellow-50',
    blue: 'border-blue-400 bg-blue-50',
    red: 'border-red-400 bg-red-50',
    green: 'border-green-400 bg-green-50',
    purple: 'border-purple-400 bg-purple-50',
  };

  const color = highlight.color || 'yellow';

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`${colorClasses[color]} px-1 py-0.5 rounded cursor-pointer transition-all duration-200 font-semibold hover:shadow-md inline-block`}
        title={`Click to learn more: ${highlight.title}`}
      >
        {children}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className={`${modalColorClasses[color]} border-2 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}>
            {/* Header */}
            <div className="sticky top-0 flex justify-between items-center p-6 border-b-2 bg-white/80 backdrop-blur">
              <h2 className="text-2xl font-bold text-gray-900">{highlight.title}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-200 rounded transition-colors"
                title="Close"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-lg font-semibold text-gray-800">{highlight.description}</p>

              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {highlight.details}
                </p>
              </div>

              {/* Sources */}
              {highlight.sources && highlight.sources.length > 0 && (
                <div className="mt-6 pt-4 border-t-2 border-gray-300">
                  <h3 className="font-bold text-gray-900 mb-3">Sources & References:</h3>
                  <ul className="space-y-2">
                    {highlight.sources.map((source, idx) => (
                      <li key={idx}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                        >
                          <ExternalLink size={16} />
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 p-4 border-t-2 bg-white/80 backdrop-blur flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Wrapper component for text with highlights
interface HighlightedTextProps {
  text: string;
  highlights: HighlightData[];
}

export function HighlightedText({ text, highlights }: HighlightedTextProps) {
  let lastIndex = 0;
  const elements: React.ReactNode[] = [];

  // Sort highlights by their text position for proper ordering
  const sortedHighlights = [...highlights].sort((a, b) => {
    const aIndex = text.indexOf(a.text);
    const bIndex = text.indexOf(b.text);
    return aIndex - bIndex;
  });

  sortedHighlights.forEach((highlight) => {
    const index = text.indexOf(highlight.text, lastIndex);
    if (index !== -1) {
      // Add text before highlight
      if (index > lastIndex) {
        elements.push(text.substring(lastIndex, index));
      }

      // Add highlighted text
      elements.push(
        <InteractiveHighlight key={highlight.id} highlight={highlight}>
          {highlight.text}
        </InteractiveHighlight>
      );

      lastIndex = index + highlight.text.length;
    }
  });

  // Add remaining text
  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return <span>{elements}</span>;
}
