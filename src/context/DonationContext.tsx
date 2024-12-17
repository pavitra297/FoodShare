import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export interface Donation {
  id: number;
  foodType: string;
  quantity: string;
  donorName: string;
  mobile: string;
  address: string;
  pincode: string;
  timestamp: Date;
}

interface DonationContextType {
  donations: Donation[];
  addDonation: (donation: Omit<Donation, 'id' | 'timestamp'>) => void;
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export function DonationProvider({ children }: { children: ReactNode }) {
  const [donations, setDonations] = useState<Donation[]>([]);

  const addDonation = (newDonation: Omit<Donation, 'id' | 'timestamp'>) => {
    setDonations(prev => [...prev, {
      ...newDonation,
      id: Date.now(),
      timestamp: new Date()
    }]);
  };

  return (
    <DonationContext.Provider value={{ donations, addDonation }}>
      {children}
    </DonationContext.Provider>
  );
}

export function useDonations() {
  const context = useContext(DonationContext);
  if (context === undefined) {
    throw new Error('useDonations must be used within a DonationProvider');
  }
  return context;
}