'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Clock, Flame } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { classSchedule, days, categories } from '@/lib/data/schedule';
import { cn } from '@/lib/utils';

const categoryColors: Record<string, string> = {
  CrossFit: 'bg-orange-500/10 text-orange-500 border-orange-500/30',
  Yoga: 'bg-violet-500/10 text-violet-500 border-violet-500/30',
  Dance: 'bg-pink-500/10 text-pink-500 border-pink-500/30',
  Cardio: 'bg-red-500/10 text-red-500 border-red-500/30',
  Strength: 'bg-blue-500/10 text-blue-500 border-blue-500/30',
  Functional: 'bg-green-500/10 text-green-500 border-green-500/30',
  All: 'bg-primary/10 text-primary border-primary/30',
};

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState('Monday');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = classSchedule.filter(
    (c) =>
      c.day === activeDay &&
      (activeCategory === 'All' || c.category === activeCategory)
  );

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              Weekly Schedule
            </span>
            <h1 className="font-display text-6xl md:text-7xl text-foreground tracking-wide mb-4">
              CLASS <span className="text-primary">SCHEDULE</span>
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
              Book your spot in advance — our popular classes fill up fast!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Day selector */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0',
                  activeDay === day
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'border border-border text-foreground hover:border-primary/50 hover:text-primary'
                )}
                style={{ background: activeDay === day ? undefined : 'var(--surface)' }}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border shrink-0',
                  activeCategory === cat
                    ? `${categoryColors[cat]} shadow-sm`
                    : 'border-border text-foreground/60 hover:border-primary/40 hover:text-primary'
                )}
                style={{ background: activeCategory === cat ? undefined : 'transparent' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Schedule cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay + activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.length === 0 ? (
                <div className="text-center py-20" style={{ color: 'var(--muted)' }}>
                  <div className="text-4xl mb-3">🗓️</div>
                  <div className="font-semibold">No classes scheduled</div>
                  <div className="text-sm mt-1">Try a different day or category filter</div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filtered.map((cls, i) => {
                    const spotsLeft = cls.maxParticipants - cls.enrolled;
                    const isFull = spotsLeft === 0;
                    const isAlmostFull = spotsLeft <= 3 && !isFull;

                    return (
                      <motion.div
                        key={cls.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ y: -4 }}
                        className="p-5 rounded-2xl border border-border hover:border-primary/40 transition-all duration-300"
                        style={{ background: 'var(--surface)' }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${categoryColors[cls.category]}`}>
                                {cls.category}
                              </span>
                              {isFull && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/10 text-red-500 border border-red-500/30">Full</span>}
                              {isAlmostFull && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/30">{spotsLeft} left!</span>}
                            </div>
                            <h3 className="font-bold text-base text-foreground">{cls.className}</h3>
                            <p className="text-xs font-medium text-primary">{cls.trainer}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-sm text-foreground">{cls.startTime}</div>
                            <div className="text-xs" style={{ color: 'var(--muted)' }}>to {cls.endTime}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: 'var(--muted)' }}>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{cls.duration}</span>
                          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{cls.enrolled}/{cls.maxParticipants}</span>
                          <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5" />{cls.intensity}</span>
                        </div>

                        {/* Capacity bar */}
                        <div className="mb-4">
                          <div className="h-1.5 bg-border rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${(cls.enrolled / cls.maxParticipants) * 100}%`,
                                background: isFull ? '#ef4444' : isAlmostFull ? '#f97316' : '#E63946',
                              }}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>Floor {cls.floor}</span>
                          <button
                            disabled={isFull}
                            className={cn(
                              'px-4 py-1.5 rounded-full text-xs font-bold transition-all',
                              isFull
                                ? 'bg-border text-muted cursor-not-allowed'
                                : 'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-primary/30 hover:shadow-md'
                            )}
                          >
                            {isFull ? 'Class Full' : 'Book Now'}
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
