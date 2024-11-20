import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>

        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-400 transition-all duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-400 transition-all duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-400 transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-400 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-400 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="flex justify-center space-x-8 mb-4">
          <Link
            to="/about-us"
            className="text-white text-lg hover:text-blue-400 transition-all duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="text-white text-lg hover:text-blue-400 transition-all duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/privacy-policy"
            className="text-white text-lg hover:text-blue-400 transition-all duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-and-conditions"
            className="text-white text-lg hover:text-blue-400 transition-all duration-300"
          >
            Terms & Conditions
          </Link>
        </div>

        <p className="text-sm text-gray-300">
          &copy; 2024 Your Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
