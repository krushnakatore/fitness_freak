'use client';

import { motion } from 'framer-motion';
import { Counter } from '@/components/ui/Counter';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const stats = [
  { value: 5000, suffix: '+', label: 'Active Members', sub: 'and growing every day' },
  { value: 12, suffix: '+', label: 'Expert Trainers', sub: 'certified professionals' },
  { value: 15000, suffix: ' sq ft', label: 'Facility Size', sub: 'across 3 dedicated floors' },
  { value: 9, suffix: '+', label: 'Fitness Programs', sub: 'for every goal' },
  { value: 500, suffix: '+', label: 'Transformations', sub: 'success stories' },
  { value: 8, suffix: ' yrs', label: 'Experience', sub: 'since 2017' },
];

export function Stats() {
  return (
    <section
      className="relative section-padding overflow-hidden"
      style={{ background: 'var(--surface)' }}
    >
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] -translate-y-1/2 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(230,57,70,0.4) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
            Our Numbers
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-wide">
            THE NUMBERS <span className="text-primary">SPEAK</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="text-center p-5 rounded-2xl border border-border bg-background/50 hover:border-primary/30 transition-all duration-300 group"
                style={{ background: 'rgba(var(--background), 0.5)' }}
              >
                <div className="text-3xl md:text-4xl font-black font-heading text-primary mb-1 group-hover:scale-110 transition-transform duration-300 origin-center">
                  <Counter end={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <div className="font-bold text-sm text-foreground mb-0.5">{stat.label}</div>
                <div className="text-xs" style={{ color: 'var(--muted)' }}>{stat.sub}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
