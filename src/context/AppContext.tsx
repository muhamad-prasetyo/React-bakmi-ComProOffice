import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Outlet, City, MenuItem, Promotion } from '../types/models';

interface AppContextType {
  outlets: Outlet[];
  cities: City[];
  menuItems: MenuItem[];
  promotions: Promotion[];
  selectedOutlet: Outlet | null;
  setSelectedOutlet: (outlet: Outlet | null) => void;
  setOutlets: (outlets: Outlet[]) => void;
  setCities: (cities: City[]) => void;
  setMenuItems: (menuItems: MenuItem[]) => void;
  setPromotions: (promotions: Promotion[]) => void;
}

const defaultContextValue: AppContextType = {
  outlets: [],
  cities: [],
  menuItems: [],
  promotions: [],
  selectedOutlet: null,
  setSelectedOutlet: () => {},
  setOutlets: () => {},
  setCities: () => {},
  setMenuItems: () => {},
  setPromotions: () => {},
};

const AppContext = createContext<AppContextType>(defaultContextValue);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [outlets, setOutlets] = useState<Outlet[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [selectedOutlet, setSelectedOutlet] = useState<Outlet | null>(null);

  const value = {
    outlets,
    cities,
    menuItems,
    promotions,
    selectedOutlet,
    setSelectedOutlet,
    setOutlets,
    setCities,
    setMenuItems,
    setPromotions,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppContext; 