import React from 'react'
import TenantReview from '../components/TenantReview'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'

const Testimonials = () => {
    return (
        <Section>
            <SectionHeading>What Other Tenants Say.</SectionHeading>
            <div className="flex flex-row gap-4 overflow-x-auto">

                <TenantReview 
                    tenantName='Phillip Jonas' 
                    comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                />
                <TenantReview 
                    tenantName='Phillip Jonas' 
                    comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                />
                <TenantReview 
                    tenantName='Phillip Jonas' 
                    comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                />
                <TenantReview 
                    tenantName='Phillip Jonas' 
                    comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                />
                <TenantReview 
                    tenantName='Phillip Jonas' 
                    comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                />
                <TenantReview 
                    tenantName='Phillip Jonas' 
                    comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                />
            </div>
        </Section>
    )
}


export default Testimonials