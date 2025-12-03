export interface User {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  categories: string[];
  social: {
    twitter?: string;
    instagram?: string;
    telegram?: string;
    linkedin?: string;
  };
  location: { lat: number; lng: number };
  events: string[];
  matchCount?: number;
}

export interface Event {
  id: string;
  name: string;
  category: 'Web3' | 'Sport' | 'Food' | 'Study';
  thumbnail: string;
  location: string;
  matchCount: number;
  attendees: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  matchCount: number;
}

export const AVAILABLE_CATEGORIES = [
  'Biz Devs',
  'Backend Devs', 
  'Frontend Devs',
  'Crypto VCs',
  'Designers',
  'Founders',
  'Community Builders',
  'Content Creators',
  'Researchers',
  'Investors'
] as const;

export type CategoryType = typeof AVAILABLE_CATEGORIES[number];

export interface ExtendedProfile {
  bio: string;
  social: {
    twitter: string;
    instagram: string;
    telegram: string;
    linkedin: string;
  };
  categories: string[];
  location: { lat: number; lng: number };
}

