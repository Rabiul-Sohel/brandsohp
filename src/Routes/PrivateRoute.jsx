import { Navigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()
  
  if (loading) {
    return (
      <div className="flex min-h-[70vh] justify-center items-center">
        <span className="loading loading-bars loading-md"></span>
      </div>
    );
  }
  if (user) {
    return children
    
  } else {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
  
};

export default PrivateRoute;