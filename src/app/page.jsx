"use client"
import { useRouter } from "next/navigation";
import UserStore from "./store/Userstore";

export default function Home() {
  const user = UserStore.getState().user
  const router = useRouter()

  if (user) {
    router.push("/Dashboard/Home")
  } else { router.replace("/auth/Login") }

  return (
    <div>

    </div>
  )

}
