import { useContext, useEffect, useState } from "react";
import CountUp from "react-countup";
import { Outlet } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";

export default function Success() {
  // const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    lessons: 0,
    vocabulary: 0,
    tutorials: 0,
  });

  useEffect(() => {
    fetch("/german_vocabulary.json")
      .then((res) => res.json())
      .then((data) => {

        setStats({
          vocabulary: data.length, 
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
                <CountUp end={10} duration={5}  suffix="+"/>
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
                <CountUp end={stats.vocabulary} duration={3.5} suffix="+" />
              </h3>
              <p className="text-gray-700 mt-2">Vocabulary Words</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-4xl font-bold text-purple-600">
                <CountUp end={10} duration={5} suffix="+" />
              </h3>
              <p className="text-gray-700 mt-2">Tutorials</p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
