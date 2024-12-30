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
        const newSocket = io("http://localhost:8800");
         setSocket(newSocket);


       return ()=>{
         newSocket.disconnect()
       };
    },[]);


    useEffect(()=>{
        if(currentUser && socket) {
            socket.emit("newUser", currentUser.id);
          };

    },[currentUser,socket])


    return (
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    )

};
