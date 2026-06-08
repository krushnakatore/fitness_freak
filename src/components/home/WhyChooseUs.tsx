'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Award, Layers, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const features = [
  {
    icon: Layers,
    title: 'Nashik\'s Only 3-Floor Gym',
    description: 'Our three dedicated floors give every program its own space. No more waiting for equipment — ever.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Award,
    title: 'Certified Elite Trainers',
    description: 'All 12+ trainers hold internationally recognized certifications. They\'re the best in Nashik, period.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: CheckCircle,
    title: 'State-of-the-Art Equipment',
    description: '200+ machines and free weights sourced from top global brands. Updated and maintained to perfection.',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
  {
    icon: Clock,
    title: 'Extended Hours',
    description: 'Open from 5 AM to 11 PM Monday to Saturday. Life is busy — your gym should flex around you.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image collage */}
          <div className="relative order-2 lg:order-1">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-4 relative">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl h-48">
                    <img
                      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80"
                      alt="Weight Training Floor"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Floor 2</div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl h-60">
                    <img
                      src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80"
                      alt="Dance Floor"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Floor 3</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative overflow-hidden rounded-2xl h-64">
                    <img
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                      alt="Cardio Zone"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Floor 1</div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl h-44">
                    <img
                      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80"
                      alt="Yoga Studio"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Yoga Studio</div>
                  </div>
                </div>
                {/* Badge overlay */}
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-xl shadow-primary/30 z-10"
                >
                  <span className="font-display text-3xl leading-none">15K</span>
                  <span className="text-[9px] tracking-widest text-white/80 uppercase font-medium text-center">SQ FT GYM</span>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              badge="Why Choose Titan"
              title="Nashik's Most"
              titleHighlight="Premium Gym"
              subtitle="We don't just offer a gym — we offer a transformation ecosystem. See why 5000+ members chose Titan over every other option in Nashik."
              center={false}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 group"
                    style={{ background: 'var(--surface)' }}
                  >
                    <div className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    <h3 className="font-bold text-sm mb-1.5 text-foreground">{feature.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {feature.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
