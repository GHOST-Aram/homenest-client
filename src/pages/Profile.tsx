import Header from "../containers/Header"
import LogoutButton from "../components/LogoutButton"
import NavButton from "../components/NavButton"
import UserAvatar from "../components/UserAvatar"
import { useContext } from "react"
import { AuthContext } from "../utils/authContext"

const Profile = () => {
    const authContext = useContext(AuthContext)
    const user = authContext.user ? authContext.user : ''

    return (
        <div>
            <Header />
            <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:w-3/5 m-auto items-center 
                    justify-between"
                >
                    <div className="mt-8 space-y-4">
                        <UserAvatar/>
                        <div className="mt-4">
                            <div className="text-slate-800 font-bold text-lg">{user.name}</div>
                            <div className="text-slate-600 font-light text-sm">
                                {user.role === 'landlord' ? 'Landlord' : 'Tenant'}
                            </div>
                        </div>
                        <LogoutButton />
                    </div>
                    <div className="space-y-4 flex flex-col">
                        <NavButton location="/listings/new" label="Add New Property" color='success' />
                        <NavButton location={'/profile/listings'} label="My Listings" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Profile