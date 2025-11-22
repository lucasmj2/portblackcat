import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import HeroMinimal from './components/HeroMinimal';
import About from './components/About';
import MetricsGrid from './components/MetricsGrid';
import Specialties from './components/Specialties';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <HeroMinimal />
          <About />
          <MetricsGrid />
          <Specialties />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
