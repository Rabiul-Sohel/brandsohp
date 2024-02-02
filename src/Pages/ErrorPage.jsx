import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center space-y-3">
        
        <h3 className="text-4xl font-extrabold">404</h3>
        <p className="text-2xl font-semibold">The Page not Found</p>
        <Link className="btn btn-accent" to='/'>Go Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;