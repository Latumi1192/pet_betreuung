import React, { createContext, useState } from "react";

export const HostID = createContext({
  hostUID: 0,
  setHostUID: (uid: number) => {},
});

type UserProviderProps = { children: React.ReactNode };

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [hostUID, setHostUID] = useState(0);
  return (
    <HostID.Provider value={{ hostUID, setHostUID }}>
      {children}
    </HostID.Provider>
  );
};
