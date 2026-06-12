'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Eye, EyeOff, Dumbbell, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex" style={{ background: 'var(--background)' }}>
      {/* Left panel */}
      <div
        className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.4) 0%, transparent 60%)' }} />
        <div className="relative z-10 text-center px-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="font-display text-3xl tracking-wider text-white">STAUNCH <span className="text-primary">GYM</span></span>
          </div>
          <h2 className="font-display text-5xl text-white tracking-wide mb-4">WELCOME<br /><span className="text-primary">BACK</span></h2>
          <p className="text-white/70 text-lg max-w-md">
            Your fitness journey continues. Sign in and keep building your legend.
          </p>
          <div className="mt-10 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Today&apos;s Motivation</p>
            <p className="text-white italic font-medium">
              &ldquo;The pain you feel today will be the strength you feel tomorrow.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link href="/" className="flex items-center gap-2 mb-8 lg:hidden">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Dumbbell className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-xl tracking-wider text-foreground">STAUNCH <span className="text-primary">GYM</span></span>
            </Link>
            <h1 className="font-heading text-3xl font-black text-foreground mb-1">Sign In</h1>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">Email Address</label>
              <input
                required
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                style={{ background: 'var(--surface)', color: 'var(--foreground)' }}
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Password</label>
                <Link href="/auth/forgot-password" className="text-xs text-primary hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                  style={{ background: 'var(--surface)', color: 'var(--foreground)' }}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--muted)' }}>
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                className="relative"
                onClick={() => setForm({ ...form, remember: !form.remember })}
              >
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${form.remember ? 'bg-primary border-primary' : 'border-border'}`}>
                  {form.remember && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                </div>
              </div>
              <span className="text-sm" style={{ color: 'var(--muted)' }}>Remember me for 30 days</span>
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="w-full py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </>
              ) : (
                <>Sign In <ArrowRight className="w-4 h-4" /></>
              )}
            </motion.button>
          </form>

          <p className="text-center text-sm mt-6" style={{ color: 'var(--muted)' }}>
            New to Staunch Fitness?{' '}
            <Link href="/auth/signup" className="text-primary font-semibold hover:underline">Join Now — Free Trial</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
