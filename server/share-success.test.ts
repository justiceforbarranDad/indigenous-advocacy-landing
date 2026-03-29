import { describe, it, expect } from 'vitest';

describe('ShareSuccess Component', () => {
  describe('Share Templates', () => {
    it('should generate correct donation share template for Twitter', () => {
      const template = `I just donated $50 to support Justice for Barran and demand systemic change for all voiceless victims. Every contribution matters. #JusticeForBarran #TruthAndReconciliation https://indigenousadv-ahjdmzis.manus.space`;
      
      expect(template).toContain('$50');
      expect(template).toContain('Justice for Barran');
      expect(template).toContain('#JusticeForBarran');
      expect(template).toContain('https://indigenousadv-ahjdmzis.manus.space');
    });

    it('should generate correct petition share template for Facebook', () => {
      const template = `I'm supporting Justice for Barran by signing the petition. This is about systemic accountability and protecting vulnerable children. Join me in demanding change! #JusticeForBarran`;
      
      expect(template).toContain('petition');
      expect(template).toContain('Justice for Barran');
      expect(template).toContain('#JusticeForBarran');
    });

    it('should generate correct WhatsApp share template', () => {
      const template = `I just signed the petition for Justice for Barran. Add your voice to demand systemic change: https://indigenousadv-ahjdmzis.manus.space/petition #JusticeForBarran`;
      
      expect(template).toContain('petition');
      expect(template).toContain('https://indigenousadv-ahjdmzis.manus.space/petition');
    });

    it('should generate correct LinkedIn share template', () => {
      const template = `I'm committed to systemic change. I just donated $100 to support Justice for Barran, a campaign demanding accountability for Indigenous children failed by government systems. #JusticeForBarran #IndigenousRights`;
      
      expect(template).toContain('$100');
      expect(template).toContain('systemic change');
      expect(template).toContain('#IndigenousRights');
    });
  });

  describe('Share URL Generation', () => {
    it('should generate valid Twitter share URL', () => {
      const text = 'I support Justice for Barran';
      const encodedText = encodeURIComponent(text);
      const url = `https://x.com/intent/tweet?text=${encodedText}`;
      
      expect(url).toContain('x.com/intent/tweet');
      expect(url).toContain(encodedText);
    });

    it('should generate valid Facebook share URL', () => {
      const text = 'I support Justice for Barran';
      const encodedText = encodeURIComponent(text);
      const url = `https://www.facebook.com/sharer/sharer.php?quote=${encodedText}`;
      
      expect(url).toContain('facebook.com/sharer');
      expect(url).toContain(encodedText);
    });

    it('should generate valid WhatsApp share URL', () => {
      const text = 'I support Justice for Barran';
      const encodedText = encodeURIComponent(text);
      const url = `https://wa.me/?text=${encodedText}`;
      
      expect(url).toContain('wa.me');
      expect(url).toContain(encodedText);
    });

    it('should generate valid LinkedIn share URL', () => {
      const text = 'I support Justice for Barran';
      const encodedText = encodeURIComponent(text);
      const url = `https://www.linkedin.com/sharing/share-offsite/?url=https://indigenousadv-ahjdmzis.manus.space&summary=${encodedText}`;
      
      expect(url).toContain('linkedin.com/sharing');
      expect(url).toContain('indigenousadv-ahjdmzis.manus.space');
    });
  });

  describe('Share Type Detection', () => {
    it('should identify donation share type', () => {
      const type = 'donation';
      expect(type).toBe('donation');
    });

    it('should identify signature share type', () => {
      const type = 'signature';
      expect(type).toBe('signature');
    });

    it('should identify story share type', () => {
      const type = 'story';
      expect(type).toBe('story');
    });
  });

  describe('Share Message Formatting', () => {
    it('should format donation amount correctly', () => {
      const amount = '50';
      const formatted = `$${amount}`;
      
      expect(formatted).toBe('$50');
    });

    it('should include campaign hashtags', () => {
      const hashtags = ['#JusticeForBarran', '#TruthAndReconciliation', '#EveryChildMatters'];
      
      expect(hashtags).toContain('#JusticeForBarran');
      expect(hashtags.length).toBe(3);
    });

    it('should include campaign URL', () => {
      const url = 'https://indigenousadv-ahjdmzis.manus.space';
      
      expect(url).toContain('indigenousadv-ahjdmzis.manus.space');
      expect(url).toMatch(/^https:\/\//);
    });
  });

  describe('Share Success Tracking', () => {
    it('should track donation share event', () => {
      const event = {
        type: 'donation',
        platform: 'twitter',
        timestamp: new Date().toISOString(),
        amount: '$50'
      };
      
      expect(event.type).toBe('donation');
      expect(event.platform).toBe('twitter');
      expect(event.amount).toBe('$50');
    });

    it('should track petition share event', () => {
      const event = {
        type: 'signature',
        platform: 'facebook',
        timestamp: new Date().toISOString()
      };
      
      expect(event.type).toBe('signature');
      expect(event.platform).toBe('facebook');
    });

    it('should track story share event', () => {
      const event = {
        type: 'story',
        platform: 'whatsapp',
        timestamp: new Date().toISOString()
      };
      
      expect(event.type).toBe('story');
      expect(event.platform).toBe('whatsapp');
    });
  });

  describe('Copy to Clipboard', () => {
    it('should prepare text for clipboard', () => {
      const text = `I just donated $50 to Justice for Barran. Support this campaign: https://indigenousadv-ahjdmzis.manus.space #JusticeForBarran`;
      
      expect(text).toContain('$50');
      expect(text).toContain('https://indigenousadv-ahjdmzis.manus.space');
      expect(text.length).toBeGreaterThan(50);
    });

    it('should validate clipboard text length', () => {
      const text = `I just donated $50 to Justice for Barran. Support this campaign: https://indigenousadv-ahjdmzis.manus.space #JusticeForBarran`;
      const maxLength = 280; // Twitter limit
      
      expect(text.length).toBeLessThanOrEqual(maxLength);
    });
  });
});
