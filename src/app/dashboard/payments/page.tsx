'use client';

import { motion } from 'framer-motion';
import { CreditCard, Download, CheckCircle, Clock, XCircle, TrendingUp } from 'lucide-react';
import { mockPayments } from '@/lib/data/dashboard';
import { formatPrice, formatDate } from '@/lib/utils';

const statusConfig = {
  paid: { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-500/10', label: 'Paid' },
  pending: { icon: Clock, color: 'text-yellow-500', bg: 'bg-yellow-500/10', label: 'Pending' },
  failed: { icon: XCircle, color: 'text-red-500', bg: 'bg-red-500/10', label: 'Failed' },
};

export default function PaymentsPage() {
  const totalPaid = mockPayments.filter((p) => p.status === 'paid').reduce((a, p) => a + p.amount, 0);

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-black text-foreground">Payment History</h1>
        <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>All your transactions and invoices in one place</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { label: 'Total Paid (2024-25)', value: formatPrice(totalPaid), icon: TrendingUp, color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Transactions', value: mockPayments.length.toString(), icon: CreditCard, color: 'text-blue-500', bg: 'bg-blue-500/10' },
          { label: 'Next Due', value: formatPrice(12999), icon: Clock, color: 'text-orange-500', bg: 'bg-orange-500/10' },
        ].map((s) => (
          <div key={s.label} className="p-5 rounded-2xl border border-border" style={{ background: 'var(--surface)' }}>
            <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
              <s.icon className={`w-4.5 h-4.5 ${s.color}`} />
            </div>
            <div className="text-xs" style={{ color: 'var(--muted)' }}>{s.label}</div>
            <div className={`text-xl font-black ${s.color} mt-0.5`}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Transactions */}
      <div className="rounded-2xl border border-border overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between" style={{ background: 'var(--surface)' }}>
          <h3 className="font-bold text-foreground">Transactions</h3>
          <button className="flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">
            <Download className="w-3.5 h-3.5" />Export
          </button>
        </div>
        <div className="divide-y divide-border">
          {mockPayments.map((payment, i) => {
            const config = statusConfig[payment.status];
            const StatusIcon = config.icon;
            return (
              <motion.div
                key={payment.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-4 px-5 py-4 hover:bg-primary/5 transition-colors"
                style={{ background: 'var(--background)' }}
              >
                <div className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center shrink-0`}>
                  <StatusIcon className={`w-5 h-5 ${config.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-foreground truncate">{payment.description}</div>
                  <div className="text-xs mt-0.5 flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                    <span>{formatDate(payment.date)}</span>
                    <span>•</span>
                    <span>{payment.method}</span>
                    <span>•</span>
                    <span className="font-mono">{payment.invoiceId}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className={`font-black text-base ${payment.status === 'paid' ? 'text-foreground' : config.color}`}>
                    {formatPrice(payment.amount)}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${config.bg} ${config.color}`}>{config.label}</span>
                </div>
                <button className="ml-2 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 text-foreground/40 hover:text-primary transition-all shrink-0">
                  <Download className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
