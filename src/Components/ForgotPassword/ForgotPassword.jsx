import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const { handleForgotPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleForgot = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    handleForgotPassword(email)
      .then((resulr) => {
        alert("email send successfull");
        navigate(-1)
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="card bg-blue-50 w-full max-w-md shrink-0 shadow-2xl border border-blue-200 rounded-lg p-6">
        <form onSubmit={handleForgot} className="card-body">
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
          <div className="form-control mt-6">
            <button className="btn bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg w-full py-3">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
