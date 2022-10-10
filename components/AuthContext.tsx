import { createContext, useContext, useState } from "react";

export const AuthContext = createContext<any>("");

export function AuthWrapper({ children }) {
  const [userDetails, setUserDetails] = useState();
  const [cartArray, setCartArray] = useState([] as any[]);
  let sharedState = { userDetails, setUserDetails, cartArray, setCartArray };

  return (
    <AuthContext.Provider value={sharedState}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
