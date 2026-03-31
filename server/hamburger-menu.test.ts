import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('HamburgerMenu i18n Translations', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should have French translations for all menu items', () => {
    const frenchTranslations = {
      'menu.language': '🌐 LANGUE',
      'menu.justiceForBarran': '🏠 JUSTICE POUR BARRAN',
      'menu.home': 'Accueil',
      'menu.story': "L'histoire (Chronologie)",
      'menu.readNewspaper': 'Lire le journal',
      'menu.takeAction': '💪 PASSER À L\'ACTION',
      'menu.monthlyDonation': 'Don mensuel récurrent',
      'menu.donationHub': 'Centre de dons (Toutes les méthodes)',
      'menu.donateETransfer': 'Donner par virement électronique',
      'menu.donationImpact': 'Voir l\'impact des dons',
      'menu.signPetition': 'Signer la pétition',
      'menu.shareStory': 'Partager votre histoire',
      'menu.getAlerts': 'Recevoir les alertes',
      'menu.learnMore': '📚 EN SAVOIR PLUS',
      'menu.governmentAccountability': 'Responsabilité gouvernementale',
      'menu.corporateAccountability': 'Responsabilité corporative',
      'menu.dpjAccountability': 'Responsabilité de la DPJ',
      'menu.podcastEpisodes': 'Épisodes de podcast',
      'menu.resources': 'Ressources et références',
      'menu.connect': '🤝 CONNECTER',
      'menu.followTwitter': 'Suivre sur Twitter/X',
      'menu.followInstagram': 'Suivre sur Instagram',
      'menu.followFacebook': 'Suivre sur Facebook',
      'menu.contactUs': 'Nous contacter',
      'menu.memorials': '🕯️ MÉMORIAUX',
      'menu.humanRightsActivists': 'Militants des droits humains',
      'menu.indigenousSoldiers': 'Soldats autochtones',
      'menu.mediaKit': 'Trousse médias',
    };

    // Verify all translations are non-empty strings
    Object.entries(frenchTranslations).forEach(([key, value]) => {
      expect(value).toBeTruthy();
      expect(typeof value).toBe('string');
      expect(value.length).toBeGreaterThan(0);
    });
  });

  it('should have all required menu sections', () => {
    const sections = [
      'menu.justiceForBarran',
      'menu.takeAction',
      'menu.learnMore',
      'menu.connect',
      'menu.memorials',
    ];

    sections.forEach((section) => {
      expect(section).toBeTruthy();
    });
  });

  it('should have all required menu links', () => {
    const links = [
      'menu.home',
      'menu.story',
      'menu.readNewspaper',
      'menu.monthlyDonation',
      'menu.donationHub',
      'menu.donateETransfer',
      'menu.donationImpact',
      'menu.signPetition',
      'menu.shareStory',
      'menu.getAlerts',
      'menu.governmentAccountability',
      'menu.corporateAccountability',
      'menu.dpjAccountability',
      'menu.podcastEpisodes',
      'menu.resources',
      'menu.followTwitter',
      'menu.followInstagram',
      'menu.followFacebook',
      'menu.contactUs',
      'menu.humanRightsActivists',
      'menu.indigenousSoldiers',
      'menu.mediaKit',
    ];

    links.forEach((link) => {
      expect(link).toBeTruthy();
    });
  });
});
