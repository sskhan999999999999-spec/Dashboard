import React from 'react'
import UserStore from '../store/Userstore'



function SignupUser(data) {
    const singup = UserStore.getState().signup
    singup(data)
}

export default SignupUser
