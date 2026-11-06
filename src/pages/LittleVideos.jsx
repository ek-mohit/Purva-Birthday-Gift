import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const videoMoments = [
  {
    title: "A little collection, made by you 📸",
    subtitle: "Your own little archive of moments",
    src: "/assets/purva-memory-collection.mp4",
    note: "You put this collection together yourself, and that makes it feel even more personal. It is lovely seeing the moments you chose to keep. Har kisi ki memories ko dekhne ka apna ek tareeka hota hai, and this one feels unmistakably yours. 💗",
    tag: "Your memories, your way ✨",
  },
  {
    title: "Cuteness overload: Purva edition 🥹",
    subtitle: "A tiny clip with a whole lot of personality",
    src: "/assets/purva-cuteness-overload.mp4",
    note: "Some clips do not need a long explanation. Bas tumhari smile, that expression, and the little things that make you you. Consider this the official cuteness break in the middle of the album. 🫶🏻🌷",
    tag: "A smile worth replaying 💞",
  },
];

export default function LittleVideos() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#fff7ed] via-[#fff1f2] to-[#fdf4ff] px-4 py-14 md:px-8 font-sans">
      <div className="pointer-events-none absolute -top-20 -left-16 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.button
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/memories-grid')}
          className="mb-8 rounded-full border border-pink-100 bg-white/80 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-pink-600 shadow-sm transition hover:bg-white"
        >
          ← Back to the memory album
        </motion.button>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-purple-400">A little bonus chapter</p>
            <h1 className="font-serif text-4xl font-black italic tracking-tight text-[#db2777] md:text-6xl">Two Little Videos, Just Because 💗</h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-gray-600 md:text-base">
              The photo album had twenty moments. These two deserved their own little corner, so they could stay just as they are. No big explanation needed. 🌷
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {videoMoments.map((video, index) => (
            <motion.section
              key={video.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="overflow-hidden rounded-[2rem] border-2 border-white/90 bg-white/80 p-4 shadow-xl shadow-pink-200/40 backdrop-blur-sm md:p-5"
            >
              <div className="mb-4 px-1">
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-pink-400">{video.tag}</p>
                <h2 className="font-serif text-2xl font-bold text-[#be185d] md:text-3xl">{video.title}</h2>
                <p className="mt-1 text-xs font-semibold tracking-wide text-gray-400">{video.subtitle}</p>
              </div>
              <div className="mx-auto max-w-[340px] overflow-hidden rounded-[1.5rem] border-4 border-white bg-black shadow-lg">
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="block aspect-[9/16] max-h-[620px] w-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="px-2 pb-2 pt-5 text-sm font-medium leading-7 text-gray-600">{video.note}</p>
            </motion.section>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="font-serif text-lg italic text-pink-500">Some moments are better kept, not explained. ❤️</p>
          <button
            onClick={() => navigate('/thank-you')}
            className="rounded-full border-b-4 border-purple-700/30 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 px-9 py-4 text-xs font-black uppercase tracking-widest text-white shadow-xl transition hover:scale-[1.03] active:scale-95"
          >
            Continue to your birthday note 💌
          </button>
        </div>
      </div>
    </main>
  );
}
