export interface PodcastEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  description: string;
  speechifyUrl: string;
  duration: string;
  language: string;
  date: string;
  transcript: string;
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "episode-1",
    episodeNumber: 1,
    title: "Dix dollars : l'abandon d'une victime",
    description: "Ten dollars per day. This is the amount Quebec's victim compensation program deemed sufficient for a 14-year-old Indigenous boy who survived three knife wounds to the chest and back. This episode explores the systemic abandonment of Barran and how institutions failed to provide adequate care despite legal obligations.",
    speechifyUrl: "https://speechify.app.link/sIQ3mkmPU1b",
    duration: "15:18",
    language: "French / English",
    date: "March 2026",
    transcript: `[INTRODUCTION]\n\nHost Noah: Welcome to Justice for Barran, a podcast series exploring Indigenous advocacy, systemic failures, and the fight for justice. I'm Noah, and today we're discussing a case that reveals the deep cracks in Canada's social safety net.\n\n[EPISODE TITLE]\n\nHost Noah: \"Dix dollars : l'abandon d'une victime\" — Ten dollars: the abandonment of a victim.\n\nOn February 14, 2021, a 14-year-old Indigenous boy named Barran was stabbed three times — in the left lung, chest, and back. His iPhone, tucked in his front pocket, stopped two more stab attempts. He spent six days hospitalized at Montreal Children's Hospital.\n\n[KEY FACTS]\n\nHost Eloise: At 5 feet 10 inches and 300 lbs, already living with disability and Type 2 diabetes — conditions disproportionately common in Indigenous communities — Barran showed incredible resilience.\n\nHost Noah: Yet his first words leaving the hospital were: \"I miss my siblings.\" Family support sustained him then. Family support sustains him now.\n\n[SYSTEMIC FAILURES]\n\nHost Eloise: Since approximately 2021, this Indigenous family sought help after serious trauma. The DPJ (Direction de la protection de la jeunesse) became involved but withdrew in January 2023 — with no adequate follow-up. Education was lost. Mental health was destroyed.\n\nHost Noah: Jordan's Principle — the federal policy guaranteeing no-delay services for First Nations children — was ignored.\n\n[VICTIM COMPENSATION]\n\nHost Eloise: Quebec's victim compensation program offered $10 per day. That's $3,650 per year for a child who survived three knife wounds. This amount is insufficient to cover even basic psychological support, let alone the specialized, culturally-appropriate care Barran desperately needed.\n\nHost Noah: The question becomes: is this negligence, or active abandonment?\n\n[INSTITUTIONAL RESPONSE]\n\nHost Eloise: When the family requested a culturally-adapted psychologist, the DPJ refused. Instead of organizing therapy, the assigned worker took Barran to a McDonald's and interrogated him about his parents' relationship.\n\nHost Noah: An adolescent stabbed three times was taken to a fast-food restaurant for questioning about family dynamics. This is what institutional failure looks like.\n\n[CLOSING]\n\nHost Noah: Barran's story is not unique. It represents a systemic pattern of abandonment affecting Indigenous children across Canada.\n\nHost Eloise: This is Justice for Barran. Thank you for listening. For more information, visit justiceforbarran.com.\n\n[END]`
  },
  {
    id: "episode-2",
    episodeNumber: 2,
    title: "Jordan's Principle: A Law That Doesn't Protect",
    description: "Jordan's Principle was created to ensure no Indigenous child falls through the cracks between federal and provincial jurisdictions. Yet in 2026, Barran's case proves this principle remains largely unenforced. This episode examines the legal framework, institutional failures, and what real reconciliation would require.",
    speechifyUrl: "https://speechify.app.link/lcpZ2okPU1b",
    duration: "18:45",
    language: "French / English",
    date: "March 2026",
    transcript: `[INTRODUCTION]\n\nHost Noah: Welcome back to Justice for Barran. In this episode, we explore Jordan's Principle — a federal policy that was supposed to protect Indigenous children but has largely failed to do so.\n\n[THE ORIGIN STORY]\n\nHost Eloise: Jordan's Principle is named after Jordan River Anderson, a young Cree boy from Norway House, Manitoba. Born in 1999 with a rare muscular disease, Jordan spent his first two years in a Winnipeg hospital.\n\nHost Noah: When doctors determined he could safely move to a specialized foster home, a bureaucratic nightmare began. The federal government and Manitoba's provincial government argued over who should pay for his home care.\n\nHost Eloise: While they argued, Jordan remained institutionalized. He died in 2005 at age five, having never spent a single night in a family home.\n\n[THE PRINCIPLE]\n\nHost Noah: The principle is simple: the first government body contacted must immediately pay for the services a First Nations child needs. Administrative disputes about final payment must be settled later, without delaying the child's care.\n\nHost Eloise: In 2016, the Canadian Human Rights Tribunal confirmed this is a binding legal obligation. The tribunal found that the federal government's restrictive interpretation constituted active discrimination based on race and ethnicity.\n\n[BARRAN'S CASE]\n\nHost Noah: Barran has an official Indian Status number. This legally activated Jordan's Principle obligations the moment he needed psychological care.\n\nHost Eloise: Yet for critical weeks following the attack, and for years afterward, neither the DPJ nor regional health authorities informed his family of this right.\n\nHost Noah: When the family presented this federal mandate to the DPJ, the agency reversed the narrative. It accused the father of obstructing services by refusing their non-Indigenous psychologist.\n\n[THE FAILURE]\n\nHost Eloise: This indicates either profound ignorance of the law, or deliberate prioritization of internal procedures over human rights obligations.\n\nHost Noah: Either way, it represents systemic failure.\n\n[WHAT RECONCILIATION REQUIRES]\n\nHost Eloise: Real reconciliation means:\n\n1. Training all child protection workers on Jordan's Principle\n2. Proactive notification of Indigenous families about their rights\n3. Culturally-appropriate service provision, not bureaucratic convenience\n4. Accountability when institutions fail\n5. Adequate funding to meet obligations\n\nHost Noah: Without these elements, Jordan's Principle remains a hollow promise.\n\n[CLOSING]\n\nHost Eloise: Barran's case shows us that five years after a traumatic attack, institutions still haven't fulfilled their legal obligations to an Indigenous child.\n\nHost Noah: This is Justice for Barran. Thank you for listening.\n\n[END]`
  },
  {
    id: "episode-3",
    episodeNumber: 3,
    title: "Justice for Barran: The UN Letter",
    description: "A comprehensive testimony exposing five years of institutional abandonment, government retaliation, and corporate performative reconciliation. This episode calls for a National Day of Reckoning and the establishment of a Legal Fund for Voiceless Victims.",
    speechifyUrl: "https://justiceforbarran.com",
    duration: "28:45",
    language: "English / French",
    date: "March 30, 2026",
    transcript: "EPISODE 3: JUSTICE FOR BARRAN - THE UN LETTER. A comprehensive testimony exposing five years of institutional abandonment, government retaliation, and corporate performative reconciliation. This episode calls for a National Day of Reckoning and the establishment of a Legal Fund for Voiceless Victims. Featuring direct call-outs to sports teams, retailers, financial institutions, and media organizations profiting from Orange Shirt Day while Indigenous families suffer. Duration: 28:45 minutes. Languages: English and French versions available. Date: March 30, 2026."
  }
];
