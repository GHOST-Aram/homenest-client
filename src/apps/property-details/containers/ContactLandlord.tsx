import Heading from '../../../components/Heading'
import PrimaryButton from '../../../components/PrimaryButton'

const ContactLandlord = () => {
    return (
        <div>
            <Heading level={1} className="text-xl font-bold text-slate-800 mt-2 py-2 ">
                Contact the Landlord
            </Heading>
            <div className='space-y-2 flex flex-col'>
                <PrimaryButton onClick={()=>{}}> SEND DIRECT MESSAGE</PrimaryButton>
                <PrimaryButton onClick={()=>{}}>SCHEDULE VIEWING</PrimaryButton>
                <PrimaryButton onClick={()=>{}}>APPLY ONLINE</PrimaryButton>
            </div>
        </div>
    )
}

export default ContactLandlord