'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, Target, Eye, Users, Building2, ArrowRight, CheckCircle } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Counter } from '@/components/ui/Counter';

const achievements = [
  { year: '2017', title: 'Founded', desc: 'Staunch Fitness opened its doors with Floor 1' },
  { year: '2019', title: 'Floor 2 Launch', desc: 'Expanded to include full weight training zone' },
  { year: '2021', title: 'Floor 3 & Dance Studio', desc: "Nashik's first dedicated dance fitness floor" },
  { year: '2023', title: 'Best Gym Award', desc: "Voted Nashik's #1 gym by Times of India" },
  { year: '2024', title: '5000 Members', desc: 'Reached 5000 active member milestone' },
];

const values = [
  { icon: Target, title: 'Results-First Philosophy', desc: 'Every program, every trainer, every piece of equipment is selected with one goal: your results.' },
  { icon: Users, title: 'Community-Driven', desc: 'At Staunch, you join a tribe. Our members celebrate each other\'s wins and push through challenges together.' },
  { icon: Award, title: 'Excellence in Everything', desc: 'From clean locker rooms to certified trainers — we settle for nothing less than the best.' },
  { icon: Building2, title: 'World-Class Facility', desc: '15,000 sq ft of premium fitness infrastructure built to international standards.' },
];

const team = [
  { name: 'Suresh Nashikar', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
  { name: 'Pooja Nashikar', role: 'Co-Founder & COO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
  { name: 'Rahul Jain', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  { name: 'Anita Patil', role: 'Member Experience Lead', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/40 text-primary text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              Our Story
            </span>
            <h1 className="font-display text-6xl md:text-8xl text-white tracking-wide mb-4">ABOUT STAUNCH FITNESS</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Built from passion, driven by purpose. Discover the story behind Nashik&apos;s most iconic fitness destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=600&q=80"
                  alt="Staunch Fitness founding story"
                  className="w-full rounded-3xl object-cover h-96"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl shadow-primary/30">
                  <div className="text-4xl font-black font-heading">8+</div>
                  <div className="text-sm font-medium">Years of Excellence</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                From a Vision to <span className="gradient-text">Nashik&apos;s #1 Gym</span>
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                <p>
                  In 2017, Suresh Nashikar had a simple but powerful vision: Nashik deserved a world-class gym. Not just a room full of equipment, but a complete fitness ecosystem where every person — from the housewife to the professional athlete — could achieve their best.
                </p>
                <p>
                  Starting with just Floor 1 and a team of 3 trainers, Staunch Fitness quickly became the talk of the city. The results members were getting were undeniable. By 2019, demand forced us to expand to Floor 2, adding a complete weight training zone.
                </p>
                <p>
                  The real game-changer came in 2021 — Floor 3. We built Nashik&apos;s first dedicated dance and wellness studio, combining a professional Zumba floor, dance studio, and serene yoga space. It was an overnight sensation.
                </p>
                <p>
                  Today, Staunch Fitness spans 15,000 sq ft across 3 floors with 5000+ active members, 12+ certified trainers, and a legacy of 500+ documented transformation stories. We&apos;re not just Nashik&apos;s biggest gym — we&apos;re its best.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="p-8 rounded-3xl border border-primary/30 bg-primary/5 h-full">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-black text-foreground mb-3">Our Mission</h3>
                <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>
                  To be the most transformative gym in Maharashtra — where every member is guided, motivated, and equipped to achieve results they never believed possible. We are committed to democratizing world-class fitness for every person in Nashik.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-3xl border border-accent/30 bg-accent/5 h-full">
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-black text-foreground mb-3">Our Vision</h3>
                <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>
                  A Nashik where every individual has access to premium fitness infrastructure and expert guidance. We envision Staunch Fitness growing into Maharashtra&apos;s most recognized fitness brand, setting standards for the entire Indian fitness industry.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Achievements" title="Numbers That" titleHighlight="Define Us" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 5000, suffix: '+', label: 'Active Members' },
              { value: 500, suffix: '+', label: 'Transformations' },
              { value: 12, suffix: '+', label: 'Expert Trainers' },
              { value: 15000, suffix: ' sqft', label: 'Gym Space' },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl border border-border" style={{ background: 'var(--surface)' }}>
                  <div className="text-4xl font-black font-heading text-primary mb-1">
                    <Counter end={s.value} suffix={s.suffix} duration={2} />
                  </div>
                  <div className="text-sm font-medium text-foreground">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Journey" title="Our" titleHighlight="Timeline" />
          <div className="space-y-8">
            {achievements.map((a, i) => (
              <ScrollReveal key={a.year} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    {i < achievements.length - 1 && <div className="w-0.5 h-16 bg-border mt-2" />}
                  </div>
                  <div className="pb-4">
                    <span className="text-primary text-xs font-bold tracking-widest uppercase">{a.year}</span>
                    <h3 className="font-bold text-lg text-foreground mt-0.5">{a.title}</h3>
                    <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{a.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What We Stand For" title="Our Core" titleHighlight="Values" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
                  style={{ background: 'var(--surface)' }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-sm mb-2 text-foreground">{v.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{v.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Facility" title="3 Floors of" titleHighlight="Excellence" subtitle="Each floor is purpose-built for its programs. No compromise, no shortcuts." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                floor: 'Floor 1',
                title: 'Cardio & Functional Zone',
                desc: '40+ cardio machines, CrossFit area, functional training rigs, battle ropes, and HIIT zones. The energy here is electric.',
                img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
                highlights: ['40+ Cardio Machines', 'CrossFit Zone', 'HIIT Area', 'Functional Rigs'],
              },
              {
                floor: 'Floor 2',
                title: 'Weight Training & PT Zone',
                desc: '200+ free weights and machines, Olympic lifting platforms, cable stations, and private personal training rooms.',
                img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
                highlights: ['200+ Equipment Pieces', 'Olympic Platforms', 'PT Private Rooms', 'Cable Systems'],
              },
              {
                floor: 'Floor 3',
                title: 'Dance & Wellness Studio',
                desc: "Nashik's first and largest dedicated dance fitness floor. Professional sound system, sprung hardwood floor, and separate serene yoga studio.",
                img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
                highlights: ['Professional Dance Floor', 'Zumba Studio', 'Yoga Room', 'Premium Sound System'],
              },
            ].map((f, i) => (
              <ScrollReveal key={f.floor} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
                  style={{ background: 'var(--card)' }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={f.img} alt={f.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">{f.floor}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-2">{f.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>{f.desc}</p>
                    <div className="space-y-1.5">
                      {f.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="text-xs font-medium text-foreground">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership team */}
      <section className="section-padding" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Team" title="The People Behind" titleHighlight="Staunch" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} className="text-center group">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full rounded-2xl object-cover ring-2 ring-border group-hover:ring-primary transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-foreground">{t.name}</h3>
                  <p className="text-xs text-primary font-medium mt-0.5">{t.role}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-wide mb-4">
              BE PART OF THE <span className="text-primary">LEGEND</span>
            </h2>
            <p className="mb-8" style={{ color: 'var(--muted)' }}>
              Join 5000+ members who chose Staunch Fitness. Your first day is free — no strings attached.
            </p>
            <Link href="/auth/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 text-lg"
              >
                Join Staunch Fitness <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
