import { createContext, ReactNode, useContext, useState } from "react";

export const AuthContext = createContext<any>("");

interface Props {
  children?: ReactNode;
}

export const AuthWrapper: React.FC<Props> = ({ children }) => {
  const [userDetails, setUserDetails] = useState();
  const [viewGoodsDets, setViewGoodsDets] = useState<object>({});
  const [cartArray, setCartArray] = useState([] as any[]);
  const [viewBuyer, setViewBuyer] = useState<object>({});
  const [editGoodsDets, setEditGoodsDets] = useState<object>({});
  let sharedState = {
    userDetails,
    setUserDetails,
    viewGoodsDets,
    setViewGoodsDets,
    cartArray,
    setCartArray,
    viewBuyer,
    setViewBuyer,
    editGoodsDets,
    setEditGoodsDets,
  };

  return (
    <AuthContext.Provider value={sharedState}>{children}</AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}
