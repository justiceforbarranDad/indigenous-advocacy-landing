import { useState } from "react";

export type MediaLanguage = "en" | "fr";

type Track = {
  id: string;
  type: "video" | "audio";
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  source: string;
};

const tracks: Track[] = [
  {
    id: "registry-video",
    type: "video",
    title: {
      en: "Documentary evidence registry",
      fr: "Registre documentaire des éléments de preuve",
    },
    description: {
      en: "Privacy-oriented YouTube video embed.",
      fr: "Vidéo YouTube intégrée avec une approche axée sur la confidentialité.",
    },
    source: "https://www.youtube-nocookie.com/embed/z_2kUsXbdyB",
  },
  {
    id: "carment-audio",
    type: "audio",
    title: {
      en: "Carment — supplied recording",
      fr: "Carment — enregistrement fourni",
    },
    description: {
      en: "Native HTML5 audio playback served through the project storage proxy.",
      fr: "Lecture audio HTML5 native servie par le proxy de stockage du projet.",
    },
    source: "/manus-storage/Carment_b8735cfc.m4a",
  },
];

const labels = {
  en: {
    header: "Multimedia evidence registry",
    select: "Select video or audio",
    video: "VIDEO",
    audio: "AUDIO",
    unsupported: "Your browser does not support this audio element.",
  },
  fr: {
    header: "Registre multimédia des éléments de preuve",
    select: "Sélectionner une vidéo ou un audio",
    video: "VIDÉO",
    audio: "AUDIO",
    unsupported: "Votre navigateur ne prend pas en charge cet élément audio.",
  },
} as const;

export function SecureMediaHub({ language }: { language: MediaLanguage }) {
  const [activeTrackId, setActiveTrackId] = useState(tracks[0].id);
  const activeTrack = tracks.find((track) => track.id === activeTrackId) ?? tracks[0];
  const text = labels[language];

  return (
    <section className="overflow-hidden rounded-xl border-2 border-[#d4af37] bg-[#0d1e36] shadow-2xl" aria-label={text.header}>
      <div className="border-b-2 border-[#d4af37] bg-[#071324] px-5 py-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-[0.16em] text-[#d4af37]">{text.header}</h3>
        <p className="mt-2 text-sm text-[#a4b3c6]">{activeTrack.title[language]}</p>
      </div>

      <div className="bg-black">
        {activeTrack.type === "video" ? (
          <div className="aspect-video w-full">
            <iframe
              key={activeTrack.source}
              className="h-full w-full border-0"
              src={activeTrack.source}
              title={activeTrack.title[language]}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="flex aspect-video min-h-64 flex-col items-center justify-center bg-[radial-gradient(circle,#102a43_0%,#0c1b33_100%)] px-5 py-8 text-center">
            <p className="max-w-xl text-lg font-semibold text-white">{activeTrack.title[language]}</p>
            <p className="mt-2 max-w-xl text-sm text-[#a4b3c6]">{activeTrack.description[language]}</p>
            <audio key={activeTrack.source} className="mt-8 w-full max-w-xl" controls preload="none">
              <source src={activeTrack.source} type="audio/mp4" />
              {text.unsupported}
            </audio>
          </div>
        )}
      </div>

      <div className="bg-[#0a172c] p-4 sm:p-5">
        <p className="mb-3 border-l-2 border-[#d4af37] pl-3 text-xs font-bold uppercase tracking-[0.15em] text-[#d4af37]">{text.select}</p>
        <div className="space-y-2">
          {tracks.map((track) => {
            const active = track.id === activeTrackId;
            return (
              <button
                key={track.id}
                type="button"
                onClick={() => setActiveTrackId(track.id)}
                aria-pressed={active}
                className={`flex min-h-16 w-full items-start gap-3 rounded-md border px-3 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] sm:gap-4 sm:px-4 ${
                  active
                    ? "border-[#d4af37] bg-[#19385c] shadow-[inset_3px_0_0_#d4af37]"
                    : "border-[#1a304a] bg-[#0d1e36] hover:border-[#d4af37] hover:bg-[#142a4a]"
                }`}
              >
                <span className="min-w-14 rounded border border-[#d4af37] px-2 py-1 text-center text-[10px] font-bold tracking-wide text-[#d4af37]">
                  {track.type === "video" ? text.video : text.audio}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-white">{track.title[language]}</span>
                  <span className="mt-1 block text-xs text-[#a4b3c6]">{track.description[language]}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
