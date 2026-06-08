'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dumbbell, Heart, Zap, Wind, Music, Apple, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const programs = [
  {
    icon: Dumbbell,
    title: 'Weight Training',
    description: 'Build raw strength and muscle on our state-of-the-art Floor 2 with 200+ equipment pieces.',
    floor: 'Floor 2',
    color: 'from-red-500 to-orange-500',
    bg: 'bg-red-500/10 hover:bg-red-500/20',
    border: 'border-red-500/20 hover:border-red-500/40',
    href: '/programs',
  },
  {
    icon: Heart,
    title: 'Cardio & HIIT',
    description: 'Torch fat with 40+ machines and high-energy interval sessions on our dedicated cardio floor.',
    floor: 'Floor 1',
    color: 'from-pink-500 to-red-500',
    bg: 'bg-pink-500/10 hover:bg-pink-500/20',
    border: 'border-pink-500/20 hover:border-pink-500/40',
    href: '/programs',
  },
  {
    icon: Zap,
    title: 'CrossFit',
    description: 'Elite functional fitness training with constantly varied, high-intensity workouts.',
    floor: 'Floor 1',
    color: 'from-yellow-500 to-orange-500',
    bg: 'bg-yellow-500/10 hover:bg-yellow-500/20',
    border: 'border-yellow-500/20 hover:border-yellow-500/40',
    href: '/programs',
  },
  {
    icon: Wind,
    title: 'Yoga',
    description: 'Transform body and mind in our serene 3rd floor yoga studio. All levels welcome.',
    floor: 'Floor 3',
    color: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-500/10 hover:bg-violet-500/20',
    border: 'border-violet-500/20 hover:border-violet-500/40',
    href: '/programs',
  },
  {
    icon: Music,
    title: 'Zumba & Dance',
    description: "Nashik's largest dedicated dance studio. Party your way to an incredible physique.",
    floor: 'Floor 3',
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-500/10 hover:bg-cyan-500/20',
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
    href: '/programs',
  },
  {
    icon: Apple,
    title: 'Nutrition',
    description: 'Custom meal plans and ongoing support from our certified sports nutritionist.',
    floor: 'All Floors',
    color: 'from-green-500 to-emerald-500',
    bg: 'bg-green-500/10 hover:bg-green-500/20',
    border: 'border-green-500/20 hover:border-green-500/40',
    href: '/programs',
  },
];

export function FeaturedPrograms() {
  return (
    <section className="section-padding" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Programs"
          title="Train Like a"
          titleHighlight="Champion"
          subtitle="9 world-class programs across 3 dedicated floors. Whatever your fitness goal, Titan Gym has the perfect program to get you there faster."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <ScrollReveal key={program.title} delay={i * 0.08}>
              <Link href={program.href}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer h-full ${program.bg} ${program.border}`}
                  style={{ borderWidth: '1px', borderStyle: 'solid' }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-3 inline-block">
                    {program.floor}
                  </span>
                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {program.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="text-center mt-10">
          <Link href="/programs">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Explore All Programs <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
