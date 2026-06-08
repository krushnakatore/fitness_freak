'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  center = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('mb-12 md:mb-16', center && 'text-center', className)}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase rounded-full">
            {badge}
          </span>
        </motion.div>
      )}
      <h2
        className={cn(
          'text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4',
          light ? 'text-white' : 'text-foreground',
          'font-heading'
        )}
      >
        {title}{' '}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-base md:text-lg max-w-2xl leading-relaxed',
            center && 'mx-auto',
            light ? 'text-white/60' : 'text-muted-foreground'
          )}
          style={{ color: light ? 'rgba(255,255,255,0.6)' : 'var(--muted)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
