import '@/app/ui/global.css';
import { clsx } from 'clsx';
import { inter } from '@/app/ui/fonts';
import { ReactNode } from 'react';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'antialiased')}>{children}</body>
    </html>
  );
}
