"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Heart, Calendar, User } from 'lucide-react';

const items = [
  { href: '/find', icon: Search, label: 'Find' },
  { href: '/categories', icon: Heart, label: 'Match Pot' },
  { href: '/events', icon: Calendar, label: 'Events' },
  { href: '/profile', icon: User, label: 'Profile' },
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-[428px] mx-auto">
      <div className="flex justify-around py-2">
        {items.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center py-1 px-3 ${
              pathname.startsWith(href) ? 'text-primary' : 'text-gray-400'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}


