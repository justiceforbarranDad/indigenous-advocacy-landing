import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Episode {
  id: number;
  title: string;
  description: string;
  audioUrl: string;
  transcript: string;
  duration: string;
}

const episodes: Record<string, Episode[]> = {
  en: [
    {
      id: 1,
      title: "The Silence of Politicians",
      description: "How elected officials at every level ghosted a constituent seeking help for an Indigenous family in crisis.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep1-silence-politicians-en_f098563e.wav",
      transcript: "THE SILENCE OF POLITICIANS: An Investigation into Government Accountability\n\nFor 1,873 days, a family has been seeking help from elected officials. Federal, provincial, and municipal representatives. All silent. All ghosting.\n\nThis is the story of systemic failure. This is the investigation into why politicians who swore to serve their constituents are instead ignoring desperate pleas for justice.",
      duration: "8:45"
    },
    {
      id: 2,
      title: "System Failure - DPJ Accountability",
      description: "The Direction de la Protection de la Jeunesse (DPJ) withdrew support in January 2023, leaving an Indigenous family without adequate follow-up.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep2-system-failure-dpj-en_a4cd9326.wav",
      transcript: "SYSTEM FAILURE: An Investigation into DPJ Accountability and Child Protection Collapse\n\nThe Direction de la Protection de la Jeunesse. DPJ. In Quebec, this is the institution responsible for protecting children from abuse and neglect. But what happens when the system designed to protect children becomes the system that abandons them?",
      duration: "9:12"
    },
    {
      id: 3,
      title: "1873 Days of Injustice",
      description: "A timeline of systemic failures spanning over 5 years, from 2021 to 2026, documenting the ongoing harm to Indigenous children.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep3-1873-days-en_a9cb1b8f.wav",
      transcript: "1873 DAYS OF INJUSTICE: A Timeline Investigation\n\n1,873 days. That's five years and two months. That's how long a family has been waiting for justice. That's how long they've been seeking help from institutions that were supposed to protect them.",
      duration: "7:58"
    },
    {
      id: 4,
      title: "Indigenous Rights Under Attack",
      description: "How systemic failures violate fundamental Indigenous rights and international conventions protecting children.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep4-indigenous-rights-en_c6cf99e6.wav",
      transcript: "INDIGENOUS RIGHTS UNDER ATTACK: A Legal Investigation\n\nThe United Nations Declaration on the Rights of Indigenous Peoples. The Canadian Charter of Rights and Freedoms. Bill C-92. These are not just legal documents. They are promises.",
      duration: "8:34"
    },
    {
      id: 5,
      title: "Justice Delayed is Justice Denied",
      description: "The final call for accountability, independent inquiry, and real systemic change to protect other Indigenous families.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep5-justice-delayed-en_c3757edf.wav",
      transcript: "JUSTICE DELAYED IS JUSTICE DENIED: The Impact of Systemic Failure\n\nJustice delayed is justice denied. This is not just a legal principle. This is the lived reality of families waiting for accountability.",
      duration: "8:21"
    },
    {
      id: 6,
      title: "Ghosted Organizations",
      description: "How major organizations and institutions have remained silent, ignoring calls for accountability and support for Indigenous families in crisis.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep6-ghosted-organizations-en_f21bfa20.wav",
      transcript: "GHOSTED ORGANIZATIONS: When Institutions Fail to Respond\n\nSilence from politicians. Silence from government agencies. But what about the organizations that claim to champion Indigenous rights? What about the NGOs, the advocacy groups, the institutions that have platforms and resources?",
      duration: "9:15"
    }
  ],
  fr: [
    {
      id: 1,
      title: "Le Silence des Politiciens",
      description: "Comment les élus à tous les niveaux ont ignoré une demande d'aide d'une famille autochtone en crise.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep1-silence-politiciens-fr_ae2cceb3.wav",
      transcript: "LE SILENCE DES POLITICIENS: Une Investigation sur la Responsabilité Gouvernementale\n\nPendant 1 873 jours, une famille cherche de l'aide auprès des élus. Des représentants fédéraux, provinciaux et municipaux. Tous silencieux. Tous qui les abandonnent.",
      duration: "8:45"
    },
    {
      id: 2,
      title: "L'Échec du Système: DPJ",
      description: "Une investigation sur l'échec institutionnel et l'effondrement de la protection de l'enfance au Québec.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep2-systeme-echec-dpj-fr_5b898699.wav",
      transcript: "L'ÉCHEC DU SYSTÈME: Une Investigation sur la Responsabilité de la DPJ\n\nLa Direction de la Protection de la Jeunesse. La DPJ. Au Québec, c'est l'institution responsable de protéger les enfants contre les abus et la négligence.",
      duration: "9:12"
    },
    {
      id: 3,
      title: "1873 Jours d'Injustice",
      description: "Une investigation chronologique de cinq ans d'attente pour la responsabilité.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep3-1873-jours-injustice-fr_1d5fcf9b.wav",
      transcript: "1873 JOURS D'INJUSTICE: Une Investigation Chronologique\n\n1 873 jours. C'est cinq ans et deux mois. C'est combien de temps une famille attend la justice.",
      duration: "7:58"
    },
    {
      id: 4,
      title: "Les Droits Autochtones Sous Attaque",
      description: "Une investigation juridique sur les violations systémiques et l'échec institutionnel.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep4-droits-autochtones-fr_413794de.wav",
      transcript: "LES DROITS AUTOCHTONES SOUS ATTAQUE: Une Investigation Juridique\n\nLa Déclaration des Nations Unies sur les droits des peuples autochtones. La Charte canadienne des droits et libertés. Le projet de loi C-92.",
      duration: "8:34"
    },
    {
      id: 5,
      title: "La Justice Retardée est la Justice Niée",
      description: "L'impact de l'échec systémique et la puissance de la résistance collective.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep5-justice-retardee-fr_b97c8c25.wav",
      transcript: "LA JUSTICE RETARDÉE EST LA JUSTICE NIÉE: L'Impact de l'Échec Systémique\n\nLa justice retardée est la justice niée. Ce n'est pas qu'un principe juridique. C'est la réalité vécue des familles qui attendent la responsabilité.",
      duration: "8:21"
    },
    {
      id: 6,
      title: "Organisations Abandonnées",
      description: "Comment les organisations majeures et les institutions ont gardé le silence, ignorant les appels à la responsabilité et au soutien des familles autochtones en crise.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep6-organisations-abandonnees-fr_2104f348.wav",
      transcript: "ORGANISATIONS ABANDONNÉES: Quand les Institutions Refusent de Répondre\n\nSilence des politiciens. Silence des agences gouvernementales. Mais qu'en est-il des organisations qui prétendent défendre les droits autochtones?",
      duration: "9:15"
    }
  ],
  ht: [
    {
      id: 1,
      title: "Silans Politisyen yo",
      description: "Kouman ofisyèl yo nan tout nivo yo te inyore yon moun ki te mande èd pou yon fanmi Endyen an kriz.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep1-silence-politicians-en_f098563e.wav",
      transcript: "SILANS POLITISYEN YO: Yon Envestigasyon sou Responsabilite Gouvènman\n\nPandant 1,873 jou, yon fanmi t ap chèche èd nan ofisyèl yo. Reprezantan federal, provincial, ak miniksipal. Yo tout silansye. Yo tout abandone yo.",
      duration: "8:45"
    },
    {
      id: 2,
      title: "Echèk Sistèm - Responsabilite DPJ",
      description: "Yon envestigasyon sou echèk enstitisyonèl ak efondman pwoteksyon timoun nan Kebèk.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep2-system-failure-dpj-en_a4cd9326.wav",
      transcript: "ECHÈK SISTÈM: Yon Envestigasyon sou Responsabilite DPJ\n\nDieksyon Pwoteksyon Timoun. DPJ. Nan Kebèk, se enstitisyon responsab pou pwoteje timoun kont abiy ak neglijan.",
      duration: "9:12"
    },
    {
      id: 3,
      title: "1873 Jou Injistis",
      description: "Yon tann kronolojik de senk an pou responsabilite.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep3-1873-days-en_a9cb1b8f.wav",
      transcript: "1873 JOU INJISTIS: Yon Envestigasyon Kronolojik\n\n1,873 jou. Se senk an ak de mwa. Se konbyen tan yon fanmi t ap tann pou jistis.",
      duration: "7:58"
    },
    {
      id: 4,
      title: "Dwa Endyen yo Anba Atak",
      description: "Yon envestigasyon legal sou vyolasyon sistematik ak echèk enstitisyonèl.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep4-indigenous-rights-en_c6cf99e6.wav",
      transcript: "DWA ENDYEN YO ANBA ATAK: Yon Envestigasyon Legal\n\nDeklarasyon Nasyon Ini sou Dwa Pèp Endyen yo. Chata Kanadyen Dwa ak Libète. Pwojè Lwa C-92.",
      duration: "8:34"
    },
    {
      id: 5,
      title: "Jistis Retade se Jistis Refize",
      description: "Dènye apèl pou responsabilite, enkit endepandan, ak reyèl chanjman sistematik.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep5-justice-delayed-en_c3757edf.wav",
      transcript: "JISTIS RETADE SE JISTIS REFIZE: Enpak Echèk Sistematik\n\nJistis retade se jistis refize. Se pa jis yon prensip legal. Se reyalite fanmi yo ap viv ki ap tann pou responsabilite.",
      duration: "8:21"
    },
    {
      id: 6,
      title: "Òganizasyon Abandone",
      description: "Kouman gwo òganizasyon ak enstitisyon yo te rete silansye, inyore apèl pou responsabilite ak sipò pou fanmi Endyen an kriz.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep6-ghosted-organizations-en_f21bfa20.wav",
      transcript: "ÒGANIZASYON ABANDONE: Lè Enstitisyon Refize Reponn\n\nSilans politisyen yo. Silans ajans gouvènman. Men sa sou òganizasyon ki di yo defann dwa Endyen?",
      duration: "9:15"
    }
  ]
};

export function JukeboxPlayer() {
  const { i18n } = useTranslation();
  const [currentEpisodeId, setCurrentEpisodeId] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);

  // Map language codes: 'ht' for Kreyòl, 'fr' for French, 'en' for English
  const language = i18n.language === 'fr' ? 'fr' : i18n.language === 'ht' ? 'ht' : 'en';
  const currentEpisode = episodes[language].find(ep => ep.id === currentEpisodeId) || episodes[language][0];

  const handleEpisodeChange = (id: number) => {
    setCurrentEpisodeId(id);
  };

  const getLanguageLabel = () => {
    if (language === 'fr') return 'En cours de lecture';
    if (language === 'ht') return 'Ap jwe';
    return 'Now Playing';
  };

  const getTranscriptLabel = () => {
    if (language === 'fr') return '📖 Montre Transskripsyon';
    if (language === 'ht') return '📖 Montre Transskripsyon';
    return '📖 Show Transcript';
  };

  const getHideTranscriptLabel = () => {
    if (language === 'fr') return '📖 Kache Transskripsyon';
    if (language === 'ht') return '📖 Kache Transskripsyon';
    return '📖 Hide Transcript';
  };

  const getEpisodesLabel = () => {
    if (language === 'fr') return 'Tous les Épisodes';
    if (language === 'ht') return 'Tout Epizòd yo';
    return 'All Episodes';
  };

  return (
    <div className="w-full space-y-6">
      {/* Current Episode Info */}
      <div className="bg-white rounded-lg p-6 border-2 border-red-600 shadow-lg">
        <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">
          {getLanguageLabel()}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{currentEpisode.title}</h3>
        <p className="text-gray-700 mb-4">{currentEpisode.description}</p>
        
        {/* Native HTML5 Audio Player */}
        <audio 
          controls 
          className="w-full mb-4 h-10 rounded-lg"
          controlsList="nodownload"
          key={currentEpisode.audioUrl}
        >
          <source src={currentEpisode.audioUrl} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Episode Grid */}
      <div className="bg-white rounded-lg p-6 border-2 border-gray-200 shadow-lg">
        <p className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
          {getEpisodesLabel()}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {episodes[language].map((ep) => (
            <button
              key={ep.id}
              onClick={() => handleEpisodeChange(ep.id)}
              className={`p-4 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 ${
                currentEpisodeId === ep.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-900 border-2 border-gray-300 hover:bg-gray-200'
              }`}
            >
              <div className="font-bold text-base">Ep. {ep.id}</div>
              <div className="text-xs mt-1 line-clamp-2">{ep.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Transcript Toggle */}
      <button
        onClick={() => setShowTranscript(!showTranscript)}
        className="w-full bg-gray-100 border-2 border-gray-300 text-gray-900 font-bold py-3 px-4 rounded-lg transition-all hover:bg-gray-200 active:scale-95"
      >
        {showTranscript ? getHideTranscriptLabel() : getTranscriptLabel()}
      </button>

      {/* Transcript Display */}
      {showTranscript && (
        <div className="bg-white rounded-lg p-6 border-2 border-red-600 shadow-lg max-h-96 overflow-y-auto">
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-serif">
            {currentEpisode.transcript}
          </p>
        </div>
      )}
    </div>
  );
}
