const { default: UserStore } = require("../store/Userstore");

function LoginUser (data){
    const loginUser = UserStore.getState().login
    loginUser(data)
}