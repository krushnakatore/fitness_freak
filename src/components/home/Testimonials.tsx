'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { testimonials } from '@/lib/data/testimonials';

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding overflow-hidden" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Success Stories"
          title="Real People,"
          titleHighlight="Real Results"
          subtitle="5000+ members have transformed their lives at Staunch Fitness. Here's what they have to say."
        />

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-3xl overflow-hidden p-8 md:p-12" style={{ background: 'var(--surface)' }}>
            <Quote className="absolute top-6 right-8 w-20 h-20 text-primary/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-medium">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30"
                    />
                    <div>
                      <div className="font-bold text-foreground">{testimonials[current].name}</div>
                      <div className="text-sm" style={{ color: 'var(--muted)' }}>{testimonials[current].role}</div>
                    </div>
                  </div>
                  <span className="hidden sm:block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-bold rounded-full">
                    {testimonials[current].achievement}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-border hover:bg-primary/50'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grid of mini testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
              style={{ background: 'var(--surface)' }}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                &ldquo;{t.content.slice(0, 120)}...&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-primary font-medium">{t.achievement}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
