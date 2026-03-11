import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('LocalStorage error:', error);
    }
  };

  return [storedValue, setValue] as const;
}

export function useGreeting(name: string = 'Gui') {
  const hour = new Date().getHours();
  if (hour < 12) return `Bom dia, ${name}! 👋`;
  if (hour < 18) return `Boa tarde, ${name}! 👋`;
  return `Boa noite, ${name}! 👋`;
}
