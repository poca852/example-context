import { create } from "zustand";

export interface ProfileState {
  name: string;
  email: string;

  changeProfile: (email: string, name: string) => void;
}

export const useProfileStore = create<ProfileState>()( ( set, get ) => ({
  name: 'David Cuspoca',
  email: 'david-cuspoca@hotmail.com',

  changeProfile: (email: string, name: string) => set({ name, email })
}))