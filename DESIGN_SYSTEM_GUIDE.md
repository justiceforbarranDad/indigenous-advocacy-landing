# Design System Guide - Justice for Barran

## Overview

This guide provides a systematic approach to applying the newspaper design aesthetic and bilingual support across all 128 pages of the Justice for Barran website.

## Components Available

### 1. NewspaperLayout Component
**Location:** `client/src/components/NewspaperLayout.tsx`

A reusable wrapper component that provides:
- Professional masthead with title, subtitle, and date
- Consistent footer with McGovern Institute branding
- Customizable accent colors and masthead colors
- Responsive design for all screen sizes

**Usage:**
```tsx
import { NewspaperLayout, LanguageToggle } from '@/components/NewspaperLayout';

export default function MyPage() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  
  return (
    <NewspaperLayout
      title="PAGE TITLE"
      subtitle="Subtitle or tagline"
      date="MARCH 31, 2026"
      language={language}
      accentColor="amber"
      mastHeadColor="black"
    >
      <LanguageToggle language={language} onLanguageChange={setLanguage} />
      {/* Your page content here */}
    </NewspaperLayout>
  );
}
```

### 2. MilestoneTracker Component
**Location:** `client/src/components/MilestoneTracker.tsx`

Displays donation progress with:
- Visual progress bar
- Milestone checkpoints ($50k, $100k, $250k, $500k)
- Next target indicator
- Bilingual support

**Usage:**
```tsx
import MilestoneTracker from '@/components/MilestoneTracker';

<MilestoneTracker 
  currentAmount={150000}
  goalAmount={500000}
  language={language}
  showDetails={true}
/>
```

## Bilingual Pattern

All pages should follow this pattern for bilingual support:

```tsx
const [language, setLanguage] = useState<'en' | 'fr'>('en');

const content = {
  en: {
    title: 'English Title',
    subtitle: 'English subtitle',
    // ... all English content
  },
  fr: {
    title: 'Titre Français',
    subtitle: 'Sous-titre français',
    // ... all French content
  }
};

const lang = content[language];
```

## Newspaper Design Pattern

All pages should follow this structure:

1. **Language Toggle** - Top of page
2. **Masthead** - Black background, white text, bold typography
3. **Content Sections** - Use `NewspaperSection` component for consistent styling
4. **Footer** - McGovern Institute branding

## Pages to Update (Priority Order)

### Phase 1: Core Pages (High Impact)
1. AccountabilityTracker.tsx
2. DPJAccountability.tsx
3. AccountabilityFramework.tsx
4. BrokenPromises.tsx
5. Credits.tsx

### Phase 2: Donation Pages (Revenue Impact)
6. Donate.tsx
7. DonateComprehensive.tsx
8. DonateRecurring.tsx
9. DonateViaBank.tsx
10. DonateETransfer.tsx

### Phase 3: Legal & Educational Pages
11. LegalRightsAndConstitutionBilingual.tsx
12. InstitutionMission.tsx
13. RightsEducationInSchoolsBilingual.tsx
14. UNComplaint.tsx
15. FamilyCaseDocumentation.tsx

### Phase 4: Administrative Pages
16. AdminDashboard.tsx
17. AdminAnalytics.tsx
18. AdminPaymentHistory.tsx

### Phase 5: Remaining Pages
All other pages in systematic order

## Implementation Checklist

For each page:
- [ ] Import NewspaperLayout and LanguageToggle
- [ ] Add language state management
- [ ] Create bilingual content object
- [ ] Wrap page in NewspaperLayout
- [ ] Add LanguageToggle component
- [ ] Update all text to use `lang` variable
- [ ] Test both English and French
- [ ] Verify responsive design
- [ ] Test on mobile/tablet/desktop

## Styling Standards

### Colors
- **Masthead:** Black (#000000)
- **Accent:** Amber (#F59E0B)
- **Text:** Charcoal (#1F2937)
- **Backgrounds:** White (#FFFFFF) or Gray (#F9FAFB)
- **Borders:** Black (#000000) or Amber (#F59E0B)

### Typography
- **Headings:** Bold, tracking-widest
- **Body:** Regular, leading-relaxed
- **Dates:** Uppercase, tracking-widest

### Spacing
- **Sections:** py-12 px-6
- **Container:** max-w-5xl mx-auto
- **Gaps:** gap-4 or gap-6

## Testing Checklist

- [ ] Page renders without errors
- [ ] Language toggle works (English ↔ French)
- [ ] All text is in correct language
- [ ] Responsive design works on mobile
- [ ] Masthead displays correctly
- [ ] Footer displays correctly
- [ ] Links are functional
- [ ] Images load properly
- [ ] Buttons are clickable

## Performance Notes

- NewspaperLayout is lightweight and reusable
- Language state should be managed locally per page
- Consider using localStorage to persist language preference
- MilestoneTracker updates dynamically without page reload

## Future Enhancements

- Global language context for site-wide language persistence
- Dark mode support
- Accessibility improvements (ARIA labels)
- Print-friendly CSS
- PDF export capability

## Support

For questions about the design system, refer to existing pages:
- OrangeShirtDayAccountability.tsx (full bilingual example)
- LegalRightsAndConstitutionBilingual.tsx (legal content example)
- SponsorResponseTracker.tsx (tracking example)
