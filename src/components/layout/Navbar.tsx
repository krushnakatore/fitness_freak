'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    label: 'Programs',
    children: [
      { href: '/programs', label: 'All Programs' },
      { href: '/schedule', label: 'Class Schedule' },
      { href: '/trainers', label: 'Our Trainers' },
    ],
  },
  { href: '/membership', label: 'Membership' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const logoSrc = mounted && theme === 'dark' ? '/staunch_fitness_dark_02.png' : '/staunch_fitness_dark_02.png';

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-2xl'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src={logoSrc}
                alt="Staunch Fitness logo"
                width={42}
                height={42}
                className="w-9 h-9 rounded-xl object-contain"
              />
              <div>
                <span className="font-display text-2xl tracking-wider text-foreground">
                  Staunch Fitness
                </span>
                <div className="text-[9px] text-muted tracking-widest uppercase -mt-0.5 font-medium" style={{ color: 'var(--muted)' }}>
                  Nashik&apos;s Biggest Gym
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                if (link.children) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={cn(
                          'flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                          'hover:text-primary hover:bg-primary/10',
                          activeDropdown === link.label ? 'text-primary bg-primary/10' : 'text-foreground/80'
                        )}
                      >
                        {link.label}
                        <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', activeDropdown === link.label && 'rotate-180')} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-52 bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden"
                            style={{ background: 'var(--surface)' }}
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  'block px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary',
                                  pathname === child.href ? 'text-primary bg-primary/10' : 'text-foreground/80'
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                      'hover:text-primary hover:bg-primary/10',
                      pathname === link.href ? 'text-primary bg-primary/10' : 'text-foreground/80'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={theme}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
                    </motion.div>
                  </AnimatePresence>
                </button>
              )}

              <div className="hidden md:flex items-center gap-2">
                <Link href="/auth/signin">
                  <Button variant="ghost" size="sm" className="hidden lg:flex">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button variant="primary" size="sm">
                    Join Now
                  </Button>
                </Link>
              </div>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mobileOpen ? 'close' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl" onClick={() => setMobileOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-surface border-l border-border shadow-2xl flex flex-col" style={{ background: 'var(--surface)' }}>
              <div className="h-16 md:h-20 border-b border-border flex items-center px-6">
                <Link href="/" className="flex items-center gap-2.5">
                  <Image
                    src={logoSrc}
                    alt="Staunch Fitness logo"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-lg object-contain"
                  />
                  <span className="font-display text-xl tracking-wider">Staunch Fitness</span>
                </Link>
              </div>
              <div className="flex-1 overflow-y-auto py-6 px-4">
                {navLinks.map((link, i) => {
                  if (link.children) {
                    return (
                      <div key={link.label} className="mb-1">
                        <div className="px-3 py-2 text-xs font-semibold tracking-widest uppercase text-muted mb-1" style={{ color: 'var(--muted)' }}>
                          {link.label}
                        </div>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors mb-0.5',
                              pathname === child.href
                                ? 'bg-primary text-white'
                                : 'text-foreground/80 hover:bg-primary/10 hover:text-primary'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href!}
                        className={cn(
                          'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors mb-0.5',
                          pathname === link.href
                            ? 'bg-primary text-white'
                            : 'text-foreground/80 hover:bg-primary/10 hover:text-primary'
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <div className="p-4 border-t border-border space-y-2">
                <Link href="/auth/signin" className="block">
                  <Button variant="outline" size="md" fullWidth>Sign In</Button>
                </Link>
                <Link href="/auth/signup" className="block">
                  <Button variant="primary" size="md" fullWidth>Join Now — It&apos;s Free</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
