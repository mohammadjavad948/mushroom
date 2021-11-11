import create from 'zustand';
import {persist, StateStorage} from 'zustand/middleware';

interface OtherInfoStoreI {
    helperPageWidth: number;
    setHelperPageWidth: (width: number) => void;
}

export const useOtherInfoStore = create<OtherInfoStoreI>(
    persist(
        (set, get) => {
            return {
                helperPageWidth: 400,
                setHelperPageWidth: width => {
                    set({helperPageWidth: width});
                },
            };
        },
        {
            name: 'other-info-storage',
            getStorage: () => localStorage,
        },
    ),
);
