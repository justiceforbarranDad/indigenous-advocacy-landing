export interface PodcastEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  description: string;
  audioUrl?: string;
  audioData?: string; // Base64 encoded audio or data URL
  duration: number;
  date: string;
  language: 'EN' | 'FR';
  tags: string[];
  transcript?: string;
  transcriptFR?: string;
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: 'ep-3-fr',
    episodeNumber: 3,
    title: 'Le Silence des Politiciens - Épisode 3',
    description: 'Comment les élus fédéraux, provinciaux et municipaux ont ignoré nos appels à l\'aide et à la justice.',
    duration: 855,
    date: 'March 2026',
    language: 'FR',
    tags: ['government', 'accountability', 'systemic-failure', 'french'],
    transcript: `Episode 3: The Silence of Politicians

This podcast examines how federal, provincial, and municipal elected officials have systematically ignored our calls for help and justice. Over five years, we contacted more than 50 elected representatives. No response. No help. No justice.

The silence of politicians is not accidental - it is systemic. It is a deliberate strategy to ignore the voices of victims and Indigenous families abandoned by the system.

In this episode, we explore the unanswered letters, ignored calls, and broken promises that have characterized our struggle for justice.

Key points covered:
- Timeline of government contact attempts (2021-2026)
- Responses received vs. ignored
- Political accountability mechanisms
- International human rights standards
- Call to action for elected officials`,
    transcriptFR: `Épisode 3: Le Silence des Politiciens

Ce podcast examine comment les élus fédéraux, provinciaux et municipaux ont systématiquement ignoré nos appels à l'aide et à la justice. Pendant cinq ans, nous avons contacté plus de 50 représentants élus. Aucune réponse. Aucune aide. Aucune justice.

Le silence des politiciens n'est pas accidentel - c'est systémique. C'est une stratégie délibérée pour ignorer les voix des victimes et des familles autochtones abandonnées par le système.

Dans cet épisode, nous explorons les lettres sans réponse, les appels ignorés, et les promesses non tenues qui ont caractérisé notre lutte pour la justice.

Points clés couverts:
- Chronologie des tentatives de contact gouvernementales (2021-2026)
- Réponses reçues vs. ignorées
- Mécanismes de responsabilité politique
- Normes internationales des droits de l'homme
- Appel à l'action pour les élus`
  },
  {
    id: 'ep-2-fr',
    episodeNumber: 2,
    title: 'L\'Histoire de Barran - Deuxième Partie',
    description: 'Plongée profonde dans les échecs systémiques qui ont conduit à l\'abandon d\'un enfant autochtone vulnérable.',
    duration: 1245,
    date: 'February 2026',
    language: 'FR',
    tags: ['barran-story', 'systemic-failure', 'indigenous-rights', 'french'],
    transcript: `Episode 2: Barran's Story - Part Two

This podcast tells the detailed story of Barran and his family. Since 2021, our family has sought help after serious trauma. A teenager stabbed three times. Major impacts. Mental health destroyed.

The Direction de la Protection de la Jeunesse (DPJ) became involved but withdrew in January 2023 - with no adequate follow-up, no education, no mental health support.

Jordan's Principle - which guarantees no-delay services for First Nations children - was completely ignored.

This episode explores how a system meant to protect vulnerable children abandons them instead.

Topics covered:
- Family trauma and crisis (2021)
- DPJ involvement and withdrawal (2021-2023)
- Education system failures
- Mental health support gaps
- Jordan's Principle violations
- Impact on vulnerable Indigenous youth`,
    transcriptFR: `Épisode 2: L'Histoire de Barran - Deuxième Partie

Ce podcast raconte l'histoire détaillée de Barran et de sa famille. Depuis 2021, notre famille a cherché de l'aide après un trauma grave. Un adolescent poignardé trois fois. Des impacts majeurs. La santé mentale détruite.

La Direction de la Protection de la Jeunesse (DPJ) s'est impliquée mais s'est retirée en janvier 2023 - sans suivi adéquat, sans éducation, sans soutien en santé mentale.

Le Principe de Jordan - qui garantit des services sans délai pour les enfants des Premières Nations - a été complètement ignoré.

Cet épisode explore comment un système censé protéger les enfants vulnérables les abandonne à la place.

Sujets couverts:
- Trauma familial et crise (2021)
- Implication et retrait de la DPJ (2021-2023)
- Échecs du système d'éducation
- Lacunes en matière de soutien en santé mentale
- Violations du Principe de Jordan
- Impact sur les jeunes autochtones vulnérables`
  },
  {
    id: 'ep-1-fr',
    episodeNumber: 1,
    title: 'Sunday Bloody Sunday - Introduction',
    description: 'Le début de la campagne Justice pour Barran - comprendre le contexte et les problèmes systémiques.',
    duration: 1620,
    date: 'January 2026',
    language: 'FR',
    tags: ['introduction', 'context', 'justice', 'french'],
    transcript: `Episode 1: Sunday Bloody Sunday - Introduction

Welcome to Justice for Barran, a podcast series documenting the struggle for justice and government accountability.

This podcast explores how systems meant to protect vulnerable Indigenous children abandon them instead. This is Barran's story, but it is also the story of thousands of other Indigenous children and marginalized families who have been failed by government systems.

In this series, we will examine systemic failures, government inaction, and the ongoing struggle for real reconciliation and justice.

What you'll learn:
- The history of residential schools and their ongoing impact
- How systemic racism affects Indigenous families
- Government accountability mechanisms
- International human rights standards
- How to advocate for change
- Stories of resilience and resistance`,
    transcriptFR: `Épisode 1: Sunday Bloody Sunday - Introduction

Bienvenue à Justice pour Barran, une série de podcasts documentant la lutte pour la justice et la responsabilité gouvernementale.

Ce podcast explore comment les systèmes censés protéger les enfants autochtones vulnérables les abandonnent à la place. C'est l'histoire de Barran, mais c'est aussi l'histoire de milliers d'autres enfants autochtones et de familles marginalisées qui ont été échouées par les systèmes gouvernementaux.

Dans cette série, nous examinerons les échecs systémiques, l'inaction gouvernementale, et la lutte continue pour la véritable réconciliation et la justice.

Ce que vous apprendrez:
- L'histoire des pensionnats autochtones et leurs impacts continus
- Comment le racisme systémique affecte les familles autochtones
- Mécanismes de responsabilité gouvernementale
- Normes internationales des droits de l'homme
- Comment plaider pour le changement
- Histoires de résilience et de résistance`
  },
  {
    id: 'ep-3-en',
    episodeNumber: 3,
    title: 'The Silence of Politicians - Episode 3',
    description: 'How federal, provincial, and municipal elected officials ignored our calls for help and justice.',
    duration: 855,
    date: 'March 2026',
    language: 'EN',
    tags: ['government', 'accountability', 'systemic-failure', 'english'],
    transcript: `Episode 3: The Silence of Politicians

This podcast examines how federal, provincial, and municipal elected officials have systematically ignored our calls for help and justice. Over five years, we contacted more than 50 elected representatives. No response. No help. No justice.

The silence of politicians is not accidental - it is systemic. It is a deliberate strategy to ignore the voices of victims and Indigenous families abandoned by the system.

In this episode, we explore the unanswered letters, ignored calls, and broken promises that have characterized our struggle for justice.

Key points covered:
- Timeline of government contact attempts (2021-2026)
- Responses received vs. ignored
- Political accountability mechanisms
- International human rights standards
- Call to action for elected officials`
  },
  {
    id: 'ep-2-en',
    episodeNumber: 2,
    title: 'Barran\'s Story - Part Two',
    description: 'Deep dive into the systemic failures that led to abandonment of a vulnerable Indigenous child.',
    duration: 1245,
    date: 'February 2026',
    language: 'EN',
    tags: ['barran-story', 'systemic-failure', 'indigenous-rights', 'english'],
    transcript: `Episode 2: Barran's Story - Part Two

This podcast tells the detailed story of Barran and his family. Since 2021, our family has sought help after serious trauma. A teenager stabbed three times. Major impacts. Mental health destroyed.

The Direction de la Protection de la Jeunesse (DPJ) became involved but withdrew in January 2023 - with no adequate follow-up, no education, no mental health support.

Jordan's Principle - which guarantees no-delay services for First Nations children - was completely ignored.

This episode explores how a system meant to protect vulnerable children abandons them instead.

Topics covered:
- Family trauma and crisis (2021)
- DPJ involvement and withdrawal (2021-2023)
- Education system failures
- Mental health support gaps
- Jordan's Principle violations
- Impact on vulnerable Indigenous youth`
  },
  {
    id: 'ep-1-en',
    episodeNumber: 1,
    title: 'Sunday Bloody Sunday - Introduction',
    description: 'The beginning of Justice for Barran campaign - understanding the context and systemic issues.',
    duration: 1620,
    date: 'January 2026',
    language: 'EN',
    tags: ['introduction', 'context', 'justice', 'english'],
    transcript: `Episode 1: Sunday Bloody Sunday - Introduction

Welcome to Justice for Barran, a podcast series documenting the struggle for justice and government accountability.

This podcast explores how systems meant to protect vulnerable Indigenous children abandon them instead. This is Barran's story, but it is also the story of thousands of other Indigenous children and marginalized families who have been failed by government systems.

In this series, we will examine systemic failures, government inaction, and the ongoing struggle for real reconciliation and justice.

What you'll learn:
- The history of residential schools and their ongoing impact
- How systemic racism affects Indigenous families
- Government accountability mechanisms
- International human rights standards
- How to advocate for change
- Stories of resilience and resistance`
  }
];

export function getPodcastsByLanguage(language: 'EN' | 'FR'): PodcastEpisode[] {
  return podcastEpisodes.filter(ep => ep.language === language).sort((a, b) => b.episodeNumber - a.episodeNumber);
}

export function getLatestEpisode(language?: 'EN' | 'FR'): PodcastEpisode | undefined {
  if (language) {
    return getPodcastsByLanguage(language)[0];
  }
  return podcastEpisodes[0];
}

export function getPodcastById(id: string): PodcastEpisode | undefined {
  return podcastEpisodes.find(ep => ep.id === id);
}

export function getTranscript(episode: PodcastEpisode, language: 'EN' | 'FR'): string {
  if (language === 'FR' && episode.transcriptFR) {
    return episode.transcriptFR;
  }
  return episode.transcript || 'Transcript not available';
}
