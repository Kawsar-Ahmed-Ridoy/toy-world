import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../SocialLogin/GoogleLogin';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    setError("");
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: name, photoURL: photo
        };

        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

    return (
        <div className="hero py-14">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-warning font-mono">Register</h1>
          </div>
          <div className="card w-full max-w-md shadow-2xl bg-base-100 ">
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div><div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
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
                    <Link to="/login">
                      <span className="font-bold text-primary"> Login</span>
                    </Link>
                  </small>
                </label>
                <small className="ml-1 text-red-600">{error}</small>
              </div>
              <div className="form-control mt-4">
                <input
                  className="btn btn-outline px-36"
                  type="submit"
                  value="Register"
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

export default Register;