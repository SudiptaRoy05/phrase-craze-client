import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const { createNewUser, setUser, updateUserProfile, loginWithGoogle } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const name = form.get("name");
    const imageUrl = form.get("imageUrl");
    const email = form.get("email");
    const password = form.get("password");

    if (!passwordRegex.test(password)) {
      setError({
        ...error,
        password:
          "Password must be at least 6 characters long and include both uppercase and lowercase letters.",
      });
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("User created successfully!");
        updateUserProfile({ displayName: name, photoURL: imageUrl })
          .then((result) => {
            navigate("/");
          })
          .catch((error) => {
            // Handle error
          });
      })
      .catch((error) => {
        setError({ ...error, form: error.message });
        toast.error(error.message);
      });
  };

  const handleSocialLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("User logged in with Google!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError({ ...error, login: error.message });
        toast.error("Error during Google login: " + error.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="card bg-blue-50 w-full max-w-md shrink-0 shadow-2xl border border-blue-200 rounded-lg p-6">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-800">
              Create Your Account
            </h2>
            <p className="text-blue-600 text-base">
              Start your language journey this winter!
            </p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-700">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered bg-blue-100 border-blue-300 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text text-blue-700">Image URL</span>
            </label>
            <input
              type="text"
              name="imageUrl"
              placeholder="Profile image URL"
              className="input input-bordered bg-blue-100 border-blue-300 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-control mt-4">
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
            {error.password && (
              <label className="label mt-1">
                <p className="label-text-alt text-red-500">{error.password}</p>
              </label>
            )}
          </div>

          {error.form && (
            <div className="text-center mt-4">
              <p className="text-red-500">{error.form}</p>
            </div>
          )}

          <label className="label mt-1">
            <p className="label-text-alt text-lg text-blue-500">
              Already have an account?{" "}
              <Link className="link" to="/auth/login">
                Login
              </Link>
            </p>
          </label>
          <div className="form-control mt-6">
            <button className="btn bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg w-full py-3">
              Register
            </button>
          </div>
          <div className="divider my-6 text-blue-500">OR</div>
          <div className="form-control">
            <button
              className="btn bg-white hover:bg-gray-100 border border-gray-300 flex items-center justify-center rounded-lg w-full py-3"
              type="button"
              onClick={handleSocialLogin}
            >
              <FcGoogle className="text-2xl mr-2" />
              <span className="text-gray-700 font-medium">
                Continue with Google
              </span>
            </button>
          </div>
        </form>
      </div>

      
    </div>
  );
}
