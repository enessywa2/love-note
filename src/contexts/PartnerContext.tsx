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

const getApiUrl = (path: string) => {
  const configuredUrl = import.meta.env.VITE_API_URL?.trim();

  if (configuredUrl) {
    return `${configuredUrl.replace(/\/$/, "")}${path}`;
  }

  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    if (host !== "localhost" && host !== "127.0.0.1") {
      return `${window.location.origin}${path}`;
    }
  }

  return `http://localhost:5001${path}`;
};

export const PartnerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, token } = useAuth();
  const [partner, setPartner] = useState<Partner | null>(null);
  const [myMood, setMyMood] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPartnerStatus = useCallback(async () => {
    if (!token) return;
    
    try {
      const response = await fetch(getApiUrl('/api/partner/status'), {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (!response.ok) {
        throw new Error(`Partner status request failed with ${response.status}`);
      }

      const contentType = response.headers.get('content-type') || '';
      const isJson = contentType.includes('application/json');
      const data = isJson ? await response.json() : null;

      if (!data || typeof data !== 'object') {
        setPartner(null);
        setMyMood(null);
        return;
      }

      setPartner(data.partner || null);
      setMyMood(data.user?.mood ?? null);
    } catch (err) {
      console.warn("Partner status unavailable:", err);
      setPartner(null);
      setMyMood(null);
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
      const response = await fetch(getApiUrl('/api/partner/link'), {
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
      const response = await fetch(getApiUrl('/api/partner/unlink'), {
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
      const response = await fetch(getApiUrl('/api/partner/mood'), {
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
