import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

export default function Letslearn() {
  const navigate = useNavigate();

  return (
    <div className="w-10/12 mx-auto bg-gradient-to-b from-blue-100 to-white flex flex-col my-6">
      
      <Helmet>
        <title>Lets Learn</title>
      </Helmet>

      <div className="bg-blue-500 text-white py-10 text-center rounded-lg shadow-md mb-8">
        <h1 className="text-5xl font-extrabold mb-4">❄️ Learn Vocabulary by Lessons ❄️</h1>
        <p className="text-xl mt-2">Warm up with new words this winter!</p>
      </div>

 
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Start Learning
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 10 }, (_, i) => (
            <Link
              key={i}
              to={`/lesson/${i + 1}`}
              className="bg-white shadow-lg rounded-lg p-6 text-center cursor-pointer hover:scale-105 transform transition-transform border-2 border-blue-300 hover:border-blue-500"
            >
              <h3 className="text-2xl font-bold text-blue-600">Lesson-{i + 1}</h3>
              <p className="text-gray-600 mt-2">Click to explore!</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-blue-100 py-10 mt-10 rounded-lg shadow-md">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            ❄️ Learn the Alphabet ❄️
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/wpBPaDI5IgI?si=CByK-IUR75XqQWTw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <button
                onClick={() => navigate('/tutorials')}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 transition-all"
              >
                View More Tutorials
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
