import { useContext } from 'react';
import loginImage from '../../assets/login.jpg'
import { Link } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';


const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='relative'>
            <img src={loginImage} alt="" />
            <div className="hero absolute top-1/2 -left-60 transform -translate-y-1/2">
                <div className="hero-content flex-col text-center w-1/2">
                    <div className="">
                        <h1 className="text-5xl font-bold mb-8">Sign Up!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Your photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#86C8BC] border-none mb-4">Sign Up</button>
                                </div>
                            </form>
                        </div>
                        <p className='mb-4'>Already have an account? <Link className='font-bold link-hover' to='/login'>Login here.</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;