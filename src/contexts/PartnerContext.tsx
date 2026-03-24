import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface Partner {
  id: string;
  name: string;
  email: string;
  gender: string;
  mood: string | null;
  lastMoodUpdate: string | null;
}

interface PartnerContextType {
  partner: Partner | null;
  myMood: string | null;
  isLinked: boolean;
  isLoading: boolean;
  linkPartner: (email: string) => Promise<void>;
  unlinkPartner: () => Promise<void>;
  updateMood: (emoji: string) => Promise<void>;
  refreshPartnerStatus: () => Promise<void>;
}

const PartnerContext = createContext<PartnerContextType | undefined>(undefined);

export const PartnerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, token } = useAuth();
  const [partner, setPartner] = useState<Partner | null>(null);
  const [myMood, setMyMood] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPartnerStatus = useCallback(async () => {
    if (!token) return;
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/partner/status`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      
      setPartner(data.partner || null);
      if (data.user?.mood) {
        setMyMood(data.user.mood);
      }
    } catch (err) {
      console.error("Failed to fetch partner status:", err);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (user && token) {
      fetchPartnerStatus();
      const interval = setInterval(fetchPartnerStatus, 30000);
      return () => clearInterval(interval);
    } else {
      setPartner(null);
      setMyMood(null);
      setIsLoading(false);
    }
  }, [user, token, fetchPartnerStatus]);

  const linkPartner = async (partnerEmail: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/partner/link`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({ partnerEmail })
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to link partner');
      
      toast.success("Accounts linked successfully! 💕");
      fetchPartnerStatus();
    } catch (err: any) {
      toast.error(err.message);
      throw err;
    }
  };

  const unlinkPartner = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/partner/unlink`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (!response.ok) throw new Error('Failed to unlink');
      
      setPartner(null);
      toast.success("Partner unlinked. 💔");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const updateMood = async (mood: string) => {
    setMyMood(mood); // Optimistic update
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/partner/mood`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({ mood })
      });
      
      if (!response.ok) throw new Error('Failed to update mood');
    } catch (err) {
      console.error("Mood update failed:", err);
    }
  };

  return (
    <PartnerContext.Provider value={{ 
      partner, 
      myMood,
      isLinked: !!partner, 
      isLoading, 
      linkPartner, 
      unlinkPartner, 
      updateMood,
      refreshPartnerStatus: fetchPartnerStatus
    }}>
      {children}
    </PartnerContext.Provider>
  );
};

export const usePartner = () => {
  const context = useContext(PartnerContext);
  if (context === undefined) {
    throw new Error('usePartner must be used within a PartnerProvider');
  }
  return context;
};
