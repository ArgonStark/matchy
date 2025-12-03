"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import { ExtendedProfile } from "@/types";
import { getStoredProfile, saveProfile, getDefaultProfile } from "@/lib/storage";

interface FarcasterUser {
  fid: number;
  username?: string;
  displayName?: string;
  pfpUrl?: string;
}

interface Profile extends ExtendedProfile {
  fid: number;
  username?: string;
  displayName?: string;
  pfpUrl?: string;
}

interface FarcasterContextType {
  isLoaded: boolean;
  user: FarcasterUser | null;
  isInMiniApp: boolean;
  profile: Profile | null;
  updateProfile: (updates: Partial<ExtendedProfile>) => void;
}

const FarcasterContext = createContext<FarcasterContextType>({ 
  isLoaded: false, 
  user: null,
  isInMiniApp: false,
  profile: null,
  updateProfile: () => {},
});

export const useFarcaster = () => useContext(FarcasterContext);

export function FarcasterProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState<FarcasterUser | null>(null);
  const [isInMiniApp, setIsInMiniApp] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        if (typeof window !== 'undefined' && sdk) {
          const context = await sdk.context;
          if (context?.user) {
            setUser(context.user);
            setIsInMiniApp(true);
            
            // Load stored profile or create default
            const storedProfile = getStoredProfile(context.user.fid);
            const defaultProfile = getDefaultProfile();
            const extendedProfile = storedProfile || defaultProfile;
            
            setProfile({
              ...context.user,
              ...extendedProfile,
            });
          } else {
            // Fallback for non-Farcaster context (development)
            const mockUser = {
              fid: 12345,
              username: 'mahdieh',
              displayName: 'Mahdieh',
              pfpUrl: 'https://ui-avatars.com/api/?name=Mahdieh&background=0891B2&color=fff&size=200',
            };
            setUser(mockUser);
            const defaultProfile = getDefaultProfile();
            setProfile({
              ...mockUser,
              ...defaultProfile,
            });
          }
          await sdk.actions.ready(); // CRITICAL!
        }
      } catch (e) {
        console.log("Not in Mini App context");
        // Fallback for development
        const mockUser = {
          fid: 12345,
          username: 'mahdieh',
          displayName: 'Mahdieh',
          pfpUrl: 'https://ui-avatars.com/api/?name=Mahdieh&background=0891B2&color=fff&size=200',
        };
        setUser(mockUser);
        const defaultProfile = getDefaultProfile();
        setProfile({
          ...mockUser,
          ...defaultProfile,
        });
      } finally {
        setIsLoaded(true);
      }
    };
    init();
  }, []);

  const updateProfile = (updates: Partial<ExtendedProfile>) => {
    if (!user || !profile) return;
    
    const updatedProfile: Profile = {
      ...profile,
      ...updates,
      social: {
        ...profile.social,
        ...(updates.social || {}),
      },
    };
    
    setProfile(updatedProfile);
    
    // Save to localStorage
    const extendedProfile: ExtendedProfile = {
      bio: updatedProfile.bio,
      social: updatedProfile.social,
      categories: updatedProfile.categories,
      location: updatedProfile.location,
    };
    saveProfile(user.fid, extendedProfile);
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <FarcasterContext.Provider value={{ isLoaded, user, isInMiniApp, profile, updateProfile }}>
      {children}
    </FarcasterContext.Provider>
  );
}

