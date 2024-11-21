
import CountUp from "react-countup";

export default function Success() {
  return (
    <div>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Achievements
          </h2>
          <p className="text-gray-600 mb-10">
            Join thousands of learners who have benefited from our platform.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-4xl font-bold text-blue-600">
                <CountUp end={10} duration={5} />
              </h3>
              <p className="text-gray-700 mt-2">Users</p>
            </div>

            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-4xl font-bold text-green-600">
                <CountUp end={10} duration={6} suffix="+" />
              </h3>
              <p className="text-gray-700 mt-2">Lessons</p>
            </div>

            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-4xl font-bold text-red-600">
                <CountUp end={59} duration={3.5} suffix="+" />
              </h3>
              <p className="text-gray-700 mt-2">Vocabulary Words</p>
            </div>

            {/* Tutorial Count */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-4xl font-bold text-purple-600">
                <CountUp end={8} duration={5} suffix="+" />
              </h3>
              <p className="text-gray-700 mt-2">Tutorials</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
