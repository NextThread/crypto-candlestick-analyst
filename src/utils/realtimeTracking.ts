
import { useEffect, useState } from "react";

const TOTAL_CHARTS_ANALYZED_KEY = "total_charts_analyzed";
const TOTAL_REGISTERED_USERS_KEY = "total_registered_users";

// Function to get or initialize count from localStorage
const getOrInitCount = (key: string, initialValue: number): number => {
  try {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null) {
      localStorage.setItem(key, initialValue.toString());
      return initialValue;
    }
    return parseInt(storedValue);
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return initialValue;
  }
};

// Function to increment count
export const incrementCount = (key: string): number => {
  const currentCount = getOrInitCount(key, key === TOTAL_CHARTS_ANALYZED_KEY ? 153427 : 5843);
  const newCount = currentCount + 1;
  localStorage.setItem(key, newCount.toString());
  
  // Dispatch custom event to notify all listeners
  window.dispatchEvent(new CustomEvent(`${key}_updated`, { detail: newCount }));
  
  return newCount;
};

// Hook to get real-time count
export const useRealtimeCount = (key: string, initialValue: number): number => {
  const [count, setCount] = useState<number>(() => getOrInitCount(key, initialValue));
  
  useEffect(() => {
    const handleCountUpdated = (event: CustomEvent) => {
      setCount(event.detail);
    };
    
    // Add event listener
    window.addEventListener(`${key}_updated`, handleCountUpdated as EventListener);
    
    // Clean up
    return () => {
      window.removeEventListener(`${key}_updated`, handleCountUpdated as EventListener);
    };
  }, [key]);
  
  return count;
};

export const incrementChartAnalyzed = (): number => {
  return incrementCount(TOTAL_CHARTS_ANALYZED_KEY);
};

export const incrementRegisteredUsers = (): number => {
  return incrementCount(TOTAL_REGISTERED_USERS_KEY);
};

export const useChartAnalyzedCount = (): number => {
  return useRealtimeCount(TOTAL_CHARTS_ANALYZED_KEY, 153427);
};

export const useRegisteredUsersCount = (): number => {
  return useRealtimeCount(TOTAL_REGISTERED_USERS_KEY, 5843);
};
