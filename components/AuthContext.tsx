import { createContext, ReactNode, useContext, useState } from "react";

export const AuthContext = createContext<any>("");

interface Props {
  children?: ReactNode;
}

export const AuthWrapper: React.FC<Props> = ({ children }) => {
  const [userDetails, setUserDetails] = useState();
  const [cartArray, setCartArray] = useState([] as any[]);
  let sharedState = { userDetails, setUserDetails, cartArray, setCartArray };

  return (
    <AuthContext.Provider value={sharedState}>{children}</AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}
