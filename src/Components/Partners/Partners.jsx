import img1 from "../../assets/images.png";
import img2 from "../../assets/image.png";
import img3 from "../../assets/download.png";
import img4 from "../../assets/download.jpeg";
import { Helmet } from "react-helmet";

export default function Partners() {
  return (
    <section className="bg-gray-50 py-16">
        
      <Helmet>
        <title>Our Trusted Partners</title>
      </Helmet>
      <div className="max-w-10/12 mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Our Trusted Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          <div className="flex justify-center items-center p-4 bg-white shadow-xl rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={img1} alt="Partner 1" className="h-20 object-contain" />
          </div>

          <div className="flex justify-center items-center p-4 bg-white shadow-xl rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={img2} alt="Partner 2" className="h-20 object-contain" />
          </div>

          <div className="flex justify-center items-center p-4 bg-white shadow-xl rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={img3} alt="Partner 3" className="h-20 object-contain" />
          </div>

          <div className="flex justify-center items-center p-4 bg-white shadow-xl rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={img4} alt="Partner 4" className="h-20 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
