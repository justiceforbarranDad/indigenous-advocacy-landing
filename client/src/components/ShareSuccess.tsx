import { Share2, X, Facebook, MessageCircle, Linkedin, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareSuccessProps {
  type: 'donation' | 'signature' | 'story';
  amount?: string;
  message?: string;
}

export function ShareSuccess({ type, amount, message }: ShareSuccessProps) {
  const [copied, setCopied] = useState(false);

  const getShareTemplates = () => {
    switch (type) {
      case 'donation':
        return {
          title: 'Share Your Support',
          subtitle: `I just donated ${amount || '$50'} to Justice for Barran`,
          templates: {
            twitter: `I just donated ${amount || '$50'} to support Justice for Barran and demand systemic change for all voiceless victims. Every contribution matters. #JusticeForBarran #TruthAndReconciliation https://indigenousadv-ahjdmzis.manus.space`,
            facebook: `I'm supporting Justice for Barran by donating ${amount || '$50'}. This is about systemic accountability and protecting vulnerable children. Join me in demanding change! #JusticeForBarran`,
            whatsapp: `I just donated to Justice for Barran. Help amplify this story and demand accountability: https://indigenousadv-ahjdmzis.manus.space #JusticeForBarran`,
            linkedin: `I'm committed to systemic change. I just donated ${amount || '$50'} to support Justice for Barran, a campaign demanding accountability for Indigenous children failed by government systems. #JusticeForBarran #IndigenousRights`,
            copy: `I just donated ${amount || '$50'} to Justice for Barran. Support this campaign for systemic change: https://indigenousadv-ahjdmzis.manus.space #JusticeForBarran #TruthAndReconciliation`
          }
        };
      case 'signature':
        return {
          title: 'Share Your Voice',
          subtitle: 'I just signed the petition for Justice for Barran',
          templates: {
            twitter: `I just signed the petition demanding justice for Barran and systemic change. Every signature matters. Will you join me? #JusticeForBarran #EveryChildMatters https://indigenousadv-ahjdmzis.manus.space/petition`,
            facebook: `I signed the petition for Justice for Barran. This is about protecting Indigenous children and demanding accountability from government. Sign now! #JusticeForBarran`,
            whatsapp: `I signed the petition for Justice for Barran. Add your voice to demand systemic change: https://indigenousadv-ahjdmzis.manus.space/petition #JusticeForBarran`,
            linkedin: `I'm adding my voice to the call for justice. I signed the petition for Justice for Barran, demanding accountability and systemic change for vulnerable children. #JusticeForBarran #IndigenousRights`,
            copy: `I signed the petition for Justice for Barran. Add your voice: https://indigenousadv-ahjdmzis.manus.space/petition #JusticeForBarran #TruthAndReconciliation`
          }
        };
      case 'story':
        return {
          title: 'Share Your Story',
          subtitle: 'I shared my story to demand justice',
          templates: {
            twitter: `I just shared my story on the Justice for Barran platform. Systemic failures affect countless families. If you've been ghosted by officials or failed by systems, your story matters too. #JusticeForBarran https://indigenousadv-ahjdmzis.manus.space`,
            facebook: `I shared my story demanding justice and systemic change. If you've experienced similar failures, your voice matters. Join the movement for accountability. #JusticeForBarran`,
            whatsapp: `I shared my story for Justice for Barran. If you've been failed by systems, your story matters too: https://indigenousadv-ahjdmzis.manus.space #JusticeForBarran`,
            linkedin: `I'm speaking out about systemic failures. I shared my story on the Justice for Barran platform to demand accountability and change. Your story matters too. #JusticeForBarran #IndigenousRights`,
            copy: `I shared my story for Justice for Barran. Add your voice: https://indigenousadv-ahjdmzis.manus.space/share-story #JusticeForBarran #TruthAndReconciliation`
          }
        };
      default:
        return {
          title: 'Share This Campaign',
          subtitle: 'Help amplify the call for justice',
          templates: {
            twitter: `Support Justice for Barran - demanding accountability for systemic failures affecting Indigenous children. Every voice matters. #JusticeForBarran https://indigenousadv-ahjdmzis.manus.space`,
            facebook: `Justice for Barran is a campaign demanding systemic change and accountability. Learn about this important cause and how you can help. #JusticeForBarran`,
            whatsapp: `Check out Justice for Barran - a campaign for systemic accountability: https://indigenousadv-ahjdmzis.manus.space #JusticeForBarran`,
            linkedin: `Supporting Justice for Barran - a campaign for systemic accountability and Indigenous rights. #JusticeForBarran #IndigenousRights`,
            copy: `Justice for Barran campaign: https://indigenousadv-ahjdmzis.manus.space #JusticeForBarran #TruthAndReconciliation`
          }
        };
    }
  };

  const templates = getShareTemplates();

  const handleShare = (platform: string, text: string) => {
    const encodedText = encodeURIComponent(text);
    const urls: Record<string, string> = {
      twitter: `https://x.com/intent/tweet?text=${encodedText}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?quote=${encodedText}`,
      whatsapp: `https://wa.me/?text=${encodedText}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=https://indigenousadv-ahjdmzis.manus.space&summary=${encodedText}`,
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white border-4 border-black max-w-2xl w-full p-8" style={{ fontFamily: 'Georgia, serif' }}>
        {/* HEADER */}
        <div className="mb-6 pb-6 border-b-4 border-black">
          <div className="flex items-center gap-3 mb-3">
            <Share2 size={32} className="font-black" />
            <h2 className="text-3xl md:text-4xl font-black">{templates.title}</h2>
          </div>
          <p className="text-lg text-gray-700">{templates.subtitle}</p>
        </div>

        {/* SHARE BUTTONS */}
        <div className="mb-6 pb-6 border-b-4 border-black">
          <p className="text-sm font-bold uppercase tracking-widest mb-4">Share on Social Media</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* TWITTER */}
            <button
              onClick={() => handleShare('twitter', templates.templates.twitter)}
              className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors flex flex-col items-center gap-2"
            >
              <X size={24} />
              <span className="text-sm font-bold">X/Twitter</span>
            </button>

            {/* FACEBOOK */}
            <button
              onClick={() => handleShare('facebook', templates.templates.facebook)}
              className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors flex flex-col items-center gap-2"
            >
              <Facebook size={24} />
              <span className="text-sm font-bold">Facebook</span>
            </button>

            {/* WHATSAPP */}
            <button
              onClick={() => handleShare('whatsapp', templates.templates.whatsapp)}
              className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors flex flex-col items-center gap-2"
            >
              <MessageCircle size={24} />
              <span className="text-sm font-bold">WhatsApp</span>
            </button>

            {/* LINKEDIN */}
            <button
              onClick={() => handleShare('linkedin', templates.templates.linkedin)}
              className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors flex flex-col items-center gap-2"
            >
              <Linkedin size={24} />
              <span className="text-sm font-bold">LinkedIn</span>
            </button>
          </div>
        </div>

        {/* COPY TO CLIPBOARD */}
        <div className="mb-6">
          <p className="text-sm font-bold uppercase tracking-widest mb-3">Or Copy & Share</p>
          
          <div className="border-2 border-black p-4 bg-gray-50 mb-3">
            <p className="text-sm leading-relaxed mb-4">{templates.templates.copy}</p>
            <button
              onClick={() => handleCopyToClipboard(templates.templates.copy)}
              className="w-full bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check size={18} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy Text
                </>
              )}
            </button>
          </div>
        </div>

        {/* CLOSE BUTTON */}
        <button
          onClick={() => window.location.reload()}
          className="w-full border-2 border-black px-4 py-3 font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          Done Sharing
        </button>
      </div>
    </div>
  );
}
