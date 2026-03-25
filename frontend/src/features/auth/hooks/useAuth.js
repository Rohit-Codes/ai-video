import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { login, logout, register } from "../services/auth.services";
import toast from "react-hot-toast";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const { loading, setLoading, error, setError, user, setUser } = context;

  const userLogin = async ({ email, password }) => {
    setLoading(true);
    try {
      const res = await login({ email, password });
      console.log(res, "res==>");
      setUser(res.user);
      navigate("/generate");
      toast.success("Logged in successfully! 🎉");
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message || "Login failed!");
      setError(error.response?.data?.message || error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async ({
    username,
    email,
    password,
    confirmPassword,
  }) => {
    setLoading(true);
    try {
      await register({
        username,
        email,
        password,
        confirmPassword,
      });
      setLoading(false);
      navigate("/generate");
      toast.success("You registered in successfully! 🎉");
    } catch (error) {
      setLoading(false);

      toast.error(error.response?.data?.message || "Register failed!");
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = async () => {
    await logout();
    setUser(null);
    navigate("/");
    toast.success("Logged out successfully!");
  };

  return { loading, error, userLogin, userRegister, userLogout, user };
  // const {username,email } = context;
};
