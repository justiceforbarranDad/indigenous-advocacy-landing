import { useLocation } from 'wouter';

export default function HomeBookCover() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Full-Screen Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://videos.pixabay.com/video-files/parliament-buildings-northern-lights-background-video-4k-free-download-14889.mp4" type="video/mp4" />
      </video>

      {/* Click to Enter Book */}
      <div 
        className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
        onClick={() => navigate('/book')}
      >
        <div className="text-center">
          <p className="text-yellow-400 text-2xl font-bold drop-shadow-2xl">Click to Enter</p>
        </div>
      </div>
    </div>
  );
}
