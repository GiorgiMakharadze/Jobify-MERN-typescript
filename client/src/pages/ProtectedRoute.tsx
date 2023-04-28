import { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAppContext } from "../context/appContext";
import { Loading } from "../components";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, userLoading } = useAppContext();

  if (userLoading) return <Loading center />;

  if (!user) {
    return <Navigate to="/landing" />;
  }

  return <>{children}</>;
};
export default ProtectedRoute;
