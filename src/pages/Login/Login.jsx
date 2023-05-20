import { useContext, useState } from 'react';
import loginImage from '../../assets/login.jpg'
import { Link } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Login = () => {

    const { signIn } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.log(error))
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('Login Successful!')
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className='relative'>
            <img src={loginImage} alt="" />
            <div className="hero absolute top-1/2 -left-60 transform -translate-y-1/2">
                <div className="hero-content flex-col text-center w-1/2">
                    <div className="">
                        <h1 className="text-5xl font-bold mb-8">Login!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Your email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Your password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#86C8BC] border-none mb-4">Login</button>
                                    <button onClick={handleGoogleSignIn} className="btn bg-[#F16385] border-none">Sign in with Google <span className='ms-2'><FaGoogle /></span> </button>
                                </div>
                                <p className='text-red-500'>{error}</p>
                                <p className='text-green-500'>{success}</p>
                            </form>
                        </div>
                        <p className='mb-4'>New to Car Palace? <Link className='font-bold link-hover' to='/sign-up'>Sign Up</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;