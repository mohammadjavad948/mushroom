import create from 'zustand';
import {persist} from "zustand/middleware";

interface OtherInfoStoreI {
    isDragging: boolean
    helperPageEnable: boolean;
    openHelperPage: () => void;
    closeHelperPage: () => void;
    toggleHelperPage: () => void;
    setDragging: (state: boolean) => void
}

export const useOtherInfoStore = create<OtherInfoStoreI>(
        (set, get) => {
            return {
                isDragging: false,
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
                setDragging: state => {
                    set({isDragging: state})
                }
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