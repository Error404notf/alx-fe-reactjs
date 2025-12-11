import { Navigate } from "react-router-dom";


function useAuth() {
  return { isAuthenticated: false };
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
