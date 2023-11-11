import { create } from "zustand";

interface UseUploadModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useuseUploadModal = create<UseUploadModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useuseUploadModal;
