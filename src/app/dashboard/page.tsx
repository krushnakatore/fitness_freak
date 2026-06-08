'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, CreditCard, TrendingUp, Award, Clock, ChevronRight, Flame, Target } from 'lucide-react';
import { mockUser, mockBookings, mockPayments } from '@/lib/data/dashboard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { formatPrice, formatDate } from '@/lib/utils';

const workoutProgress = [
  { day: 'Mon', done: true, type: 'CrossFit' },
  { day: 'Tue', done: true, type: 'Yoga' },
  { day: 'Wed', done: true, type: 'HIIT' },
  { day: 'Thu', done: false, type: 'Zumba' },
  { day: 'Fri', done: false, type: 'Strength' },
  { day: 'Sat', done: false, type: 'CrossFit' },
  { day: 'Sun', done: false, type: 'Rest' },
];

export default function DashboardPage() {
  const upcoming = mockBookings.filter((b) => b.status === 'upcoming').slice(0, 3);
  const lastPayment = mockPayments[0];
  const daysToExpiry = Math.ceil((new Date(mockUser.membershipExpiry).getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-black text-foreground">
            Welcome back, {mockUser.name.split(' ')[0]}! 💪
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
            You&apos;re on a 3-day streak. Keep it up!
          </p>
        </div>
        <Link href="/schedule">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-semibold rounded-full text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/30">
            <Calendar className="w-4 h-4" />Book a Class
          </motion.button>
        </Link>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Award, label: 'Membership', value: mockUser.membershipPlan, sub: `Expires in ${daysToExpiry} days`, color: 'text-primary', bg: 'bg-primary/10' },
          { icon: Flame, label: 'Current Streak', value: '3 Days', sub: 'Personal best: 14 days', color: 'text-orange-500', bg: 'bg-orange-500/10' },
          { icon: Target, label: 'Classes This Month', value: '12', sub: '3 more than last month', color: 'text-green-500', bg: 'bg-green-500/10' },
          { icon: CreditCard, label: 'Next Payment', value: formatPrice(12999), sub: formatDate(mockUser.membershipExpiry), color: 'text-blue-500', bg: 'bg-blue-500/10' },
        ].map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 0.08}>
            <motion.div whileHover={{ y: -3 }} className="p-5 rounded-2xl border border-border transition-all hover:border-primary/30" style={{ background: 'var(--surface)' }}>
              <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                <s.icon className={`w-4.5 h-4.5 ${s.color}`} />
              </div>
              <div className="text-xs font-medium mb-0.5" style={{ color: 'var(--muted)' }}>{s.label}</div>
              <div className="font-bold text-sm text-foreground">{s.value}</div>
              <div className="text-[11px] mt-0.5" style={{ color: 'var(--muted)' }}>{s.sub}</div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Weekly progress */}
        <div className="p-5 rounded-2xl border border-border" style={{ background: 'var(--surface)' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-foreground">This Week</h3>
            <span className="text-xs font-medium text-primary">3/7 done</span>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {workoutProgress.map((w) => (
              <div key={w.day} className="text-center">
                <div className={`w-full aspect-square rounded-lg flex items-center justify-center mb-1 text-[10px] font-bold transition-all ${w.done ? 'bg-primary text-white shadow-sm shadow-primary/30' : 'bg-border/50 text-foreground/40'}`}>
                  {w.done ? '✓' : w.day === 'Sun' ? '—' : '·'}
                </div>
                <div className="text-[9px]" style={{ color: 'var(--muted)' }}>{w.day}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-xs font-medium text-foreground">Next: {workoutProgress.find(w => !w.done)?.type} on {workoutProgress.find(w => !w.done)?.day}</p>
          </div>
        </div>

        {/* Upcoming bookings */}
        <div className="lg:col-span-2 p-5 rounded-2xl border border-border" style={{ background: 'var(--surface)' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-foreground">Upcoming Classes</h3>
            <Link href="/dashboard/bookings" className="text-xs font-medium text-primary flex items-center gap-1 hover:underline">
              View all <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
          {upcoming.length === 0 ? (
            <div className="text-center py-8" style={{ color: 'var(--muted)' }}>
              <Calendar className="w-10 h-10 mx-auto mb-2 opacity-30" />
              <p className="text-sm">No upcoming classes</p>
              <Link href="/schedule"><span className="text-primary text-xs hover:underline">Book a class →</span></Link>
            </div>
          ) : (
            <div className="space-y-3">
              {upcoming.map((booking) => (
                <motion.div
                  key={booking.id}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 transition-all cursor-pointer"
                  style={{ background: 'var(--background)' }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-foreground">{booking.className}</div>
                    <div className="text-xs" style={{ color: 'var(--muted)' }}>with {booking.trainer} • Floor {booking.floor}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm font-semibold text-foreground">{booking.time}</div>
                    <div className="text-xs" style={{ color: 'var(--muted)' }}>{booking.date}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Last payment + fitness goal */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-5 rounded-2xl border border-border" style={{ background: 'var(--surface)' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-foreground">Last Payment</h3>
            <Link href="/dashboard/payments" className="text-xs text-primary hover:underline flex items-center gap-1">View all <ChevronRight className="w-3 h-3" /></Link>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl border border-border" style={{ background: 'var(--background)' }}>
            <div>
              <div className="font-semibold text-sm text-foreground">{lastPayment.description}</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{lastPayment.date} • {lastPayment.method}</div>
            </div>
            <div className="text-right">
              <div className="font-black text-lg text-primary">{formatPrice(lastPayment.amount)}</div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/10 text-green-500">Paid</span>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-border" style={{ background: 'var(--surface)' }}>
          <h3 className="font-bold text-foreground mb-4">Fitness Profile</h3>
          <div className="space-y-3">
            {[
              { label: 'Fitness Goal', value: mockUser.fitnessGoal },
              { label: 'Member Since', value: formatDate(mockUser.memberSince) },
              { label: 'Membership', value: mockUser.membershipPlan },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center text-sm">
                <span style={{ color: 'var(--muted)' }}>{label}</span>
                <span className="font-semibold text-foreground">{value}</span>
              </div>
            ))}
          </div>
          <Link href="/dashboard/profile">
            <motion.button whileHover={{ scale: 1.02 }} className="mt-4 w-full py-2.5 border border-border rounded-xl text-sm font-medium hover:border-primary/40 hover:text-primary transition-all flex items-center justify-center gap-2" style={{ color: 'var(--muted)' }}>
              <TrendingUp className="w-4 h-4" />Edit Profile
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
