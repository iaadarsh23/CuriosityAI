import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
	const { user } = useAuth();

	if (!user) {
		// Redirect to login if user is not authenticated
		return <Navigate to="/" replace />;
	}

	return children;
};

export default ProtectedRoute;
