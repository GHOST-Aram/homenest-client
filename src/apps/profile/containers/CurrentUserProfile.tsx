import UserAvatar from "../components/UserAvatar"
import NavButton from "../components/NavButton"
import LogoutButton from "../components/LogoutButton"
import { User } from "../../../types"

const CurrentUserProfile = ({ user} :{user: User}) => {
  return (
        <div className="p-8">
            <div className="flex flex-col w-full md:flex-row lg:w-3/5 m-auto 
                items-center justify-between gap-4"
            >
                <div className="mt-8 space-y-4 w-full">
                    <UserAvatar/>
                    <div className="flex justify-between items-center md:block">
                        <div className="mt-4">
                            <h1 className="text-slate-800 font-bold text-lg">{user.name}</h1>
                            <p className="text-slate-600 font-light text-sm">
                                {user.role === 'landlord' ? 'Landlord' : 'Tenant'}
                            </p>
                        </div>
                        <LogoutButton />
                    </div>
                </div>
                <div className="space-y-4 flex flex-col w-full">
                    <NavButton 
                        location="/listings/new" 
                        label="Add New Property" 
                        color='success' 
                    />
                    <NavButton 
                        location={`/listings/landlords/${user.id}`} 
                        label="My Listings" 
                    />
                </div>
            </div>
        </div>
    )
}

export default CurrentUserProfile