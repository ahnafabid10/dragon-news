import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signIn} = use(AuthContext)
    const handleLogin = (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        signIn(email , password)
        .then((result) =>{
             console.log(result.user) 
        })
        .catch(error =>{
            const errorCode = error.code
            const errorMassage = error.Massage
            alert(errorCode, errorMassage)
        })


    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center py-5'>Login Your Account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <h2 className='font-semibold text-center pt-5'>Don't have an account? <Link className='text-secondary' to="/auth/register">Register</Link> Here.</h2>
    </form>
    </div>
        </div>
    );
};

export default Login;