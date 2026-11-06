/*import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function TypewriterEffect({ text, speed = 45, delay = 0, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev < text.length) return prev + 1;
          clearInterval(intervalId);
          onComplete?.();
          return prev;
        });
      }, speed);
    }, delay);
    return () => { clearTimeout(timeoutId); if (intervalId) clearInterval(intervalId); };
  }, [text, speed, delay, onComplete]);
  return <span>{text.slice(0, currentIndex)}</span>;
}

export default function Welcome() {
  const navigate = useNavigate();
  const [startSubText, setStartSubText] = useState(false);
  const [clickHearts, setClickHearts] = useState([]);
  const handleButtonHover = () => {
    const emojis = ['❤️', '💗', '🫶🏻', '✨', '🌷', '🦋'];
    const burst = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i, emoji: emojis[i], x: Math.random() * 200 - 100, y: Math.random() * -70 - 20,
    }));
    setClickHearts(burst);
    setTimeout(() => setClickHearts([]), 1000);
  };
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#fff1f2] via-[#fff5f5] to-[#fdf4ff] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden font-sans select-none">
      <div className="absolute inset-0 opacity-[0.17] bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url('/assets/bg-photo1.jpeg')` }} />
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-pink-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-purple-200/20 rounded-full blur-[100px] pointer-events-none" />
      <motion.div initial={{ opacity: 0, x: -60, y: 30, rotate: -12 }} animate={{ opacity: 1, x: 0, y: 0, rotate: -6 }} transition={{ duration: 1 }} whileHover={{ scale: 1.05, rotate: -2 }} className="hidden lg:block absolute left-12 bottom-16 w-48 h-64 bg-white p-3 rounded-[1.8rem] shadow-2xl border border-pink-100/80 border-b-[14px] z-10 group">
        <div className="w-full h-[82%] rounded-2xl overflow-hidden bg-gray-50 relative"><img src="/assets/side-photo1.jpeg" alt="Purva" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-3xl">🌸</div></div>
        <div className="text-[11px] font-serif text-pink-400 font-black pt-2 tracking-widest">Cutie Purva 🌷</div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 60, y: -30, rotate: 12 }} animate={{ opacity: 1, x: 0, y: 0, rotate: 4 }} transition={{ duration: 1, delay: 0.1 }} whileHover={{ scale: 1.05, rotate: 0 }} className="hidden lg:block absolute right-14 top-16 w-48 h-80 bg-white p-3 rounded-[2.2rem] shadow-2xl border border-purple-100 border-b-[14px] overflow-hidden z-10">
        <div className="w-full h-full rounded-[1.6rem] overflow-hidden relative bg-black"><video src="/assets/side-video1.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" /><div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/40 text-[8px] text-white font-black px-2 py-0.5 rounded-full backdrop-blur-md tracking-wider">Wake Up cafe ..me & u 🎂</div></div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: -55, y: 25, rotate: -5 }} animate={{ opacity: 1, x: 0, y: 0, rotate: -3 }} transition={{ duration: 1, delay: 0.2 }} whileHover={{ scale: 1.04, rotate: 0 }} className="hidden xl:block absolute left-12 top-16 w-44 h-64 bg-white p-2.5 rounded-[2rem] shadow-2xl border border-rose-100 border-b-[12px] z-10 overflow-hidden">
        <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-black relative">
          <video src="/assets/bubble-video1.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/45 text-[8px] text-white font-bold px-2 py-1 rounded-full whitespace-nowrap">A little college moment 🎭</div>
        </div>
      </motion.div>
      <div className="absolute top-24 left-[20%] text-pink-300 text-2xl opacity-50 animate-pulse">🌷</div>
      <div className="absolute bottom-32 right-[22%] text-purple-300 text-3xl opacity-50 animate-bounce">✨</div>
      <motion.div initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: 'spring', stiffness: 100, damping: 20 }} className="space-y-6 max-w-2xl w-full z-10 bg-white/80 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl border-2 border-white/60 shadow-2xl border-b-[8px] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-80" />
        <p className="text-xs md:text-sm font-black tracking-[0.28em] uppercase text-pink-500">A small birthday corner for</p>
        <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-[#e11d48] via-[#db2777] to-[#9333ea] bg-clip-text text-transparent tracking-tight font-serif leading-tight"><TypewriterEffect text="Purva, with a little care... 💗" speed={58} onComplete={() => setStartSubText(true)} /></h1>
        <div className="text-gray-600 font-semibold text-sm md:text-base tracking-wide max-w-xl mx-auto leading-relaxed min-h-[112px]">{startSubText && <TypewriterEffect text="Some stories begin with something as simple as sharing Khashma Ma’am’s English notes in Class 11. Back then, we were just two students getting to know each other in Bareilly. Then came the best-friend days of Class 12, the Kota chapter, long calls, exam schedules, birthday evenings and eventually two different college cities. Life kept moving and the chapters changed, but the memories still deserve a gentle smile. Bas aaj ka din tumhare naam: no expectations, no complicated words, just a little reminder that you matter and I genuinely wish good things for you. Happy birthdayyy purvaaaaaa!!!!!!!!!!!!!!!!!!!❤️" speed={27} />}</div>
        <div className="pt-2 relative inline-block mx-auto"><AnimatePresence>{clickHearts.map((heart) => <motion.span key={heart.id} initial={{ opacity: 1, scale: 0.3, x: 0, y: 0 }} animate={{ opacity: 0, scale: 1.2, x: heart.x, y: heart.y }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute text-xl pointer-events-none z-30 left-1/2 top-1/2">{heart.emoji}</motion.span>)}</AnimatePresence>
          <motion.button whileHover={{ scale: 1.05, boxShadow: '0 20px 35px -5px rgba(244, 63, 94, 0.35)' }} onMouseEnter={handleButtonHover} whileTap={{ scale: 0.95 }} onClick={() => navigate('/reasons')} className="px-10 py-4 bg-gradient-to-r from-[#ff4e7e] via-[#db2777] to-[#9333ea] text-white font-black text-xs tracking-widest rounded-full shadow-xl transition-all flex items-center gap-2.5 uppercase border-b-4 border-purple-700/40 relative z-20"><span>Open your little birthday surprise</span><span className="animate-bounce text-sm">🎁</span></motion.button>
        </div>
        <p className="text-[11px] text-pink-400 font-semibold tracking-wide">Made with memories, warmth & a few too many emojis 🪔</p>
      </motion.div>
    </div>
  );
}
  */


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function TypewriterEffect({ text, speed = 45, delay = 0, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev < text.length) return prev + 1;
          clearInterval(intervalId);
          onComplete?.();
          return prev;
        });
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, delay, onComplete]);

  return <span>{text.slice(0, currentIndex)}</span>;
}

export default function Welcome() {
  const navigate = useNavigate();
  const [startSubText, setStartSubText] = useState(false);
  const [clickHearts, setClickHearts] = useState([]);

  const handleButtonHover = () => {
    const emojis = ['❤️', '💗', '🫶🏻', '✨', '🌷', '🦋'];

    const burst = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      emoji: emojis[i],
      x: Math.random() * 200 - 100,
      y: Math.random() * -70 - 20,
    }));

    setClickHearts(burst);
    setTimeout(() => setClickHearts([]), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#fff1f2] via-[#fff5f5] to-[#fdf4ff] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden font-sans select-none">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 opacity-[0.17] bg-cover pointer-events-none"
        style={{
          backgroundImage: "url('/assets/bg-photo1.jpeg')",
          backgroundPosition: 'center 30%',
        }}
      />

      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-pink-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-purple-200/20 rounded-full blur-[100px] pointer-events-none" />

      {/* BOTTOM LEFT: PHOTO 13 */}
      <motion.div
        initial={{ opacity: 0, x: -60, y: 30, rotate: -12 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05, rotate: -2 }}
        className="hidden lg:block absolute left-12 bottom-16 w-48 h-64 bg-white p-3 rounded-[1.8rem] shadow-2xl border border-pink-100/80 border-b-[14px] z-10 group"
      >
        <div className="w-full h-[82%] rounded-2xl overflow-hidden bg-gray-50 relative">
          <img
            src="/assets/side-photo1.jpeg"
            alt="Cutie Purva"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-3xl">
            🌸
          </div>
        </div>

        <div className="text-[11px] font-serif text-pink-400 font-black pt-2 tracking-widest">
          Cutie Purva 🌷
        </div>
      </motion.div>

      {/* RIGHT TOP VIDEO: UNCHANGED */}
      <motion.div
        initial={{ opacity: 0, x: 60, y: -30, rotate: 12 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 4 }}
        transition={{ duration: 1, delay: 0.1 }}
        whileHover={{ scale: 1.05, rotate: 0 }}
        className="hidden lg:block absolute right-14 top-16 w-48 h-80 bg-white p-3 rounded-[2.2rem] shadow-2xl border border-purple-100 border-b-[14px] overflow-hidden z-10"
      >
        <div className="w-full h-full rounded-[1.6rem] overflow-hidden relative bg-black">
          <video
            src="/assets/side-video1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/40 text-[8px] text-white font-black px-2 py-0.5 rounded-full backdrop-blur-md tracking-wider">
            Wake Up cafe ..me & u 🎂
          </div>
        </div>
      </motion.div>

      {/* LEFT TOP VIDEO: UPDATED CAPTION */}
      <motion.div
        initial={{ opacity: 0, x: -55, y: 25, rotate: -5 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -3 }}
        transition={{ duration: 1, delay: 0.2 }}
        whileHover={{ scale: 1.04, rotate: 0 }}
        className="hidden xl:block absolute left-12 top-16 w-44 h-64 bg-white p-2.5 rounded-[2rem] shadow-2xl border border-rose-100 border-b-[12px] z-10 overflow-hidden"
      >
        <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-black relative">
          <video
            src="/assets/bubble-video1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/45 text-[8px] text-white font-bold px-2 py-1 rounded-full whitespace-nowrap">
            Purvaa Darling ❤️
          </div>
        </div>
      </motion.div>

      {/* FLOATING EMOJIS */}
      <div className="absolute top-24 left-[20%] text-pink-300 text-2xl opacity-50 animate-pulse">
        🌷
      </div>

      <div className="absolute bottom-32 right-[22%] text-purple-300 text-3xl opacity-50 animate-bounce">
        ✨
      </div>

      {/* MAIN WELCOME CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="space-y-6 max-w-2xl w-full z-10 bg-white/80 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl border-2 border-white/60 shadow-2xl border-b-[8px] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-80" />

        <p className="text-xs md:text-sm font-black tracking-[0.28em] uppercase text-pink-500">
          A small birthday corner for
        </p>

        <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-[#e11d48] via-[#db2777] to-[#9333ea] bg-clip-text text-transparent tracking-tight font-serif leading-tight">
          <TypewriterEffect
            text="Purva, with a little care... 💗"
            speed={58}
            onComplete={() => setStartSubText(true)}
          />
        </h1>

        <div className="text-gray-600 font-semibold text-sm md:text-base tracking-wide max-w-xl mx-auto leading-relaxed min-h-[112px]">
          {startSubText && (
            <TypewriterEffect
              text="Some stories begin with something as simple as sharing Khashma Ma’am’s English notes in Class 11. Back then, we were just two students getting to know each other in Bareilly. Then came the best-friend days of Class 12, the Kota chapter, long calls, exam schedules, birthday evenings and eventually two different college cities. Life kept moving and the chapters changed, but the memories still deserve a gentle smile. Bas aaj ka din tumhare naam: no expectations, no complicated words, just a little reminder that you matter and I genuinely wish good things for you. Happy birthdayyy purvaaaaaa!!!!!!!!!!!!!!!!!!!❤️"
              speed={27}
            />
          )}
        </div>

        {/* BUTTON AND FLOATING HEARTS */}
        <div className="pt-2 relative inline-block mx-auto">
          <AnimatePresence>
            {clickHearts.map((heart) => (
              <motion.span
                key={heart.id}
                initial={{ opacity: 1, scale: 0.3, x: 0, y: 0 }}
                animate={{
                  opacity: 0,
                  scale: 1.2,
                  x: heart.x,
                  y: heart.y,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute text-xl pointer-events-none z-30 left-1/2 top-1/2"
              >
                {heart.emoji}
              </motion.span>
            ))}
          </AnimatePresence>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 35px -5px rgba(244, 63, 94, 0.35)',
            }}
            onMouseEnter={handleButtonHover}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/reasons')}
            className="px-10 py-4 bg-gradient-to-r from-[#ff4e7e] via-[#db2777] to-[#9333ea] text-white font-black text-xs tracking-widest rounded-full shadow-xl transition-all flex items-center gap-2.5 uppercase border-b-4 border-purple-700/40 relative z-20"
          >
            <span>Open your little birthday surprise</span>
            <span className="animate-bounce text-sm">🎁</span>
          </motion.button>
        </div>

        <p className="text-[11px] text-pink-400 font-semibold tracking-wide">
          Made with memories, warmth & a few too many emojis 🪔
        </p>
      </motion.div>
    </div>
  );
}

