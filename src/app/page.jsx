"use client"
import {  redirect, useRouter } from "next/navigation";
import UserStore from "./store/Userstore";
import { useEffect } from "react";

export function User (){
    const user = UserStore((state)=>state.user)
    user
}

export default function Home() {
      
      const router = useRouter()
      
          if(User){
            redirect("/Dashboard/Home")
          }else{
            redirect("/auth/Login")
          }
       
    
       
          
            
       
      
      
       return (
        <div>
          {/* <Login/> */}
        </div>
       )
  
}
