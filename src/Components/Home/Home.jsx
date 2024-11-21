import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Snowfall from "react-snowfall";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-blue-100 text-blue-800">
      <Snowfall color="white" snowflakeCount={400} />
      <nav className="bg-blue-50 shadow-md border-b border-blue-200">
        <Navbar></Navbar>
      </nav>

      <main className="flex-grow bg-blue-50 p-6">
        <Outlet></Outlet>
      </main>


      <footer className="bg-blue-900 text-white text-center py-4">
        <Footer></Footer>
      </footer>
      <ToastContainer />
    </div>
  );
}
