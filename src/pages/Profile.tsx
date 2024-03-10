import Header from "../containers/Header"
import { Avatar } from "@mui/material"
import LogoutButton from "../components/LogoutButton"
import NavButton from "../components/NavButton"

const Profile = () => {
  return (
    <div>
        <Header />
        <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:w-3/5 m-auto items-center 
                justify-between"
            >
                <div className="mt-8 space-y-4">
                    <Avatar sx={{
                        height: 200, 
                        width: 200,
                        backgroundColor: '#171717'
                    }}>JD</Avatar>

                    <div className="mt-4">
                        <div className="text-slate-800 font-bold text-lg">John Doe</div>
                        <div className="text-slate-600 font-light text-sm">Landlord</div>
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