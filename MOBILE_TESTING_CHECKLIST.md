# Mobile Testing Checklist

## Testing Environment
- **iOS Safari**: iPhone 12/13/14/15 (iOS 15+)
- **Android Chrome**: Pixel 4/5/6/7, Samsung Galaxy S20+
- **Viewport Sizes**: 375px (mobile), 768px (tablet), 1024px (desktop)

## Navigation & Layout

### Hamburger Menu
- [ ] Hamburger button (☰) visible on screens < 768px
- [ ] Hamburger button hidden on screens > 768px
- [ ] Menu opens/closes on click
- [ ] Menu closes when link is clicked
- [ ] Menu has proper touch target size (44px minimum)
- [ ] Menu items are readable and properly spaced
- [ ] Language toggle visible in header

### Desktop Navigation
- [ ] Navigation links visible on desktop (> 768px)
- [ ] Navigation links hidden on mobile (< 768px)
- [ ] Links: FRONT PAGE, BARRAN'S STORY, DONATE, CONTACT all working

## Home Page (ModernHome.tsx)

### Hero Section
- [ ] Hero title readable on mobile
- [ ] Hero subtitle readable on mobile
- [ ] DONATE button: 44px minimum height, easy to tap
- [ ] SHARE button: 44px minimum height, easy to tap
- [ ] Buttons stack vertically on mobile

### Childhood Memories Carousel
- [ ] Carousel images display properly on mobile
- [ ] Previous button: 44px minimum touch target, positioned inside carousel on mobile
- [ ] Next button: 44px minimum touch target, positioned inside carousel on mobile
- [ ] Dot indicators: 32px minimum touch targets on mobile
- [ ] Carousel navigation works smoothly
- [ ] Image captions readable on mobile
- [ ] Memory counter displays correctly

### Content Sections
- [ ] Text readable on mobile (font size appropriate)
- [ ] Donation box sticky on desktop, scrolls on mobile
- [ ] Key References grid: 2 columns on mobile, 4 on desktop
- [ ] All links clickable with adequate spacing

## Barran's Story Page (BarransStory.tsx)

### Timeline
- [ ] Timeline displays vertically on mobile
- [ ] Timeline milestones readable
- [ ] Timeline images display properly
- [ ] Timeline dots/indicators visible
- [ ] Hover effects work on touch devices

## Contact Page (Contact.tsx)

### Carousel
- [ ] Previous button: 44px minimum touch target
- [ ] Next button: 44px minimum touch target
- [ ] Dot indicators: 32px minimum touch targets
- [ ] Images display properly

### Contact Info Cards
- [ ] Cards stack vertically on mobile (1 column)
- [ ] Cards display in 3 columns on desktop
- [ ] Email, Phone, Location cards readable
- [ ] Links (mailto:, tel:) work properly

### Contact Form
- [ ] Name input: 44px minimum height, easy to tap
- [ ] Email input: 44px minimum height, easy to tap
- [ ] Phone input: 44px minimum height, easy to tap
- [ ] Subject dropdown: 44px minimum height, easy to tap
- [ ] Message textarea: readable, proper height
- [ ] Submit button: 44px minimum height, easy to tap
- [ ] Form labels visible and readable
- [ ] Keyboard appears correctly for each input type
- [ ] Form submission works

### Quick Links
- [ ] Links stack vertically on mobile (1 column)
- [ ] Links display in 2 columns on desktop
- [ ] All links clickable with adequate spacing

## Donation Page (DonateStripeQR.tsx)

### Donation Type Buttons
- [ ] One-Time button: 44px minimum height
- [ ] Monthly button: 44px minimum height
- [ ] Buttons responsive to tap
- [ ] Active state clearly visible

### Preset Amount Buttons
- [ ] All 8 preset buttons: 44px minimum height
- [ ] Buttons arranged in 2 columns on mobile
- [ ] Buttons arranged in 4 columns on desktop
- [ ] Active state clearly visible
- [ ] Buttons responsive to tap

### Custom Amount Input
- [ ] Input field: 44px minimum height
- [ ] Dollar sign visible
- [ ] Placeholder text readable
- [ ] Keyboard appears correctly (number pad)
- [ ] Input validation works
- [ ] Error messages display properly

### QR Code
- [ ] QR code displays properly on mobile
- [ ] QR code size appropriate for scanning
- [ ] Copy to clipboard button works
- [ ] Payment link generates correctly

## General Mobile UX

### Touch Targets
- [ ] All buttons: minimum 44px × 44px
- [ ] All form inputs: minimum 44px height
- [ ] All links: adequate spacing (minimum 8px padding)
- [ ] No overlapping touch targets

### Text & Readability
- [ ] All text readable without zooming
- [ ] Font sizes appropriate for mobile
- [ ] Contrast ratios meet WCAG standards
- [ ] No text cutoff on edges

### Scrolling & Performance
- [ ] Smooth scrolling on mobile
- [ ] No janky animations
- [ ] Images load quickly
- [ ] No layout shift during load

### Keyboard & Input
- [ ] Keyboard doesn't cover important content
- [ ] Focus indicators visible
- [ ] Tab order logical
- [ ] Form submission works

## Browser-Specific Testing

### iOS Safari
- [ ] Hamburger menu works
- [ ] Carousels swipe smoothly
- [ ] Form inputs focus correctly
- [ ] Keyboard behavior normal
- [ ] No iOS-specific rendering issues

### Android Chrome
- [ ] Hamburger menu works
- [ ] Carousels swipe smoothly
- [ ] Form inputs focus correctly
- [ ] Keyboard behavior normal
- [ ] No Android-specific rendering issues

## Viewport Sizes to Test

- [ ] 375px (iPhone SE, iPhone 12 mini)
- [ ] 390px (iPhone 12/13/14)
- [ ] 412px (Pixel 4/5)
- [ ] 430px (iPhone 14 Pro Max)
- [ ] 768px (iPad mini)
- [ ] 1024px (iPad)

## Orientation Testing

- [ ] Portrait mode: all elements readable and functional
- [ ] Landscape mode: layout adapts properly
- [ ] Rotation doesn't break layout
- [ ] Rotation doesn't lose form data

## Notes

- Test on actual devices when possible (not just browser dev tools)
- Test with slow 4G network to simulate real-world conditions
- Test with touch gestures (tap, double-tap, long-press)
- Test with keyboard navigation (Tab, Enter, Escape)
- Test with screen readers (VoiceOver on iOS, TalkBack on Android)
