import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(() => localStorage.getItem("idToken"));

  const userIsLoggedIn = !!token;

  const login = (token) => {
    setToken(token);
    localStorage.setItem("idToken", token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("idToken");
  };

  const authContextValues = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={authContextValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
