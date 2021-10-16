import create from "zustand";
import {persist} from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeI{
    theme: 'dark' | 'light' | 'follow'
    setTheme: (theme: ThemeI['theme']) => void
}

export const useThemeStore = create<ThemeI>(persist(
    (set, get) => {

        return {
            theme: "dark",
            setTheme: theme => {
                set({theme});
            },
        }
    },
    {
        name: "theme-storage",
        getStorage: () => AsyncStorage
    }
));
