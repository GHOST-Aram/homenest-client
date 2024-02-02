import React from 'react'
import TenantReview from '../components/TenantReview'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'

const TenantReviews = () => {
    return (
        <Section>
            <SectionHeading>What Other Tenants Say.</SectionHeading>
            <div className="flex flex-row gap-4 overflow-x-auto">

                <TenantReview imageSrc='https://randomuser.me/api/portraits/women/92.jpg'
                    tenantName='Phillip Jonas' 
                    comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                />
                <TenantReview imageSrc='https://randomuser.me/api/portraits/men/22.jpg'
                    tenantName='Phillip Jonas' 
                    comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                />
                <TenantReview imageSrc='https://randomuser.me/api/portraits/men/2.jpg'
                    tenantName='Phillip Jonas' 
                    comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                />
                <TenantReview imageSrc='https://randomuser.me/api/portraits/women/12.jpg'
                    tenantName='Phillip Jonas' 
                    comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                />
                <TenantReview imageSrc='https://randomuser.me/api/portraits/men/32.jpg'
                    tenantName='Phillip Jonas' 
                    comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                />
                <TenantReview imageSrc='https://randomuser.me/api/portraits/men/10.jpg'
                    tenantName='Phillip Jonas' 
                    comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                />
            </div>
        </Section>
    )
}


export default TenantReviews