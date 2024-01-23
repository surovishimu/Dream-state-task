import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Social = () => {
    const navigate = useNavigate()
    const {googleLogin} = useContext(AuthContext);
    const handleSocialLogin = (media) => {
        media()
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
        <>
            <div className="divider"></div>
            <div className="flex justify-center">
                <button onClick={() => handleSocialLogin(googleLogin)} className="btn w-full normal-case btn-outline rounded outline-green-600 hover:btn-primary hover:border-none"><img className="h-6" src="https://i.ibb.co/J3yZt7b/google.png" alt="" />Continue with Google
                </button>
            </div>
        </>
    );
};

export default Social;