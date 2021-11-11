import create from 'zustand';
import {persist, StateStorage} from 'zustand/middleware';

interface OtherInfoStoreI {
    helperPageWidth: number;
    helperPageEnable: boolean;
    openHelperPage: () => void;
    closeHelperPage: () => void;
    toggleHelperPage: () => void;
    setHelperPageWidth: (width: number) => void;
}

export const useOtherInfoStore = create<OtherInfoStoreI>(
    persist(
        (set, get) => {
            return {
                helperPageWidth: 400,
                helperPageEnable: false,
                openHelperPage: () => {
                  set({helperPageEnable: true})
                },
                closeHelperPage: () => {
                    set({helperPageEnable: false})
                },
                toggleHelperPage: () => {
                  const state = get().helperPageEnable;

                  set({helperPageEnable: !state})
                },
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
