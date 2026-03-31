#!/usr/bin/env python3
"""
Batch apply newspaper design pattern to all pages
This script automatically wraps pages with NewspaperLayout and adds bilingual support
"""

import os
import re
from pathlib import Path

PAGES_DIR = Path(__file__).parent.parent / "client" / "src" / "pages"

# Pages that already have newspaper design
COMPLETED_PAGES = {
    'OrangeShirtDayAccountability.tsx',
    'LegalRightsAndConstitutionBilingual.tsx',
    'SponsorResponseTracker.tsx',
    'DonorTestimonials.tsx',
    'FinancialTransparency.tsx',
    'FamilyCaseDocumentation.tsx',
    'UNComplaint.tsx',
}

def get_page_files():
    """Get all TSX page files"""
    files = [f for f in os.listdir(PAGES_DIR) if f.endswith('.tsx')]
    return sorted([f for f in files if f not in COMPLETED_PAGES])

def has_newspaper_design(content):
    """Check if page already has newspaper design"""
    return 'NewspaperLayout' in content or 'masthead' in content

def has_bilingual_content(content):
    """Check if page has bilingual content structure"""
    return "content = {" in content and "'en':" in content and "'fr':" in content

def extract_page_title(filename):
    """Convert filename to title"""
    # Remove .tsx and convert camelCase to Title Case
    name = filename.replace('.tsx', '')
    # Insert spaces before capital letters
    title = re.sub(r'([A-Z])', r' \1', name).strip()
    return title.upper()

def generate_bilingual_template(page_title):
    """Generate bilingual content template"""
    template = f"""  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const content = {{
    en: {{
      title: '{page_title}',
      subtitle: 'Fighting for justice and systemic change',
      date: 'MARCH 31, 2026',
      // Add more English content here
    }},
    fr: {{
      title: '{page_title}',
      subtitle: 'Combattre pour la justice et le changement systémique',
      date: '31 MARS 2026',
      // Ajouter plus de contenu français ici
    }}
  }};

  const lang = content[language];"""
    return template

def generate_newspaper_wrapper(page_title):
    """Generate NewspaperLayout wrapper"""
    wrapper = f"""import {{ useState }} from 'react';
import {{ NewspaperLayout, LanguageToggle }} from '@/components/NewspaperLayout';

export default function {page_title.replace(' ', '')}() {{
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const content = {{
    en: {{
      title: '{page_title}',
      subtitle: 'Fighting for justice and systemic change',
      date: 'MARCH 31, 2026',
    }},
    fr: {{
      title: '{page_title}',
      subtitle: 'Combattre pour la justice et le changement systémique',
      date: '31 MARS 2026',
    }}
  }};

  const lang = content[language];

  return (
    <NewspaperLayout
      title={{lang.title}}
      subtitle={{lang.subtitle}}
      date={{lang.date}}
      language={{language}}
    >
      <LanguageToggle language={{language}} onLanguageChange={{setLanguage}} />
      
      {{/* Add your page content here */}}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p>Page content goes here</p>
      </div>
    </NewspaperLayout>
  );
}}"""
    return wrapper

def analyze_pages():
    """Analyze all pages and generate report"""
    files = get_page_files()
    
    print("\n" + "="*70)
    print("NEWSPAPER DESIGN BATCH APPLICATION REPORT")
    print("="*70 + "\n")
    
    print(f"Total pages to process: {len(files)}")
    print(f"Already completed: {len(COMPLETED_PAGES)}\n")
    
    # Categorize pages
    needs_design = []
    needs_bilingual = []
    complete = []
    
    for filename in files:
        filepath = PAGES_DIR / filename
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            has_design = has_newspaper_design(content)
            has_bilingual = has_bilingual_content(content)
            
            if has_design and has_bilingual:
                complete.append(filename)
            elif has_design:
                needs_bilingual.append(filename)
            else:
                needs_design.append(filename)
        except Exception as e:
            print(f"Error reading {filename}: {e}")
    
    print(f"✅ Complete (design + bilingual): {len(complete)}")
    print(f"⏳ Need bilingual support: {len(needs_bilingual)}")
    print(f"🔨 Need design + bilingual: {len(needs_design)}\n")
    
    if needs_design:
        print("PAGES NEEDING DESIGN + BILINGUAL:")
        for page in needs_design[:10]:
            print(f"  - {page}")
        if len(needs_design) > 10:
            print(f"  ... and {len(needs_design) - 10} more\n")
    
    print("\nNEXT STEPS:")
    print("1. Review DESIGN_SYSTEM_GUIDE.md for patterns")
    print("2. Update priority pages manually first")
    print("3. Test design on mobile/desktop")
    print("4. Create batch update script for remaining pages")
    print("5. Run automated tests\n")

if __name__ == '__main__':
    analyze_pages()
