import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Login.css';

const Login = () => {

    const { register,formState: { errors }, handleSubmit } = useForm();
    const {signIn, signInWithGoogle} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
       
        setLoginError('');
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('User login Successfully.')
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.error(error.message);
            setLoginError(error.message);
        });
    }

    const handleGoogle = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('User login Successfully.')
        })
        .catch(error => console.error(error))
    }

  

    return (
        <div className='h-[650px] flex justify-center items-center'>
            <div className="w-full login-container max-w-md p-8 space-y-3  dark:text-gray-100">
                <h1 className="text-2xl mb-4 font-bold text-center text-black">Login</h1>
                <form className='space-y-6' onSubmit={handleSubmit(handleLogin)}>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-black">Email</label>
                        <input type='email' {...register("email", {required: "Email Address is required"})} placeholder="Email" className="w-full border px-4 py-3 rounded-md dark:border-gray-700  dark:text-black focus:dark:border-violet-400" />
                        <div className="text-xs dark:text-red-500">
                        {errors.email && <p role="alert">{errors.email?.message}</p>}
                        </div>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-black">Password</label>
                        <input type='password' {...register("password", {required: 'Password is required', minLength: {value: 6, message: 'Password must be 6 characters or longers'}})} placeholder="***********" className="w-full border px-4 py-3 rounded-md dark:border-gray-700  dark:text-black focus:dark:border-violet-400" />
                        <div className="flex justify-end text-xs dark:text-black">
                            <button>Forgot Password?</button>
                        </div>
                        <div className="flex justify-end text-xs">
                        {
                                loginError && <p className='text-red-500'>{loginError}</p>
                            }
                        </div>
                        <div className="text-xs dark:text-red-500">
                        {errors.password && <p role="alert">{errors.password?.message}</p>}
                        </div>
                    </div>
                    <input type="submit" value='LOGIN' className="block cursor-pointer w-full p-3 text-center rounded-md text-white bg-gradient-to-r from-primary to-secondary" />
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-black">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">

                    <button onClick={handleGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-black focus:ring-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-black">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p className='text-black'>CONTINUE WITH GOOGLE</p>
                    </button>

                </div>
                <p className="text-xs text-center sm:px-6 dark:text-black">New to Doctors Portal?
                    <Link to='/signup' className="underline text-primary"> Create new account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;