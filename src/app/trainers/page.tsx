'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, Camera, MessageCircle, Briefcase, Calendar, Award } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { trainers } from '@/lib/data/trainers';

const socialIconMap: Record<string, React.ElementType> = { instagram: Camera, twitter: MessageCircle, linkedin: Briefcase };

export default function TrainersPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              Our Experts
            </span>
            <h1 className="font-display text-6xl md:text-7xl text-foreground tracking-wide mb-4">
              MEET THE <span className="text-primary">TRAINERS</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
              Our certified trainers are more than coaches — they are mentors committed to your transformation. The best in Nashik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers grid */}
      <section className="section-padding" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, i) => (
              <ScrollReveal key={trainer.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-400"
                  style={{ background: 'var(--surface)' }}
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {/* Social icons */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {Object.entries(trainer.social).map(([key]) => {
                        const Icon = socialIconMap[key as keyof typeof socialIconMap];
                        return (
                          <a
                            key={key}
                            href="#"
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary transition-all"
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </a>
                        );
                      })}
                    </div>
                    {/* Name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-white font-bold text-xl leading-tight">{trainer.name}</h3>
                      <p className="text-primary text-sm font-medium">{trainer.role}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                      ))}
                      <span className="text-xs ml-1 font-medium text-foreground">5.0</span>
                      <span className="text-xs ml-1" style={{ color: 'var(--muted)' }}>({trainer.experience} experience)</span>
                    </div>

                    {/* Bio */}
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                      {trainer.bio.slice(0, 140)}...
                    </p>

                    {/* Specializations */}
                    <div className="mb-4">
                      <div className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Specializations</div>
                      <div className="flex flex-wrap gap-1.5">
                        {trainer.specializations.map((s) => (
                          <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-5">
                      <div className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Certifications</div>
                      <div className="space-y-1">
                        {trainer.certifications.slice(0, 2).map((c) => (
                          <div key={c} className="flex items-center gap-2 text-xs" style={{ color: 'var(--muted)' }}>
                            <Award className="w-3 h-3 text-accent shrink-0" />
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link href="/schedule">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 text-sm"
                      >
                        <Calendar className="w-4 h-4" />
                        Book a Session
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join as trainer CTA */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              Careers
            </span>
            <h2 className="font-display text-5xl text-foreground tracking-wide mb-4">
              TRAIN WITH THE <span className="text-primary">BEST</span>
            </h2>
            <p className="mb-8" style={{ color: 'var(--muted)' }}>
              Are you a certified fitness professional? Join the Staunch Fitness family of trainers and impact thousands of lives.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 text-lg"
              >
                Apply to Join Our Team
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
