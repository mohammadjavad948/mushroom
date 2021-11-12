import create from 'zustand';
import {persist} from "zustand/middleware";

interface OtherInfoStoreI {
    helperPageEnable: boolean;
    openHelperPage: () => void;
    closeHelperPage: () => void;
    toggleHelperPage: () => void;
}

export const useOtherInfoStore = create<OtherInfoStoreI>(
        (set, get) => {
            return {
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
            };
        },
);

interface PersistableOtherInfoStoreI {
    helperPageWidth: number;
    setHelperPageWidth: (width: number) => void;
}

export const usePersistableOtherInfo = create<PersistableOtherInfoStoreI>(
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
            getStorage: () => localStorage,
            name: 'other-info'
        }
    )
)