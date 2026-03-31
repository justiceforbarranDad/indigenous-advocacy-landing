#!/usr/bin/env node

/**
 * Automation script to apply newspaper design pattern to pages
 * Usage: node scripts/apply-newspaper-design.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, '../client/src/pages');

// Pages that already have newspaper design
const completedPages = [
  'OrangeShirtDayAccountability.tsx',
  'LegalRightsAndConstitutionBilingual.tsx',
  'SponsorResponseTracker.tsx',
  'DonorTestimonials.tsx',
  'FinancialTransparency.tsx',
  'FamilyCaseDocumentation.tsx',
  'UNComplaint.tsx',
];

// Priority pages to update
const priorityPages = [
  'AccountabilityTracker.tsx',
  'DPJAccountability.tsx',
  'AccountabilityFramework.tsx',
  'BrokenPromises.tsx',
  'Credits.tsx',
  'Donate.tsx',
  'DonateComprehensive.tsx',
  'DonateRecurring.tsx',
];

function getPageFiles() {
  const files = fs.readdirSync(pagesDir)
    .filter(f => f.endsWith('.tsx') && !completedPages.includes(f));
  return files;
}

function analyzePageStructure(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  return {
    hasLanguageToggle: content.includes('language') && content.includes('setLanguage'),
    hasMasthead: content.includes('masthead') || content.includes('NYT'),
    hasBilingual: content.includes('en:') && content.includes('fr:'),
    hasNewspaperLayout: content.includes('NewspaperLayout'),
    hasLanguageState: content.includes("useState<'en' | 'fr'>"),
  };
}

function generateReport() {
  const files = getPageFiles();
  
  console.log('\n📊 NEWSPAPER DESIGN IMPLEMENTATION REPORT\n');
  console.log(`Total pages: ${files.length}`);
  console.log(`Already completed: ${completedPages.length}`);
  console.log(`Remaining: ${files.length}\n`);
  
  console.log('✅ COMPLETED PAGES:');
  completedPages.forEach(p => console.log(`   ${p}`));
  
  console.log('\n🎯 PRIORITY PAGES TO UPDATE:');
  priorityPages.forEach(p => {
    if (files.includes(p)) {
      const filePath = path.join(pagesDir, p);
      const analysis = analyzePageStructure(filePath);
      const status = analysis.hasNewspaperLayout ? '✅' : '⏳';
      console.log(`   ${status} ${p}`);
    }
  });
  
  console.log('\n📋 REMAINING PAGES:');
  const remaining = files.filter(f => !priorityPages.includes(f));
  console.log(`   ${remaining.length} pages to process`);
  
  // Summary statistics
  let withLanguageToggle = 0;
  let withMasthead = 0;
  let withBilingual = 0;
  
  files.forEach(f => {
    const filePath = path.join(pagesDir, f);
    const analysis = analyzePageStructure(filePath);
    if (analysis.hasLanguageToggle) withLanguageToggle++;
    if (analysis.hasMasthead) withMasthead++;
    if (analysis.hasBilingual) withBilingual++;
  });
  
  console.log('\n📈 STATISTICS:');
  console.log(`   Pages with language toggle: ${withLanguageToggle}/${files.length}`);
  console.log(`   Pages with masthead: ${withMasthead}/${files.length}`);
  console.log(`   Pages with bilingual content: ${withBilingual}/${files.length}`);
  
  console.log('\n💡 NEXT STEPS:');
  console.log('   1. Start with priority pages');
  console.log('   2. Use NewspaperLayout component');
  console.log('   3. Add language toggle');
  console.log('   4. Create bilingual content object');
  console.log('   5. Test on mobile/desktop');
  console.log('   6. Commit and push changes\n');
}

// Run report
generateReport();
