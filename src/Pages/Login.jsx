import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
  const { userLogin, socialLogin } = useAuth() 
  const location = useLocation()
  const nevigate = useNavigate()
  const loadedUser = useLoaderData()
  const googleProvider = new GoogleAuthProvider()
 
  
  const handleLogin = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const validUser = loadedUser.find(user => user.email === email || user.password === password) 
    if (!validUser) {
      toast('Your email and password is wrong')
      return
    }
    else if (validUser?.email !== email && validUser.password === password) {
      toast('wrong email')
      return
    } else if (validUser.email === email && validUser.password !== password) {
      toast('wrong password')
      return
    } else {
        userLogin(email, password)
          .then(() => {
            if (location.state) {
              nevigate(location.state);
            } else {
              nevigate("/");
            }
            toast("You logged in successfully");
          })
          .catch((err) => {
            if (err.message === "Firebase: Error (auth/invalid-credential).") {
              toast("Your Email or password is wrong");
            }
          })
    } 
   
  }
  const handleSocialLogin = media => {
    socialLogin(media)
      .then(res => console.log(res.user))
      .catch(err => console.log(err))
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <Toaster></Toaster>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="ml-5 mt-3">
            <p>Login with <button onClick={()=>handleSocialLogin(googleProvider) } className="text-blue-500 font-semibold">Google</button></p>
          </div>
          <p className="p-5 text-center">
            New to this site? Please{" "}
            <Link to="/signup" className="text-blue-500 font-bold">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;