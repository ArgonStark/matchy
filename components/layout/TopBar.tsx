"use client";

import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  backHref?: string;
  backLabel?: string;
}

export function TopBar({ title = 'Matchy', showBack, backHref = '/find', backLabel = 'Back to Find Matches' }: TopBarProps) {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between z-10">
      {showBack ? (
        <Link href={backHref} className="flex items-center text-sm text-gray-700 hover:text-gray-900">
          <span className="mr-2">←</span>
          {backLabel}
        </Link>
      ) : (
        <>
          <div className="flex items-center gap-2">
            {logoError ? (
              <span className="text-lg">⚡</span>
            ) : (
              <Image
                src="/logo.png"
                alt="Matchy Logo"
                width={24}
                height={24}
                className="w-6 h-6"
                onError={() => setLogoError(true)}
              />
            )}
            <span className="font-semibold text-gray-900">{title}</span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
        </>
      )}
    </header>
  );
}

