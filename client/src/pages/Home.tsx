import { useAuth } from '@/_core/hooks/useAuth';

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Full-screen video player */}
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <video
          controls
          className="w-full h-full"
          poster="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/hero-bg-USRfqWoNeN2aPgVufSqEfJ.webp"
        >
          <source
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/sunday-bloody-sunday-documentary-8min_dc1e3b57.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
