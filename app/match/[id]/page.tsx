"use client";

import { useParams } from 'next/navigation';
import { mockUsers } from '@/lib/mockData';
import { TopBar } from '@/components/layout/TopBar';
import { BottomNav } from '@/components/layout/BottomNav';
import { Twitter, Instagram, Send as Telegram, Linkedin } from 'lucide-react';

export default function MatchDetailPage() {
  const params = useParams();
  const userId = params.id as string;
  
  // Find the user from mock data
  const user = mockUsers.find(u => u.id === userId);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">User not found</p>
      </div>
    );
  }

  const socialIcons: Record<string, any> = {
    twitter: Twitter,
    instagram: Instagram,
    telegram: Telegram,
    linkedin: Linkedin,
  };

  return (
    <>
      <TopBar showBack backHref="/find" backLabel="Back to Find Matches" />
      
      <div className="pb-20">
        {/* Hero Image */}
        <div className="h-64 bg-gradient-to-br from-primary to-primary-dark relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Profile Info */}
        <div className="px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-gray-600 mt-1">{user.bio}</p>

          {/* Social Links */}
          <div className="mt-4 space-y-2">
            {Object.entries(user.social).map(([platform, handle]) => {
              if (!handle) return null;
              const Icon = socialIcons[platform] || Twitter;
              return (
                <div key={platform} className="flex items-center text-gray-700">
                  <Icon className="w-5 h-5 mr-3 text-gray-500" />
                  <span className="text-sm">
                    {platform === 'twitter' ? 'x.com/' : 
                     platform === 'instagram' ? 'instagram.com/' :
                     platform === 'telegram' ? 't.me/' :
                     'linkedin.com/in/'}{handle}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Categories */}
          <div className="mt-4 flex flex-wrap gap-2">
            {user.categories.map(cat => (
              <span 
                key={cat} 
                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Match Request Button */}
          <button
            onClick={() => alert('Match request sent to ' + user.name + '!')}
            className="w-full mt-6 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition"
          >
            Send Match Request
          </button>
        </div>
      </div>

      <BottomNav />
    </>
  );
}

