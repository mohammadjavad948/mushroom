import create from 'zustand';
import {persist, StateStorage} from 'zustand/middleware';

interface TokenI {
  token: string;
  setToken: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<TokenI>(
  persist(
    (set, get) => {
      return {
        token: '',
        setToken: token => {
          set({token});
        },
        logout: () => {
          set({token: ''});
        },
      };
    },
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    },
  ),
);
