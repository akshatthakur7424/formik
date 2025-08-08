"use client";

import { ReactNode, createContext, useState, Dispatch, SetStateAction } from "react";

// user data shape
interface UserData {
    name: string;
    email: string;
}

// defining context type
interface UserDataContextType {
    data: UserData;
    setData: Dispatch<SetStateAction<UserData>>;
}

// creating context
export const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

// creating context provider component
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<UserData>({
        name: "",
        email: "",
    });

    return (
        <UserDataContext.Provider value={{ data, setData }}>
            {children}
        </UserDataContext.Provider>
    );
};