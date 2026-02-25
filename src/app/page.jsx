"use client"
import { useRouter } from "next/navigation";
import UserStore from "./store/Userstore";
import { useEffect } from "react";


export default function Home() {
      const user = UserStore.getState().user
      const router = useRouter()
      useEffect(()=>{
        if(user){
            router.replace("/Dashboard/Home")
          }else{
            router.replace("/auth/Login")
          }
   
      },[user,router])
       
       return null
  
}
