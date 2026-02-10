


import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";

export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col   w-full max-w-screen ">

      <div className="shadow-sm z-10">
        <Navbar />
      </div>

      <div className=" mt-17  h-full ">
          <SideBar />
        <main className=" w-full min-h-screen   bg-gray-50">
          {children}
        </main>
      </div>

    </div>
  );
}
