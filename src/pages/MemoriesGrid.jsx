import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const memoryData = [
  { date: "Kota City Mall · Your own little outing 🏙️", caption: "You had gone to Kota City Mall with your group and clicked this yourself. I was not there that day, but it still belongs to the Kota chapter. Not every memory needs both of us in the frame to matter. 🌷", imgSrc: "/assets/memory01.jpg" },
  { date: "Kota · My birthday celebration 🎂", caption: "My birthday in Kota, with everyone gathered around the table. A simple celebration, familiar faces and the kind of evening that quietly becomes part of a chapter you remember. ❤️", imgSrc: "/assets/memory02.jpg" },
  { date: "Allen days · Between two mock-test shifts 📚", caption: "That Allen uniform takes me straight back to your mock-test routine. First shift done, second shift still waiting, and you making it through those long Kota days. I hope you remember how much effort you put in, even on the tiring ones. 🫶🏻", imgSrc: "/assets/memory03.jpg" },
  { date: "Deeksha's birthday · The protective frame 🧿", caption: "You once told me this was your favourite because it looked like I was keeping you close and safe. It is a simple frame, but I understand why it stayed with you. Kabhi kabhi ek photo bina kuch kahe bhi bahut kuch keh deti hai. ❤️", imgSrc: "/assets/memory04.jpg" },
  { date: "Deeksha's birthday · Your favourite random frame 💗", caption: "This was such a random picture from Deeksha's birthday, with you holding my face. You told me it was your favourite, and that detail makes me smile even now. It was never a planned pose; bas ek chhota sa moment jo tumhe bahut pasand aaya. 🫶🏻", imgSrc: "/assets/memory05.jpg" },
  { date: "Deeksha's birthday · Another little snapshot 🌸", caption: "Another frame from that same birthday evening. The best part of old photographs is how they bring back the atmosphere too: the people, the noise, the silly conversations and the little details we never planned to remember.", imgSrc: "/assets/memory06.jpg" },
  { date: "Deeksha's birthday · The group favourite 📸", caption: "That random group memory you liked so much. It was never about a perfect pose or a planned photograph. It was simply one of those moments that felt like itself, and that is probably why it stayed with you. 💞", imgSrc: "/assets/memory07.jpg" },
  { date: "Kota · Future plans on a video call 📱", caption: "Two different screens, one long conversation, and all those future plans we used to discuss. We were figuring out life one call at a time, usually without noticing how late it had become. ✨", imgSrc: "/assets/memory08.jpg" },
  { date: "Bareilly · Momos before Srinagar 🥟", caption: "Around the time you were leaving for Srinagar in 2023, I asked you to meet near Vipin Chauraha for momos. It was a small plan, but the timing made that ordinary plate of momos feel like a proper memory.", imgSrc: "/assets/memory09.jpg" },
  { date: "Bareilly · The 2023 goodbye 🧳", caption: "One of those last moments together before your first move to Srinagar. You were leaving for a new city, and I was trying to act normal about it. Photo mein jitna dikh raha hai, usse zyada us din dil mein chal raha tha. 🏔️", imgSrc: "/assets/memory10.jpg" },
  { date: "A tiny candid · Cutie Purva 😄", caption: "No big occasion, no perfect pose. Just one of those expressions that makes this album feel like you. Some photographs are worth keeping simply because they make you smile. 💕", imgSrc: "/assets/memory11.jpg" },
  { date: "Srinagar · You telling me how college was going 📞", caption: "A video-call moment from your early days at NIT Srinagar. You were showing me how things were going there, and I was listening from my side of the screen. New place, new routine, and a lot to figure out. 🌻", imgSrc: "/assets/memory12.jpg" },
  { date: "You in my T-shirt 🤍", caption: "You had worn my T-shirt and clicked this picture yourself. It is such a simple memory, but somehow those everyday details stay with me. No special occasion needed; this one is memorable just because it is you. 🤍", imgSrc: "/assets/memory13.jpg" },
  { date: "Bareilly · Before you left for Srinagar 🥺", caption: "This was our meeting before you left for NIT Srinagar in 2023. I was holding back my tears because I genuinely did not know when we would meet again, or how things would be the next time. I tried to look normal, but andar se kaafi kuch chal raha tha. ❤️", imgSrc: "/assets/memory14.jpg" },
  { date: "A reminder to eat on time 🍲", caption: "I was in the middle of JEE preparation, eating on one side of the call, and you were reminding me to eat properly from Srinagar. You were settling into a new place too, but still found space to check on me. That care was never a small thing. 🫶🏻", imgSrc: "/assets/memory15.jpg" },
  { date: "A recent call · Just catching up 💬", caption: "A more recent video call, when we were both in our own colleges and simply catching up as two people who have shared a long chapter. No grand occasion, just a familiar conversation.", imgSrc: "/assets/memory16.jpg" },
  { date: "A video-call memory from the Kota chapter 📱", caption: "One of those little call captures from when we were together. The screen may be old, but the memory of those everyday conversations is still easy to recognise. ✨", imgSrc: "/assets/memory17.jpg" },
  { date: "Soumil's sister's wedding ✨", caption: "You at Soumil’s sister’s wedding, dressed up for the occasion. A different setting from the Kota and study-day photographs, but a lovely glimpse of your world beyond preparation and college routines. 🌼", imgSrc: "/assets/memory18.jpg" },
  { date: "NIT Srinagar · The drama-day photo 🎭", caption: "This was after your club drama performance, when you clicked a picture with another guy. I remember seeing it and feeling unexpectedly jealous. Looking back, it was one of those moments when my possessiveness showed more clearly than my words ever could. 😅💭", imgSrc: "/assets/memory19.jpg" },
  { date: "A little stage moment · Your college performance 🎭", caption: "A little clip from your first birthday in Srinagar, with your friends around and that tiny dance step after the cake cutting. I hope you had a lovely day and that the city slowly started feeling familiar. 🎂🪔", videoSrc: "/assets/memory20.mp4" }
];

export default function MemoriesGrid() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7ed] to-[#fff1f2] py-16 px-4 md:px-8 font-sans flex flex-col justify-between items-center relative overflow-hidden">
      <div className="absolute top-10 left-10 text-xl opacity-40 animate-pulse">🌸</div>
      <div className="absolute bottom-10 right-10 text-2xl opacity-40 animate-bounce">✨</div>
      <div className="text-center space-y-3 max-w-3xl mb-12 z-10">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold text-[#db2777] font-serif italic tracking-wide">Twenty Little Pieces of a Story 📸</motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-600 text-sm md:text-base font-medium tracking-wide leading-relaxed">Bareilly beginnings, Kota routines, birthday evenings, the first Srinagar chapter and calls across cities. Not the whole story, just twenty little moments worth keeping with warmth. ❤️</motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl w-full px-2 z-10">
        {memoryData.map((item, idx) => {
          const rotations = [-2, 1.5, -1, 2];
          const rot = rotations[idx % rotations.length];
          return (
            <motion.div key={idx} initial={{ opacity: 0, y: 30, scale: 0.95, rotate: rot }} whileInView={{ opacity: 1, y: 0, scale: 1, rotate: rot }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }} whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }} className="bg-white p-3 pb-5 rounded-xl shadow-md border border-pink-50/60 flex flex-col items-center group">
              <div className="w-full aspect-[4/5] bg-gray-50 rounded-lg mb-3 overflow-hidden border border-gray-100 relative">
                {item.videoSrc ? <video src={item.videoSrc} controls playsInline preload="metadata" className="w-full h-full object-cover" /> : <img src={item.imgSrc} alt={`Purva memory ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
              <div className="w-full text-left space-y-2 px-1">
                <span className="text-[11px] font-bold text-pink-500 font-serif italic block tracking-wide">{item.date}</span>
                <p className="text-gray-600 text-[12px] leading-relaxed font-medium">{item.caption}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="pt-16 pb-6 z-10 w-full flex flex-col sm:flex-row justify-center items-center gap-4">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate('/little-videos')} className="px-9 py-4 bg-white text-pink-600 border-2 border-pink-200 font-black text-xs tracking-widest rounded-full shadow-lg uppercase flex items-center gap-2">Two Little Videos 🎞️💗</motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate('/thank-you')} className="px-10 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold text-xs tracking-widest rounded-full shadow-lg uppercase flex items-center gap-2">A Birthday Note for You 💌</motion.button>
      </div>
    </div>
  );
}
