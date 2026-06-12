'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, User, Calendar, CreditCard, Bell, Settings, LogOut, Dumbbell, Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mockUser } from '@/lib/data/dashboard';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/profile', label: 'My Profile', icon: User },
  { href: '/dashboard/bookings', label: 'My Bookings', icon: Calendar },
  { href: '/dashboard/payments', label: 'Payment History', icon: CreditCard },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex" style={{ background: 'var(--background)' }}>
      {/* Sidebar */}
      <>
        {/* Desktop sidebar */}
        <aside className="hidden lg:flex flex-col w-64 border-r border-border shrink-0" style={{ background: 'var(--surface)' }}>
          <div className="p-6 border-b border-border">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Dumbbell className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-xl tracking-wider text-foreground">STAUNCH <span className="text-primary">GYM</span></span>
            </Link>
          </div>

          {/* User profile */}
          <div className="p-5 border-b border-border">
            <div className="flex items-center gap-3">
              <img src={mockUser.avatar} alt={mockUser.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/30" />
              <div className="min-w-0">
                <div className="font-semibold text-sm text-foreground truncate">{mockUser.name}</div>
                <div className="text-xs text-primary font-medium">{mockUser.membershipPlan}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                  pathname === href
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'text-foreground/70 hover:bg-primary/10 hover:text-primary'
                )}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
                {pathname === href && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
              </Link>
            ))}
          </nav>

          {/* Bottom */}
          <div className="p-4 border-t border-border space-y-1">
            <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-foreground/70 hover:bg-primary/10 hover:text-primary transition-all">
              <Settings className="w-4 h-4" />Settings
            </Link>
            <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-foreground/70 hover:bg-red-500/10 hover:text-red-500 transition-all">
              <LogOut className="w-4 h-4" />Sign Out
            </Link>
          </div>
        </aside>

        {/* Mobile sidebar overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
              <motion.aside
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="absolute left-0 top-0 bottom-0 w-72 flex flex-col border-r border-border"
                style={{ background: 'var(--surface)' }}
              >
                <div className="p-5 border-b border-border flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <Dumbbell className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-display text-xl tracking-wider text-foreground">STAUNCH <span className="text-primary">GYM</span></span>
                  </Link>
                  <button onClick={() => setSidebarOpen(false)} className="text-foreground/60 hover:text-foreground">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-5 border-b border-border">
                  <div className="flex items-center gap-3">
                    <img src={mockUser.avatar} alt={mockUser.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/30" />
                    <div>
                      <div className="font-semibold text-sm text-foreground">{mockUser.name}</div>
                      <div className="text-xs text-primary font-medium">{mockUser.membershipPlan}</div>
                    </div>
                  </div>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                  {navItems.map(({ href, label, icon: Icon }) => (
                    <Link key={href} href={href} onClick={() => setSidebarOpen(false)} className={cn('flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all', pathname === href ? 'bg-primary text-white' : 'text-foreground/70 hover:bg-primary/10 hover:text-primary')}>
                      <Icon className="w-4 h-4" />{label}
                    </Link>
                  ))}
                </nav>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>
      </>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 border-b border-border flex items-center justify-between px-4 sm:px-6 shrink-0" style={{ background: 'var(--surface)' }}>
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl hover:bg-primary/10 text-foreground/70 hover:text-primary transition-all">
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden lg:block">
            <h1 className="font-bold text-lg text-foreground">Member Dashboard</h1>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <button className="relative w-9 h-9 flex items-center justify-center rounded-xl hover:bg-primary/10 text-foreground/70 hover:text-primary transition-all">
              <Bell className="w-4.5 h-4.5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
            </button>
            <img src={mockUser.avatar} alt={mockUser.name} className="w-8 h-8 rounded-full object-cover ring-2 ring-border hover:ring-primary transition-all" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
