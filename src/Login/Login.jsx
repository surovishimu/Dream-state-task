import { Link, useNavigate } from "react-router-dom";
import Social from "./Social";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";


const Login = () => {

  const navigate = useNavigate()
  const { signin } = useAuth();


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    signin(email, password)
      .then(res => {
        console.log(res);
        toast.success('User logged in successfully');
        navigate('/')
      })
      .catch(error => {
        toast.error(error.message)
      })
  }

  return (
    <div className="hero min-h-screen bg-gradient-to-b from-blue-500 to-purple-500">

      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              New here? <Link to="/signUp" className="label-text-alt link link-hover text-sm text-blue-700 font-bold">Create an account</Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <Social></Social>
        </form>
      </div>
    </div>
  );
};

export default Login;