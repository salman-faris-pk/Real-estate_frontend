import { io,Socket} from "socket.io-client"
import { AuthContext } from "./AuthContext"
import { createContext, useContext, useEffect, useState,ReactNode} from "react";




interface SocketContextType {
    socket: Socket | null;
  };

  interface SocketContextProviderProps {
    children: ReactNode;
  }

export const SocketContext= createContext<SocketContextType | null>(null);


export const SocketContextProvider=({children}:SocketContextProviderProps)=>{

    const { currentUser }:any = useContext(AuthContext);
    const [socket, setSocket] = useState<Socket | null>(null);


    useEffect(()=>{
         setSocket(io("http://localhost:4000"));
    },[]);


    useEffect(()=>{
      currentUser && socket?.emit("newUser", currentUser.id);
    },[currentUser,socket])


    return (
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    )

};
