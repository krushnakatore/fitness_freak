'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, ArrowRight, Calendar } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { blogPosts } from '@/lib/data/blog';

const blogCategories = ['All', 'Strength Training', 'Nutrition', 'Yoga', 'CrossFit', 'Dance Fitness', 'Fitness Tips'];

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = blogPosts.filter((p) => {
    const matchCat = category === 'All' || p.category === category;
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  const featured = blogPosts[0];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              Fitness Blog
            </span>
            <h1 className="font-display text-6xl md:text-7xl text-foreground tracking-wide mb-4">
              FITNESS <span className="text-primary">KNOWLEDGE</span>
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
              Expert tips, nutrition guides, and workout programs from Titan&apos;s certified trainers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-10" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -4 }}
              className="relative rounded-3xl overflow-hidden cursor-pointer group"
              style={{ background: 'var(--surface)' }}
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Featured</span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider mb-3">{featured.category}</span>
                  <h2 className="font-heading text-2xl md:text-3xl font-black text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <img src={featured.authorImage} alt={featured.author} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{featured.author}</div>
                      <div className="text-xs flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                        <Calendar className="w-3 h-3" />{featured.date}
                        <Clock className="w-3 h-3 ml-1" />{featured.readTime}
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-semibold rounded-full text-sm hover:bg-primary-dark transition-all w-fit shadow-lg shadow-primary/30"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Search & filter */}
      <section className="py-8" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--muted)' }} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles, topics, tags..."
                className="w-full pl-10 pr-4 py-3 rounded-full border border-border text-sm focus:outline-none focus:border-primary transition-colors"
                style={{ background: 'var(--surface)', color: 'var(--foreground)' }}
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border shrink-0 transition-all ${category === cat ? 'bg-primary text-white border-primary' : 'border-border text-foreground hover:border-primary/40 hover:text-primary'}`}
                style={{ background: category === cat ? undefined : 'var(--surface)' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="pb-20" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence>
            {filtered.length === 0 ? (
              <div className="text-center py-20" style={{ color: 'var(--muted)' }}>
                <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <div className="font-semibold">No articles found</div>
                <div className="text-sm mt-1">Try a different search or category</div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((post, i) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ y: -6 }}
                    className="group rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 cursor-pointer"
                    style={{ background: 'var(--surface)' }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-base text-foreground mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: 'var(--muted)' }}>{post.excerpt}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">#{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div className="flex items-center gap-2">
                          <img src={post.authorImage} alt={post.author} className="w-6 h-6 rounded-full object-cover" />
                          <span className="text-xs font-medium text-foreground">{post.author}</span>
                        </div>
                        <span className="text-xs flex items-center gap-1" style={{ color: 'var(--muted)' }}>
                          <Clock className="w-3 h-3" />{post.readTime}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
