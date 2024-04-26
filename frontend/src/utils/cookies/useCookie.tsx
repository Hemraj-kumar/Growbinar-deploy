import { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

interface CookieContextType {
  Token: string | null;
  setToken: (token: string | null) => void;
  username: string;
  setUsername: (username: string) => void;
  role: string;
  setRole: (role: string) => void;
}

const CookieContext = createContext<CookieContextType>({} as CookieContextType);
export const useGlobalContext = () => useContext(CookieContext);

export const AppContext: React.FC<CookieContextType> = (children) => {
  const [state, setState] = useState({
    Token: Cookies.get('token')?? null,
    username: Cookies.get('username')?? '',
    role: Cookies.get('role')?? '',
  });

  const { Token, username, role } = state;

  const updateState = (newState: Partial<CookieContextType>) => {
    setState((prevState) => ({...prevState,...newState }));
  };

  return (
    <CookieContext.Provider value={{ Token, setToken: updateState.bind(null, { Token }), username, setUsername: updateState.bind(null, { username }),role, setRole: updateState.bind(null, { role }) }}>
      <>
        {children}
      </>
    </CookieContext.Provider>
  );
};