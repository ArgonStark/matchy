"use client";

import Link from 'next/link';
import { User } from '@/types';

interface MatchCardProps {
  user: User;
  showMatchCount?: boolean;
}

export function MatchCard({ user, showMatchCount }: MatchCardProps) {
  return (
    <Link href={`/match/${user.id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="aspect-square">
          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-3">
          <h3 className="font-semibold truncate">{user.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{user.bio}</p>
          {showMatchCount && user.matchCount && (
            <p className="text-xs text-gray-500 mt-2">{user.matchCount} Matches</p>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              alert('Match request sent!');
            }}
            className="w-full mt-3 bg-primary text-white text-sm py-2 rounded-lg"
          >
            Send Match Request
          </button>
        </div>
      </div>
    </Link>
  );
}

