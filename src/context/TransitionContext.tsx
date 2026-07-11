"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Preloader } from "@/components/preloader";

interface TransitionContextType {
  completed: boolean;
  toggleCompleted: (value: boolean) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
);

interface TransitionProviderProps {
  children: ReactNode;
}

export function TransitionProvider({ children }: TransitionProviderProps) {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = (value: boolean) => {
    setCompleted(value);
  };

  return (
    <TransitionContext.Provider value={{ completed, toggleCompleted }}>
      <Preloader />
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used inside TransitionProvider");
  }
  return context;
}