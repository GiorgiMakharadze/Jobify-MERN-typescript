import { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAppContext } from "../context/appContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return <>{children}</>;
};
export default ProtectedRoute;
