export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="card bg-blue-50 w-full max-w-md shrink-0 shadow-2xl border border-blue-200 rounded-lg p-6">
        <form className="card-body">
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
              placeholder="Enter your name"
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
              placeholder="Enter your password"
              className="input input-bordered bg-blue-100 border-blue-300 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text text-blue-700">Image URL</span>
            </label>
            <input
              type="url"
              placeholder="Profile image URL"
              className="input input-bordered bg-blue-100 border-blue-300 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
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
