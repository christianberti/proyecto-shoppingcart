import React, { useReducer } from 'react'
import { authReducer, initialState } from '../reducers/authReducer';
import { AuthContext } from './AuthContext';

const initAuthReducer = () => {
  return JSON.parse(localStorage.getItem('user')) || initialState;
}

export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, {}, initAuthReducer)

    const { user, isAuth } = state

    const login = (usuario) => {
      //dispatch
      dispatch({
        type: 'LOGIN',
        payload: usuario,
      })
      //guardar en LS
      localStorage.setItem('user', JSON.stringify({
        isAuth: true,
        user: usuario
        })
      )
    }

    const logout = () => {
      dispatch({
        type: 'LOGOUT',
      })
      localStorage.clear();
    }

  return (
    <AuthContext.Provider value={{
      user, 
      isAuth,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
   )
}
