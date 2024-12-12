import { createContext, useEffect, useState, ReactNode } from "react";


interface AuthContextType {
  currentUser: string | null;
  updateUser: (data: string) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {

  const storedUser = localStorage.getItem("user");
  const [currentUser, setCurrentUser] = useState<string | null>(
    storedUser ? JSON.parse(storedUser) : null
  );

 
  const updateUser = (data: any) => {
    setCurrentUser(data);
  };

  
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
