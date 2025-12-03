import { ExtendedProfile } from '@/types';

const PROFILE_KEY = 'matchy_profile';

export const getStoredProfile = (fid: number): ExtendedProfile | null => {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(`${PROFILE_KEY}_${fid}`);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

export const saveProfile = (fid: number, profile: ExtendedProfile): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`${PROFILE_KEY}_${fid}`, JSON.stringify(profile));
  } catch (error) {
    console.error('Failed to save profile:', error);
  }
};

export const getDefaultProfile = (): ExtendedProfile => ({
  bio: '',
  social: { twitter: '', instagram: '', telegram: '', linkedin: '' },
  categories: [],
  location: { lat: 37.7749, lng: -122.4194 },
});

