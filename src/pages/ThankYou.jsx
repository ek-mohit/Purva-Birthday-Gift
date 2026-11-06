import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function ThankYou() {
  const [mouseTrails, setMouseTrails] = useState([]);
  const [activeSecret, setActiveSecret] = useState(null);

  // 1. Auto Blast Confetti when the page loads
  useEffect(() => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.8 },
        colors: ['#f43f5e', '#fb7185', '#fda4af']
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.8 },
        colors: ['#f43f5e', '#fb7185', '#fda4af']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  const handleMouseMoveOrTap = (e) => {
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    if (!clientX || !clientY) return;

    const newHeart = {
      id: Date.now() + Math.random(),
      x: clientX,
      y: clientY,
      size: Math.random() * 14 + 10,
    };
    setMouseTrails((prev) => [...prev.slice(-12), newHeart]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setMouseTrails((prev) => prev.slice(1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerConfettiExplosion = () => {
    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#db2777', '#fda4af', '#fff']
    });
  };

  const handleSecretClick = (id, emoji) => {
    setActiveSecret(id);
    confetti({
      particleCount: 40,
      spread: 50,
      scalar: 1.2,
      origin: { y: 0.7 },
      colors: ['#ff4e7e', '#ffeb3b', '#2196f3']
    });
  };

  // November 2026 birthday calendar
  const calendarDays = [
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
    29, 30, "", "", "", "", ""
  ];

  return (
    <div 
      onMouseMove={handleMouseMoveOrTap}
      onTouchMove={handleMouseMoveOrTap}
      className="min-h-screen bg-gradient-to-tr from-[#fff1f2] via-[#fff5f6] to-[#fbf1ff] flex flex-col lg:flex-row items-center justify-center p-4 md:p-12 gap-10 font-sans select-none relative overflow-hidden"
    >
      
      {/* Interactive Heart Trail */}
      <AnimatePresence>
        {mouseTrails.map((heart) => (
          <motion.span
            key={heart.id}
            initial={{ opacity: 1, scale: 0.3, y: 0 }}
            animate={{ opacity: 0, scale: 1.4, y: -50, rotate: Math.random() * 40 - 20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              position: 'fixed',
              left: heart.x - heart.size / 2,
              top: heart.y - heart.size / 2,
              width: heart.size,
              height: heart.size,
              pointerEvents: 'none',
              zIndex: 50,
              color: '#fb7185'
            }}
          >
            ❤️
          </motion.span>
        ))}
      </AnimatePresence>

      {/* 👑 LEFT PANEL: MAIN GREETING CARD */}
      <motion.div
        initial={{ opacity: 0, x: -60, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.03, rotate: -0.5, shadow: "0 35px 70px -15px rgba(244,63,94,0.25)" }}
        className="max-w-md w-full bg-[#fcfcfc] border-4 border-white rounded-3xl p-6 md:p-10 shadow-2xl space-y-6 relative z-10 flex flex-col justify-between items-center overflow-hidden border-b-[14px] border-r-[6px]"
        style={{ boxShadow: "15px 25px 50px -10px rgba(0,0,0,0.09), inset 0 0 40px rgba(0,0,0,0.01)" }}
      >
        {/* Card Doodles */}
        <div className="absolute top-4 left-4 flex flex-col items-center opacity-80">
          <span className="text-2xl animate-bounce duration-[3.5s]">🎈</span>
          <span className="text-xs text-yellow-400 -mt-1">✨</span>
        </div>
        <div className="absolute top-6 right-6 text-xl text-yellow-500 animate-pulse">✨</div>

        <div className="space-y-1 pt-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#db2777] font-serif italic tracking-wide leading-tight drop-shadow-sm">
            Happy Birthday, Purva!
          </h2>
          <p className="text-[10px] text-pink-400 uppercase tracking-widest font-bold">A little Diwali-born sparkle 🪔</p>
        </div>

        <div className="space-y-4 text-gray-600 text-xs md:text-sm font-medium leading-relaxed font-sans px-2 text-center relative z-10">
          <div className="absolute -left-4 top-1/2 text-sm text-yellow-400 opacity-50">✨</div>
          <div className="absolute -right-4 top-1/2 text-sm text-yellow-400 opacity-50">✨</div>
          
          <p>
            From our first meeting in Bareilly over English notes to the little walks we took around the city, exploring cafés and finding new places together, there are so many moments I still remember fondly. I remember walking through the streets of Kota with you, you coming outside my hostel to pick me up, and me walking you back to yours afterwards. I remember how we would share the stress of our entire day during evening calls, and the funny drama around our “only Saturday and Sunday” rule, as if we could actually stick to it. And those hours-long calls when I would listen to your interesting stories, random facts and everything about space. Somehow, even the simplest conversations never felt ordinary. I am not trying to turn these memories into a grand story or define what they mean today. I just wanted to make a small place to say that your presence in my life has mattered, and that I genuinely wish well for you. As you step into another year, I hope your final-year efforts bring exciting opportunities, your days feel lighter, your health stays strong and you keep finding reasons to be proud of yourself. Please take care of yourself, even when life gets busy. 🌷
          </p>
          
          <p className="text-[#e11d48] font-bold bg-rose-50/80 py-2.5 px-4 rounded-2xl border border-rose-100/60 inline-block text-[11px] md:text-xs">
            Born on a day lit by Chhoti Diwali, you deserve a year with its own share of light: good surprises, peaceful mornings, brave new beginnings and plenty of reasons to smile. Happy birthday, Purva. 🪔❤️
          </p>
        </div>

        {/* 🎂 CAKE MASCOT */}
        <motion.div 
          animate={{ y: [0, -5, 0], scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          className="text-5xl md:text-6xl my-2 drop-shadow-sm relative select-none"
        >
          <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-base animate-pulse text-red-500">🔥</span>
          🎂
        </motion.div>

        {/* Action Button */}
        <div className="w-full pt-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={triggerConfettiExplosion}
            className="w-full py-3.5 bg-gradient-to-r from-[#ff4e7e] to-[#e11d48] text-white font-black text-xs tracking-widest rounded-full shadow-lg uppercase transition-all duration-200"
          >
            Make a Little More Noise 🎉
          </motion.button>
        </div>
      </motion.div>


      {/* 🎯 RIGHT PANEL: FLOATING SIDEBAR (CALENDAR + SECRET STICKERS) */}
      <div className="flex flex-col gap-6 max-w-sm w-full z-10">
        
        {/* 📅 SECTION 1: THE FLOATING CALENDAR */}
        <motion.div 
          initial={{ opacity: 0, x: 60, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full bg-white/80 border border-pink-100 p-4 rounded-3xl shadow-xl backdrop-blur-md flex flex-col items-center space-y-2 relative group"
        >
          <div className="absolute -top-3 -right-3 text-2xl rotate-[12deg] group-hover:rotate-[25deg] transition-transform">📅</div>
          
          <div className="text-sm font-black text-gray-700 tracking-wide font-serif">
            November 2026
          </div>
          
          <div className="grid grid-cols-7 gap-1.5 w-full text-[10px] font-bold text-gray-400 uppercase text-center border-b border-pink-50 pb-1">
            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
          </div>

          <div className="grid grid-cols-7 gap-1 w-full text-xs font-semibold text-gray-600 text-center">
            {calendarDays.map((day, i) => {
              const isTargetDay = day === 7;
              return (
                <div 
                  key={i} 
                  className={`h-7 flex items-center justify-center relative rounded-full transition-all ${
                    isTargetDay ? 'text-white font-black z-10 scale-110' : ''
                  }`}
                >
                  {isTargetDay && (
                    <motion.span 
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                      transition={{ scale: { repeat: Infinity, duration: 2 }, rotate: { duration: 0 } }}
                      className="absolute inset-0 bg-gradient-to-tr from-[#ff4e7e] to-[#db2777] rounded-full shadow-md shadow-pink-300 -z-10"
                    />
                  )}
                  {day}
                </div>
              );
            })}
          </div>
          <div className="text-[10px] text-pink-500 font-bold font-serif pt-1 italic">🪔 7 November · Chhoti Diwali & your birthday!</div>
        </motion.div>


        {/* 🔮 SECTION 2: INTERACTIVE MEMORY VAULT STICKERS */}
        <motion.div
          initial={{ opacity: 0, x: 60, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full bg-white/70 border border-purple-100 p-5 rounded-3xl shadow-xl backdrop-blur-md space-y-4"
        >
          <div className="text-xs font-black text-[#db2777] tracking-wider uppercase">
            ✨ Tap Secret Stickers
          </div>

          {/* Sticker Grid Items */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'vibe', emoji: '🌸', label: 'Our Vibe' },
              { id: 'promise', emoji: '🤝', label: 'Promise' },
              { id: 'wish', emoji: '👑', label: 'For You' }
            ].map((sticker) => (
              <motion.button
                key={sticker.id}
                whileHover={{ scale: 1.08, rotate: Math.random() * 8 - 4 }}
                whileTap={{ scale: 0.93 }}
                onClick={() => handleSecretClick(sticker.id, sticker.emoji)}
                className={`p-3 rounded-2xl border transition-all flex flex-col items-center justify-center gap-1 shadow-sm ${
                  activeSecret === sticker.id 
                    ? 'bg-gradient-to-br from-pink-50 to-purple-50 border-pink-300 text-pink-600 font-bold' 
                    : 'bg-white border-gray-100 text-gray-600'
                }`}
              >
                <span className="text-xl">{sticker.emoji}</span>
                <span className="text-[9px] uppercase tracking-tight font-medium">{sticker.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Conditional Display Terminal for Secret Notes */}
          <div className="min-h-[50px] bg-white/50 border border-dashed border-pink-200/60 rounded-xl p-3 flex items-center justify-center text-center">
            <AnimatePresence mode="wait">
              {!activeSecret ? (
                <motion.p 
                  key="empty"
                  initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} exit={{ opacity: 0 }}
                  className="text-[11px] text-gray-400 italic"
                >
                  Click a sticker above to unlock a hidden note... 🤫
                </motion.p>
              ) : activeSecret === 'vibe' ? (
                <motion.p 
                  key="vibe"
                  initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="text-[11px] text-[#db2777] font-semibold leading-relaxed"
                >
                  "From Kota calls to little updates from Srinagar, some conversations became a familiar part of ordinary days. I hope you always find people who listen with patience and understand you without making you explain everything. 💗"
                </motion.p>
              ) : activeSecret === 'promise' ? (
                <motion.p 
                  key="promise"
                  initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="text-[11px] text-purple-600 font-semibold leading-relaxed"
                >
                  "A small reminder from someone who has seen you forget the clock during busy days: eat on time, rest when you need to and do not be too hard on yourself. Your well-being matters. 🫶🏻"
                </motion.p>
              ) : (
                <motion.p 
                  key="wish"
                  initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="text-[11px] text-rose-600 font-black leading-relaxed"
                >
                  "May your final year bring the opportunities you have worked for, kind people, new places to explore and the courage to choose what is right for you. Keep that spark, Purva. 🌻✨"
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

    </div>
  );
}