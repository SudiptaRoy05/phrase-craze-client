import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-blue-900 text-white py-10">
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <aside className="flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current text-white"
              >
                <path d="M22.672 15.226l-2.432.811..."></path>
              </svg>
              <div>
                <h2 className="text-2xl font-bold">PhraseCraze</h2>
                <p className="text-sm">Empowering Language Learning</p>
              </div>
            </div>
            <p className="text-sm">
              Providing reliable language tech since 1992. Stay connected to
              learn something new every day!
            </p>
          </aside>

          {/* Quick Links */}
          <nav className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/startlearning" className="hover:underline">
                  Start Learning
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:underline">
                  Dashboard
                </a>
              </li>
            </ul>
          </nav>

          {/* Social and Copyright */}
          <div className="flex flex-col items-center lg:items-end space-y-4">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-700 hover:bg-blue-500 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832..."></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-700 hover:bg-blue-500 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246..."></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-700 hover:bg-blue-500 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l..."></path>
                </svg>
              </a>
            </div>
            <p className="text-sm mt-4">
              © 2024 PhraseCraze | Stay Frosty & Keep Learning! ⛄
            </p>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="mt-8 border-t border-blue-700"></div>

        {/* Sub Footer */}
        <div className="text-center mt-4 text-sm">
          Made with ❤️ by the PhraseCraze Team | Winter Edition 🌨️
        </div>
      </footer>
    </div>
  );
}
