"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import UserStore from "../store/Userstore";
import { BoxIcon, Home, List, LockKeyholeIcon, Package } from "lucide-react";
import { createUserStore } from "../store/CreateUserStore";
import Image from "next/image";
import img from "../../../public/shahsawar.jpeg";

function SideBar() {
  const router = useRouter();
  const user = UserStore.getState().user;
  const pathName = usePathname();
  const [mounted, setMounted] = useState(false);
  const logout = UserStore.getState().logout;
  const users = createUserStore.getState().Users;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function handleLogout() {
    logout();
    router.replace("/auth/Login");
  }

  const isActive = (path) =>
    pathName === path
      ? "bg-white/50 text-gray-900 p-2 px-4 flex gap-3 duration-200 transition-all w-55 rounded-lg"
      : "flex gap-3 p-2 px-4 text-white/80 hover:bg-white/10 rounded-lg duration-200";

  return (
    <div className="w-60 h-screen sticky left-0 text-white bg-linear-to-b from-blue-900 to-blue-700 flex flex-col justify-between shadow-xl z-40 p-2 pb-4">
      <div>
        <div className="p-4 flex gap-2 border-b border-white/20">
          <span className="text-amber-500">
            <BoxIcon
              fill="#f59e0b"
              stroke="white"
              strokeOpacity={0.5}
              height={30}
              width={30}
            />
          </span>
          <h1 className="text-white text-2xl font-semibold">Dashboard</h1>
        </div>

        <div className="mt-4 space-y-2">
          <li className="list-none">
            <Link href="/Dashboard/Home" className={isActive("/Dashboard/Home")}>
              <Home /> Home
            </Link>
          </li>

          {user?.email === "super@gmail.com" && (
            <li className="list-none">
              <Link
                href="/Dashboard/Createorder"
                className={isActive("/Dashboard/Createorder")}
              >
                <List /> CreateOrder
              </Link>
            </li>
          )}

          <li className="list-none">
            <Link
              href="/Dashboard/Orderlist"
              className={isActive("/Dashboard/Orderlist")}
            >
              <Package /> OrderList
            </Link>
          </li>

          {user?.email === "super@gmail.com" && (
            <li className="list-none">
              <Link
                href="/Dashboard/AccessForm"
                className={isActive("/Dashboard/AccessForm")}
              >
                <LockKeyholeIcon /> AccessForm
              </Link>
            </li>
          )}
        </div>
      </div>

      <div className="border-t border-white/20 pt-4 px-2">
        <div className="flex items-center gap-2 w-full">
          <Image
            src={img}
            alt="img"
            className="object-cover h-16 w-16 rounded-full"
          />

          <div className="">
            <p className="font-medium">Shahsawar</p>
            <p className="text-sm text-white/70">Super Admin</p>
          </div>
        </div>

        <div
          onClick={handleLogout}
          className="mt-4 cursor-pointer bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-500 hover:from-blue-700 hover:via-indigo-600 hover:to-cyan-600 duration-200 p-2 rounded-md text-center"
        >
          Logout
        </div>
      </div>
    </div>
  );
}

export default SideBar;