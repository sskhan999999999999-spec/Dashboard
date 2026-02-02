"use client"
import Image from "next/image";
import Login from "./Login/page";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UserStore from "./store/Userstore";


export default function Home() {
      const {user} = UserStore()
      const router = useRouter()
       
       if(user){
       redirect("/Dashboard")
       }else{
        redirect("/Login")
       }
          
            
       
      
      
       return (
        <div>

        </div>
       )
  
}
