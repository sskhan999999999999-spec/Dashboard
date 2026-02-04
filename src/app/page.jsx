"use client"
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Login from "./auth/Login/page";


export default function Home() {

       useEffect(()=>{
         const formData = localStorage.getItem("formdata")
           if(formData){
               JSON.parse(formData)
              redirect("/Dashboard/Home")           
            }else{
             redirect("/auth/Login")
            }
            
       },[])
      
      
       return (
        <div>
          <Login/>
        </div>
       )
  
}
