import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// ❤️ 100% Sachaai se bhare Cute & Genuine Reasons
const personalReasons = [
  { text: "I still remember our first meeting in Class 11, when I came to give you Khashma Ma’am’s English notes. It was such an ordinary little moment, and neither of us knew how many chapters life would add after it. 🌷", icon: "📖", color: "from-pink-500/10 to-rose-500/5", border: "border-pink-200" },
  { text: "Kota will always have its own collection of memories: Allen days, mock-test breaks, waiting between shifts, birthday plans and conversations that somehow made a tiring preparation phase feel lighter. 📚☁️", icon: "🏙️", color: "from-purple-500/10 to-pink-500/5", border: "border-purple-200" },
  { text: "I remember how you would remind me to eat while I was buried in JEE preparation. Even from Srinagar, you noticed the smallest things. Sach kahun, us waqt shayad main itna express nahi karta tha, but that everyday concern meant a lot. 🥣💗", icon: "🫶🏻", color: "from-amber-500/10 to-orange-500/5", border: "border-amber-200" },
  { text: "Your move to NIT Srinagar was a big new beginning. I know the first days in a new place were not always easy, and I hope you give yourself credit for finding your feet, building a life there and continuing to grow. 🏔️✨", icon: "🦋", color: "from-blue-500/10 to-indigo-500/5", border: "border-blue-200" },
  { text: "One thing I genuinely admire is how much you put into the things you care about. Whether it was a college performance, academics or simply showing up for your people, I hope you never underestimate your own effort. 🌻", icon: "🎭", color: "from-rose-500/10 to-red-500/5", border: "border-rose-200" },
  { text: "And then there are the completely random moments: silly expressions, video-call screenshots, food updates and conversations with no agenda. Not every meaningful memory has to look extraordinary in a photograph. 😄📱", icon: "💬", color: "from-fuchsia-500/10 to-violet-500/5", border: "border-fuchsia-200" },
  { text: "Today, I simply want you to know that your well-being matters to me. Apna khayal rakha karo, especially when everything gets busy. I hope life is kind to you, your hard work takes you somewhere beautiful, and you always find people and places where you feel understood. ❤️🧿", icon: "🪔", color: "from-orange-500/10 to-pink-500/5", border: "border-orange-200" }
];

// 📝 Real Typewriter Animation Component for Text Reveal
function TypewriterText({ text }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // Reset text on change
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // Typing speed in milliseconds

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <span className="leading-relaxed font-bold text-gray-700 text-xs md:text-sm text-left flex-1 tracking-wide after:content-['|'] after:animate-pulse after:text-pink-500">
      {displayedText}
    </span>
  );
}

export default function Reasons() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [teddyHearts, setTeddyHearts] = useState([]);
  const navigate = useNavigate();

  const handleNextReason = () => {
    if (visibleCount < personalReasons.length) {
      setVisibleCount(prev => prev + 1);
    } else {
      navigate('/memories-grid');
    }
  };

  const handleTeddyTap = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const burstArray = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i + Math.random(),
      x: x + (Math.random() * 40 - 20),
      y: y - Math.random() * 20,
      scale: Math.random() * 0.6 + 0.8,
      rotation: Math.random() * 50 - 25
    }));

    setTeddyHearts(prev => [...prev, ...burstArray]);
  };

  useEffect(() => {
    if (teddyHearts.length > 0) {
      const timer = setTimeout(() => {
        setTeddyHearts(prev => prev.slice(6));
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [teddyHearts]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#fff1f2] via-[#fbf3ff] to-[#f0e6ff] flex flex-col xl:flex-row items-center justify-center p-4 lg:p-12 gap-8 relative overflow-hidden font-sans select-none">
      
      {/* 📸 LEFT PANEL: SCRAPBOOK GALLERY WIRE */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden xl:flex flex-col items-center gap-6 w-72 shrink-0 relative z-10"
      >
        <div className="w-full h-44 rounded-3xl overflow-hidden border-4 border-white shadow-lg border-b-8 bg-white relative group">
          <video src="/assets/bubble-video1.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          <div className="absolute bottom-2 left-3 bg-black/40 text-[9px] text-white px-2 py-0.5 rounded-full backdrop-blur-sm">A little throwback 🎞️</div>
        </div>

        <div className="w-36 h-48 md:w-48 md:h-64 bg-white p-3 rounded-3xl shadow-xl border border-pink-100 opacity-95 z-0 border-b-[12px] rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
          <img src="/assets/bubble-photo1.jpeg" alt="Aesthetic" className="w-full h-4/5 object-cover rounded-2xl" />
          <div className="text-xs text-center font-serif text-pink-400 pt-2 font-bold tracking-wide">A little festive glow 🪔</div>
        </div>
      </motion.div>

      {/* 🎯 CENTER PANEL: THE HERO REASONS DECK CONTAINER */}
      <div className="w-full max-w-xl flex flex-col items-center space-y-6 z-10 relative flex-1">
        
        <div className="text-center space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-[#e11d48] via-[#db2777] to-[#9333ea] bg-clip-text text-transparent tracking-tight drop-shadow-sm font-serif"
          >
            A Few Things I Hope You Remember 💗
          </motion.h2>
          <p className="text-[10px] md:text-xs text-pink-400/80 tracking-widest font-black uppercase">A little note of appreciation, just for you</p>
        </div>

        {/* Dynamic Card Display Engine */}
        <div className="w-full min-h-[300px] flex flex-col justify-start px-2 relative">
          <AnimatePresence mode="popLayout">
            {personalReasons.slice(0, visibleCount).map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.9, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`w-full bg-gradient-to-br ${reason.color} bg-white border-2 ${reason.border} rounded-3xl p-5 shadow-md flex items-center gap-4 relative overflow-hidden group mb-4 border-b-[6px] border-r-[3px]`}
              >
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:animate-shimmer" />
                
                <div className="text-xl md:text-2xl p-3 bg-white border border-inherit rounded-2xl shadow-sm transform group-hover:scale-110 transition-transform duration-300 select-none">
                  {reason.icon}
                </div>
                
                {/* 🎞️ REEL STYLE TEXT */}
                <TypewriterText text={reason.text} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* The Magic Bear Trigger */}
        <motion.div 
          animate={{ scale: [1, 1.06, 1], y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          onClick={handleTeddyTap}
          className="text-6xl md:text-7xl drop-shadow-md cursor-pointer relative py-2 active:scale-95 transition-transform select-none"
          whileHover={{ scale: 1.15 }}
        >
          <span className="absolute -top-1 -left-4 text-xs animate-pulse text-yellow-400">✨</span>
          🧸
          <span className="absolute -bottom-1 -right-4 text-xs animate-ping text-pink-400">✨</span>

          <AnimatePresence>
            {teddyHearts.map((heart) => (
              <motion.span
                key={heart.id}
                initial={{ opacity: 1, scale: 0.2, y: 0, x: heart.x }}
                animate={{ opacity: 0, scale: heart.scale, y: -120, x: heart.x + (Math.random() * 60 - 30), rotate: heart.rotation }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute text-xl pointer-events-none text-rose-500 z-50 left-0 top-0"
              >
                ❤️
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Controls Blocks */}
        <div className="flex flex-col items-center space-y-4 pt-2 w-full">
          <motion.button
            whileHover={{ scale: 1.04, shadow: "0 15px 30px -5px rgba(244, 63, 94, 0.45)" }}
            whileTap={{ scale: 0.96 }}
            onClick={handleNextReason}
            className="px-12 py-4 bg-gradient-to-r from-[#ff4e7e] via-[#db2777] to-[#9333ea] text-white font-black text-xs tracking-widest uppercase rounded-full shadow-xl z-20 flex items-center gap-2 border-b-4 border-purple-700/40"
          >
            {visibleCount < personalReasons.length ? (
              <>One More Little Note <span className="animate-bounce">💞</span></>
            ) : (
              <>Take a Walk Through These Memories ➔</>
            )}
          </motion.button>

          <div className="flex items-center gap-2">
            {personalReasons.map((_, i) => (
              <div 
                key={i} 
                className={`h-2 rounded-full transition-all duration-400 ${i < visibleCount ? 'w-6 bg-gradient-to-r from-pink-500 to-purple-600' : 'w-2 bg-pink-200'}`} 
              />
            ))}
          </div>
        </div>

      </div>

      {/* 📝 RIGHT PANEL: MICRO TRACKING SIDEBAR */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden xl:flex flex-col gap-5 w-72 shrink-0 bg-white/80 backdrop-blur-xl p-6 rounded-[2rem] border-2 border-purple-100 shadow-2xl relative overflow-hidden group border-b-[10px]"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-300/20 to-transparent rounded-bl-full pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between border-b border-purple-100/70 pb-3">
          <div className="flex flex-col">
            <span className="text-[11px] font-black text-purple-600 uppercase tracking-widest">Core Progress</span>
            <span className="text-[9px] text-gray-400 font-bold tracking-wider pt-0.5">MEMORABILIA METRIC</span>
          </div>
          <span className="text-base p-1.5 bg-purple-50 rounded-xl text-purple-500 shadow-inner animate-pulse">👑</span>
        </div>
        
        <div className="space-y-3.5 relative z-10">
          {[
            { id: 1, title: "Little Moments", desc: "Some moments stay vivid." },
            { id: 2, title: "Quiet Care", desc: "Care in the little things." },
            { id: 3, title: "Your Own Journey", desc: "Your journey, your pace." },
            { id: 4, title: "Goodness in You", desc: "Keep your spark alive." },
            { id: 5, title: "Unsolved Magic", desc: "No single reason needed." }
          ].map((step) => {
            const isCompleted = visibleCount >= step.id || visibleCount === personalReasons.length;
            const isActive = visibleCount === step.id && visibleCount !== personalReasons.length;

            return (
              <div 
                key={step.id} 
                className={`p-3 rounded-xl border-2 transition-all duration-300 relative ${
                  isCompleted 
                    ? 'bg-gradient-to-br from-emerald-50/60 to-emerald-50/10 border-emerald-200/80 text-emerald-900 shadow-sm' 
                    : isActive
                    ? 'bg-gradient-to-br from-purple-50/60 to-pink-50/10 border-purple-300 shadow-md ring-2 ring-purple-100/50'
                    : 'bg-gray-50/40 border-gray-100/70 opacity-40'
                }`}
              >
                {isActive && (
                  <span className="absolute top-2.5 right-3 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                )}

                <div className="flex items-center gap-2">
                  <span className={`text-[10px] flex items-center justify-center h-4 w-4 rounded-md ${
                    isCompleted ? 'bg-emerald-100 text-emerald-600' : isActive ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {isCompleted ? "✓" : step.id}
                  </span>
                  <span className={`font-black text-[11px] tracking-wide ${isCompleted ? 'line-through decoration-emerald-500/40 opacity-70' : ''}`}>
                    {step.title}
                  </span>
                </div>
                <p className={`text-[9px] pl-6 pt-0.5 font-medium leading-relaxed ${isCompleted ? 'text-emerald-600/70' : 'text-gray-400'}`}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="relative z-10 mt-1 p-2.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100/50 flex items-center justify-between">
          <div className="text-[9px] font-bold text-purple-700/90 tracking-wide">
            Reason {visibleCount} of {personalReasons.length} Active
          </div>
          <div className="text-[10px] font-black text-pink-600 bg-white px-2 py-0.5 rounded-full shadow-sm border border-pink-100">
            {Math.round((visibleCount / personalReasons.length) * 100)}%
          </div>
        </div>
      </motion.div>

    </div>
  );
}