import UserStore from "../store/Userstore"

function SingupUser(data) {
    const singup = UserStore.getState().signup
    singup(data)
}

export default SingupUser;
