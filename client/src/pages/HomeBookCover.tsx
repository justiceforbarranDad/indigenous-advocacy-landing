import { useLocation } from 'wouter';

export default function HomeBookCover() {
  const [, navigate] = useLocation();

  const handleClick = () => {
    navigate('/book');
  };

  return (
    <div 
      className="min-h-screen w-full"
      onClick={handleClick}
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/parliament-composite-hero-no-snow_4c8f3d2e.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        cursor: 'pointer'
      }}
    />
  );
}
