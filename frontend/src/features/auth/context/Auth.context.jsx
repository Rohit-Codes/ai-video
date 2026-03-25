import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getMyData } from "../services/auth.services";
import toast from "react-hot-toast";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMydetails = async () => {
      setLoading(true);
      try {
        const res = await getMyData();

        //   console.log("I am in==>", res?.user);
        setUser(res?.user);
        setLoading(false);
      } catch (error) {
        toast.error(error.response?.data?.message || "Register failed!");
        setError(error.response?.data?.message || error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getMydetails();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, setLoading, error, setError }}
    >
      {children}
    </AuthContext.Provider>
  );
};
