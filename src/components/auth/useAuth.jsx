import { useContext } from "react";
import { AuthContext } from "./UserContext";

export const useAuth = () => {
  return useContext(AuthContext);
};
