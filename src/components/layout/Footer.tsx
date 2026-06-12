'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Camera, Globe, PlayCircle, MessageCircle } from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Membership', href: '/membership' },
    { label: 'Trainers', href: '/trainers' },
    { label: 'Gallery', href: '/gallery' },
  ],
  Programs: [
    { label: 'Weight Training', href: '/programs' },
    { label: 'CrossFit', href: '/programs' },
    { label: 'Yoga', href: '/programs' },
    { label: 'Zumba & Dance', href: '/programs' },
    { label: 'Personal Training', href: '/programs' },
    { label: 'Nutrition', href: '/programs' },
  ],
  Support: [
    { label: 'Class Schedule', href: '/schedule' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Sign Up', href: '/auth/signup' },
    { label: 'Dashboard', href: '/dashboard' },
  ],
};

const socialLinks = [
  { icon: Camera, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: Globe, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
  { icon: PlayCircle, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
  { icon: MessageCircle, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
];

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && theme === 'dark' ? '/staunch_fitness_white.png' : '/staunch_fitness_dark.png';

  return (
    <footer className="bg-surface border-t border-border" style={{ background: 'var(--surface)' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <Image
                src={logoSrc}
                alt="Staunch Fitness logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-xl object-contain"
              />
              <div>
                <span className="font-display text-2xl tracking-wider text-foreground">
                  Staunch Fitness
                </span>
                <div className="text-[9px] tracking-widest uppercase font-medium" style={{ color: 'var(--muted)' }}>
                  Nashik&apos;s Biggest Gym
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: 'var(--muted)' }}>
              Nashik&apos;s premier 3-floor fitness destination. From world-class weight training to vibrant Zumba classes — we have everything you need to transform your body and life.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              {[
                { icon: MapPin, text: '1st Floor, Royal Complex, College Road, Nashik - 422005, Maharashtra' },
                { icon: Phone, text: '+91 98765 43210 / +91 87654 32109' },
                { icon: Mail, text: 'hello@staunchfitness.in' },
                { icon: Clock, text: 'Mon–Sat: 5:00 AM – 11:00 PM | Sun: 6:00 AM – 9:00 PM' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-9 h-9 rounded-full bg-surface-2 flex items-center justify-center text-muted transition-all duration-200 hover:scale-110 ${color}`}
                  style={{ background: 'var(--surface-2)', color: 'var(--muted)' }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-bold text-sm tracking-wider uppercase mb-5 text-foreground">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-primary"
                      style={{ color: 'var(--muted)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border border-border rounded-2xl p-6 mb-10 bg-surface-2" style={{ background: 'var(--surface-2)' }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div>
              <h4 className="font-bold text-base mb-1">Subscribe to Our Newsletter</h4>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>
                Get workout tips, nutrition advice, and exclusive member offers straight to your inbox.
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto shrink-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-64 px-4 py-2.5 text-sm rounded-full border border-border bg-background focus:outline-none focus:border-primary transition-colors"
                style={{ background: 'var(--background)' }}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            © {new Date().getFullYear()} Staunch Fitness, Nashik. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-xs transition-colors hover:text-primary" style={{ color: 'var(--muted)' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
