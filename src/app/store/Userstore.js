import { create } from "zustand"
import {persist} from 'zustand/middleware'


const  UserStore = create (
  persist(
     (set)=>({

     user:{
        businessName : "shahsawar",
        email:"email.com",
        password:""
     }   ,
     login: (data)=>{
         set({
            user:{
               ...data
            }
         })

     },
     logout:()=>{
         set({user:{businessName:"",email:"",password:""}})
     }
      

     }),
     {
      name:"Singup-Store"
     }
  )
)
export default UserStore