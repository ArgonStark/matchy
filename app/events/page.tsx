"use client";

import { TopBar } from '@/components/layout/TopBar';
import { BottomNav } from '@/components/layout/BottomNav';
import { EventCard } from '@/components/ui/EventCard';
import { mockEvents } from '@/lib/mockData';
import { useState } from 'react';
import { Search } from 'lucide-react';

const categories: Array<'Web3' | 'Sport' | 'Food' | 'Study'> = ['Web3', 'Sport', 'Food', 'Study'];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<'Web3' | 'Sport' | 'Food' | 'Study'>('Web3');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = mockEvents.filter(event => {
    const matchesCategory = event.category === activeCategory;
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <TopBar />
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Events</h1>
        
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  );
}

