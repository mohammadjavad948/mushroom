import create from "zustand";
import {persist} from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeI{
    theme: 'dark' | 'light' | 'follow',
    primary: string
    setTheme: (theme: ThemeI['theme']) => void
    setPrimary: (color: string) => void
}

export const useThemeStore = create<ThemeI>(persist(
    (set, get) => {

        return {
            theme: "dark",
            primary: '#f83cf3',
            setTheme: theme => {
                set({theme});
            },
            setPrimary: (color: string) => {
                set({primary: color})
            }
        }
    },
    {
        name: "theme-storage",
        getStorage: () => AsyncStorage
    }
));
