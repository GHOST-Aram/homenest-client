import { useContext } from "react"
import { AuthContext } from "../utils/authContext"
import CurrentUserProfile from "../containers/user-profile/CurrentUserProfile"

const Profile = () => {
    const authContext = useContext(AuthContext)
    const user = authContext.user ? authContext.user : ''

    return (
        <CurrentUserProfile user={user}/>
    )
}

export default Profile