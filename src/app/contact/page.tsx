'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              Get In Touch
            </span>
            <h1 className="font-display text-6xl md:text-7xl text-foreground tracking-wide mb-4">
              CONTACT <span className="text-primary">US</span>
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
              We&apos;d love to hear from you. Whether it&apos;s a membership query, trainer consultation, or just a visit — we&apos;re here.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-5">
              <ScrollReveal>
                <h2 className="font-heading text-2xl font-black text-foreground mb-6">Visit Staunch Fitness</h2>
              </ScrollReveal>
              {[
                {
                  icon: MapPin,
                  label: 'Address',
                  lines: ['1st Floor, Royal Complex,', 'College Road, Nashik - 422005', 'Maharashtra, India'],
                  color: 'text-primary',
                  bg: 'bg-primary/10',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  lines: ['+91 98765 43210', '+91 87654 32109'],
                  color: 'text-green-500',
                  bg: 'bg-green-500/10',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  lines: ['hello@staunchfitness.in', 'support@staunchfitness.in'],
                  color: 'text-blue-500',
                  bg: 'bg-blue-500/10',
                },
                {
                  icon: Clock,
                  label: 'Working Hours',
                  lines: ['Mon–Sat: 5:00 AM – 11:00 PM', 'Sunday: 6:00 AM – 9:00 PM'],
                  color: 'text-accent',
                  bg: 'bg-accent/10',
                },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <div className="flex gap-4 p-5 rounded-2xl border border-border" style={{ background: 'var(--surface)' }}>
                    <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-foreground mb-1">{item.label}</div>
                      {item.lines.map((line) => (
                        <div key={line} className="text-sm" style={{ color: 'var(--muted)' }}>{line}</div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="p-8 rounded-3xl border border-border" style={{ background: 'var(--surface)' }}>
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="font-heading text-2xl font-black text-foreground mb-2">Message Sent!</h3>
                      <p className="mb-6" style={{ color: 'var(--muted)' }}>
                        Thank you for contacting Staunch Fitness. Our team will get back to you within 2 hours during business hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors"
                      >
                        Send Another
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h2 className="font-heading text-xl font-black text-foreground mb-2">Send Us a Message</h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                          { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@email.com' },
                          { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' },
                          { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Membership inquiry, Visit, etc.' },
                        ].map((field) => (
                          <div key={field.id}>
                            <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">{field.label}</label>
                            <input
                              type={field.type}
                              placeholder={field.placeholder}
                              value={form[field.id as keyof typeof form]}
                              onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                              style={{ background: 'var(--background)', color: 'var(--foreground)' }}
                            />
                          </div>
                        ))}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">Message</label>
                        <textarea
                          rows={5}
                          placeholder="Tell us how we can help you..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                          style={{ background: 'var(--background)', color: 'var(--foreground)' }}
                        />
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </motion.button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-20" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div
              className="w-full h-80 rounded-3xl overflow-hidden border border-border flex items-center justify-center relative"
              style={{ background: 'var(--surface)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl shadow-primary/30">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-1">Staunch Fitness, Nashik</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>1st Floor, Royal Complex, College Road, Nashik - 422005</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
