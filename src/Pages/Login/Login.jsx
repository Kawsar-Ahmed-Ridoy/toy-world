import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../SocialLogin/GoogleLogin';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
  useTitle("Login")
  const [error, setError] = useState('')
  const {login} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('')
    if(password.length < 6){
      return setError('The password is less than 6 characters')
    }
    login(email, password)
    .then(result =>{
      const user = result.user;
      navigate(from, { replace: true });
      form.reset()
    })
    .catch(error => setError(error.message))
  }
    return (
      <div className="hero py-14">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-warning font-mono">Login</h1>
          </div>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100 ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <small className="label-text-alt link link-hover">
                    Forgot password?{" "}
                    <Link to="/register">
                      <span className="font-bold text-primary"> Register</span>
                    </Link>
                  </small>
                </label>
                <small className="ml-1 text-red-600">{error}</small>
              </div>
              <div className="form-control mt-4">
                <input
                  className="btn btn-outline px-36"
                  type="submit"
                  value="Login"
                />
                <div className="divider mb-2">OR</div>
              </div>
              <GoogleLogin></GoogleLogin>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;