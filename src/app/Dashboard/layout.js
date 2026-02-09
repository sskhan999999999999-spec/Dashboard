
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";

export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">

      <div className="shadow-sm z-10">
        <Navbar />
      </div>

      <div className="flex flex-1">
          <SideBar />
        <main className="flex-1 bg-gray-50">
          {children}
        </main>
      </div>

    </div>
  );
}
