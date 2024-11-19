import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AboutUs from "../Aboutus/AboutUs";

export default function Home() {
  return (
    <div>
      <nav>
      <Navbar></Navbar>
      </nav>
      
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
