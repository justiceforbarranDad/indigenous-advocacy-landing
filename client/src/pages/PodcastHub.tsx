import { useState } from 'react';
import { PodcastPlayer } from '@/components/PodcastPlayer';
import { TranscriptViewer } from '@/components/TranscriptViewer';
import { PodcastSubscription } from '@/components/PodcastSubscription';
import { podcastEpisodes, getPodcastsByLanguage, getTranscript } from '@/data/podcasts';

export default function PodcastHub() {
  const [selectedLanguage, setSelectedLanguage] = useState<'EN' | 'FR'>('EN');

  const episodes = getPodcastsByLanguage(selectedLanguage);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="bg-black text-white p-8 border-b-4 border-black">
        <h1 className="text-5xl font-bold mb-2">PODCAST HUB</h1>
        <p className="text-xl">Justice for Barran - Audio Stories & Investigations</p>
      </div>

      {/* Language Selector */}
      <div className="bg-white border-b-4 border-black p-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold mb-3 uppercase tracking-wider">Select Language:</p>
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedLanguage('EN')}
              className={`px-6 py-3 font-bold border-2 border-black rounded-lg transition-colors ${
                selectedLanguage === 'EN'
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => setSelectedLanguage('FR')}
              className={`px-6 py-3 font-bold border-2 border-black rounded-lg transition-colors ${
                selectedLanguage === 'FR'
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              🇫🇷 Français
            </button>
          </div>
        </div>
      </div>

      {/* Episodes Grid */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6 border-b-4 border-black pb-4">
            {selectedLanguage === 'EN' ? 'All Episodes' : 'Tous les Épisodes'}
          </h2>

          {episodes.length === 0 ? (
            <div className="bg-gray-100 border-2 border-black p-8 rounded-lg text-center">
              <p className="text-lg text-gray-600">
                {selectedLanguage === 'EN' ? 'No episodes available yet.' : 'Aucun épisode disponible pour le moment.'}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {episodes.map((episode) => (
                <div key={episode.id} className="border-4 border-black p-6 rounded-lg bg-white hover:shadow-lg transition-shadow">
                  {episode.audioUrl && (
                    <PodcastPlayer
                      title={episode.title}
                      description={episode.description}
                      audioUrl={episode.audioUrl}
                      duration={episode.duration}
                      language={episode.language}
                      episodeNumber={episode.episodeNumber}
                      date={episode.date}
                    />
                  )}
                  {!episode.audioUrl && (
                    <div className="bg-gray-100 border-2 border-black p-6 rounded-lg text-center">
                      <p className="text-gray-700 font-bold">{selectedLanguage === 'EN' ? 'Audio coming soon' : 'Audio à venir'}</p>
                    </div>
                  )}
                  
                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {episode.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-200 text-black px-3 py-1 rounded-full border border-black"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Transcript Viewer */}
                  {episode.transcript && (
                    <div className="mt-6">
                      <TranscriptViewer
                        transcript={getTranscript(episode, selectedLanguage)}
                        title={episode.title}
                        language={selectedLanguage}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* About Section */}
        <div className="bg-gray-100 border-4 border-black p-8 rounded-lg mt-12">
          <h3 className="text-2xl font-bold mb-4">
            {selectedLanguage === 'EN' ? 'About These Podcasts' : 'À propos de ces Podcasts'}
          </h3>
          <p className="text-lg leading-relaxed">
            {selectedLanguage === 'EN'
              ? 'These podcasts tell the story of Justice for Barran - a case of systemic failure affecting Indigenous children and vulnerable families. Listen to investigations into government accountability, corporate hypocrisy, and the ongoing fight for real reconciliation and justice.'
              : 'Ces podcasts racontent l\'histoire de Justice pour Barran - un cas d\'échec systémique affectant les enfants autochtones et les familles vulnérables. Écoutez les enquêtes sur la responsabilité gouvernementale, l\'hypocrisie corporative et la lutte continue pour une véritable réconciliation et justice.'}
          </p>
        </div>

        {/* Podcast Subscription */}
        <div className="mt-12">
          <PodcastSubscription language={selectedLanguage} />
        </div>

        {/* Email Alerts */}
        <div className="bg-black text-white border-4 border-black p-8 rounded-lg mt-8">
          <h3 className="text-2xl font-bold mb-4">
            {selectedLanguage === 'EN' ? 'Email Notifications' : 'Notifications par Email'}
          </h3>
          <p className="mb-4">
            {selectedLanguage === 'EN'
              ? 'Get email alerts when new episodes are released.'
              : 'Recevez des alertes par email lorsque de nouveaux épisodes sont publiés.'}
          </p>
          <a
            href="/email-alerts"
            className="inline-block bg-white text-black px-6 py-3 font-bold rounded-lg hover:bg-gray-100 transition-colors border-2 border-white"
          >
            {selectedLanguage === 'EN' ? 'Subscribe Now' : 'S\'abonner Maintenant'}
          </a>
        </div>
      </div>
    </div>
  );
}
