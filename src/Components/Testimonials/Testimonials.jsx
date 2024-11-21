import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <Helmet>
        <title>What users say</title>
      </Helmet>
      <div className="max-w-10/12 mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
            <p className="text-gray-600 mb-4">
              "This platform has been a game-changer in my learning journey. The
              lessons are so engaging!"
            </p>
            <p className="font-semibold text-blue-800">Mr.Yellow</p>
            <p className="text-gray-500">Language Learner</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
            <p className="text-gray-600 mb-4">
              "I love how interactive the lessons are, and the community support
              is amazing!"
            </p>
            <p className="font-semibold text-blue-800">Mr.Green</p>
            <p className="text-gray-500">Student</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
