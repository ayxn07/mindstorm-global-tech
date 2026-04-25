"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type VaultState = {
  isActive: boolean;
  setActive: (active: boolean) => void;
};

const VaultContext = createContext<VaultState | null>(null);

export function VaultProvider({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState(false);
  const setActive = useCallback((active: boolean) => {
    setIsActive(active);
  }, []);

  return (
    <VaultContext.Provider value={{ isActive, setActive }}>
      {children}
    </VaultContext.Provider>
  );
}

export function useVault(): VaultState {
  const ctx = useContext(VaultContext);
  return ctx ?? { isActive: false, setActive: () => {} };
}
