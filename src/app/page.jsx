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
            router.replace("/Dashboard/Home")
          }else{
            router.replace("/auth/Login")
          }
      
          
       
    
       
          
            
       
      
      
       return (
        <div>
         
        </div>
       )
  
}
