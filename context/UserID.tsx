import React, { createContext, useState } from "react";

export const UserID = createContext({
  uid: 0,
  setUID: (uid: number) => {},
});

type UserProviderProps = { children: React.ReactNode };

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [uid, setUID] = useState(0);
  return <UserID.Provider value={{ uid, setUID }}>{children}</UserID.Provider>;
};
