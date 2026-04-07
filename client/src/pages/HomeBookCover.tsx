import { useLocation } from 'wouter';

export default function HomeBookCover() {
  const [, navigate] = useLocation();

  const handleClick = () => {
    navigate('/book');
  };

  return (
    <div 
      className="min-h-screen w-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      onClick={handleClick}
      style={{
        cursor: 'pointer'
      }}
    >
      {/* Clean background - no images, no blood, no flag */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      
      {/* Click instruction */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center opacity-75 hover:opacity-100 transition-opacity z-10">
        <p className="text-sm font-light tracking-widest">CLICK TO ENTER</p>
      </div>
    </div>
  );
}
