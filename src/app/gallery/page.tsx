'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, X } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const transformations = [
  { id: 1, name: 'Rohit K.', duration: '8 months', achievement: '–22 kg | Muscle Gain', before: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&q=80', after: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=300&q=80', program: 'Weight Training', category: 'Weight Loss' },
  { id: 2, name: 'Sneha A.', duration: '6 months', achievement: '–15 kg | Flexibility ++', before: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80', after: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&q=80', program: 'Yoga + HIIT', category: 'Weight Loss' },
  { id: 3, name: 'Amol P.', duration: '12 months', achievement: '+8 kg Muscle Mass', before: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80', after: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=300&q=80', program: 'Bodybuilding', category: 'Muscle Gain' },
  { id: 4, name: 'Pooja M.', duration: '4 months', achievement: '–15 kg via Zumba!', before: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80', after: 'https://images.unsplash.com/photo-1545912453-5b965e3a74f5?w=300&q=80', program: 'Zumba', category: 'Dance Fitness' },
  { id: 5, name: 'Kiran D.', duration: '5 months', achievement: 'Athletic Performance', before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80', after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&q=80', program: 'CrossFit', category: 'Athletic' },
  { id: 6, name: 'Nisha K.', duration: '4 months', achievement: '–18 kg Post-Pregnancy', before: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80', after: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&q=80', program: 'HIIT + Cardio', category: 'Weight Loss' },
];

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80', category: 'Gym', label: 'Weight Training Floor' },
  { id: 2, src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80', category: 'Dance', label: 'Zumba Studio' },
  { id: 3, src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80', category: 'Yoga', label: 'Yoga Studio' },
  { id: 4, src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80', category: 'CrossFit', label: 'CrossFit Zone' },
  { id: 5, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', category: 'Cardio', label: 'Cardio Floor' },
  { id: 6, src: 'https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=400&q=80', category: 'Gym', label: 'Reception & Lobby' },
  { id: 7, src: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=400&q=80', category: 'Gym', label: 'Olympic Lifting Platform' },
  { id: 8, src: 'https://images.unsplash.com/photo-1599058918144-1ffabb7b7a18?w=400&q=80', category: 'Classes', label: 'Group Fitness Class' },
  { id: 9, src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80', category: 'Classes', label: 'Morning HIIT Class' },
];

const galCategories = ['All', 'Gym', 'Dance', 'Yoga', 'CrossFit', 'Cardio', 'Classes'];
const transCategories = ['All', 'Weight Loss', 'Muscle Gain', 'Dance Fitness', 'Athletic'];

export default function GalleryPage() {
  const [galCat, setGalCat] = useState('All');
  const [transCat, setTransCat] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filteredGallery = galCat === 'All' ? galleryImages : galleryImages.filter((g) => g.category === galCat);
  const filteredTrans = transCat === 'All' ? transformations : transformations.filter((t) => t.category === transCat);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              Gallery
            </span>
            <h1 className="font-display text-6xl md:text-7xl text-foreground tracking-wide mb-4">
              REAL <span className="text-primary">RESULTS</span>
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
              A gallery of our world-class facilities and the incredible transformations of our members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facility gallery */}
      <section className="section-padding" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Facility" title="The" titleHighlight="Titan Experience" />
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
            {galCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setGalCat(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border shrink-0 transition-all ${galCat === cat ? 'bg-primary text-white border-primary' : 'border-border text-foreground hover:border-primary/40 hover:text-primary'}`}
                style={{ background: galCat === cat ? undefined : 'var(--surface)' }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <AnimatePresence>
              {filteredGallery.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group aspect-[4/3]"
                  onClick={() => setLightbox(img.src)}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                    <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-white font-semibold text-sm">{img.label}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightbox}
              alt="Gallery"
              className="max-h-[85vh] max-w-full rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transformations */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Transformations" title="Before &" titleHighlight="After" subtitle="Real members, real results. These transformations happened right here at Titan Gym, Nashik." />
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
            {transCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setTransCat(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border shrink-0 transition-all ${transCat === cat ? 'bg-primary text-white border-primary' : 'border-border text-foreground hover:border-primary/40 hover:text-primary'}`}
                style={{ background: transCat === cat ? undefined : 'var(--background)' }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredTrans.map((t, i) => (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all"
                  style={{ background: 'var(--card)' }}
                >
                  <div className="grid grid-cols-2 relative">
                    <div className="relative">
                      <img src={t.before} alt="Before" className="w-full h-40 object-cover" />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Before</div>
                    </div>
                    <div className="relative">
                      <img src={t.after} alt="After" className="w-full h-40 object-cover" />
                      <div className="absolute bottom-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">After</div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shadow-lg z-10">→</div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-foreground">{t.name}</h3>
                      <span className="text-xs text-primary font-semibold">{t.duration}</span>
                    </div>
                    <p className="text-sm text-primary font-bold mb-1">{t.achievement}</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>Program: {t.program}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
