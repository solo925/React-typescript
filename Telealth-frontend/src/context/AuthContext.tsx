import React, { createContext, ReactNode, useEffect, useState } from 'react';

type AuthContextType = {
  auth: AuthState;
  login: (token: string) => void;
  logout: () => void;
};

type AuthState = {
  user: any | null;
  token: string | null;
  role: string | null;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({ user: null, token: null, role: null });

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      const decoded = jwt_decode(token);
      setAuth({ user: decoded, token, role: (decoded as any).role });
    }
  }, []);

  const login = (token: string) => {
    const decoded = jwt_decode(token);
    localStorage.setItem('access_token', token);
    setAuth({ user: decoded, token, role: (decoded as any).role });
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    setAuth({ user: null, token: null, role: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
function jwt_decode(token: string) {
    throw new Error('Function not implemented.');
}

