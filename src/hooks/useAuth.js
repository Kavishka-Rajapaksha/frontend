import { createContext, useContext, useState } from 'react';
import * as userService from '../services/userService';
import {toast} from 'react-toastify';

const AuthContent = createContext(null) ;
  
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(userService.getUser());
    
    
    const login = async (email, password) => {
        try {
            const user = await userService.login(email, password);
            setUser(user);
            toast.success('Login Successfuly');
        } catch (err) {
            toast.error(err.response.data);
        }   
    };

    const register = async data => {
        try {
            const user = await userService.register(data);
            setUser(user);
            toast.success('Register Successfuly');
        } catch (err) {
            toast.error(err.response.data);
        }
    };

    const logout = () => {
        userService.logout();
        setUser(null)
        toast.success('Logout Successfuly');
};

return (
    <AuthContent.Provider value={{user, login, logout, register}}>
        {children}
    </AuthContent.Provider>
);
};

export const useAuth = () => useContext(AuthContent);
