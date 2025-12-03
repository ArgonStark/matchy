"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFarcaster } from '@/components/providers/FarcasterProvider';
import { Twitter, Instagram, Send as Telegram, Linkedin, Check, X } from 'lucide-react';
import { AVAILABLE_CATEGORIES } from '@/types';

export default function EditProfilePage() {
  const router = useRouter();
  const { profile, updateProfile } = useFarcaster();
  
  const [bio, setBio] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');
  const [telegram, setTelegram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  // Load current profile data
  useEffect(() => {
    if (profile) {
      setBio(profile.bio || '');
      setTwitter(profile.social?.twitter || '');
      setInstagram(profile.social?.instagram || '');
      setTelegram(profile.social?.telegram || '');
      setLinkedin(profile.social?.linkedin || '');
      setSelectedCategories(profile.categories || []);
    }
  }, [profile]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    updateProfile({
      bio,
      social: {
        twitter: twitter.trim(),
        instagram: instagram.trim(),
        telegram: telegram.trim(),
        linkedin: linkedin.trim(),
      },
      categories: selectedCategories,
    });

    // Small delay for UX
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsSaving(false);
    router.push('/profile');
  };

  const handleCancel = () => {
    router.push('/profile');
  };

  if (!profile) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <>
      {/* Header with Save/Cancel */}
      <header className="sticky top-0 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between z-10">
        <button 
          onClick={handleCancel}
          className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
        >
          <X className="w-5 h-5" />
          <span className="text-sm">Cancel</span>
        </button>
        <span className="font-semibold text-gray-900">Edit Profile</span>
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-1 text-primary hover:text-primary-dark disabled:opacity-50"
        >
          {isSaving ? (
            <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          ) : (
            <Check className="w-5 h-5" />
          )}
          <span className="text-sm font-medium">Save</span>
        </button>
      </header>

      <div className="px-4 py-6 pb-24">
        {/* Avatar (read-only from Farcaster) */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={profile.pfpUrl || `https://ui-avatars.com/api/?name=${profile.displayName}&background=0891B2&color=fff&size=200`}
            alt={profile.displayName}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <p className="text-xs text-gray-400 mt-2">
            Profile picture synced from Farcaster
          </p>
        </div>

        {/* Bio */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio
          </label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell others about yourself..."
            maxLength={150}
            rows={3}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
          <p className="text-xs text-gray-400 mt-1 text-right">
            {bio.length}/150
          </p>
        </div>

        {/* Social Links */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Social Links
          </label>
          <div className="space-y-3">
            {/* Twitter */}
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex items-center px-3 py-3 bg-gray-50 border-r border-gray-200">
                <Twitter className="w-5 h-5 text-gray-500" />
              </div>
              <span className="px-2 text-sm text-gray-400">x.com/</span>
              <input
                type="text"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                placeholder="username"
                className="flex-1 px-2 py-3 focus:outline-none"
              />
            </div>

            {/* Instagram */}
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex items-center px-3 py-3 bg-gray-50 border-r border-gray-200">
                <Instagram className="w-5 h-5 text-gray-500" />
              </div>
              <span className="px-2 text-sm text-gray-400">instagram.com/</span>
              <input
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="username"
                className="flex-1 px-2 py-3 focus:outline-none"
              />
            </div>

            {/* Telegram */}
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex items-center px-3 py-3 bg-gray-50 border-r border-gray-200">
                <Telegram className="w-5 h-5 text-gray-500" />
              </div>
              <span className="px-2 text-sm text-gray-400">t.me/</span>
              <input
                type="text"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                placeholder="username"
                className="flex-1 px-2 py-3 focus:outline-none"
              />
            </div>

            {/* LinkedIn */}
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex items-center px-3 py-3 bg-gray-50 border-r border-gray-200">
                <Linkedin className="w-5 h-5 text-gray-500" />
              </div>
              <span className="px-2 text-sm text-gray-400">linkedin.com/in/</span>
              <input
                type="text"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="username"
                className="flex-1 px-2 py-3 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Your Categories
          </label>
          <p className="text-xs text-gray-500 mb-3">
            Select categories that describe you (helps with matching)
          </p>
          <div className="flex flex-wrap gap-2">
            {AVAILABLE_CATEGORIES.map(category => {
              const isSelected = selectedCategories.includes(category);
              return (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    isSelected
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}


