import React from 'react'
import TenantReview from '../components/TenantReview'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import ButtonPrevious from '../components/ButtonPrevious'
import ButtonNext from '../components/ButtonNext'

const TenantReviews = () => {
    return (
        <Section>
            <SectionHeading>What Other Tenants Say.</SectionHeading>
            <div className="flex flex-row justify-between items-center w-3/5 m-auto">
                <ButtonPrevious />
                <TenantReview imageSrc='https://randomuser.me/api/portraits/women/92.jpg'
                    tenantName='Phillip Jonas' 
                    comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                />
                <ButtonNext />
            </div>
        </Section>
    )
}


export default TenantReviews