"use client";

import { useState, useMemo, useEffect } from 'react';
import { mockUsers, currentUser } from '@/lib/mockData';
import { AVAILABLE_CATEGORIES } from '@/types';
import { TopBar } from '@/components/layout/TopBar';
import { BottomNav } from '@/components/layout/BottomNav';
import { MatchCard } from '@/components/matches/MatchCard';
import { Search, SlidersHorizontal } from 'lucide-react';
import { getSearchPreferences, saveSearchPreferences } from '@/lib/storage';
import { radiusOptions, sortOptions } from '@/lib/utils';

export default function FindPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [radius, setRadius] = useState('1');
  const [sortBy, setSortBy] = useState('relevance');

  // Load saved preferences on mount
  useEffect(() => {
    const saved = getSearchPreferences();
    if (saved.length > 0) {
      setSelectedCategories(saved);
      setShowResults(true);
    }
  }, []);

  // Filter users based on selected categories
  const filteredUsers = useMemo(() => {
    // Filter out current user first
    let users = mockUsers.filter(u => u.id !== currentUser.id);

    if (selectedCategories.length === 0) return users;

    users = users.filter(user =>
      user.categories.some(cat => selectedCategories.includes(cat))
    );

    // Sort by relevance (number of matching categories)
    if (sortBy === 'relevance') {
      users.sort((a, b) => {
        const aMatches = a.categories.filter(c => selectedCategories.includes(c)).length;
        const bMatches = b.categories.filter(c => selectedCategories.includes(c)).length;
        return bMatches - aMatches;
      });
    }

    return users;
  }, [selectedCategories, sortBy]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => {
      const updated = prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category];
      saveSearchPreferences(updated);
      return updated;
    });
  };

  const handleFindMatches = () => {
    if (selectedCategories.length > 0) {
      saveSearchPreferences(selectedCategories);
      setShowResults(true);
    }
  };

  const handleEditCategories = () => {
    setShowResults(false);
  };

  // STATE 1: Category Selection
  if (!showResults) {
    return (
      <>
        <TopBar title="Find" />
        
        <div className="px-4 py-6 pb-24">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Who are you looking for?
            </h1>
            <p className="text-gray-500 mt-2">
              Select one or more categories to find your matches
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {AVAILABLE_CATEGORIES.map(category => {
              const isSelected = selectedCategories.includes(category);
              return (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    isSelected
                      ? 'border-primary bg-primary/5 shadow-sm'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${
                      isSelected ? 'text-primary' : 'text-gray-700'
                    }`}>
                      {category}
                    </span>
                    {isSelected && (
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Count */}
          {selectedCategories.length > 0 && (
            <p className="text-center text-sm text-gray-500 mb-4">
              {selectedCategories.length} categor{selectedCategories.length === 1 ? 'y' : 'ies'} selected
            </p>
          )}

          {/* Find Button */}
          <button
            onClick={handleFindMatches}
            disabled={selectedCategories.length === 0}
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
              selectedCategories.length > 0
                ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Find Matches ({filteredUsers.length})
          </button>
        </div>

        <BottomNav />
      </>
    );
  }

  // STATE 2: Results View
  return (
    <>
      <TopBar title="Matchy" />
      
      <div className="px-4 py-4 pb-24">
        {/* Header with Edit */}
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-bold text-gray-900">
            Matches Nearby You
          </h1>
          <button
            onClick={handleEditCategories}
            className="flex items-center gap-1 text-primary text-sm font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Edit
          </button>
        </div>

        {/* Selected Categories */}
        <p className="text-sm text-gray-500 mb-4">
          Looking for: {selectedCategories.join(', ')}
        </p>

        {/* Filters */}
        <div className="flex gap-3 mb-4">
          <select
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white"
          >
            {radiusOptions.map(opt => (
              <option key={opt.value} value={opt.value.toString()}>
                Radius: {opt.label}
              </option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>
                Sort by: {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <p className="text-sm text-gray-500 mb-4">
          {filteredUsers.length} match{filteredUsers.length !== 1 ? 'es' : ''} found
        </p>

        {/* Results Grid */}
        {filteredUsers.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredUsers.map(user => (
              <MatchCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No matches found</p>
            <button
              onClick={handleEditCategories}
              className="mt-4 text-primary font-medium"
            >
              Try different categories
            </button>
          </div>
        )}
      </div>

      <BottomNav />
    </>
  );
}


