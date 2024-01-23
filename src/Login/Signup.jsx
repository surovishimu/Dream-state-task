import { Link, useNavigate } from "react-router-dom";
import Social from "./Social";

import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";



const Signup = () => {
    const { createUser, handleUpdateProfile } = useAuth();
    const navigate = useNavigate()
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }
        createUser(email, password)
            .then(res => {
                console.log(res);
                handleUpdateProfile(name)
                    .then(() => {
                        toast.success('User created successfully');
                        navigate('/')

                    })
            })
            .catch(error => {
                toast.error(error.message)
            })

    }
    return (
        <div className="hero min-h-screen bg-gradient-to-b from-blue-500 to-purple-500">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSignup}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
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
                            Already have a account? <Link to="/Login" className="label-text-alt link link-hover text-sm text-blue-700 font-bold">Login Here</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <Social></Social>
                </form>

            </div>
        </div>
    );
};

export default Signup;