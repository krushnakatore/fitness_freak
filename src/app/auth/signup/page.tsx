'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Eye, EyeOff, Dumbbell, ArrowRight, Check } from 'lucide-react';

const fitnessGoals = [
  'Lose Weight',
  'Build Muscle',
  'Improve Fitness',
  'Athletic Performance',
  'Learn Dance / Zumba',
  'Yoga & Flexibility',
  'Stress Relief',
  'General Health',
];

const membershipOptions = ['Basic (₹1,499/month)', 'Standard (₹3,999/3 months)', 'Premium Annual (₹12,999/year)', 'Personal Training (₹5,999/month)', 'Elite VIP (₹24,999/year)'];

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    password: '',
    confirmPassword: '',
    fitnessGoal: '',
    membershipPlan: '',
  });
  const [done, setDone] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((s) => s + 1);
    } else {
      setDone(true);
    }
  };

  return (
    <div className="min-h-screen flex" style={{ background: 'var(--background)' }}>
      {/* Left panel */}
      <div
        className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=80')`,
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
          <h2 className="font-display text-5xl text-white tracking-wide mb-4">BEGIN YOUR<br /><span className="text-primary">LEGEND</span></h2>
          <p className="text-white/70 text-lg mb-8 max-w-md">Join 5000+ members who are already transforming their lives at Nashik&apos;s biggest gym.</p>
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            {[
              { v: '5000+', l: 'Members' }, { v: '3', l: 'Floors' },
              { v: '12+', l: 'Trainers' }, { v: '9+', l: 'Programs' },
            ].map((s) => (
              <div key={s.l} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                <div className="text-2xl font-black text-primary">{s.v}</div>
                <div className="text-xs text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 overflow-y-auto">
        <div className="w-full max-w-md">
          {done ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-primary">
                <Check className="w-12 h-12 text-primary" />
              </div>
              <h2 className="font-display text-4xl text-foreground tracking-wide mb-2">WELCOME TO<br /><span className="text-primary">STAUNCH FITNESS!</span></h2>
              <p className="mb-8" style={{ color: 'var(--muted)' }}>
                Your account is created. Time to forge your legend. Our team will contact you within 24 hours to confirm your membership and schedule your first session.
              </p>
              <Link href="/dashboard">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full py-4 bg-primary text-white font-bold rounded-full text-lg hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                  Go to Dashboard <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          ) : (
            <>
              <div className="mb-8">
                <Link href="/" className="flex items-center gap-2 mb-8 lg:hidden">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Dumbbell className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-display text-xl tracking-wider text-foreground">STAUNCH <span className="text-primary">GYM</span></span>
                </Link>
                <div className="flex items-center gap-3 mb-6">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${s <= step ? 'bg-primary text-white' : 'bg-border text-foreground/40'}`}>
                        {s < step ? <Check className="w-4 h-4" /> : s}
                      </div>
                      {s < 3 && <div className={`flex-1 h-0.5 w-8 ${s < step ? 'bg-primary' : 'bg-border'}`} />}
                    </div>
                  ))}
                </div>
                <h1 className="font-heading text-2xl font-black text-foreground">
                  {step === 1 && 'Personal Information'}
                  {step === 2 && 'Set Your Password'}
                  {step === 3 && 'Choose Your Goal & Plan'}
                </h1>
                <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>Step {step} of 3</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    {[
                      { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Rahul Sharma' },
                      { id: 'email', label: 'Email Address', type: 'email', placeholder: 'rahul@email.com' },
                      { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' },
                    ].map((f) => (
                      <div key={f.id}>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">{f.label}</label>
                        <input
                          required
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.id as keyof typeof form]}
                          onChange={(e) => update(f.id, e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                          style={{ background: 'var(--surface)', color: 'var(--foreground)' }}
                        />
                      </div>
                    ))}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">Gender</label>
                        <select
                          required
                          value={form.gender}
                          onChange={(e) => update('gender', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                          style={{ background: 'var(--surface)', color: 'var(--foreground)' }}
                        >
                          <option value="">Select</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">Date of Birth</label>
                        <input
                          required
                          type="date"
                          value={form.dob}
                          onChange={(e) => update('dob', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                          style={{ background: 'var(--surface)', color: 'var(--foreground)' }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    {[
                      { id: 'password', label: 'Password', show: showPassword, toggle: () => setShowPassword((v) => !v) },
                      { id: 'confirmPassword', label: 'Confirm Password', show: showConfirm, toggle: () => setShowConfirm((v) => !v) },
                    ].map((f) => (
                      <div key={f.id}>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">{f.label}</label>
                        <div className="relative">
                          <input
                            required
                            type={f.show ? 'text' : 'password'}
                            placeholder="Min. 8 characters"
                            value={form[f.id as keyof typeof form]}
                            onChange={(e) => update(f.id, e.target.value)}
                            className="w-full px-4 py-3 pr-12 rounded-xl border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                            style={{ background: 'var(--surface)', color: 'var(--foreground)' }}
                          />
                          <button type="button" onClick={f.toggle} className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--muted)' }}>
                            {f.show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs space-y-1" style={{ color: 'var(--muted)' }}>
                      <p className="font-semibold text-foreground mb-2">Password Requirements:</p>
                      {['At least 8 characters', 'One uppercase letter', 'One number', 'One special character'].map((r) => (
                        <div key={r} className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" />{r}</div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-3">Fitness Goal</label>
                      <div className="grid grid-cols-2 gap-2">
                        {fitnessGoals.map((g) => (
                          <button
                            key={g}
                            type="button"
                            onClick={() => update('fitnessGoal', g)}
                            className={`p-3 rounded-xl border text-xs font-medium text-left transition-all ${form.fitnessGoal === g ? 'border-primary bg-primary/10 text-primary' : 'border-border text-foreground hover:border-primary/40'}`}
                            style={{ background: form.fitnessGoal === g ? undefined : 'var(--surface)' }}
                          >
                            {g}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-3">Membership Plan</label>
                      <div className="space-y-2">
                        {membershipOptions.map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => update('membershipPlan', m)}
                            className={`w-full p-3 rounded-xl border text-sm font-medium text-left transition-all flex items-center justify-between ${form.membershipPlan === m ? 'border-primary bg-primary/10 text-primary' : 'border-border text-foreground hover:border-primary/40'}`}
                            style={{ background: form.membershipPlan === m ? undefined : 'var(--surface)' }}
                          >
                            {m}
                            {form.membershipPlan === m && <Check className="w-4 h-4" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 mt-6"
                >
                  {step < 3 ? 'Continue' : 'Create My Account'} <ArrowRight className="w-4 h-4" />
                </motion.button>

                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="w-full py-3 border border-border rounded-full text-sm font-medium hover:border-primary/40 transition-colors"
                    style={{ color: 'var(--muted)' }}
                  >
                    ← Back
                  </button>
                )}
              </form>

              <p className="text-center text-sm mt-6" style={{ color: 'var(--muted)' }}>
                Already a member?{' '}
                <Link href="/auth/signin" className="text-primary font-semibold hover:underline">Sign In</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
