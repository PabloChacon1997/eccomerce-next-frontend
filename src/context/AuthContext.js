"use client"
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false);
  }, []);
  

  const login = async (token) => {
    try {
      setUser({
        email: 'pabloandres@test.com'
      });
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const data = {
    accessToken: token,
    user,
    login,
    logout: null,
    updateUser: null,
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
}