'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, X, Crown, Star, ArrowRight, Zap } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { membershipPlans } from '@/lib/data/membership';
import { formatPrice } from '@/lib/utils';

const comparisonFeatures = [
  'All Cardio Equipment',
  'Weight Training Floor',
  'Dance & Yoga Floor (Floor 3)',
  'Group Classes',
  'Personal Training Sessions',
  'Nutrition Consultation',
  'Body Composition Analysis',
  'Guest Passes',
  'Priority Booking',
  'Towel Service',
  'Free Protein Shakes',
  'VIP Locker Room',
  'Exclusive Member Events',
];

const planFeatureMap: Record<string, (string | false | number)[]> = {
  'Basic': ['✓', '✓', false, '2/month', false, false, false, false, false, false, false, false, false],
  'Standard': ['✓', '✓', '✓', 'Unlimited', '1/month', '✓', false, '2/month', false, '✓', false, false, false],
  'Premium Annual': ['✓', '✓', '✓', 'Unlimited', '3/month', '✓', 'Monthly', 'Unlimited', '✓', '✓', '1/day', false, '✓'],
  'Personal Training': ['✓', '✓', '✓', 'Unlimited', '12/month', '✓', 'Bi-weekly', 'Unlimited', '✓', '✓', false, false, false],
  'Elite VIP': ['✓', '✓', '✓', 'Unlimited', 'Unlimited', '✓', 'Monthly', 'Unlimited', '✓', '✓', 'Unlimited', '✓', '✓'],
};

export default function MembershipPage() {
  const [billing] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'var(--surface)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] -translate-y-1/2 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(230,57,70,0.5) 0%, transparent 70%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              Membership Plans
            </span>
            <h1 className="font-display text-6xl md:text-7xl text-foreground tracking-wide mb-4">
              CHOOSE YOUR <span className="text-primary">PLAN</span>
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
              No contracts. No hidden fees. Just world-class fitness at prices that make sense.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {membershipPlans.map((plan, i) => (
              <ScrollReveal key={plan.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`relative rounded-3xl overflow-hidden border transition-all duration-400 flex flex-col h-full ${
                    plan.highlighted
                      ? 'border-primary shadow-2xl shadow-primary/20 scale-105'
                      : 'border-border hover:border-primary/40'
                  }`}
                  style={{ background: plan.highlighted ? 'var(--surface-2)' : 'var(--surface)' }}
                >
                  {plan.highlighted && <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent" />}
                  {plan.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-full bg-primary text-white">
                        {plan.badge === 'Exclusive' && <Crown className="w-2.5 h-2.5" />}
                        {plan.badge === 'Popular' && <Star className="w-2.5 h-2.5 fill-current" />}
                        {plan.badge === 'Best Value' && <Zap className="w-2.5 h-2.5" />}
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-1 text-foreground">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-3xl font-black text-primary">{formatPrice(plan.price)}</span>
                      <span className="text-xs" style={{ color: 'var(--muted)' }}>/{plan.period}</span>
                    </div>
                    <div className="h-px bg-border my-4" />
                    <ul className="space-y-2 mb-5 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-xs" style={{ color: 'var(--muted)' }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/auth/signup">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className={`w-full py-2.5 rounded-full font-semibold text-sm transition-all ${
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
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Comparison" title="Plan" titleHighlight="Comparison" subtitle="See exactly what's included in each membership tier." />
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr style={{ background: 'var(--surface-2)' }}>
                  <th className="text-left p-4 text-sm font-bold text-foreground border-b border-border">Feature</th>
                  {membershipPlans.map((p) => (
                    <th key={p.id} className={`p-4 text-center text-sm font-bold border-b border-border ${p.highlighted ? 'text-primary' : 'text-foreground'}`}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr
                    key={feature}
                    className="border-b border-border last:border-0 hover:bg-primary/5 transition-colors"
                    style={{ background: i % 2 === 0 ? 'var(--background)' : 'var(--surface)' }}
                  >
                    <td className="p-4 text-sm font-medium text-foreground">{feature}</td>
                    {membershipPlans.map((plan) => {
                      const val = planFeatureMap[plan.name]?.[i];
                      return (
                        <td key={plan.id} className="p-4 text-center">
                          {val === false ? (
                            <X className="w-4 h-4 text-border mx-auto" />
                          ) : val === '✓' ? (
                            <CheckCircle className="w-4 h-4 text-primary mx-auto" />
                          ) : (
                            <span className="text-xs font-medium text-primary">{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="section-padding" style={{ background: 'var(--background)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-5xl text-foreground tracking-wide mb-4">
              READY TO <span className="text-primary">JOIN?</span>
            </h2>
            <p className="mb-8" style={{ color: 'var(--muted)' }}>Start with a free 1-day trial. No commitment needed.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 text-lg">
                  Start Free Trial <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 px-10 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all text-lg">
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
