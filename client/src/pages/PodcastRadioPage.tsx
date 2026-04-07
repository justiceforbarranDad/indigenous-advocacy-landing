import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Volume2, Radio, Play, Pause, SkipBack, SkipForward } from 'lucide-react';

export default function PodcastRadioPage() {
  const { t, i18n } = useTranslation();
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(0);

  const episodes = [
    { title: 'Silence & Politicians', url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep1-silans-politisyen-full_a1b2c3d4.wav' },
    { title: 'System Failure (DPJ)', url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep2-echek-sistem-dpj-full_e5f6g7h8.wav' },
    { title: '1873 Days of Injustice', url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep3-1873-jou-injistis-full_i9j0k1l2.wav' },
    { title: 'Two Indian Attacks', url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep4-dwa-endyen-atak-full_m3n4o5p6.wav' },
    { title: 'Justice Delayed', url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep5-jistis-retade-full_q7r8s9t0.wav' },
    { title: 'Abandoned Organizations', url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep6-òganizasyon-abandone-full_u1v2w3x4.wav' },
  ];

  const radioStations = [
    { name: 'APTN Radio', url: 'https://aptnlive.aptn.ca/live' },
    { name: 'CKUA FM', url: 'https://www.ckua.com/' },
    { name: 'Sirius XM Indigenous', url: 'https://www.siriusxm.com/' },
    { name: 'Native American Radio', url: 'https://www.nativeamericanradio.com/' },
    { name: 'Aboriginal Peoples Television Network', url: 'https://www.aptn.ca/' },
    { name: 'First Nations Voice', url: 'https://www.firstnationsvoice.ca/' },
  ];

  return (
    <div className="min-h-screen bg-amber-50 p-8">
      {/* Book-style 2-page layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12">
        
        {/* LEFT PAGE - OLD TV SET PODCAST PLAYER */}
        <div className="bg-white rounded-lg shadow-2xl p-8 border-4 border-amber-900">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">📺 PODCAST</h2>
          
          {/* Retro TV Set Frame */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 shadow-inner border-8 border-gray-700 mb-6">
            {/* TV Screen */}
            <div className="bg-black rounded-lg p-4 mb-4 aspect-video flex items-center justify-center border-4 border-gray-600">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">🎙️</div>
                <div className="text-sm font-mono">
                  {episodes[currentEpisode].title}
                </div>
              </div>
            </div>

            {/* TV Controls - Retro Style */}
            <div className="flex justify-between items-center mb-4 px-4">
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 border-2 border-gray-400"></button>
                <button className="w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 border-2 border-gray-400"></button>
                <button className="w-8 h-8 rounded-full bg-yellow-600 hover:bg-yellow-700 border-2 border-gray-400"></button>
              </div>
              <div className="text-white text-xs font-mono">CH {currentEpisode + 1}/6</div>
            </div>
          </div>

          {/* Audio Player */}
          <audio 
            src={episodes[currentEpisode].url} 
            controls 
            className="w-full mb-4"
          />

          {/* Episode Navigation */}
          <div className="flex justify-center gap-4 mb-6">
            <button 
              onClick={() => setCurrentEpisode(Math.max(0, currentEpisode - 1))}
              className="p-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition"
            >
              <SkipBack size={20} />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button 
              onClick={() => setCurrentEpisode(Math.min(episodes.length - 1, currentEpisode + 1))}
              className="p-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition"
            >
              <SkipForward size={20} />
            </button>
          </div>

          {/* Episode List */}
          <div className="space-y-2">
            <h3 className="font-bold text-amber-900 mb-3">Episodes:</h3>
            {episodes.map((ep, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentEpisode(idx)}
                className={`w-full text-left p-2 rounded transition ${
                  currentEpisode === idx 
                    ? 'bg-amber-700 text-white' 
                    : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                }`}
              >
                <span className="font-mono text-sm">EP{idx + 1}:</span> {ep.title}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT PAGE - OLD RADIO STATIONS */}
        <div className="bg-white rounded-lg shadow-2xl p-8 border-4 border-amber-900">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">📻 ABORIGINAL RADIO</h2>
          
          {/* Retro Radio Frame */}
          <div className="bg-gradient-to-b from-amber-700 to-amber-900 rounded-2xl p-6 shadow-inner border-6 border-amber-900 mb-6">
            {/* Radio Display */}
            <div className="bg-yellow-100 rounded p-3 mb-4 border-2 border-amber-900">
              <div className="text-center font-mono text-sm text-amber-900">
                {radioStations[selectedRadio].name}
              </div>
            </div>

            {/* Frequency Dial */}
            <div className="bg-amber-800 rounded-full h-24 flex items-center justify-center mb-4 border-4 border-amber-900">
              <div className="text-center">
                <div className="text-yellow-100 font-mono text-lg">📡</div>
                <div className="text-yellow-100 text-xs">TUNING</div>
              </div>
            </div>

            {/* Radio Buttons - Retro Style */}
            <div className="grid grid-cols-3 gap-3">
              {radioStations.map((station, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedRadio(idx)}
                  className={`p-3 rounded-full border-4 transition transform hover:scale-110 ${
                    selectedRadio === idx
                      ? 'bg-red-600 border-red-800 shadow-lg'
                      : 'bg-amber-600 border-amber-800 hover:bg-amber-500'
                  }`}
                >
                  <Radio size={20} className="text-white mx-auto" />
                </button>
              ))}
            </div>
          </div>

          {/* Station List */}
          <div className="space-y-2">
            <h3 className="font-bold text-amber-900 mb-3">Free Aboriginal Radio Stations:</h3>
            {radioStations.map((station, idx) => (
              <a
                key={idx}
                href={station.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedRadio(idx)}
                className={`block p-3 rounded transition ${
                  selectedRadio === idx 
                    ? 'bg-amber-700 text-white' 
                    : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                }`}
              >
                <span className="font-mono text-sm">📻</span> {station.name}
              </a>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-6 p-4 bg-amber-50 border-2 border-amber-700 rounded">
            <p className="text-xs text-amber-900 text-center">
              All radio stations are free and support Indigenous voices and culture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
