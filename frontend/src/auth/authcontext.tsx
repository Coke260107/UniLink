import { createContext, useContext, useState, type ReactNode } from 'react'
import type { AuthContextType } from '../type/AuthContextType'


const AuthContext = createContext<AuthContextType | null>(null)


type AuthProviderProps = {
    children : ReactNode
}


export const AuthProvider = ({ children } : AuthProviderProps) => {
    const[accessToken, setAccessToken] = useState< string | null>(null) 

    const login = (accessToken : string) => setAccessToken(accessToken)
    const logout = () => setAccessToken(null)

    return (
        <AuthContext.Provider value = {{ accessToken, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}


// AuthProvider 내부에서만 사용 가능
export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if(context === null){
        throw new Error("use with AuthProvider")
    }

    return context
}