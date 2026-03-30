export interface Testimonial {
  id: number;
  name: string;
  role: string;
  story: string;
  category: 'indigenous' | 'haitian' | 'family' | 'advocate' | 'survivor';
  avatar: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Whitehorse",
    role: "Indigenous Mother, Alberta",
    story: "When my daughter needed help after trauma, I was told to wait. I waited 18 months. Listening to Barran's story, I realized I wasn't alone. The system failed us too. Thank you for speaking up for all of us.",
    category: 'indigenous',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    date: '2026-03-15'
  },
  {
    id: 2,
    name: "Jean-Marie Desroches",
    role: "Haitian-Canadian Advocate, Quebec",
    story: "My family came to Canada seeking safety from violence in Haiti. We found the same institutional abandonment here. Barran's case shows that being in Canada doesn't protect you from systemic racism. We need real change, not just words.",
    category: 'haitian',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JeanMarie',
    date: '2026-03-18'
  },
  {
    id: 3,
    name: "Dr. Patricia Okonkwo",
    role: "Child Welfare Advocate, Ontario",
    story: "I've worked in child protection for 20 years. Barran's case represents systemic failures I see every day. The podcast exposed what we've been trying to change for decades. This is required listening for every government official.",
    category: 'advocate',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Patricia',
    date: '2026-03-20'
  },
  {
    id: 4,
    name: "Marcus & Elena Rodriguez",
    role: "Multicultural Family, British Columbia",
    story: "We're Irish-Mexican-Indigenous. Hearing about Barran's family—French, Irish, Haitian, Italian, Aboriginal—made us realize this isn't just an Indigenous issue. It's a systemic failure affecting all marginalized families. We're sharing this everywhere.",
    category: 'family',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    date: '2026-03-19'
  },
  {
    id: 5,
    name: "Survivor - Anonymous",
    role: "Trauma Survivor, Manitoba",
    story: "I was failed by DPJ. I was failed by politicians. I was failed by everyone. Listening to this podcast, I finally felt heard. Someone is telling the truth. Someone is fighting for us. Thank you for not giving up.",
    category: 'survivor',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anonymous',
    date: '2026-03-17'
  },
  {
    id: 6,
    name: "Chief Thomas Bearspirit",
    role: "First Nations Leader, Saskatchewan",
    story: "This is what we've been saying for generations. The system is broken. But Barran's story—with specific names, dates, and evidence—this is the wake-up call Canada needs. We stand with Justice for Barran.",
    category: 'indigenous',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas',
    date: '2026-03-21'
  },
  {
    id: 7,
    name: "Yolande Beaumont",
    role: "Social Worker, Quebec",
    story: "I work with vulnerable families. Every day I see the gaps Barran fell through. The podcast made me cry because I recognize these failures in my own caseload. We need systemic change NOW.",
    category: 'advocate',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yolande',
    date: '2026-03-16'
  },
  {
    id: 8,
    name: "David Lafleur",
    role: "Haitian-Canadian Youth, Montreal",
    story: "My parents came from Haiti. They always said Canada was better. But after hearing this podcast, I see the same corruption, the same abandonment. This is the conversation my generation needs to have.",
    category: 'haitian',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    date: '2026-03-14'
  }
];

export function getTestimonialsByCategory(category: string): Testimonial[] {
  return testimonials.filter(t => t.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(testimonials.map(t => t.category)));
}
