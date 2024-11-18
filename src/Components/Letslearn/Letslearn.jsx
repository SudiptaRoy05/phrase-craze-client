import { Link, useNavigate } from "react-router-dom";

export default function Letslearn() {
    const navigate = useNavigate();
  return (
    <div className=" w-10/12 mx-auto bg-gradient-to-b from-blue-100 to-white flex flex-col my-6">
    {/* Page Title */}
    <div className="bg-blue-500 text-white py-8 text-center">
      <h1 className="text-4xl font-bold">❄️ Learn Vocabulary by Lessons ❄️</h1>
      <p className="text-xl mt-2">Warm up with new words this winter!</p>
    </div>

    {/* Lessons Section */}
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Start Learning
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Static Lesson Cards */}
        {Array.from({ length: 10 }, (_, i) => (
          <Link
            key={i}
            to={`/lesson/${i + 1}`}
            className="bg-white shadow-lg rounded-lg p-6 text-center cursor-pointer hover:scale-105 transition-transform border border-blue-300"
          >
            <h3 className="text-2xl font-bold text-blue-600">Lesson-{i + 1}</h3>
            <p className="text-gray-600 mt-2">Click to explore!</p>
          </Link>
        ))}
      </div>
    </div>

    {/* Tutorial Section */}
    <div className="bg-blue-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          ❄️ Learn the Alphabet ❄️
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Video Embed */}
          <div className="flex-1">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/wpBPaDI5IgI?si=CByK-IUR75XqQWTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          {/* View More Button */}
          <div>
            <button onClick={()=>navigate('/tutorials')} className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 transition">
              View More Tutorials
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Footer with Winter Theme */}
   
  </div>
  );
}
