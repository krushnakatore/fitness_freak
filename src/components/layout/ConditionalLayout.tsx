'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ReactNode } from 'react';

export function ConditionalLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname.startsWith('/auth') || pathname.startsWith('/dashboard');

  return (
    <>
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
