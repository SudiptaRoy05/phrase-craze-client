import { useNavigate } from "react-router-dom";

export default function Tutorials() {
  const navigate = useNavigate();

  // Array of YouTube video URLs
  const videos = [
    "https://www.youtube.com/embed/RuGmc662HDg?si=56EDc-84Coc37gFU",
    "https://www.youtube.com/embed/RuGmc662HDg?si=dFL1i4LzNbg-UV-R", 
    "https://www.youtube.com/embed/d54ioeKA-jc?si=nHuIj_USOkfk_oZe",
    "https://www.youtube.com/embed/IaerX0Y6wmE?si=RguZeVauK-Qqw1xY",
    "https://www.youtube.com/embed/HCytWm3RC9g?si=U7E5YR5B0l0p7sbx", 
    "https://www.youtube.com/embed/RElBVZ1Wke0?si=1lqTP6eMvV62szFL",
    "https://www.youtube.com/embed/KDkQOXcEr4o?si=kYeglkxDoiMztDGy",
    "https://www.youtube.com/embed/KDkQOXcEr4o?si=UabOzoCxGGzjuU9f",
    "https://www.youtube.com/embed/n6db5VSUm2o?si=MSwWa25BXCAF3kgQ",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 py-10">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
        Explore Our Tutorials
      </h1>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20">
        {videos.map((video, index) => (
          <div
            key={index}
            className="group bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <iframe
              className="w-full h-56 rounded-t-xl"
              src={video}
              title={`Tutorial ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300">
              <h2 className="text-xl font-semibold text-center text-blue-700">
                Tutorial {index + 1}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
        >
          Learn Vocabularies
        </button>
      </div>
    </div>
  );
}
