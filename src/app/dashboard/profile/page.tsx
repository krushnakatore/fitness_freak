'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, Calendar, Target, Shield, Edit3, Save, X } from 'lucide-react';
import { mockUser } from '@/lib/data/dashboard';
import { formatDate } from '@/lib/utils';

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ ...mockUser });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setEditing(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-black text-foreground">My Profile</h1>
          <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>Manage your personal information and fitness goals</p>
        </div>
        {!editing ? (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setEditing(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/30"
          >
            <Edit3 className="w-4 h-4" />Edit Profile
          </motion.button>
        ) : (
          <div className="flex gap-2">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleSave} className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition-all">
              <Save className="w-4 h-4" />Save
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => setEditing(false)} className="flex items-center gap-2 px-4 py-2.5 border border-border text-foreground text-sm font-semibold rounded-full hover:border-primary/40 transition-all">
              <X className="w-4 h-4" />Cancel
            </motion.button>
          </div>
        )}
      </div>

      {saved && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl text-sm text-green-500 font-medium">
          ✓ Profile updated successfully!
        </motion.div>
      )}

      {/* Avatar section */}
      <div className="p-6 rounded-2xl border border-border" style={{ background: 'var(--surface)' }}>
        <div className="flex items-center gap-5">
          <div className="relative">
            <img src={mockUser.avatar} alt={mockUser.name} className="w-20 h-20 rounded-2xl object-cover ring-2 ring-primary/30" />
            {editing && (
              <button className="absolute -bottom-2 -right-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition-all shadow-md">
                <Edit3 className="w-3 h-3" />
              </button>
            )}
          </div>
          <div>
            <h2 className="font-bold text-xl text-foreground">{mockUser.name}</h2>
            <p className="text-primary text-sm font-medium">{mockUser.membershipPlan} Member</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>Member since {formatDate(mockUser.memberSince)}</p>
          </div>
        </div>
      </div>

      {/* Personal details */}
      <div className="p-6 rounded-2xl border border-border" style={{ background: 'var(--surface)' }}>
        <div className="flex items-center gap-2 mb-5">
          <User className="w-4 h-4 text-primary" />
          <h3 className="font-bold text-foreground">Personal Information</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { id: 'name', label: 'Full Name', icon: User, value: form.name, type: 'text' },
            { id: 'email', label: 'Email Address', icon: Mail, value: form.email, type: 'email' },
            { id: 'phone', label: 'Phone Number', icon: Phone, value: form.phone, type: 'tel' },
            { id: 'dateOfBirth', label: 'Date of Birth', icon: Calendar, value: form.dateOfBirth, type: 'date' },
          ].map((field) => (
            <div key={field.id}>
              <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">{field.label}</label>
              {editing ? (
                <input
                  type={field.type}
                  value={field.value}
                  onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                  style={{ background: 'var(--background)', color: 'var(--foreground)' }}
                />
              ) : (
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-sm" style={{ background: 'var(--background)' }}>
                  <field.icon className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--muted)' }} />
                  <span className="text-foreground">{field.value}</span>
                </div>
              )}
            </div>
          ))}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">Gender</label>
            {editing ? (
              <select value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-primary" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
                <option>Male</option><option>Female</option><option>Other</option>
              </select>
            ) : (
              <div className="px-4 py-2.5 rounded-xl border border-border text-sm text-foreground" style={{ background: 'var(--background)' }}>{form.gender}</div>
            )}
          </div>
        </div>
      </div>

      {/* Fitness goals */}
      <div className="p-6 rounded-2xl border border-border" style={{ background: 'var(--surface)' }}>
        <div className="flex items-center gap-2 mb-5">
          <Target className="w-4 h-4 text-primary" />
          <h3 className="font-bold text-foreground">Fitness Goals</h3>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">Primary Goal</label>
          {editing ? (
            <select value={form.fitnessGoal} onChange={(e) => setForm({ ...form, fitnessGoal: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-primary" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
              {['Build Muscle & Strength', 'Lose Weight', 'Improve Fitness', 'Athletic Performance', 'Yoga & Flexibility', 'Learn Dance / Zumba'].map((g) => <option key={g}>{g}</option>)}
            </select>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
              <Target className="w-3.5 h-3.5" />{form.fitnessGoal}
            </div>
          )}
        </div>
      </div>

      {/* Membership info */}
      <div className="p-6 rounded-2xl border border-border" style={{ background: 'var(--surface)' }}>
        <div className="flex items-center gap-2 mb-5">
          <Shield className="w-4 h-4 text-primary" />
          <h3 className="font-bold text-foreground">Membership Information</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: 'Plan', value: mockUser.membershipPlan },
            { label: 'Member Since', value: formatDate(mockUser.memberSince) },
            { label: 'Expiry Date', value: formatDate(mockUser.membershipExpiry) },
            { label: 'Member ID', value: mockUser.id },
          ].map(({ label, value }) => (
            <div key={label} className="p-3 rounded-xl border border-border" style={{ background: 'var(--background)' }}>
              <div className="text-xs" style={{ color: 'var(--muted)' }}>{label}</div>
              <div className="font-semibold text-sm text-foreground mt-0.5">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
