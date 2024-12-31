

export interface RoomDetails {
    id: string;
    title: string;
    price: number;
    images: string[];
    address: string;
    city: string;
    bedroom: number;
    bathroom: number;
    latitude: string | number; 
    longitude: string | number; 
    createdAt: string | number;
  };
  

  export type ChatData = {
    id: string;
    receiver: {
      id: string;
      username: string;
      avatar?: string;
    };
    seenBy: string[];
    lastMessage?: string;
  };