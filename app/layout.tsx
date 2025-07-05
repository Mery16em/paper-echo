import '../styles/globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main className="p-4 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
