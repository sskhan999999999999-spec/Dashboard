"use client"
<<<<<<< HEAD
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Login from "./auth/Login/page";
=======
import {  redirect, useRouter } from "next/navigation";
import UserStore from "./store/Userstore";
import { useEffect } from "react";
>>>>>>> 76af7f9b866e8f5450cf5264f8e686d1b1abc44e

export function User (){
    const user = UserStore((state)=>state.user)
    user
}

export default function Home() {
<<<<<<< HEAD

       useEffect(()=>{
         const formData = localStorage.getItem("formdata")
           if(formData){
               JSON.parse(formData)
              redirect("/Dashboard/Home")           
            }else{
             redirect("/auth/Login")
            }
=======
      
      const router = useRouter()
      
          if(User()){
            redirect("/Dashboard")
          }else{
            redirect("/Login")
          }
       
    
       
          
>>>>>>> 76af7f9b866e8f5450cf5264f8e686d1b1abc44e
            
       
      
      
       return (
        <div>
          <Login/>
        </div>
       )
  
}
