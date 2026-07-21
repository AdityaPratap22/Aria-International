"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  toast: { active: boolean; message: string };
  showToast: (message: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState({ active: false, message: "" });

  const showToast = (message: string) => {
    setToast({ active: true, message });
    setTimeout(() => {
      setToast({ active: false, message: "" });
    }, 4000);
  };

  return (
    <AppContext.Provider
      value={{
        toast,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
