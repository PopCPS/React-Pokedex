import { create } from "zustand";

const useStore = create((set) => ({
    apiUrl: `https://pokeapi.co/api/v2/pokemon?limit=15&offset=0`,

    setApiUrl: (payload) => set(() => ({ apiUrl: payload }) )
}))

export default useStore