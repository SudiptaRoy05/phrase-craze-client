import image from '../../assets/aboutUs.webp'

export default function AboutUs() {
  return (
    <div>
      <section className="bg-blue-50 py-10 px-6 md:px-10">
        <div className=" mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">About Us</h2>
          <p className="text-blue-700 text-lg leading-relaxed mb-4">
            Welcome to{" "}
            <span className="font-semibold text-blue-900">
              PhraseCraze
            </span>
            , your cozy corner for mastering German vocabulary this winter! We
            make learning fun, simple, and tailored for every learner.
          </p>
          <p className="text-blue-700 text-lg leading-relaxed">
            Build your vocabulary with engaging tools and personalized lessons,
            perfect for warming up your language skills during the chilly
            season.
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <img
            src={image}
            alt="Snowy theme"
            className="rounded-lg shadow-lg h-[500px]"
          />
        </div>
      </section>
    </div>
  );
}
