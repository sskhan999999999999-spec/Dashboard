


import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";

export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen  w-full max-w-screen ">

      <div className="shadow-sm z-10">
        <Navbar />
      </div>

      <div className="  h-full ">
          <SideBar />
        <main className=" w-full   bg-gray-50">
          {children}
        </main>
      </div>

    </div>
  );
}
