import bannerImg1 from "../../assets/b1.webp";
import bannerImg2 from "../../assets/b2.webp";
import bannerImg3 from "../../assets/b3.webp";
import { Outlet, useNavigate } from "react-router-dom";


export default function Banner() {
  const navigate = useNavigate();

  return (
    <div className="md:w-10/12 mx-auto my-6">
      <div className="carousel h-[600px] w-full">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={bannerImg1} className="w-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
            <h2 className="text-4xl font-bold mb-4">Expand Your Vocabulary</h2>
            <p className="text-lg mb-6">
              Learn a new language with ease and fun!
            </p>
            <button
              className="btn bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={() => navigate("/letslearn")}
            >
              Let's Learn
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={bannerImg2} className="w-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
            <h2 className="text-4xl font-bold mb-4">Interactive Learning</h2>
            <p className="text-lg mb-6">
              Enhance your communication skills with our tutorials.
            </p>
            <button
              className="btn bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={() => navigate("/letslearn")}
            >
              Let's Learn
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={bannerImg3} className="w-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
            <h2 className="text-4xl font-bold mb-4">Master Any Language</h2>
            <p className="text-lg mb-6">
              Start your journey today with PhraseCraze!
            </p>
            <button
              className="btn bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={() => navigate("/letslearn")}
            >
              Let's Learn
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
