import { useState } from 'react';
import { X, Volume2, AlertTriangle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface SirenWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SirenWarningModal({ isOpen, onClose }: SirenWarningModalProps) {
  const [playSound, setPlaySound] = useState(false);

  // Play siren sound effect
  const playSirenSound = () => {
    setPlaySound(true);
    // Create a simple siren sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Siren frequency sweep
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
    oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.2);

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);

    setTimeout(() => setPlaySound(false), 200);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-red-50 border-4 border-red-600">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <AlertTriangle className="text-red-600 animate-bounce" size={32} />
                <div className="absolute inset-0 rounded-full border-2 border-red-600 animate-ping"></div>
              </div>
              <DialogTitle className="text-3xl font-bold text-red-600">
                WARNING LIGHTS
              </DialogTitle>
            </div>
            <button
              onClick={onClose}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Siren Button */}
          <div className="flex justify-center">
            <button
              onClick={playSirenSound}
              disabled={playSound}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                playSound
                  ? 'bg-red-600 text-white animate-pulse'
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              <Volume2 size={20} className={playSound ? 'animate-spin' : ''} />
              {playSound ? 'SIREN ACTIVE' : 'Play Siren Alert'}
            </button>
          </div>

          {/* Critical Alert */}
          <div className="bg-white p-6 rounded-lg border-4 border-red-600">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              APTN Ghosting: Media Complicity in Institutional Silence
            </h3>
            <p className="text-charcoal mb-4">
              On <strong>February 22, 2026</strong>, APTN (Aboriginal Peoples Television Network) published a news report covering:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal-light mb-6">
              <li>Systemic racism in Quebec's youth protection system</li>
              <li>Failure to uphold Jordan's Principle for Indigenous children</li>
              <li>Immunity laws protecting workers from accountability</li>
              <li>Family's struggle for mental health support and justice</li>
            </ul>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600 mb-4">
              <p className="font-semibold text-red-900 mb-2">
                ⚠️ THEN APTN GHOSTED US
              </p>
              <p className="text-red-800 text-sm">
                No follow-up. No explanation. No accountability reporting. Complete institutional silence after initial coverage. This is media complicity in suppressing Indigenous justice advocacy.
              </p>
            </div>

            <p className="text-charcoal-light text-sm">
              When Indigenous media networks publish accountability stories but then abandon the families involved, it sends a message that coverage is performative. It suggests that even Indigenous-focused media may prioritize institutional relationships over sustained advocacy for justice.
            </p>
          </div>

          {/* Pattern of Suppression */}
          <div className="bg-white p-6 rounded-lg border-2 border-orange-600">
            <h4 className="text-lg font-bold text-orange-600 mb-4">
              Complete Pattern of Institutional Suppression
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold">1.</span>
                <div>
                  <p className="font-semibold text-charcoal">APTN (Media)</p>
                  <p className="text-charcoal-light">Published report → Ghosted family</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold">2.</span>
                <div>
                  <p className="font-semibold text-charcoal">Céline Haytayan (MNA)</p>
                  <p className="text-charcoal-light">Cease-and-desist warning to silence constituent</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold">3.</span>
                <div>
                  <p className="font-semibold text-charcoal">Provincial Ministers</p>
                  <p className="text-charcoal-light">Complete ghosting - no response</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold">4.</span>
                <div>
                  <p className="font-semibold text-charcoal">Federal MPs</p>
                  <p className="text-charcoal-light">Complete ghosting - no response</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold">5.</span>
                <div>
                  <p className="font-semibold text-charcoal">CDPDJ (Human Rights Commission)</p>
                  <p className="text-charcoal-light">Refused investigation twice - immunity laws cited</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold">6.</span>
                <div>
                  <p className="font-semibold text-charcoal">Protecteur du citoyen (Ombudsman)</p>
                  <p className="text-charcoal-light">Limited response - "limits on powers" excuse</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-amber-orange text-white p-6 rounded-lg">
            <h4 className="text-lg font-bold mb-3">
              Break the Silence
            </h4>
            <p className="mb-4">
              Institutional suppression thrives on silence. Share this documentation. Demand accountability. Support Indigenous justice advocacy.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://youtu.be/qMfy58mOUgQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-amber-orange px-4 py-2 rounded font-semibold hover:bg-cream transition-colors text-sm"
              >
                Watch APTN Report
              </a>
              <a
                href="/censorship"
                className="inline-block bg-white text-amber-orange px-4 py-2 rounded font-semibold hover:bg-cream transition-colors text-sm"
              >
                Full Documentation
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
