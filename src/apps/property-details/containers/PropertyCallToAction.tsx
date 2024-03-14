import PrimaryButton from '../../../components/PrimaryButton'

const PropertyCallToAction = () => {
  return (
    <section className='mx-8 mb-8'>
        <div className="flex gap-8 flex-col w-full md:flex-row justify-between">
            <PrimaryButton onClick={()=>{}}>SCHEDULE VIEWING</PrimaryButton>
            <PrimaryButton onClick={()=>{}}>APPLY ONLINE</PrimaryButton>
            <PrimaryButton onClick={()=>{}}>CONTACT LANDLORD</PrimaryButton>
        </div>
    </section>
  )
}

export default PropertyCallToAction