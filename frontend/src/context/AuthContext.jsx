import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "../api/authAPI";
import { getProfile } from "../api/user.api";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUserState] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  // ==================================
  // HYDRATE USER FROM BACKEND (IMPORTANT FIX)
  // ==================================

  useEffect(() => {

    const initAuth = async () => {

      const savedToken = localStorage.getItem("token");

      if (!savedToken) {
        setLoading(false);
        return;
      }

      try {
        const res = await getProfile();

        setUserState(res.data);

        localStorage.setItem(
          "user",
          JSON.stringify(res.data)
        );

      } catch (err) {

        console.error("Auth hydration failed:", err);

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setUserState(null);
        setToken(null);
      }

      setLoading(false);
    };

    initAuth();

  }, []);

  // ==================================
  // CENTRALIZED USER UPDATE
  // ==================================

  const setUser = (newUser) => {

    setUserState(newUser);

    if (newUser) {
      localStorage.setItem(
        "user",
        JSON.stringify(newUser)
      );
    } else {
      localStorage.removeItem("user");
    }
  };

  // ==================================
  // LOGIN
  // ==================================

  const login = async (formData) => {

    const response = await loginUser(formData);

    const { user, token } = response.data;

    localStorage.setItem("token", token);

    setToken(token);
    setUser(user);

    return user;
  };

  // ==================================
  // REGISTER
  // ==================================

  const register = async (formData) => {
    const response = await registerUser(formData);
    return response.data;
  };

  // ==================================
  // LOGOUT
  // ==================================

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);

    document.body.classList.remove("modal-open");

    document
      .querySelectorAll(".modal-backdrop")
      .forEach((el) => el.remove());

    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}