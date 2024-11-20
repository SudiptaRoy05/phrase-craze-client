import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

export default function Login() {
  const { loginUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError({ ...error, login: error.message });
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="card bg-blue-50 w-full max-w-md shrink-0 shadow-2xl border border-blue-200 rounded-lg p-6">
        <form onSubmit={handleLogin} className="card-body">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-800">Welcome Back!</h2>
            <p className="text-blue-600 text-base">
              Warm up your language skills this winter!
            </p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-700">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered bg-blue-100 border-blue-300 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text text-blue-700">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered bg-blue-100 border-blue-300 focus:ring-2 focus:ring-blue-500"
              required
            />
            {error.login && (
              <label className="label mt-1">
                <p className="label-text-alt text-red-500 link link-hover">
                  {error.login}
                </p>
              </label>
            )}
            <label className="label mt-1">
              <Link
                to='/auth/forgotpassword'
                className="label-text-alt text-blue-500 link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <label className="label mt-1">
            <p className="label-text-alt text-lg text-blue-500">
              Dont have an account ?{" "}
              <Link className="link" to="/auth/register">
                Register
              </Link>
            </p>
          </label>
          <div className="form-control mt-6">
            <button className="btn bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg w-full py-3">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
