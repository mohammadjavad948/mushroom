import create from 'zustand';

interface OtherInfoStoreI {
    helperPageWidth: number;
    helperPageEnable: boolean;
    openHelperPage: () => void;
    closeHelperPage: () => void;
    toggleHelperPage: () => void;
    setHelperPageWidth: (width: number) => void;
}

export const useOtherInfoStore = create<OtherInfoStoreI>(
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
);
