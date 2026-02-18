"use client"
import { useRouter } from "next/navigation";
import UserStore from "./store/Userstore";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  const user = UserStore((state) => state.user)
  const hydrated = UserStore((state) => state.hydrated)

  useEffect(() => {
    if (!hydrated) return   // wait for zustand persist

    if (user) {
      router.replace("/Dashboard/Home")
    } else {
      router.replace("/auth/Login")
    }
  }, [user, hydrated, router])

  return null
}