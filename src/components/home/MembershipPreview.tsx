'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, Crown } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { membershipPlans } from '@/lib/data/membership';
import { formatPrice } from '@/lib/utils';

export function MembershipPreview() {
  const featured = membershipPlans.slice(0, 3);

  return (
    <section className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Membership Plans"
          title="Invest in Your"
          titleHighlight="Best Self"
          subtitle="Flexible plans designed for every lifestyle and budget. No contracts, no hidden fees — just pure results."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((plan, i) => (
            <ScrollReveal key={plan.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl overflow-hidden border transition-all duration-400 h-full ${
                  plan.highlighted
                    ? 'border-primary shadow-2xl shadow-primary/20 scale-105'
                    : 'border-border hover:border-primary/40'
                }`}
                style={{ background: plan.highlighted ? 'var(--surface-2)' : 'var(--card)' }}
              >
                {plan.highlighted && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent" />
                )}
                {plan.badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full ${
                      plan.highlighted ? 'bg-primary text-white' : 'bg-primary/10 text-primary border border-primary/30'
                    }`}>
                      {plan.badge === 'Exclusive' && <Crown className="w-3 h-3" />}
                      {plan.badge === 'Popular' && <Star className="w-3 h-3 fill-current" />}
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-foreground">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-black text-primary">{formatPrice(plan.price)}</span>
                    <span className="text-sm" style={{ color: 'var(--muted)' }}>/{plan.period}</span>
                  </div>
                  <div className="h-px bg-border my-5" />
                  <ul className="space-y-3 mb-6">
                    {plan.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm" style={{ color: 'var(--muted)' }}>{f}</span>
                      </li>
                    ))}
                    {plan.features.length > 5 && (
                      <li className="text-xs text-primary font-medium">+ {plan.features.length - 5} more features</li>
                    )}
                  </ul>
                  <Link href="/membership">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                        plan.highlighted
                          ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30'
                          : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                      }`}
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <Link href="/membership">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30"
            >
              View All 5 Plans <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
