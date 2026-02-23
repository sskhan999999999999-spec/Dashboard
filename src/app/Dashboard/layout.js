import { Sidebar } from "lucide-react";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";

export default function PageLayout({ children }) {
  return (
    <div className="flex w-full">
      <div>
        <SideBar/>
      </div>
      <div className="w-full bg-gray-100 p-8 px-10" >
       
        {children}
      </div>
    </div>
  );
};