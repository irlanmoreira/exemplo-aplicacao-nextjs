'use client'

import { ReactNode, createContext, useState } from 'react'

interface User {
    name: string;
    email: string;
    photo: string;
}

interface UserContextData {
    user: User | null;
    setUser: (user: User | null) => void
}

export const UserContext = createContext<UserContextData>({} as UserContextData)

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
