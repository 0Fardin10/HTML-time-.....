'use client';
import React,{createContext} from "react";
export const UserContext = createContext(null);
const UserProvider = ({children})=>{
return (
    <UserContext.Provider value={{user:'jamal',email:'jamal@example.com'}}>
        {children}
    </UserContext.Provider>
)
}
export default UserProvider;