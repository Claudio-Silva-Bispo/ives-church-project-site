import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../globals.css';
import 'leaflet/dist/leaflet.css';


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/Dashboard');

  // Estado para mostrar o botão de "voltar para o topo"
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Função para rolar para o topo
  const scrollToTop = () => {
    router.push('/'); // Redireciona para a home
  };

  // Função para verificar a posição do scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {!isDashboard && <Navbar />}
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      {!isDashboard && <Footer />}

      {/* Botão de rolar para o topo */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-[#9E582F]"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default MyApp;
