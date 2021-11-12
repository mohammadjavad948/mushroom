import create from 'zustand';
import {persist} from "zustand/middleware";

interface OtherInfoStoreI {
    isDragging: boolean
    draggingId: string
    helperPageEnable: boolean;
    openHelperPage: () => void;
    closeHelperPage: () => void;
    toggleHelperPage: () => void;
    setDragging: (state: boolean, id: string) => void
}

export const useOtherInfoStore = create<OtherInfoStoreI>(
        (set, get) => {
            return {
                isDragging: false,
                draggingId: '',
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
                setDragging: (state, id) => {
                    set({isDragging: state, draggingId: id})
                }
            };
        },
);

interface PersistableOtherInfoStoreI {
    helperPageWidth: number;
    activePageId: string
    setHelperPageWidth: (width: number) => void;
    setHelperPageActivePage: (page: string) => void;
}

export const usePersistableOtherInfo = create<PersistableOtherInfoStoreI>(
    persist(
        (set, get) => {
            return {
                activePageId: 'drop',
                helperPageWidth: 400,
                setHelperPageWidth: width => {
                    set({helperPageWidth: width});
                },
                setHelperPageActivePage: page => {
                    set({activePageId: page})
                }
            };
        },
        {
            getStorage: () => localStorage,
            name: 'other-info'
        }
    )
)