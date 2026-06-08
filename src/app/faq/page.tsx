'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { faqs } from '@/lib/data/faqs';
import { cn } from '@/lib/utils';

const faqCategories = ['All', 'General', 'Membership', 'Facilities', 'Classes', 'Nutrition', 'Safety'];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = faqs.filter((f) => {
    const matchCat = category === 'All' || f.category === category;
    const matchSearch = !search || f.question.toLowerCase().includes(search.toLowerCase()) || f.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              Help Center
            </span>
            <h1 className="font-display text-6xl md:text-7xl text-foreground tracking-wide mb-4">
              FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
              Everything you need to know about Titan Gym. Can&apos;t find your answer? Contact us directly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--background)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <ScrollReveal>
            <div className="relative mb-6">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--muted)' }} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-14 pr-5 py-4 rounded-2xl border border-border text-base focus:outline-none focus:border-primary transition-colors"
                style={{ background: 'var(--surface)', color: 'var(--foreground)' }}
              />
            </div>
          </ScrollReveal>

          {/* Category filter */}
          <ScrollReveal delay={0.1}>
            <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={cn(
                    'px-4 py-1.5 rounded-full text-xs font-semibold border shrink-0 transition-all',
                    category === cat
                      ? 'bg-primary text-white border-primary'
                      : 'border-border text-foreground hover:border-primary/40 hover:text-primary'
                  )}
                  style={{ background: category === cat ? undefined : 'var(--surface)' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* FAQ accordion */}
          {filtered.length === 0 ? (
            <div className="text-center py-16" style={{ color: 'var(--muted)' }}>
              <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="font-semibold">No questions found</p>
              <p className="text-sm mt-1">Try a different search term or category</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((faq, i) => (
                <ScrollReveal key={faq.id} delay={i * 0.04}>
                  <motion.div
                    className="rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300"
                    style={{ background: 'var(--surface)' }}
                  >
                    <button
                      onClick={() => setOpen(open === faq.id ? null : faq.id)}
                      className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">Q</span>
                        <h3 className="font-semibold text-foreground text-sm leading-relaxed">{faq.question}</h3>
                      </div>
                      <ChevronDown
                        className={cn(
                          'w-5 h-5 text-primary transition-transform duration-300 shrink-0 mt-0.5',
                          open === faq.id && 'rotate-180'
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {open === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-0">
                            <div className="flex items-start gap-3">
                              <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">A</span>
                              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Contact CTA */}
          <ScrollReveal className="mt-14 text-center">
            <div className="p-8 rounded-3xl border border-primary/20 bg-primary/5">
              <h3 className="font-heading text-xl font-black text-foreground mb-2">
                Still have questions?
              </h3>
              <p className="text-sm mb-5" style={{ color: 'var(--muted)' }}>
                Our team is always ready to help. Reach out and we&apos;ll get back to you within 2 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+919876543210">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all text-sm shadow-lg shadow-primary/30">
                    Call Us
                  </motion.button>
                </a>
                <a href="/contact">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all text-sm">
                    Contact Form
                  </motion.button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
