'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dumbbell, Heart, Zap, Wind, Music, Apple, Activity, User, Music2, Clock, Users, ArrowRight, ChevronDown } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { programs } from '@/lib/data/programs';

const iconMap: Record<string, React.ElementType> = {
  Dumbbell, Heart, Zap, Wind, Music, Apple, Activity, User, Music2,
};

const intensityColors: Record<string, string> = {
  Beginner: 'bg-green-500/10 text-green-500 border-green-500/30',
  Intermediate: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
  Advanced: 'bg-red-500/10 text-red-500 border-red-500/30',
  'All Levels': 'bg-primary/10 text-primary border-primary/30',
};

const floorColors = ['bg-blue-500/10 text-blue-400', 'bg-primary/10 text-primary', 'bg-violet-500/10 text-violet-400'];

export default function ProgramsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              Programs & Services
            </span>
            <h1 className="font-display text-6xl md:text-7xl text-foreground tracking-wide mb-4">
              FIND YOUR <span className="text-primary">PROGRAM</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
              9 world-class programs across 3 dedicated floors. From hardcore weight training to joyful Zumba — we have the perfect fit for your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Floor map */}
      <section className="py-10" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { floor: 'Floor 1', title: 'Cardio & Functional Zone', color: 'border-blue-500/40 bg-blue-500/5', icon: Heart, programs: ['Cardio & HIIT', 'CrossFit', 'Functional Fitness', 'Nutrition'] },
              { floor: 'Floor 2', title: 'Weight Training & PT', color: 'border-primary/40 bg-primary/5', icon: Dumbbell, programs: ['Weight Training', 'Personal Training'] },
              { floor: 'Floor 3', title: 'Dance & Wellness Studio', color: 'border-violet-500/40 bg-violet-500/5', icon: Music, programs: ['Yoga', 'Zumba', 'Dance Fitness'] },
            ].map((f) => (
              <div key={f.floor} className={`p-5 rounded-2xl border ${f.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">{f.floor}</div>
                    <div className="font-bold text-sm text-foreground">{f.title}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {f.programs.map((p) => (
                    <span key={p} className="text-[10px] px-2 py-0.5 rounded-full bg-background/50 border border-border text-foreground/70">{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs list */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="All Programs" title="Everything We" titleHighlight="Offer" />
          <div className="space-y-4">
            {programs.map((program, i) => {
              const Icon = iconMap[program.icon] || Dumbbell;
              const isOpen = expanded === program.id;
              return (
                <ScrollReveal key={program.id} delay={i * 0.05}>
                  <motion.div
                    className="rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/40"
                    style={{ background: 'var(--card)' }}
                  >
                    <button
                      onClick={() => setExpanded(isOpen ? null : program.id)}
                      className="w-full p-5 flex items-center gap-4 text-left"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center mb-1">
                          <h3 className="font-bold text-lg text-foreground">{program.title}</h3>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${intensityColors[program.intensity]}`}>
                            {program.intensity}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${floorColors[program.floor - 1]}`}>
                            Floor {program.floor}
                          </span>
                        </div>
                        <p className="text-sm truncate" style={{ color: 'var(--muted)' }}>{program.description}</p>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <div className="hidden md:flex items-center gap-4 text-xs" style={{ color: 'var(--muted)' }}>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{program.duration}</span>
                          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />Max {program.maxParticipants}</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="h-px bg-border mb-4" />
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>{program.description}</p>
                            <div className="space-y-2">
                              {[
                                { label: 'Schedule', value: program.schedule },
                                { label: 'Duration', value: program.duration },
                                { label: 'Max Participants', value: `${program.maxParticipants} people` },
                                { label: 'Location', value: `Floor ${program.floor}` },
                              ].map(({ label, value }) => (
                                <div key={label} className="flex items-center gap-2 text-sm">
                                  <span className="font-semibold text-foreground w-40">{label}:</span>
                                  <span style={{ color: 'var(--muted)' }}>{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col justify-between">
                            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-4">
                              <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Included in</div>
                              <div className="text-sm font-medium text-foreground">Standard, Premium & Elite plans</div>
                            </div>
                            <Link href="/membership">
                              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="w-full py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all flex items-center justify-center gap-2 text-sm">
                                Book This Class <ArrowRight className="w-4 h-4" />
                              </motion.button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
