import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function AuthLayout() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  )
}
