'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, CheckCircle, XCircle, Clock3, Filter } from 'lucide-react';
import { mockBookings } from '@/lib/data/dashboard';
import { cn } from '@/lib/utils';

const statusConfig = {
  upcoming: { icon: Clock3, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/30', label: 'Upcoming' },
  completed: { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/30', label: 'Completed' },
  cancelled: { icon: XCircle, color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/30', label: 'Cancelled' },
};

export default function BookingsPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed' | 'cancelled'>('all');

  const filtered = filter === 'all' ? mockBookings : mockBookings.filter((b) => b.status === filter);

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-black text-foreground">My Bookings</h1>
        <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>Track your class bookings and session history</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {(
          [
            { title: 'Upcoming', count: mockBookings.filter((b) => b.status === 'upcoming').length, color: statusConfig.upcoming.color, bg: statusConfig.upcoming.bg },
            { title: 'Completed', count: mockBookings.filter((b) => b.status === 'completed').length, color: statusConfig.completed.color, bg: statusConfig.completed.bg },
            { title: 'Cancelled', count: mockBookings.filter((b) => b.status === 'cancelled').length, color: statusConfig.cancelled.color, bg: statusConfig.cancelled.bg },
          ] as const
        ).map((s) => (
          <div key={s.title} className="p-4 rounded-2xl border border-border text-center" style={{ background: 'var(--surface)' }}>
            <div className={`text-3xl font-black ${s.color} mb-1`}>{s.count}</div>
            <div className="text-xs font-medium" style={{ color: 'var(--muted)' }}>{s.title}</div>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        <Filter className="w-4 h-4 mt-2 shrink-0" style={{ color: 'var(--muted)' }} />
        {(['all', 'upcoming', 'completed', 'cancelled'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              'px-4 py-1.5 rounded-full text-xs font-semibold border transition-all capitalize',
              filter === f ? 'bg-primary text-white border-primary' : 'border-border text-foreground hover:border-primary/40 hover:text-primary'
            )}
            style={{ background: filter === f ? undefined : 'var(--surface)' }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Bookings list */}
      <AnimatePresence>
        <div className="space-y-3">
          {filtered.map((booking, i) => {
            const config = statusConfig[booking.status];
            const StatusIcon = config.icon;
            return (
              <motion.div
                key={booking.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-2xl border border-border hover:border-primary/30 transition-all"
                style={{ background: 'var(--surface)' }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center shrink-0`}>
                      <StatusIcon className={`w-5 h-5 ${config.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-foreground">{booking.className}</h3>
                      <p className="text-sm text-primary font-medium">with {booking.trainer}</p>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs" style={{ color: 'var(--muted)' }}>
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{booking.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{booking.time}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />Floor {booking.floor}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${config.bg} ${config.color} ${config.border}`}>
                      {config.label}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>{booking.duration}</span>
                  </div>
                </div>
                {booking.status === 'upcoming' && (
                  <div className="mt-4 flex gap-2">
                    <button className="px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-full hover:bg-primary-dark transition-all">
                      Reschedule
                    </button>
                    <button className="px-4 py-1.5 border border-border text-xs font-medium rounded-full hover:border-red-500/40 hover:text-red-500 transition-all" style={{ color: 'var(--muted)' }}>
                      Cancel
                    </button>
                  </div>
                )}
                {booking.status === 'completed' && (
                  <div className="mt-4">
                    <button className="px-4 py-1.5 border border-border text-xs font-medium rounded-full hover:border-primary/40 hover:text-primary transition-all" style={{ color: 'var(--muted)' }}>
                      Book Again
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </AnimatePresence>
    </div>
  );
}
