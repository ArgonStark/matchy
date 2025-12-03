"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function LandingPage() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="w-full max-w-sm text-center">
        {/* Get Started Illustration */}
        <div className="w-full max-w-sm mx-auto mb-8">
          {imageError ? (
            <div className="w-64 h-64 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-6xl">⚡</span>
            </div>
          ) : (
            <div className="relative w-full aspect-square">
              <Image
                src="/get-started.png"
                alt="Matchy - Find connections at events"
                fill
                className="object-contain rounded-lg"
                priority
                onError={() => setImageError(true)}
              />
            </div>
          )}
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Matchy</h1>
        <p className="text-gray-600 mb-8">
          Match with the people nearby in the best way ever!
        </p>
        
        <Link
          href="/profile"
          className="inline-block w-full bg-primary text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
