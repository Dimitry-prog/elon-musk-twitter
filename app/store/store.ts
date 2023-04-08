import { create } from "zustand";
import { LoginModalStore, RegisterModalStore } from "@/types";

export const useLoginModal = create<LoginModalStore>(set => ({
  isOpen: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false}),
}));

export const useRegisterModal = create<RegisterModalStore>(set => ({
  isOpen: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false}),
}));
