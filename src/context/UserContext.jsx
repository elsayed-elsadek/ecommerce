import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  // Initialize user state from localStorage
  const [user, setUser] = useState(() => {
    try {
      const userData = localStorage.getItem("userData");
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error("Error parsing userData from localStorage:", error);
      return null;
    }
  });

  // Function to log in the user and save data in localStorage
  const login = (userData) => {
    if (!userData) {
      console.error("Invalid user data");
      return;
    }
    setUser(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("isSignedUp", "true");
  };

  // Function to log out and clear user data
  const logout = () => {
    setUser(null);
    localStorage.removeItem("userData");
    localStorage.removeItem("isSignedUp");
    console.log("User logged out and data cleared from localStorage.");
  };

  // Log user updates for debugging
  useEffect(() => {
    console.log("User state updated:", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing the AuthContext
export const useAuth = () => useContext(AuthContext);
