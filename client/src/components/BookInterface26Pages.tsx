import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { JukeboxPlayer } from './JukeboxPlayer';
import PageDonationSection from './PageDonationSection';

interface PageContent {
  id: number;
  title: string;
  leftContent: string;
  rightContent: string;
  hasAudio?: boolean;
  hasPodcast?: boolean;
  hasRadio?: boolean;
  videoUrl?: string;
}

const CONTACT_INFO_EN = 'The McGovern Foundation of Human Rights\nwww.themcgovernfondationofhumanrights.com\ncontact@justiceforbarran.com';

const CONTACT_INFO_FR = 'La Fondation McGovern pour les droits de l\'homme\nwww.themcgovernfondationofhumanrights.com\ncontact@justiceforbarran.com';

const CONTACT_INFO_HT = 'Fondasyon McGovern pou Dwa Moun\nwww.themcgovernfondationofhumanrights.com\ncontact@justiceforbarran.com';

const DONATION_SECTION_EN = '\n\n--- SUPPORT JUSTICE ---\n\nDonate: $5  $10  $20  $50  $100\n\nYour donation supports legal advocacy and systemic reform.';

const DONATION_SECTION_FR = '\n\n--- SOUTENIR LA JUSTICE ---\n\nDonner: $5  $10  $20  $50  $100\n\nVotre don soutient l\'plaidoirie juridique et la réforme systémique.';

const DONATION_SECTION_HT = '\n\n--- SIPÒTE JISTIS ---\n\nDonnen: $5  $10  $20  $50  $100\n\nDonasyon ou sipòte avokasi legal ak refòm sistèm.';

const getDonationSection = (lang: 'en' | 'fr' | 'ht') => {
  switch(lang) {
    case 'fr': return DONATION_SECTION_FR;
    case 'ht': return DONATION_SECTION_HT;
    default: return DONATION_SECTION_EN;
  }
};

const getContactInfo = (lang: 'en' | 'fr' | 'ht') => {
  switch(lang) {
    case 'fr': return CONTACT_INFO_FR;
    case 'ht': return CONTACT_INFO_HT;
    default: return CONTACT_INFO_EN;
  }
};

const pages26: PageContent[] = [
  // PAGE 0: COVER
  {
    id: 0,
    title: 'Cover',
    leftContent: 'SUNDAY BLOODY SUNDAY\nPART TWO\n\nCanada\'s Sunday Bloody Sunday\nFebruary 14, 2021\n\nCurrent Truth Before Reconciliation',
    rightContent: `JUSTICE FOR BARRAN\n\nPress to Enter`,
    hasAudio: false,
  },
  
  // PAGE 1: HISTORICAL CONTEXT
  {
    id: 1,
    title: 'Historical Context',
    leftContent: `BLOODY SUNDAY: THE HISTORY

Bloody Sunday refers to violent events where civilians were killed by authorities. The most notable incident occurred in Derry, Northern Ireland on January 30, 1972, when British soldiers killed 13 unarmed civilians during a civil rights march.

This historical tragedy represents systemic violence against marginalized communities demanding justice and equality. Today, Indigenous peoples in Canada face ongoing systemic violence and institutional failures that echo this legacy of oppression.

THE 2008 APOLOGY

Prime Minister Stephen Harper issued a formal apology for residential schools on June 11, 2008:

"We are sorry" for cultural genocide. Over 150,000 Indigenous children were taken from their families. The system caused intergenerational trauma that continues today.

But in 2025-2026, the same systems still fail Indigenous children. The apology was followed by inaction.`,
    rightContent: `SYSTEM FAILURES CONTINUE

Despite the apology, systemic failures persist:

• DPJ (Direction de la Protection de la Jeunesse) continues to remove Indigenous children
• Jordan's Principle remains unapplied
• Education systems fail Indigenous students
• Mental health services are inadequate
• Government accountability is absent

THE PARALLEL

Just as Bloody Sunday represented state violence against a marginalized community, today's systemic failures represent ongoing violence against Indigenous families.

The difference: Today's violence is bureaucratic, hidden, and deniable.

This is Canada's Sunday Bloody Sunday.`,
    hasAudio: true,
  },

  // PAGE 2: PODCAST PLAYER
  {
    id: 2,
    title: 'Podcast Episodes',
    leftContent: 'LISTEN TO OUR STORY\n\nSix episodes documenting systemic failures, government abandonment, and the fight for justice.',
    rightContent: 'PODCAST EPISODES\n\n1. The Silence of Politicians\n2. System Failure - DPJ Accountability\n3. 1873 Days of Injustice\n4. Indigenous Rights Under Attack\n5. Justice Delayed is Justice Denied\n6. Ghosted Organizations',
    hasPodcast: true,
    hasAudio: true,
  },

  // PAGE 3: RADIO PLAYER
  {
    id: 3,
    title: 'Indigenous Music',
    leftContent: `MUSIC AS RESISTANCE

Indigenous music carries the voice of our ancestors and the hope of our future. It is resistance against cultural erasure and a celebration of survival.

Listen to royalty-free Indigenous music from Canada while reading about systemic failures. Let the music ground you in the struggle and the strength of our people.

Music is medicine. Music is resistance. Music is truth.`,
    rightContent: 'INDIGENOUS MUSIC PLAYER\n\nRoyalty-free music from Pixabay\n\nNo copyright issues\n\nFree to share and use',
    hasRadio: true,
    hasAudio: true,
  },

  // PAGE 4: FAMILY TRAUMA
  {
    id: 4,
    title: 'Family Trauma Begins',
    leftContent: `SINCE 2021: SYSTEM FAILURE

February 14, 2021: Barran was stabbed 3 times at age 14. This was the beginning of a 5-year nightmare.

IMMEDIATE AFTERMATH:
• Emergency room treatment
• Police investigation
• Trauma counseling needed
• Family support required

DPJ INVOLVEMENT (2021-2023):
• DPJ opened file
• Initial support provided
• Then... silence
• January 2023: DPJ withdrew
• No adequate follow-up
• No transition support
• Education lost
• Mental health destroyed

THE CONSEQUENCES:
• Barran is now 20 years old
• Still dealing with trauma
• Education interrupted
• Employment opportunities lost
• Mental health crisis ongoing`,
    rightContent: `JORDAN'S PRINCIPLE: IGNORED

Jordan's Principle states: "When a jurisdictional dispute arises in the provision of services to a First Nations child, the government of first contact shall pay for the service and seek reimbursement later."

This principle ensures NO DELAY in services for Indigenous children.

WHAT SHOULD HAVE HAPPENED:
✓ Immediate trauma counseling
✓ Education support
✓ Mental health services
✓ Family support
✓ Coordinated care
✓ Ongoing monitoring
✓ Transition planning

WHAT ACTUALLY HAPPENED:
✗ Minimal support
✗ Abrupt withdrawal
✗ No follow-up
✗ No coordination
✗ No accountability
✗ Family abandoned
✗ Child left to suffer

This is systemic failure.`,
    hasAudio: true,
  },

  // PAGE 5: POLITICAL SILENCE
  {
    id: 5,
    title: 'Political Silence',
    leftContent: `SEEKING HELP FROM ELECTED OFFICIALS

I asked my MNA (Member of National Assembly), Céline Haytayan (CAQ, Laval-des-Rapides), for help with DPJ and IVAC files.

Instead of assistance, her office sent a cease-and-desist warning (November 19, 2023):

"STOP all contact:
- In-person visits
- Phone calls
- Emails
- Social media messages

OR FACE:
- Criminal harassment complaint
- Police involvement"

This is what happened when a constituent asked for help.

POLITICAL RETALIATION

This cease-and-desist is political retaliation for demanding accountability. It violates:
• Canadian Charter of Rights and Freedoms s.2(b) - Freedom of Expression
• Constitutional rights to petition government
• Basic democratic principles`,
    rightContent: `PROVINCIAL GHOSTING

Provincial level officials ghosted me too:

MINISTERS CONTACTED:
• Multiple CAQ ministers
• Multiple officials
• All ignored

RESPONSES RECEIVED:
• CDPDJ refused investigation (2x)
• No substantive help
• No intervention
• No support

FEDERAL SILENCE

Escalated to federal MPs:

MPs CONTACTED:
• Multiple federal MPs
• Multiple officials
• All ignored

HIGHER BODIES CONTACTED:
• Protecteur du citoyen
• Commissaire à l'éthique
• CHRC (Canadian Human Rights Commission)
• Ref: 100021349

THEIR RESPONSE:
"Limits on our powers. No real change for DPJ decisions."

TOTAL OFFICIALS CONTACTED: 500+
SUBSTANTIVE RESPONSES: 1
GOVERNMENT HELP: 0`,
    hasAudio: true,
  },

  // PAGE 6: SYSTEMIC FAILURES DOCUMENTED
  {
    id: 6,
    title: 'Systemic Failures',
    leftContent: `CDPDJ NUNAVIK SYSTEMIC INQUIRY (2025)

The Commission des droits de la personne et des droits de la jeunesse (CDPDJ) conducted a systemic inquiry into DPJ failures in Nunavik in 2025.

FINDINGS:
• Chronic under-resourcing
• Culturally inappropriate interventions
• Harm to Indigenous children's health
• Harm to Indigenous children's development
• Systemic racism in child protection
• Failure to apply Jordan's Principle
• Violation of Indigenous rights

MY FAMILY'S EXPERIENCE MATCHES THESE FINDINGS

We are not unique. We are evidence of systemic failure.

VIOLATIONS DOCUMENTED:
• Article 23 - UN Convention on Rights of the Child
• Quebec Charter Article 39 - Right to education
• Reconciliation commitments ignored
• Constitutional obligations violated`,
    rightContent: `LEGAL BASIS FOR ACCOUNTABILITY

CANADIAN JURISPRUDENCE:

Grant v Torstar (2009 CSC 61):
Freedom of expression protects responsible communication on matters of public interest.

R v Oakes (1986 1 SCR 103):
Charter rights can only be limited by demonstrable justification.

Tsilqot'in Nation v British Columbia (2014 SCC 44):
Indigenous rights and title are recognized and protected.

2024 CSC 5:
Indigenous rights jurisprudence recognizes systemic discrimination.

INTERNATIONAL LAW:

UN Convention on Rights of the Child:
Article 23 - Right to protection from violence
Article 39 - Right to recovery and reintegration

UN Declaration on Rights of Indigenous Peoples:
Articles 21, 23, 24 - Health and education rights

CANADIAN OBLIGATIONS:

Truth and Reconciliation Commission (2015):
94 Calls to Action - mostly unimplemented

Reconciliation is not a conclusion. It is a beginning that Canada chose to ignore.`,
    hasAudio: true,
  },

  // PAGE 7: LEGAL RIGHTS
  {
    id: 7,
    title: 'Legal Rights & Protection',
    leftContent: `CANADIAN CHARTER OF RIGHTS AND FREEDOMS

Section 2(b) - Freedom of Expression:
"Everyone has the following fundamental freedoms... freedom of thought, belief, expression and the freedom to impart and receive information and ideas of all kinds regardless of frontiers, either orally, in writing or in print, in the form of art, or in any other manner of expression."

MY RIGHTS:
✓ Freedom to speak about systemic failures
✓ Freedom to demand accountability
✓ Freedom to share evidence
✓ Freedom to petition government
✓ Freedom to organize for change

PROTECTED EXPRESSION:

My public posts, videos, emails, and testimony are protected because they:
1. Address matters of public interest
2. Are based on documented facts
3. Contain no threats or incitement
4. Seek accountability, not revenge
5. Protect vulnerable children

CEASE-AND-DESIST THREAT

The MNA's cease-and-desist violates my Charter rights. It is:
• Unconstitutional
• Politically motivated
• Retaliation for demanding accountability
• Intimidation of a constituent`,
    rightContent: `INDIGENOUS RIGHTS JURISPRUDENCE

Tsilqot'in Nation v British Columbia (2014 SCC 44):
Indigenous peoples have inherent rights to land and self-determination.

Haida Nation v British Columbia (2004 SCC 73):
Crown has duty to consult Indigenous peoples on matters affecting them.

Delgamuukw v British Columbia (1997 3 SCR 513):
Aboriginal title and rights are recognized in Canadian law.

SYSTEMIC DISCRIMINATION

2024 CSC 5:
Canadian courts recognize systemic discrimination against Indigenous peoples.

REMEDIES AVAILABLE:

1. Charter Violation Claims
2. Systemic Discrimination Suits
3. Human Rights Complaints
4. Administrative Law Challenges
5. Class Actions
6. International Complaints

INTERNATIONAL ACCOUNTABILITY:

UN Human Rights Committee:
Can review Canadian government actions

International Criminal Court:
Can investigate systemic crimes

These mechanisms exist. Canada must be held accountable.`,
    hasAudio: true,
  },

  // PAGE 8: CHILDREN'S EDUCATION
  {
    id: 8,
    title: 'Know Your Rights',
    leftContent: `TEACHING CHILDREN ABOUT THEIR RIGHTS

Every child needs to know:

BASIC RIGHTS:
• Right to safety
• Right to education
• Right to health care
• Right to be heard
• Right to protection from violence
• Right to cultural identity

INDIGENOUS RIGHTS:
• Right to Indigenous language
• Right to Indigenous culture
• Right to Indigenous spirituality
• Right to Indigenous community
• Right to self-determination

WHAT TO DO IF RIGHTS ARE VIOLATED:

1. DOCUMENT EVERYTHING
   - Dates and times
   - Names of officials
   - What was said/done
   - Witnesses present
   - Keep records safe

2. REPORT TO AUTHORITIES
   - Police (if crime)
   - DPJ (if child safety)
   - School (if education)
   - Health services (if health)

3. CONTACT ADVOCATES
   - Ombudsman
   - Human rights commission
   - Legal aid
   - Community organizations

4. SEEK LEGAL HELP
   - Lawyer consultation
   - Legal aid services
   - Class action opportunities`,
    rightContent: `CANADIAN CONSTITUTION

Section 15 - Equality Rights:
"Every individual is equal before and under the law and has the right to the equal protection and equal benefit of the law without discrimination."

Section 27 - Multiculturalism:
"This Charter shall be interpreted in a manner consistent with the preservation and enhancement of the multicultural heritage of Canadians."

Section 35 - Aboriginal Rights:
"The existing Aboriginal and treaty rights of the Aboriginal peoples of Canada are hereby recognized and affirmed."

SUPREME COURT DECISIONS:

Children have rights:
• Right to be heard
• Right to legal representation
• Right to protection
• Right to education

Indigenous children have additional rights:
• Cultural rights
• Language rights
• Spiritual rights
• Community rights

WHAT CHILDREN SHOULD KNOW:

1. Your rights are real and enforceable
2. Adults who violate your rights can be held accountable
3. You can speak up and be heard
4. You are not alone
5. Justice is possible

RESOURCES FOR CHILDREN:

• Kids Help Phone: 1-800-668-6868
• Jeunesse, J'écoute: 1-800-668-6868
• Legal aid services
• Indigenous organizations
• School counselors
• Trusted adults`,
    hasAudio: true,
  },

  // PAGE 9: GOVERNMENT HYPOCRISY - WATER CRISIS
  {
    id: 9,
    title: 'Government Hypocrisy',
    leftContent: `WATER CRISIS WHILE CHILDREN SUFFER

Canada boasts about clean water while Indigenous communities have boil water advisories.

FACTS:
• 30+ Indigenous communities under boil water advisories
• Contaminated water for years
• Government delays infrastructure
• Children drink unsafe water
• Health impacts documented

MEANWHILE:
• Government spends billions on pet projects
• Parliament fountains flow with clean water
• Ministers' offices have pristine water systems
• Public buildings have unlimited water access

HYPOCRISY:

Canada signs international water treaties while Indigenous children drink contaminated water.

The government says: "We care about Indigenous children."
The government does: Nothing.

This is systemic racism disguised as bureaucracy.`,
    rightContent: `GOVERNMENT SPENDING PRIORITIES

BILLIONS SPENT ON:
• Parliamentary renovations: $2.4 billion
• Fighter jets: $19 billion
• Bureaucratic salaries: $100+ billion
• Political advertising: $500+ million

PENNIES SPENT ON:
• Indigenous child protection: Inadequate
• Indigenous education: Underfunded
• Indigenous health: Chronically underfunded
• Indigenous infrastructure: Neglected

THE MATH DOESN'T ADD UP

If Canada truly valued Indigenous children, the budget would reflect it.

Instead:
✗ DPJ is underfunded
✗ Schools are underfunded
✗ Health services are underfunded
✗ Infrastructure is underfunded

But somehow:
✓ Parliamentary renovations get billions
✓ Political salaries are protected
✓ Bureaucratic bloat continues
✓ Wasteful spending persists

ACCOUNTABILITY QUESTION:

Where are the priorities?

If Indigenous children mattered, the budget would show it.

The budget is a moral document. Canada's budget shows that Indigenous children don't matter.`,
    hasAudio: true,
  },

  // PAGE 10: POLITICAL ACCOUNTABILITY
  {
    id: 10,
    title: 'Political Accountability',
    leftContent: `OFFICIALS WHO GHOSTED US

Over 500 officials contacted. Here are the key ones:

PROVINCIAL LEVEL:
• Céline Haytayan (MNA, CAQ)
  - Sent cease-and-desist
  - Threatened criminal charges
  - Refused constituent help

• Multiple CAQ Ministers
  - Ignored requests
  - No responses
  - No action

• CDPDJ
  - Refused investigation (2x)
  - Acknowledged systemic failures
  - Did nothing to help

FEDERAL LEVEL:
• Multiple MPs
  - Ignored requests
  - Form letter responses
  - No real help

• Protecteur du citoyen
  - Acknowledged limits
  - No action possible

• CHRC
  - Ref: 100021349
  - No substantive help

MUNICIPAL LEVEL:
• Local officials
  - Ignored requests
  - Deferred to province
  - No accountability`,
    rightContent: `WHAT ACCOUNTABILITY LOOKS LIKE

IMMEDIATE ACTIONS NEEDED:

1. INDEPENDENT INQUIRY
   - Into DPJ systemic failures
   - Into government abandonment
   - Into political retaliation
   - Public findings

2. APPLY JORDAN'S PRINCIPLE
   - Retroactively for affected children
   - Prospectively for all Indigenous children
   - Adequate funding
   - Accountability mechanisms

3. ELIMINATE IMMUNITY
   - Government workers accountable
   - Systemic failures prosecutable
   - Victims can sue
   - Justice is possible

4. COMPENSATION
   - For affected families
   - For lost education
   - For mental health impacts
   - For systemic discrimination

5. SYSTEMIC REFORM
   - DPJ restructuring
   - Indigenous oversight
   - Cultural competency training
   - Accountability mechanisms

LONG-TERM CHANGES:

• Truth and Reconciliation implementation
• Indigenous self-determination
• Decolonization of child protection
• Meaningful consultation
• Real power-sharing

ACCOUNTABILITY IS NOT REVENGE

It is:
✓ Justice
✓ Prevention
✓ Healing
✓ Systemic change
✓ Protecting future children`,
    hasAudio: true,
  },

  // PAGE 11: INTERNATIONAL CONTEXT
  {
    id: 11,
    title: 'International Context',
    leftContent: `CANADA ON THE WORLD STAGE

Canada presents itself as a human rights leader.

REALITY:
• UN Human Rights Council member
• Ratified multiple human rights treaties
• Signed Indigenous rights declarations
• Committed to reconciliation

BUT:

Canada violates its own commitments:
• UN Convention on Rights of the Child - violated
• UN Declaration on Rights of Indigenous Peoples - ignored
• Truth and Reconciliation Commission - unimplemented
• Reconciliation commitments - abandoned

INTERNATIONAL COMPLAINTS FILED:

UN HUMAN RIGHTS COMMITTEE:
• Complaint filed
• Systemic failures documented
• Government abandonment alleged
• International review pending

INTERNATIONAL CRIMINAL COURT:
• Preliminary investigation
• Systemic crimes alleged
• Cultural genocide allegations
• Ongoing investigation

CANADA'S RESPONSE:
"We are investigating ourselves."

Translation: No accountability.`,
    rightContent: `GLOBAL PERSPECTIVE

OTHER COUNTRIES' RESPONSES:

When similar systemic failures occur in other countries, Canada criticizes them.

CANADIAN HYPOCRISY:

Canada criticizes:
• Myanmar for ethnic cleansing
• China for cultural suppression
• Russia for human rights violations
• Saudi Arabia for systemic abuse

Canada does:
• Systemic discrimination against Indigenous peoples
• Cultural suppression through DPJ
• Human rights violations through bureaucracy
• Systemic abuse through abandonment

THE DOUBLE STANDARD:

Canada holds others accountable but not itself.

This is the definition of hypocrisy.

INTERNATIONAL ACCOUNTABILITY:

The world is watching. Canada's treatment of Indigenous peoples is:
• Documented
• Verified
• Reported internationally
• Subject to international review

Canada cannot hide behind "sovereignty" when human rights are violated.

WHAT JUSTICE LOOKS LIKE:

1. Admission of systemic failures
2. Accountability for officials
3. Compensation for victims
4. Systemic reform
5. International monitoring
6. Meaningful reconciliation

Canada has a choice:
• Accountability and healing
• Or continued denial and injustice

The world is waiting to see which Canada chooses.`,
    hasAudio: true,
  },

  // PAGE 12: CALL TO ACTION
  {
    id: 12,
    title: 'Call to Action',
    leftContent: `WHAT YOU CAN DO

SHARE THIS STORY:
• Social media
• Email
• Text
• In person
• With media
• With officials

DONATE:
• Support legal advocacy
• Support family needs
• Support systemic reform
• Every dollar helps

VOTE:
• Vote for accountability
• Vote for Indigenous rights
• Vote for reconciliation
• Vote for change

CONTACT OFFICIALS:
• Email your MP
• Email your MNA
• Email your mayor
• Demand accountability
• Demand action

ORGANIZE:
• Join advocacy groups
• Attend rallies
• Sign petitions
• Build community
• Create change

EDUCATE:
• Learn about Indigenous rights
• Learn about systemic racism
• Learn about reconciliation
• Teach others
• Spread awareness

SUPPORT OTHER FAMILIES:
• Share resources
• Provide support
• Document failures
• Demand accountability
• Build solidarity`,
    rightContent: `DONATE TO JUSTICE

Your donation supports:
✓ Legal advocacy
✓ Family support
✓ Systemic reform
✓ Other affected families
✓ International complaints

DONATION METHODS:
• Stripe (credit card)
• Direct deposit
• E-Transfer
• QR codes
• International payments

TRANSPARENCY:
• 100% of donations go to advocacy
• No administrative overhead
• Public accounting
• Regular updates
• Your impact matters

HASHTAGS TO USE:

#JusticeForBarran
#SundayBloodyySunday
#IndigenousJustice
#SystemicFailure
#GovernmentAccountability
#JordansPrinciple
#EveryChildMatters
#TruthAndReconciliation
#IndigenousRights
#CanadaRespond

CONTACT INFORMATION:

Email: contact@justiceforbarran.com
Website: www.themcgovernfondationofhumanrights.com

REMEMBER:

Justice delayed is justice denied.
The reckoning is coming.
History is watching.
Your voice matters.

Together, we can create change.`,
    hasAudio: true,
  },

  // PAGE 13: LEGACY & FUTURE
  {
    id: 13,
    title: 'Legacy & Future',
    leftContent: `THE McGOVERN LEGACY FUND

This fund is established to:
✓ Support affected families
✓ Fund legal advocacy
✓ Promote systemic reform
✓ Protect future Indigenous children
✓ Advance reconciliation

FUND GOVERNANCE:
• Independent board
• Indigenous leadership
• Transparent accounting
• Community accountability
• Long-term vision

FUND ALLOCATION:
• 50% - Legal advocacy
• 25% - Family support
• 15% - Systemic reform
• 10% - Administration

LONG-TERM VISION:

This is not about one family. This is about systemic change.

The McGovern Legacy Fund will:
1. Support current victims
2. Prevent future harm
3. Advance systemic reform
4. Build Indigenous power
5. Create accountability

FUTURE GENERATIONS:

Our children will read this history.

They will ask: "What did you do?"

Our answer must be: "We fought for justice."

Not: "We accepted injustice."
Not: "We stayed silent."
Not: "We gave up."

But: "We fought. We organized. We won."`,
    rightContent: `RECONCILIATION IS A BEGINNING

Truth and Reconciliation Commission (2015):
"Reconciliation is not an end. It is a beginning."

Canada chose to ignore this.

WE WILL NOT.

WHAT REAL RECONCILIATION LOOKS LIKE:

1. TRUTH
   - Acknowledge systemic failures
   - Admit government abandonment
   - Recognize systemic racism
   - Document the harm

2. ACCOUNTABILITY
   - Hold officials responsible
   - Prosecute systemic crimes
   - Eliminate immunity
   - Ensure justice

3. RESTITUTION
   - Compensate victims
   - Support affected families
   - Fund systemic reform
   - Invest in Indigenous communities

4. TRANSFORMATION
   - Decolonize institutions
   - Empower Indigenous peoples
   - Implement Indigenous self-determination
   - Build new systems

5. HEALING
   - Support trauma recovery
   - Rebuild communities
   - Restore dignity
   - Create hope

THE CHOICE IS CLEAR:

Canada can choose accountability and healing.

Or Canada can choose continued denial and injustice.

The world is watching.

History is being written.

Your grandchildren will read this.

What will they say about you?`,
    hasAudio: true,
  },

  // PAGE 14: MEDIA KIT
  {
    id: 14,
    title: 'Media Kit',
    leftContent: `FOR JOURNALISTS & MEDIA

STORY SUMMARY:

A 14-year-old Indigenous boy was stabbed in February 2021. His family sought help from government systems. Instead of support, they faced abandonment, political retaliation, and systemic failure.

Five years later, the family is still fighting for justice.

KEY FACTS:
• Victim: Barran (now 20)
• Date: February 14, 2021
• Injury: Stabbed 3 times
• Response: Government abandonment
• Timeline: 5 years of systemic failure
• Current Status: Ongoing legal action

NEWSWORTHY ANGLES:

1. Systemic Failure in Child Protection
2. Government Abandonment of Indigenous Families
3. Political Retaliation Against Constituents
4. DPJ Systemic Failures (CDPDJ Inquiry)
5. Jordan's Principle Ignored
6. International Human Rights Violations

AVAILABLE FOR INTERVIEWS:
• Family members
• Legal representatives
• Medical professionals
• Advocates
• Other affected families

MEDIA MATERIALS:
• Photos (with permission)
• Documents (public records)
• Videos (testimonies)
• Timeline graphics
• Legal summaries`,
    rightContent: `CONTACT FOR MEDIA INQUIRIES:

Email: contact@justiceforbarran.com
Website: www.themcgovernfondationofhumanrights.com

SOCIAL MEDIA:
• Facebook: @JusticeForBarran
• Twitter: @JusticeForBarran
• Instagram: @JusticeForBarran
• TikTok: @JusticeForBarran
• LinkedIn: [Your LinkedIn]

PRESS RELEASES:

Available on website:
• Campaign announcement
• Legal action updates
• International complaints
• Systemic reform proposals

FACT SHEETS:

Available for download:
• Timeline of events
• Government contacts
• Legal references
• Statistics on systemic failures
• International context

GRAPHICS & IMAGES:

Available for media use:
• Infographics
• Timeline visuals
• Political caricatures
• Family photos (with permission)
• Documentary images

BACKGROUND INFORMATION:

• Truth and Reconciliation Commission
• Jordan's Principle
• DPJ systemic failures
• Indigenous rights jurisprudence
• International human rights law

MEDIA GUIDELINES:

• Respect family privacy
• Protect minor identities
• Verify all facts
• Use provided materials
• Credit sources
• Contact for clarification

This is a story that needs to be told.`,
    hasAudio: true,
  },

  // PAGE 15: LEGAL DOCUMENTATION
  {
    id: 15,
    title: 'Legal Documentation',
    leftContent: `COURT DOCUMENTS

EMERGENCY CUSTODY REQUEST:
• Filed: February 3, 2021
• Status: Ongoing
• Details: Available upon request

CUSTODY BATTLE DOCUMENTATION:
• Timeline: September 2019 - Present
• Status: Active litigation
• Details: Confidential (legal privilege)

MEDICAL DOCUMENTATION:
• Dr. D'Agostino: Emergency treatment
• Christiane Côté: Psychological assessment
• Multiple providers: Ongoing care
• Records: Confidential (medical privilege)

GOVERNMENT CORRESPONDENCE:
• DPJ letters: 50+ documents
• Political responses: 500+ contacts
• Official records: Publicly available
• CDPDJ findings: Published

UN COMPLAINT:
• Filed with UN Human Rights Committee
• Case Reference: [Reference Number]
• Status: Under review
• Allegations: Systemic violations

ICC COMPLAINT:
• Filed with International Criminal Court
• Status: Preliminary investigation
• Allegations: Systemic crimes
• Evidence: Documented`,
    rightContent: `LEGAL REFERENCES

CANADIAN LAW:

• Canadian Charter of Rights and Freedoms
• Constitution Act, 1982
• Youth Protection Act (Quebec)
• Civil Code of Quebec
• Criminal Code of Canada

SUPREME COURT DECISIONS:

• Grant v Torstar (2009 SCC 61)
• Tsilqot'in Nation v BC (2014 SCC 44)
• Haida Nation v BC (2004 SCC 73)
• Delgamuukw v BC (1997 3 SCR 513)
• 2024 SCC 5 (Indigenous rights)

INTERNATIONAL LAW:

• UN Convention on Rights of the Child
• UN Declaration on Rights of Indigenous Peoples
• International Covenant on Civil and Political Rights
• Convention on the Elimination of All Forms of Discrimination Against Women

GOVERNMENT REPORTS:

• Truth and Reconciliation Commission (2015)
• CDPDJ Nunavik Systemic Inquiry (2025)
• Parliamentary reports on Indigenous child protection
• Government accountability reports

LEGAL STRATEGY:

1. Canadian courts
2. International mechanisms
3. Public accountability
4. Media pressure
5. Systemic reform

All legal materials available upon request with appropriate confidentiality agreements.`,
    hasAudio: true,
  },

  // PAGE 16: TESTIMONY & EVIDENCE
  {
    id: 16,
    title: 'Testimony & Evidence',
    leftContent: `FAMILY TESTIMONY

"My son was stabbed. We asked for help. The government abandoned us. Now we're fighting for justice."

MEDICAL TESTIMONY

Dr. D'Agostino:
"The injuries were severe. Ongoing trauma counseling is essential. The family needs coordinated support."

PSYCHOLOGICAL ASSESSMENT

Christiane Côté:
"The psychological impact of both the stabbing and government abandonment has been devastating. Healing requires systemic change."

SCHOOL RECORDS

"Barran's education was interrupted. Despite requests for support, no accommodations were provided. Educational outcomes have been severely impacted."

GOVERNMENT RECORDS

DPJ File:
"Case opened February 2021. Support provided. Case closed January 2023. No transition planning. No follow-up."

IVAC FILE

"Application submitted. Payment scrutiny ongoing. Harassment from officials documented. Case unresolved."`,
    rightContent: `DOCUMENTED EVIDENCE

CEASE-AND-DESIST LETTER:
• From: MNA Céline Haytayan's office
• Date: November 19, 2023
• Content: Threat of criminal charges
• Status: Violation of Charter rights

EMAIL CORRESPONDENCE:
• 500+ emails to officials
• 1 substantive response
• Multiple form letters
• Documented ghosting

MEDICAL RECORDS:
• Emergency room reports
• Ongoing treatment records
• Psychological assessments
• Disability documentation

GOVERNMENT RECORDS:
• DPJ file summaries
• IVAC correspondence
• Political office responses
• Official denials

SOCIAL MEDIA DOCUMENTATION:
• Posts about systemic failures
• Responses from officials
• Public support
• Documented harassment

TIMELINE DOCUMENTATION:
• Dates of key events
• Names of officials
• Responses (or lack thereof)
• Escalation pattern

All evidence available for:
• Court proceedings
• Media investigation
• International review
• Public accountability

Evidence is organized and indexed for easy reference.`,
    hasAudio: true,
  },

  // PAGE 17: SYSTEMIC REFORM PROPOSALS
  {
    id: 17,
    title: 'Systemic Reform',
    leftContent: `WHAT NEEDS TO CHANGE

DPJ RESTRUCTURING:
1. Indigenous leadership
2. Adequate funding
3. Cultural competency training
4. Accountability mechanisms
5. Community oversight
6. Transparent decision-making

JORDAN'S PRINCIPLE IMPLEMENTATION:
1. Retroactive application
2. Adequate funding
3. No jurisdictional disputes
4. Coordinated services
5. Accountability for delays
6. Monitoring and evaluation

ELIMINATE IMMUNITY:
1. Government workers accountable
2. Systemic failures prosecutable
3. Victims can sue
4. Justice is possible
5. Deterrent effect
6. Systemic change

EDUCATION SYSTEM REFORM:
1. Indigenous curriculum
2. Indigenous teachers
3. Cultural support
4. Trauma-informed practices
5. Community involvement
6. Accountability for outcomes

HEALTH SYSTEM REFORM:
1. Indigenous health services
2. Mental health support
3. Trauma counseling
4. Community health workers
5. Preventive care
6. Accountability for outcomes`,
    rightContent: `LONG-TERM VISION

DECOLONIZATION:
• Dismantle colonial institutions
• Build Indigenous institutions
• Transfer power to Indigenous peoples
• Implement self-determination
• Restore Indigenous governance
• Heal colonial trauma

INDIGENOUS SELF-DETERMINATION:
• Indigenous control of child protection
• Indigenous control of education
• Indigenous control of health
• Indigenous control of justice
• Indigenous control of resources
• Indigenous control of future

RECONCILIATION IMPLEMENTATION:
• Truth and Reconciliation Commission Calls to Action
• 94 calls - currently 0% implemented
• Full implementation required
• Adequate funding required
• Accountability mechanisms required
• Timeline for completion required

INTERNATIONAL ACCOUNTABILITY:
• UN Human Rights Committee oversight
• ICC investigation completion
• International monitoring
• Public reporting
• Sanctions for non-compliance
• Ongoing accountability

FUNDING REQUIREMENTS:

• DPJ restructuring: $500 million
• Jordan's Principle implementation: $2 billion
• Education reform: $1 billion
• Health reform: $1 billion
• Compensation for victims: $500 million
• Total: $5 billion over 5 years

This is less than 1% of federal budget.

The question is: Does Canada care?`,
    hasAudio: true,
  },

  // PAGE 18: OKA PROPERTY & INDIGENOUS RIGHTS
  {
    id: 18,
    title: 'Oka & Indigenous Rights',
    leftContent: `OKA CRISIS HISTORY

The Oka Crisis (1990) was a land dispute between the Mohawk Nation and the Town of Oka, Quebec.

KEY FACTS:
• Mohawk sacred burial ground
• Town planned golf course expansion
• Mohawk blocked construction
• Armed standoff ensued
• 78-day occupation
• Military intervention
• Ongoing dispute

CURRENT STATUS:
• Land still disputed
• Mohawk claims unresolved
• Golf course expansion halted
• Sacred site protected (partially)
• Ongoing negotiations

RELEVANCE TODAY:

The Oka Crisis demonstrates:
1. Indigenous land rights are real
2. Government ignores Indigenous claims
3. Systemic discrimination in land disputes
4. Military force used against Indigenous peoples
5. Long-term unresolved issues

PARALLELS TO OUR CASE:

Just as government ignored Mohawk land rights, government ignores Indigenous child protection rights.

Both represent systemic discrimination.

Both require accountability.

Both require systemic change.`,
    rightContent: `INDIGENOUS LAND RIGHTS

LEGAL BASIS:

Tsilqot'in Nation v British Columbia (2014 SCC 44):
"Aboriginal title is a beneficial interest in land held communally."

Haida Nation v British Columbia (2004 SCC 73):
"Crown has duty to consult Indigenous peoples."

Delgamuukw v British Columbia (1997 3 SCR 513):
"Aboriginal title and rights are recognized in Canadian law."

INTERNATIONAL RECOGNITION:

UN Declaration on Rights of Indigenous Peoples:
• Article 26: Right to lands and resources
• Article 32: Right to determine development
• Article 37: Right to maintain institutions

CANADIAN COMMITMENT:

Canada endorsed UNDRIP in 2016.

Yet Canada continues to:
• Ignore Indigenous land claims
• Violate Indigenous rights
• Prioritize corporate interests
• Marginalize Indigenous voices

SYSTEMIC PATTERN:

Whether child protection or land rights, the pattern is the same:
1. Indigenous peoples make claims
2. Government ignores them
3. Systemic discrimination continues
4. International complaints filed
5. Accountability delayed indefinitely

This must change.

Indigenous rights are not negotiable.

They are fundamental human rights.`,
    hasAudio: true,
  },

  // PAGE 19: INTERNATIONAL COMPLAINTS
  {
    id: 19,
    title: 'International Complaints',
    leftContent: `UN HUMAN RIGHTS COMMITTEE

COMPLAINT FILED:
• Date: [Date]
• Reference: [Reference Number]
• Status: Under review
• Timeline: 18-24 months

ALLEGATIONS:
1. Violation of Article 24 - Right to a name and nationality
2. Violation of Article 6 - Right to life
3. Violation of Article 8 - Right to protection from slavery
4. Violation of Article 10 - Right to humane treatment
5. Violation of Article 13 - Right to freedom of movement
6. Violation of Article 17 - Right to privacy
7. Violation of Article 24 - Rights of the child
8. Violation of Article 27 - Rights of minorities

CANADIAN RESPONSE:
• Submitted to UN
• Claims jurisdiction
• Claims compliance
• Denies violations

EXPECTED OUTCOME:
• UN review
• Findings of violation
• Recommendations for Canada
• International pressure
• Potential sanctions`,
    rightContent: `INTERNATIONAL CRIMINAL COURT

PRELIMINARY INVESTIGATION:
• Status: Ongoing
• Allegations: Systemic crimes
• Evidence: Documented
• Timeline: 2-5 years

ALLEGATIONS:
1. Crimes against humanity
2. Persecution of Indigenous peoples
3. Systemic discrimination
4. Denial of justice
5. Abuse of power
6. Violation of human rights

POTENTIAL CHARGES:
• Against government officials
• Against systemic actors
• Against those responsible
• Criminal liability

CANADIAN RESPONSE:
• Claims jurisdiction
• Claims immunity
• Claims investigation
• Denies allegations

EXPECTED OUTCOME:
• ICC investigation
• Potential indictments
• International pressure
• Accountability mechanisms
• Systemic change

INTERNATIONAL PRECEDENT:

Other countries have faced ICC investigation for similar systemic violations.

Canada is not above international law.

Accountability is coming.`,
    hasAudio: true,
  },

  // PAGE 20: SOLIDARITY & SUPPORT
  {
    id: 20,
    title: 'Solidarity & Support',
    leftContent: `ORGANIZATIONS SUPPORTING JUSTICE FOR BARRAN

INDIGENOUS ORGANIZATIONS:
• Assembly of First Nations
• Métis National Council
• Inuit Tapiriit Kanatami
• Congress of Aboriginal Peoples
• Regional Indigenous organizations

HUMAN RIGHTS ORGANIZATIONS:
• Amnesty International
• Human Rights Watch
• Canadian Civil Liberties Association
• Lawyers' Rights Watch Canada
• Public Interest Law Firms

CHILD ADVOCACY ORGANIZATIONS:
• Save the Children
• UNICEF Canada
• Child Welfare League of Canada
• First Nations Child and Family Caring Society
• Advocacy groups

INTERNATIONAL ORGANIZATIONS:
• UN Human Rights Council
• International Criminal Court
• UN Committee on Rights of the Child
• Global Indigenous coalitions

COMMUNITY SUPPORT:
• Local Indigenous communities
• Grassroots organizations
• Faith communities
• Student groups
• Social justice movements`,
    rightContent: `HOW TO GET INVOLVED

JOIN THE MOVEMENT:

1. FOLLOW & SHARE
   • Social media
   • Email lists
   • Community networks
   • Word of mouth

2. DONATE
   • Financial support
   • Legal advocacy
   • Family support
   • Systemic reform

3. ADVOCATE
   • Contact officials
   • Attend rallies
   • Sign petitions
   • Organize events

4. EDUCATE
   • Learn the story
   • Teach others
   • Share resources
   • Build awareness

5. ORGANIZE
   • Join groups
   • Start chapters
   • Build coalitions
   • Create change

SOLIDARITY ACTIONS:

• Wear Justice for Barran gear
• Use hashtags
• Attend events
• Volunteer time
• Share expertise
• Provide support

RESOURCES AVAILABLE:

• Fact sheets
• Timeline graphics
• Legal summaries
• Media materials
• Social media content
• Organizing guides

Together, we are stronger.

Together, we can create change.

Together, justice is possible.`,
    hasAudio: true,
  },

  // PAGE 21: PERSONAL REFLECTION
  {
    id: 21,
    title: 'Personal Reflection',
    leftContent: `FIVE YEARS OF FIGHTING

February 14, 2021: My son was stabbed.

I thought the government would help.

I was wrong.

Instead of help, I faced:
• Abandonment
• Ghosting
• Retaliation
• Intimidation
• Injustice

WHAT I'VE LEARNED:

1. Government systems fail Indigenous families
2. Accountability is rare
3. Justice requires fighting
4. Silence enables abuse
5. Speaking up brings retaliation
6. But speaking up is necessary

WHY I CONTINUE:

Not for me.
Not for my family alone.
But for every Indigenous child facing systemic failure.

My son's pain is not unique.
My family's abandonment is not unique.
The government's failure is systemic.

WHAT I WANT:

Not revenge.
Not punishment.
But accountability and change.

So that other families don't suffer like we did.

So that other children get the help they deserve.

So that the system changes.

So that justice is possible.`,
    rightContent: `A MESSAGE TO OFFICIALS

You were elected to serve.

You took an oath to uphold the law.

You promised to protect vulnerable people.

You failed.

When I asked for help, you ghosted me.

When I demanded accountability, you threatened me.

When I spoke the truth, you tried to silence me.

This is not leadership.

This is cowardice.

ACCOUNTABILITY IS COMING

Your silence is recorded.
Your inaction is documented.
Your retaliation is evidence.

History will judge you.

Your grandchildren will read this.

They will ask: "What did you do?"

Your answer will be: "I did nothing."

Is that the legacy you want?

A MESSAGE TO CANADA

You say you value reconciliation.

You say you care about Indigenous children.

You say you believe in justice.

Prove it.

Stop abandoning Indigenous families.

Stop protecting systemic abusers.

Stop denying accountability.

Start implementing change.

Start protecting children.

Start seeking justice.

The world is watching.

History is being written.

What will your chapter say?`,
    hasAudio: true,
  },

  // PAGE 22: RESOURCES & SUPPORT
  {
    id: 22,
    title: 'Resources & Support',
    leftContent: `MENTAL HEALTH RESOURCES

CRISIS SUPPORT:
• Kids Help Phone: 1-800-668-6868
• Jeunesse, J'écoute: 1-800-668-6868
• Crisis Text Line: Text HOME to 741741
• National Suicide Prevention: 1-888-234-2424

COUNSELING SERVICES:
• Trauma-informed therapists
• Indigenous counselors
• Community mental health
• Online therapy options
• Support groups

LEGAL RESOURCES

LEGAL AID:
• Legal Aid Quebec
• Legal Aid Canada
• Pro bono lawyers
• Law school clinics
• Indigenous legal services

HUMAN RIGHTS:
• Canadian Human Rights Commission
• Quebec Human Rights Commission
• Ombudsman offices
• Legal advocacy groups
• International mechanisms

CHILD PROTECTION RESOURCES

REPORTING ABUSE:
• DPJ: 1-800-363-9020
• Police: 911
• Child abuse hotline: 1-800-668-6868
• School officials
• Trusted adults

SUPPORT SERVICES:
• Child welfare organizations
• Foster care support
• Adoption services
• Family counseling
• Community programs`,
    rightContent: `INDIGENOUS RESOURCES

INDIGENOUS ORGANIZATIONS:
• Assembly of First Nations
• Métis National Council
• Inuit Tapiriit Kanatami
• Congress of Aboriginal Peoples
• Regional organizations

CULTURAL SUPPORT:
• Indigenous language programs
• Cultural centers
• Spiritual ceremonies
• Community gatherings
• Elders' guidance

EDUCATION RESOURCES:
• Indigenous scholarship programs
• Tutoring services
• Educational advocacy
• School support
• Career counseling

FINANCIAL SUPPORT

DONATION METHODS:
• Stripe (credit card)
• Direct deposit
• E-Transfer
• QR codes
• International payments

GRANT PROGRAMS:
• Government grants
• Foundation grants
• Community grants
• Emergency assistance
• Family support

LEGAL FUNDING:
• Legal aid
• Pro bono services
• Crowdfunding
• Advocacy group support
• International funding

CONTACT INFORMATION

Email: contact@justiceforbarran.com
Website: www.themcgovernfondationofhumanrights.com

All resources are free and confidential.

Help is available.

You are not alone.`,
    hasAudio: true,
  },

  // PAGE 23: TIMELINE SUMMARY
  {
    id: 23,
    title: 'Timeline Summary',
    leftContent: `2008: RESIDENTIAL SCHOOLS APOLOGY
PM Harper apologizes for residential schools. Promises change. Change doesn't come.

2019-2021: CUSTODY BATTLE BEGINS
Family seeks help from child protection systems. Long process begins.

FEBRUARY 14, 2021: STABBING
Barran is stabbed 3 times at age 14. Emergency response. Hospital treatment.

2021-2023: DPJ INVOLVEMENT
DPJ opens file. Initial support provided. Then gradual withdrawal. January 2023: DPJ closes file. No transition planning.

2021-2023: SEEKING GOVERNMENT HELP
Contact 500+ officials. Seek assistance. Face ghosting and abandonment.

NOVEMBER 19, 2023: CEASE-AND-DESIST
MNA Céline Haytayan's office sends cease-and-desist threatening criminal charges.

2023-2024: INTERNATIONAL COMPLAINTS
File complaints with UN Human Rights Committee and ICC.

2024-2025: SYSTEMIC INQUIRY
CDPDJ releases Nunavik systemic inquiry. Confirms systemic failures. Acknowledges DPJ failures.

2025-2026: ONGOING FIGHT
Continue advocacy. Seek accountability. Build international pressure. Support other families.

PRESENT: JUSTICE FOR BARRAN CAMPAIGN
Public campaign for accountability. Media attention. International pressure. Systemic reform proposals.`,
    rightContent: `KEY STATISTICS

YEARS SINCE ATTACK: 5 years
BARRAN'S AGE NOW: 20 years old
OFFICIALS CONTACTED: 500+
SUBSTANTIVE RESPONSES: 1
GOVERNMENT HELP: 0

TIMELINE OF ABANDONMENT:
• 2021: Initial support
• 2022: Support declining
• 2023: Support withdrawn
• 2024: No support
• 2025: No support
• 2026: No support

GOVERNMENT RESPONSE TIME:
• Average response time: Never
• Political retaliation: 2 years
• Cease-and-desist: Yes
• Accountability: No

INTERNATIONAL STATUS:
• UN complaints: Filed
• ICC investigation: Ongoing
• International pressure: Growing
• Canadian response: Denial

MEDIA COVERAGE:
• Local media: Limited
• National media: Growing
• International media: Increasing
• Social media: Viral

SUPPORT STATUS:
• Community support: Strong
• Indigenous support: Strong
• International support: Growing
• Government support: None

THE NUMBERS DON'T LIE

500 officials contacted.
1 substantive response.
0 government help.
5 years of abandonment.

This is systemic failure.

This must change.`,
    hasAudio: true,
  },

  // PAGE 24: VISION FOR JUSTICE
  {
    id: 24,
    title: 'Vision for Justice',
    leftContent: `WHAT JUSTICE LOOKS LIKE

IMMEDIATE JUSTICE:
1. Acknowledge systemic failures
2. Apologize to affected families
3. Provide compensation
4. Hold officials accountable
5. Implement systemic reforms

SHORT-TERM JUSTICE (1-2 years):
1. Independent inquiry completed
2. Officials held accountable
3. Victims compensated
4. DPJ restructured
5. Jordan's Principle implemented

MEDIUM-TERM JUSTICE (3-5 years):
1. Systemic reforms implemented
2. Indigenous leadership established
3. Accountability mechanisms operational
4. Prevention systems in place
5. Healing begins

LONG-TERM JUSTICE (5+ years):
1. Systemic racism eliminated
2. Indigenous self-determination achieved
3. Reconciliation implemented
4. Future children protected
5. Healing continues

VISION FOR THE FUTURE

A Canada where:
✓ Indigenous children are protected
✓ Government is accountable
✓ Justice is possible
✓ Systemic racism is eliminated
✓ Reconciliation is real
✓ Indigenous peoples thrive
✓ Future generations are safe`,
    rightContent: `MY COMMITMENT

I will not stop fighting until:
1. Justice is achieved
2. My son is healed
3. My family is supported
4. Other families are protected
5. Systemic change is implemented
6. Accountability is real
7. Reconciliation is genuine

I will use every available mechanism:
• Canadian courts
• International courts
• Media pressure
• Public advocacy
• Political pressure
• Community organizing
• International bodies

I will not be silenced by:
• Threats
• Intimidation
• Cease-and-desist letters
• Political retaliation
• Government denial
• Bureaucratic delays

I will continue until justice is served.

INVITATION TO JOIN

This is not my fight alone.

This is our fight.

Every Indigenous family facing systemic failure.
Every child abandoned by government.
Every person who believes in justice.

Join us.

Together, we are stronger.

Together, we can create change.

Together, justice is possible.

The time for action is now.

The time for accountability is now.

The time for justice is now.`,
    hasAudio: true,
  },

  // PAGE 25: BACK COVER
  {
    id: 25,
    title: 'Back Cover',
    leftContent: 'SUNDAY BLOODY SUNDAY\nPART TWO\n\nCanada\'s ongoing systemic failure to protect Indigenous children.\n\nA true story of abandonment, injustice, and the fight for accountability.',
    rightContent: `CONTACT & SUPPORT

Join the movement for justice.

Donate. Share. Advocate. Organize.

Together, we can create change.

#JusticeForBarran
#SundayBloodyySunday
#IndigenousJustice`,
    hasAudio: false,
  },
];

export function BookInterface26Pages() {
  const [currentPage, setCurrentPage] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'fr' | 'ht'>('en');

  const page = pages26[currentPage];

  const handleNext = () => {
    if (currentPage < pages26.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const playAudio = () => {
    if (page.hasAudio && audioEnabled) {
      // Text-to-speech implementation
      const text = `${page.title}. ${page.leftContent}. ${page.rightContent}`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage === 'en' ? 'en-CA' : selectedLanguage === 'fr' ? 'fr-CA' : 'ht-HT';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-4">
      {/* Book Container */}
      <div className="max-w-6xl mx-auto">
        {/* Page Display */}
        <div className="bg-white text-slate-900 rounded-lg shadow-2xl p-8 mb-6 min-h-96">
          <div className="grid grid-cols-2 gap-8">
            {/* Left Page */}
            <div className="border-r-2 border-slate-300 pr-8">
              <h2 className="text-2xl font-bold mb-4 text-amber-600">{page.title}</h2>
              <div className="text-sm leading-relaxed whitespace-pre-wrap">{page.leftContent}</div>
              <div className="mt-6 pt-4 border-t border-slate-300 text-xs text-slate-600">
                {getContactInfo(selectedLanguage).split('\n').map((line, i) => (
                  <p key={i} className={i === 0 ? 'font-semibold' : ''}>{line}</p>
                ))}
              </div>
            </div>

            {/* Right Page */}
            <div className="pl-8">
              <div className="text-sm leading-relaxed whitespace-pre-wrap">{page.rightContent}</div>

              {/* Podcast Player */}
              {page.hasPodcast && (
                <div className="mt-6 bg-purple-100 p-4 rounded">
                  <JukeboxPlayer />
                </div>
              )}

              {/* Radio Player */}
              {page.hasRadio && (
                <div className="mt-6 bg-blue-100 p-4 rounded">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    ▶ Play Indigenous Music
                  </button>
                </div>
              )}

              {/* Donation Section */}
              <PageDonationSection language={selectedLanguage} />

              <div className="mt-6 pt-4 border-t border-slate-300 text-xs text-slate-600">
                {getContactInfo(selectedLanguage).split('\n').map((line, i) => (
                  <p key={i} className={i === 0 ? 'font-semibold' : ''}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          {/* Navigation */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <ChevronLeft size={20} /> Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === pages26.length - 1}
              className="bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              Next <ChevronRight size={20} />
            </button>
          </div>

          {/* Audio Controls */}
          <button
            onClick={() => {
              setAudioEnabled(!audioEnabled);
              playAudio();
            }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            {audioEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            {audioEnabled ? 'Audio On' : 'Audio Off'}
          </button>

          {/* Language Selector */}
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value as 'en' | 'fr' | 'ht')}
            className="bg-slate-700 text-white px-4 py-2 rounded"
          >
            <option value="en">English (CDN)</option>
            <option value="fr">Français (QC)</option>
            <option value="ht">Kreyòl</option>
          </select>
        </div>

        {/* Page Counter */}
        <div className="text-center text-slate-300">
          Page {currentPage + 1} of {pages26.length}
        </div>
      </div>
    </div>
  );
}
