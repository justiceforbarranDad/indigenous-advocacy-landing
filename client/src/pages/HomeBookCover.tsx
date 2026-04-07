import { useLocation } from 'wouter';

export default function HomeBookCover() {
  const [, navigate] = useLocation();

  const handleClick = () => {
    navigate('/book');
  };

  return (
    <div 
      className="min-h-screen w-full relative flex items-center justify-center overflow-hidden"
      onClick={handleClick}
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/centennial-flame-parliament-northern-lights_heroic_no_flag.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        cursor: 'pointer'
      }}
    >
      {/* Optional: Add subtle overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black/5"></div>
      
      {/* Click instruction */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center opacity-75 hover:opacity-100 transition-opacity">
        <p className="text-sm font-light tracking-widest">CLICK TO ENTER</p>
      </div>
    </div>
  );
}
