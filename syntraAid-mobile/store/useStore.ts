import { create } from 'zustand';

const useStore = create((set) => ({
    user: {name: "", email: ""},
    
    user2: {name: "", email: ""},
  
  // Actions are defined directly in the store
  setUser: (newUser:{name:"", email:""; age: 0}) => set({ user: newUser }),

  setUser2: (newUser:{email:""; password: 0}) => set({ user2: newUser }),
   
}));

export default useStore;
