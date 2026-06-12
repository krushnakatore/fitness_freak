'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dumbbell, ArrowRight, CheckCircle, Mail } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--background)' }}>
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center gap-2 mb-10 justify-center">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-2xl tracking-wider text-foreground">STAUNCH <span className="text-primary">GYM</span></span>
        </Link>

        <div className="p-8 rounded-3xl border border-border" style={{ background: 'var(--surface)' }}>
          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-primary">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-black text-foreground mb-2">Email Sent!</h2>
              <p className="text-sm mb-2" style={{ color: 'var(--muted)' }}>
                We&apos;ve sent a password reset link to:
              </p>
              <p className="font-semibold text-primary mb-6">{email}</p>
              <p className="text-xs mb-8" style={{ color: 'var(--muted)' }}>
                Check your inbox (and spam folder). The link expires in 24 hours.
              </p>
              <Link href="/auth/signin">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="w-full py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all flex items-center justify-center gap-2">
                  Back to Sign In <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h1 className="font-heading text-2xl font-black text-foreground mb-2">Forgot Password?</h1>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  No worries! Enter your email and we&apos;ll send you a reset link.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                    style={{ background: 'var(--background)', color: 'var(--foreground)' }}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={loading}
                  className="w-full py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : (
                    <>Send Reset Link <ArrowRight className="w-4 h-4" /></>
                  )}
                </motion.button>
                <Link href="/auth/signin">
                  <button type="button" className="w-full py-3 text-sm font-medium rounded-full border border-border hover:border-primary/40 transition-colors mt-2" style={{ color: 'var(--muted)' }}>
                    ← Back to Sign In
                  </button>
                </Link>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
