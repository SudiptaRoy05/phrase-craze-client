import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

export default function Register() {

  const {createNewUser, setUser} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const name = form.get("name");
    const imageUrl = form.get("imageUrl");
    const email = form.get("email");
    const password = form.get("password");
    createNewUser(email, password)
    .then(result => {
      const user = result.user;
      setUser(user);
      alert('user create successfull')
    }).catch(error=>{
      console.log(error.message)
    })
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
          </div>

          <label className="label mt-1">
            <p className="label-text-alt text-lg text-blue-500">
              Allready have an account ?{" "}
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
        </form>
      </div>
    </div>
  );
}
