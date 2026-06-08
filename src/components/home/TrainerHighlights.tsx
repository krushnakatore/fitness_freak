'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, Camera } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { trainers } from '@/lib/data/trainers';

export function TrainerHighlights() {
  const featured = trainers.slice(0, 4);

  return (
    <section className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Meet The Experts"
          title="Trained by the"
          titleHighlight="Best"
          subtitle="Our certified trainers are more than coaches — they're mentors committed to your success. Meet Nashik's finest fitness experts."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((trainer, i) => (
            <ScrollReveal key={trainer.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-400 cursor-pointer"
                style={{ background: 'var(--card)' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg leading-tight">{trainer.name}</h3>
                    <p className="text-primary text-xs font-medium">{trainer.role.split('&')[0]}</p>
                  </div>
                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary/20 flex items-center justify-center"
                  >
                    <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full">
                      View Profile
                    </span>
                  </motion.div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                    <span className="text-xs text-muted ml-1" style={{ color: 'var(--muted)' }}>5.0</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {trainer.specializations.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-primary/10 text-primary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-foreground">{trainer.experience} exp</span>
                    {trainer.social.instagram && (
                      <a href="#" className="text-muted hover:text-pink-500 transition-colors" style={{ color: 'var(--muted)' }}>
                        <Camera className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="text-center mt-10">
          <Link href="/trainers">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Meet All Trainers <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
