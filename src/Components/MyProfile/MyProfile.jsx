import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function MyProfile() {
  const { user, updateUserProfile } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-t from-blue-100 via-sky-200 to-blue-300">
      <Helmet>
        <title>My Profile</title>
      </Helmet>
      <div className="card bg-white shadow-lg border border-blue-200 rounded-lg p-10 w-full max-w-2xl">
        {user ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-blue-800 mb-4">
                Welcome, {user.displayName || "Anonymous User"}!
              </h1>
              <p className="text-blue-600 text-xl">
                We're glad to have you here. You can edit your profile or
                explore your lessons.
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-6">
                <img
                  src={user.photoURL || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-4xl font-semibold text-blue-800">
                Welcome, {user.displayName || "Anonymous User"}!
              </h2>
              <p className="text-blue-600 text-xl mb-6">{user.email}</p>
            </div>

            <div className="mb-6">
              <p className="text-blue-600 font-semibold text-xl">
                Profile Information:
              </p>
              <ul className="list-disc pl-5 text-lg">
                <li>
                  <strong>Name:</strong> {user.displayName || "Anonymous User"}
                </li>
                <li>
                  <strong>Email:</strong> {user.email}
                </li>
                <li>
                  <strong>Profile Image URL:</strong>
                  <span className="block overflow-hidden text-ellipsis whitespace-nowrap max-w-xs">
                    {user.photoURL || "No Image URL"}
                  </span>
                </li>
              </ul>
            </div>

            <div className="form-control">
              <Link
                to="updateprofile"
                className="btn bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg w-full text-lg"
              >
                Edit Profile
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-blue-800">
              No User Logged In
            </h2>
            <p className="text-blue-600 text-xl mb-6">
              Please log in to view your profile.
            </p>
            <Link to="/auth/login">
              <button className="btn bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-200 text-lg">
                Go to Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
