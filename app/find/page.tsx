"use client";

import { TopBar } from '@/components/layout/TopBar';
import { BottomNav } from '@/components/layout/BottomNav';
import { MatchCard } from '@/components/matches/MatchCard';
import { mockUsers, currentUser } from '@/lib/mockData';
import { radiusOptions, sortOptions } from '@/lib/utils';
import { useState } from 'react';

export default function FindPage() {
  const [radius, setRadius] = useState(1);
  const [sort, setSort] = useState('relevance');

  // Filter out current user
  const availableUsers = mockUsers.filter(u => u.id !== currentUser.id);

  return (
    <>
      <TopBar />
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Matches Nearby You</h1>
        
        <div className="flex gap-3 mb-6">
          <select
            value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            {radiusOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {availableUsers.map(user => (
            <MatchCard key={user.id} user={user} />
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  );
}

