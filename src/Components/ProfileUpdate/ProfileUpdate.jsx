import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

export default function ProfileUpdate() {
  const navigate = useNavigate();
  const { updateUserProfile, user, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const imageUrl = form.get("imageUrl");

    updateUserProfile({ displayName: name, photoURL: imageUrl })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: imageUrl });
        toast.success("Profile updated successfully!");
        navigate(-1);
      })
      .catch((error) => {
        const errorMessage =
          error?.message || "Failed to update profile. Please try again later.";
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100 w-10/12 mx-auto">
      <Helmet>
        <title>Profile Update</title>
      </Helmet>
      <div className="card bg-blue-50 w-full max-w-md shrink-0 shadow-2xl border border-blue-200 rounded-lg p-6">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-800">
              Update Your Profile
            </h2>
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-blue-700">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName || ""}
              placeholder="Enter your name"
              className="input input-bordered bg-blue-100 border-blue-300 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-blue-700">Image URL</span>
            </label>
            <input
              type="text"
              name="imageUrl"
              defaultValue={user?.photoURL || ""}
              placeholder="Enter your profile image URL"
              className="input input-bordered bg-blue-100 border-blue-300 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg w-full py text-xl"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>


    </div>
  );
}
