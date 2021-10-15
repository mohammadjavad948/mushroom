import create from "zustand";
import {StateStorage} from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface TokenI{
    token: string
}

export const useAuthStore = create((set, get) => {

    return {

    }
});

const storage: StateStorage = {
    getItem: async (name: string): Promise<string | null> => {
        return await AsyncStorage.getItem(name) || null
    },
    setItem: async (name: string, value: string): Promise<void> => {
        await AsyncStorage.setItem(name, value)
    }
}