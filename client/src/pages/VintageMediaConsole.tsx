import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';

export default function VintageMediaConsole() {
  // RADIO STATE
  const [radioChannel, setRadioChannel] = useState(0);
  const [radioPlaying, setRadioPlaying] = useState(false);
  const [radioVolume, setRadioVolume] = useState(70);
  const radioRef = useRef<HTMLAudioElement>(null);

  // TV STATE
  const [tvChannel, setTvChannel] = useState(0);
  const [tvPlaying, setTvPlaying] = useState(false);
  const [tvVolume, setTvVolume] = useState(70);

  // PODCAST CHANNELS (5 different presets)
  const podcastChannels = [
    {
      name: 'CH 1',
      title: 'Silans Politisyen',
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep1-silans-politisyen-full_a1b2c3d4.wav',
    },
    {
      name: 'CH 2',
      title: 'Echek Sistem',
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep2-echek-sistem-dpj-full_e5f6g7h8.wav',
    },
    {
      name: 'CH 3',
      title: '1873 Days',
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep3-1873-jou-injistis-full_i9j0k1l2.wav',
    },
    {
      name: 'CH 4',
      title: 'Two Attacks',
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep4-dwa-endyen-atak-full_m3n4o5p6.wav',
    },
    {
      name: 'CH 5',
      title: 'Jistis Retade',
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep5-jistis-retade-full_q7r8s9t0.wav',
    },
  ];

  // TV CHANNELS (YouTube videos)
  const tvChannels = [
    {
      name: 'CH 1',
      title: 'Sunday Bloody Sunday',
      embedUrl: 'https://www.youtube.com/embed/xCpn1erz1y8',
    },
    {
      name: 'CH 2',
      title: 'King Charles Unceded',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      name: 'CH 3',
      title: 'Parliament Hill',
      embedUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    },
    {
      name: 'CH 4',
      title: 'Indigenous Rights',
      embedUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
    },
    {
      name: 'CH 5',
      title: 'Justice for Barran',
      embedUrl: 'https://www.youtube.com/embed/xCpn1erz1y8',
    },
  ];

  // RADIO HANDLERS
  const handleRadioPlay = () => {
    if (radioRef.current) {
      if (radioPlaying) {
        radioRef.current.pause();
      } else {
        radioRef.current.play();
      }
      setRadioPlaying(!radioPlaying);
    }
  };

  const handleRadioChannelChange = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setRadioChannel((prev) => (prev + 1) % podcastChannels.length);
    } else {
      setRadioChannel((prev) => (prev - 1 + podcastChannels.length) % podcastChannels.length);
    }
    setRadioPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 p-4 md:p-8 flex items-center justify-center">
      {/* WOODEN CONSOLE CABINET */}
      <div className="w-full max-w-4xl">
        {/* TOP WOOD PANEL */}
        <div className="bg-gradient-to-b from-amber-700 to-amber-800 rounded-t-3xl p-8 border-8 border-amber-900 shadow-2xl">
          <div className="text-center mb-6">
            <div className="text-white text-2xl font-bold tracking-widest">RADIO CANADA</div>
            <div className="text-amber-200 text-sm">Indigenous Media Console</div>
          </div>
        </div>

        {/* MAIN CONSOLE BODY */}
        <div className="bg-gradient-to-b from-amber-600 to-amber-700 p-8 border-l-8 border-r-8 border-amber-900 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ===== LEFT: VINTAGE RADIO ===== */}
            <div className="flex flex-col items-center">
              {/* RADIO SPEAKER GRILLE */}
              <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-2xl p-6 mb-6 w-full border-4 border-gray-800 shadow-inner">
                {/* DISPLAY */}
                <div className="bg-black rounded-lg p-3 mb-4 aspect-square flex flex-col items-center justify-center border-4 border-gray-700 shadow-inner">
                  <div className="text-yellow-300 font-mono text-xl font-bold mb-2">
                    {podcastChannels[radioChannel].name}
                  </div>
                  <div className="text-yellow-200 font-serif text-sm text-center">
                    {podcastChannels[radioChannel].title}
                  </div>
                </div>

                {/* FREQUENCY DIAL */}
                <div className="bg-gray-800 rounded-lg p-4 mb-4 border-2 border-gray-600">
                  <div className="flex justify-between text-yellow-300 font-mono text-xs mb-2">
                    <span>AM</span>
                    <span>FM</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full relative border-2 border-gray-600">
                    <div
                      className="absolute h-full w-2 bg-red-500 rounded-full transition-all shadow-lg"
                      style={{ left: `${(radioChannel / podcastChannels.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* VOLUME CONTROL */}
                <div className="mb-4 flex items-center gap-2">
                  {radioVolume === 0 ? (
                    <VolumeX className="text-yellow-300" size={20} />
                  ) : (
                    <Volume2 className="text-yellow-300" size={20} />
                  )}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={radioVolume}
                    onChange={(e) => {
                      setRadioVolume(Number(e.target.value));
                      if (radioRef.current) radioRef.current.volume = Number(e.target.value) / 100;
                    }}
                    className="flex-1 h-2 bg-amber-400 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-yellow-300 font-bold w-6 text-right text-xs">{radioVolume}</span>
                </div>

                {/* CONTROL BUTTONS */}
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => handleRadioChannelChange('prev')}
                    className="p-2 bg-amber-700 hover:bg-amber-600 text-white rounded-lg transition transform hover:scale-110 border-2 border-amber-900"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleRadioPlay}
                    className="p-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition transform hover:scale-110 border-2 border-red-900"
                  >
                    {radioPlaying ? <Pause size={24} /> : <Play size={24} />}
                  </button>
                  <button
                    onClick={() => handleRadioChannelChange('next')}
                    className="p-2 bg-amber-700 hover:bg-amber-600 text-white rounded-lg transition transform hover:scale-110 border-2 border-amber-900"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* RADIO LABEL */}
              <div className="text-center text-amber-100 font-bold text-lg">RADIO</div>
            </div>

            {/* ===== RIGHT: VINTAGE TV ===== */}
            <div className="flex flex-col items-center">
              {/* TV SET */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 mb-6 w-full border-6 border-gray-700 shadow-2xl">
                {/* TV SCREEN */}
                <div className="bg-black rounded-lg p-1 mb-3 aspect-video border-4 border-gray-600 shadow-inner overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={tvChannels[tvChannel].embedUrl}
                    title={tvChannels[tvChannel].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded"
                  ></iframe>
                </div>

                {/* TV CONTROL BUTTONS */}
                <div className="flex justify-between items-center mb-3 px-2">
                  <div className="flex gap-2">
                    <button className="w-4 h-4 rounded-full bg-red-600 hover:bg-red-700 border-2 border-gray-400 transition"></button>
                    <button className="w-4 h-4 rounded-full bg-green-600 hover:bg-green-700 border-2 border-gray-400 transition"></button>
                    <button className="w-4 h-4 rounded-full bg-yellow-600 hover:bg-yellow-700 border-2 border-gray-400 transition"></button>
                  </div>
                  <div className="text-white text-xs font-mono">CH {tvChannel + 1}/{tvChannels.length}</div>
                </div>

                {/* VOLUME & CHANNEL CONTROLS */}
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => setTvChannel((prev) => (prev - 1 + tvChannels.length) % tvChannels.length)}
                    className="p-1 bg-gray-700 hover:bg-gray-600 text-white rounded transition text-xs"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <div className="flex-1 flex items-center gap-1">
                    <Volume2 className="text-white" size={14} />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={tvVolume}
                      onChange={(e) => setTvVolume(Number(e.target.value))}
                      className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-white text-xs w-4">{tvVolume}</span>
                  </div>
                  <button
                    onClick={() => setTvChannel((prev) => (prev + 1) % tvChannels.length)}
                    className="p-1 bg-gray-700 hover:bg-gray-600 text-white rounded transition text-xs"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* TV LABEL */}
              <div className="text-center text-amber-100 font-bold text-lg">TELEVISION</div>
            </div>
          </div>
        </div>

        {/* BOTTOM WOOD PANEL */}
        <div className="bg-gradient-to-b from-amber-700 to-amber-900 rounded-b-3xl p-6 border-8 border-t-0 border-amber-900 shadow-2xl">
          <div className="grid grid-cols-5 gap-2 mb-4">
            {podcastChannels.map((channel, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setRadioChannel(idx);
                  setRadioPlaying(false);
                }}
                className={`py-2 px-1 rounded text-xs font-bold transition ${
                  radioChannel === idx
                    ? 'bg-red-600 text-white'
                    : 'bg-amber-600 text-amber-100 hover:bg-amber-500'
                }`}
              >
                {channel.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-2">
            {tvChannels.map((channel, idx) => (
              <button
                key={idx}
                onClick={() => setTvChannel(idx)}
                className={`py-2 px-1 rounded text-xs font-bold transition ${
                  tvChannel === idx
                    ? 'bg-blue-600 text-white'
                    : 'bg-amber-600 text-amber-100 hover:bg-amber-500'
                }`}
              >
                {channel.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* HIDDEN AUDIO ELEMENT */}
      <audio
        ref={radioRef}
        src={podcastChannels[radioChannel].url}
        onEnded={() => setRadioPlaying(false)}
      />
    </div>
  );
}
