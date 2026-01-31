"use client"
import Image from "next/image";
import Login from "./Login/page";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";


export default function Home() {

       useEffect(()=>{
         const formData = localStorage.getItem("formdata")
           if(formData){
               JSON.parse(formData)
              redirect("/Dashboard")                         
            }else{
             redirect("/Login")
            }
            
       },[])
      
      
       return (
        <div>

        </div>
       )
  
}
