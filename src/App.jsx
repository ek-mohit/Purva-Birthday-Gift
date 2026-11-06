import { createContext, useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Welcome from './pages/Welcome';
import Reasons from './pages/Reasons';
import MemoriesGrid from './pages/MemoriesGrid';
import ThankYou from './pages/ThankYou';
import LittleVideos from './pages/LittleVideos';

export const MusicContext = createContext(null);

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false); // Default false, takki false promise na mile
  const audioRef = useRef(null);

  useEffect(() => {
    // 1. Audio element ko load karo
    const audio = audioRef.current;
    
    // 2. Play function define karo jo interaction ke baad call hoga
    const playAudio = () => {
      audio.play().then(() => {
        setIsPlaying(true); // Success hone par hi 'On' hoga
      }).catch(e => console.log("Waiting for user interaction..."));
    };

    // 3. Page load hote hi ek baar try karo (Silent attempt)
    playAudio();

    // 4. Important: Kisi bhi click par music 'On' ho jayega
    const handleInteraction = () => {
      playAudio();
      window.removeEventListener('click', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    
    return () => window.removeEventListener('click', handleInteraction);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      <Router>
        <div className="min-h-screen bg-[#fdf4ff] relative">
          
          <audio 
            ref={audioRef} 
            src="/assets/bg-music.mp3" 
            loop 
            preload="auto" 
          />

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed top-6 right-6 z-[9999] bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-xl border border-pink-100 cursor-pointer flex items-center gap-2" 
            onClick={toggleMusic}
          >
             <span className="text-sm font-black uppercase text-gray-700 tracking-wider">
               {isPlaying ? "🎧 Music On" : "🔇 Music Off"}
             </span>
          </motion.div>
          
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/reasons" element={<Reasons />} />
            <Route path="/memories-grid" element={<MemoriesGrid />} />
            <Route path="/little-videos" element={<LittleVideos />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </div>
      </Router>
    </MusicContext.Provider>
  );
}
