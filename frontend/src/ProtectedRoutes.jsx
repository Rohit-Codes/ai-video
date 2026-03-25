import React from "react";
import { useAuthContext } from "./features/auth/hooks/useAuth";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const { loading, user } = useAuthContext();

  if (loading) return <h1>Loading..</h1>;

  // console.log("user==>", user);

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoutes;
