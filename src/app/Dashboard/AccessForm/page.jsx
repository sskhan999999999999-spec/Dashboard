"use client"
import SignupUser from '@/app/components/SignupUser'
import { createUserStore } from '@/app/store/CreateUserStore'
import UserStore from '@/app/store/Userstore'
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'


function page() {
     const addUser = createUserStore.getState().addUser
     const users = createUserStore.getState().users
     const [hidePass,setHidePass] = useState(false)
     const [modal,setModal]  = useState(false)
     const [role,setRole] = useState("")
     const [userAccess,setUserAccess] = useState({
      name:"",
      email:"",
      password:"",
      role:""
     })

     function handleChange(e){
      const {name,value} = e.target;
      setUserAccess({...userAccess,[name]:value})
     }

     function handleSubmit (e){
        e.preventDefault()
      if(!userAccess.name || !userAccess.email || !userAccess.password){
          toast.error("Please fill all inputs field")
          return
      }else if(userAccess.password.length < 8 ){
          toast.error("Password at least 8 characters long.")
          return
        }else if(userAccess.name && userAccess.email && userAccess.password){
          setModal(true)
        }
        addUser(userAccess)
        
     }

     function handleRoleAsign(selectedRole){
        setRole(selectedRole)
        setTimeout(() => {
          toast.success("User Access Allow")
          setModal(false)
        }, 500);
        userAccess.role = selectedRole;
        userAccess.name = '',
        userAccess.email = '',
        userAccess.password = ''
     }

     console.log(users);
     

     
   
    

    
  return (
    <div className=' flex justify-center  p-40 '>
      <Toaster/>
      <form action="" onSubmit={handleSubmit}>
     <div className='shadow w-full max-w-lg px-6 pt-6 pb-4 bg-gray-200 rounded-lg '> 
        <h1 className='text-2xl font-bold text-orange-400 text-center'>User Access Form</h1>
        <div className='flex gap-4 items-center mt-3'>
        <div className=''>
        <label htmlFor="">Name <span className='text-orange-400'>*</span></label>
        <input type="text"
           value={userAccess.name}
           name='name' 
           onChange={handleChange}
           className=' w-full max-w-2xl p-2 rounded-lg outline-orange-400 border border-black/30'
           required
           placeholder='Enter Name' />
        </div>
        <div>
          <label htmlFor="">Email <span className='text-orange-400'>*</span></label>
          <input type="email"
           value={userAccess.email} 
           name='email' 
           onChange={handleChange} 
           required
           className='w-full max-w-2xl p-2 rounded-lg outline-orange-400 border border-black/30'
           placeholder='Enter Email' />
        </div>
        </div>
        <div className='mt-3 relative'>
          <label htmlFor="">Password <span className='text-orange-400'>*</span></label>
          <input type={hidePass?"text":"password"}
            name='password'
            value={userAccess.password} 
            onChange={handleChange}
            required
            className='w-full max-w-2xl p-2 rounded-lg outline-orange-400 border border-black/30'
            placeholder='Enter Password' />
          <span className='absolute   right-3 top-8' onClick={()=>setHidePass(!hidePass)}>
          {hidePass ?<EyeOff/>:<Eye/> }
          </span>
          
        </div>
        <div className='mt-6' >
          <button className='bg-orange-400 w-full hover:bg-orange-500 text-white p-2 px-4 font-semibold text-lg rounded-lg transition-colors duration-300' onClick={handleSubmit}>Access</button>
        </div>
     </div>
     </form>
     {modal && (
        <div
          className="fixed inset-0 bg-black/40 z-40 duration-300 transition-all"
          onClick={() => setModal(false)}
        ></div>
      )}
      {modal && (
        <div className='bg-white absolute  top-70 h-40 p-4 pl-6 w-full rounded-xl shadow  max-w-sm z-10000000'>
          <div>
          <h1 className='text-center text-orange-400 font-semibold text-3xl'>Roles</h1>
          <div className='flex gap-3 mt-3'>
            <input 
            type="radio" 
            onClick={()=>handleRoleAsign("Admin")}
             /> 
            <p>Admin</p>
          </div>
          <div className='flex gap-3 mt-3'>
            <input 
            type="radio"
            onClick={()=>handleRoleAsign("Employee")} />
            <p>Employee</p>
          </div>
          </div>
        </div>
       )} 
    </div>
  )
}

export default page
