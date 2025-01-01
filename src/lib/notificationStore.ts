import { create } from 'zustand'
import apiRequest from './apiRequest'



interface NotificationStore {
  number: number; 
  fetch: () => Promise<void>; 
  decrease: () => void; 
  reset: () => void; 
};

export const useNotificationStore = create<NotificationStore>((set) => ({
  number: 0,
 fetch: async()=>{
   const res= await apiRequest('/user/notifications');   
     set({number: res.data})
 },
 decrease: ()=> {
  set((prev) => ({ number: Math.max(prev.number - 1, 0) })); 
 },
 reset: ()=> {
    set({number : 0})
 },
}));