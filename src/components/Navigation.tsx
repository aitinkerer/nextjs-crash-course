'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Next.js', href: '/about' },
    { name: 'Components', href: '/components' },
    { name: 'API Demo', href: '/api-demo' },
    { name: 'Concepts', href: '/concepts' }
  ];

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Next.js Crash Course
        </Link>
        
        <div className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname === item.href
                  ? 'bg-blue-800 text-white'
                  : 'hover:bg-blue-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 