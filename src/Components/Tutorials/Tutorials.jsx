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
    <div className="py-8 px-4 bg-gradient-to-b from-gray-100 to-gray-300 my-6 w-10/12 mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Tutorials
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <iframe
              className="w-full h-48"
              src={video}
              title={`Tutorial ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Tutorial {index + 1}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => navigate(-1)}
          className="btn bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md transition"
        >
          Learn Vocabularies
        </button>
      </div>
    </div>
  );
}