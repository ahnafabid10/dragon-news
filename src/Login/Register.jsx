import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser, setUser} = use(AuthContext)
    const handleRegister = (e) =>{
        e.preventDefault()
        console.log(e.target)
        const form = e.target;
        const name =form.name.value
        const photo =form.photo.value
        const email =form.email.value
        const password =form.password.value
        console.log(name, photo, email, password)
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch((error) => {
        console.log(error)
  });

    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center py-5'>Register Your Account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" />
            {/* photo URL */}
            <label className="label">Photo URL</label>
          <input name='photo' type="text" className="input" placeholder="Photo URL" />
            {/* email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <h2 className='font-semibold text-center pt-5'>Already have an account? <Link className='text-secondary' to="/auth/login">Login</Link> Here.</h2>
      </form>
    </div>
        </div>
    );
};

export default Register;