import React, { useReducer } from "react"
import { AuthReducer, initialState } from "./reducer"

const AuthState = React.createContext()
const AuthDispatchContext = React.createContext()

export const useGetState = () => {
    const context = React.useContext(AuthState);

    return context;
}

export const useAuthDispatch = () => {
    const context = React.useContext(AuthDispatchContext)
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthState.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>

        </AuthState.Provider>
    );
};