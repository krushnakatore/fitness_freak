'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')`,
        }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

      {/* Animated accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(230,57,70,0.3) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(244,162,97,0.2) 0%, transparent 70%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Nashik&apos;s Biggest 3-Floor Gym
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none mb-6 tracking-wide"
          >
            FORGE YOUR{' '}
            <span className="text-primary relative">
              LEGEND
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-0 left-0 w-full h-1 bg-primary origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mb-8 leading-relaxed"
          >
            15,000 sq ft. 3 floors. 200+ equipment pieces. Nashik&apos;s most elite fitness facility
            — where ordinary people become extraordinary. Your transformation starts today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
          >
            <Link href="/auth/signup">
              <Button variant="primary" size="xl" icon={<ArrowRight className="w-5 h-5" />}>
                Start Free Trial
              </Button>
            </Link>
            <Link href="/membership">
              <Button
                variant="outline"
                size="xl"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white"
                icon={<Play className="w-4 h-4" />}
                iconPosition="left"
              >
                View Plans
              </Button>
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { value: '5000+', label: 'Active Members' },
              { value: '15,000', label: 'Sq Ft Facility' },
              { value: '3', label: 'Dedicated Floors' },
              { value: '12+', label: 'Expert Trainers' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-black text-primary font-heading">{stat.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
