export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="text-4xl font-bold my-2">404</p>
      <p className="text-lg text-gray-700">The page you're looking for doesn't exist or an error occurred.</p>
      <a href="/" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700">
        Go Back Home
      </a>
    </div>
  );
}
