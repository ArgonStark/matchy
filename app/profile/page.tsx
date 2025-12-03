"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useFarcaster } from '@/components/providers/FarcasterProvider';
import { BottomNav } from '@/components/layout/BottomNav';
import { Twitter, Instagram, Send as Telegram, Linkedin, Edit2 } from 'lucide-react';

export default function ProfilePage() {
  const { profile, isInMiniApp } = useFarcaster();

  if (!profile) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  const socialLinks = [
    { key: 'twitter', icon: Twitter, prefix: 'x.com/', value: profile.social?.twitter },
    { key: 'instagram', icon: Instagram, prefix: 'instagram.com/', value: profile.social?.instagram },
    { key: 'telegram', icon: Telegram, prefix: 't.me/', value: profile.social?.telegram },
    { key: 'linkedin', icon: Linkedin, prefix: 'linkedin.com/in/', value: profile.social?.linkedin },
  ];

  return (
    <>
      {/* TopBar with Edit Button */}
      <header className="sticky top-0 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Matchy Logo"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="font-semibold text-gray-900">Profile</span>
        </div>
        <Link 
          href="/profile/edit" 
          className="flex items-center gap-1 text-primary hover:text-primary-dark text-sm font-medium"
        >
          <Edit2 className="w-4 h-4" />
          Edit
        </Link>
      </header>

      <div className="flex flex-col items-center px-4 py-8 pb-24">
        {/* Avatar */}
        <div className="relative">
          <img
            src={profile.pfpUrl || `https://ui-avatars.com/api/?name=${profile.displayName}&background=0891B2&color=fff&size=200`}
            alt={profile.displayName}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          {isInMiniApp && (
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white" 
                 title="Connected to Farcaster" />
          )}
        </div>

        {/* Name & Bio */}
        <h1 className="text-2xl font-bold text-gray-900 mt-4">{profile.displayName}</h1>
        {profile.username && (
          <p className="text-gray-500 text-sm">@{profile.username}</p>
        )}
        <p className="text-gray-600 text-center mt-2 max-w-xs">
          {profile.bio || 'No bio yet. Tap Edit to add one!'}
        </p>

        {/* Categories */}
        {profile.categories && profile.categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {profile.categories.map(cat => (
              <span 
                key={cat} 
                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        {/* Social Links */}
        <div className="w-full mt-6 space-y-3">
          {socialLinks.map(({ key, icon: Icon, prefix, value }) => (
            <div
              key={key}
              className={`flex items-center p-3 rounded-lg ${
                value ? 'bg-gray-50' : 'bg-gray-50/50'
              }`}
            >
              <Icon className={`w-5 h-5 mr-3 ${value ? 'text-gray-700' : 'text-gray-300'}`} />
              <span className={`text-sm ${value ? 'text-gray-700' : 'text-gray-400'}`}>
                {value ? `${prefix}${value}` : `Add ${key}`}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/find"
          className="w-full mt-8 bg-primary text-white font-semibold py-3 rounded-lg text-center hover:bg-primary-dark transition"
        >
          Let&apos;s Find Matches
        </Link>
      </div>

      <BottomNav />
    </>
  );
}

