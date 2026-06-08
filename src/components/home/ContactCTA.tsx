'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function ContactCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80')` }}
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.4) 0%, rgba(0,0,0,0.8) 60%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 bg-primary/30 border border-primary/50 text-primary text-xs font-semibold tracking-widest uppercase rounded-full mb-6">
            Start Today
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-wide mb-6">
            YOUR FIRST STEP<br />
            <span className="text-primary">STARTS NOW</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Stop waiting for the perfect moment. Come visit Titan Gym today — your free 1-day trial is waiting for you. Walk in, and walk out a changed person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-2xl shadow-primary/40 text-lg"
              >
                Claim Free Trial <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/40 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </motion.button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { label: 'No joining fee', icon: '✓' },
              { label: '1-day free trial', icon: '✓' },
              { label: 'Cancel anytime', icon: '✓' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-primary font-black text-xl mb-1">{item.icon}</div>
                <div className="text-white/70 text-xs font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
