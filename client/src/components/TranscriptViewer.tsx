import { useState } from 'react';
import { Copy, Download } from 'lucide-react';

interface TranscriptViewerProps {
  transcript: string;
  title: string;
  language: 'EN' | 'FR';
}

export function TranscriptViewer({ transcript, title, language }: TranscriptViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(transcript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([transcript], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${title.replace(/\s+/g, '-').toLowerCase()}-transcript.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="bg-white border-2 border-black rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-black">
          {language === 'EN' ? 'Transcript' : 'Transcription'}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="p-2 border-2 border-black rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
            title={language === 'EN' ? 'Copy transcript' : 'Copier la transcription'}
          >
            <Copy size={18} className="text-black" />
            <span className="text-sm font-bold">{copied ? (language === 'EN' ? 'Copied!' : 'Copié!') : (language === 'EN' ? 'Copy' : 'Copier')}</span>
          </button>
          <button
            onClick={handleDownload}
            className="p-2 border-2 border-black rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
            title={language === 'EN' ? 'Download transcript' : 'Télécharger la transcription'}
          >
            <Download size={18} className="text-black" />
            <span className="text-sm font-bold">{language === 'EN' ? 'Download' : 'Télécharger'}</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-50 border-2 border-black rounded-lg p-4 max-h-96 overflow-y-auto">
        <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed font-mono">
          {transcript}
        </p>
      </div>

      <p className="text-xs text-gray-600 mt-4">
        {language === 'EN' 
          ? '📝 Full transcript available. Copy or download for offline reading.' 
          : '📝 Transcription complète disponible. Copiez ou téléchargez pour une lecture hors ligne.'}
      </p>
    </div>
  );
}
