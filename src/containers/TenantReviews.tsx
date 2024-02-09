import React, { useState } from 'react'
import TenantReview from '../components/TenantReview'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import uniqid from 'uniqid'

const TenantReviews = () => {
    const [reviews, setReviews] = useState(tenantReviews)

    return (
        <Section>
            <SectionHeading>What Previous Tenants Say.</SectionHeading>
            <div className="flex flex-row gap-4 pb-4 overflow-x-scroll horizontal-scroll">
                {
                    reviews.length> 0 && tenantReviews.map(review =>(
                        <TenantReview key={review.id} imageSrc={review.tenantImageUrl}
                            tenantName={review.tenantName}
                            comment= {review.comment}
                        />
                    )) 
                } 
            </div>
        </Section>
        
    )
}

const tenantReviews = [
    {
        id: uniqid(),
        tenantName: 'Philipp Jonas',
        comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        tenantImageUrl: 'https://randomuser.me/api/portraits/men/92.jpg'
    },
    {
        id: uniqid(),
        tenantName: 'Philipp Jonas',
        comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        tenantImageUrl: 'https://randomuser.me/api/portraits/men/92.jpg'
    },
    {
        id: uniqid(),
        tenantName: 'Philipp Jonas',
        comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        tenantImageUrl: 'https://randomuser.me/api/portraits/men/92.jpg'
    },
    {
        id: uniqid(),
        tenantName: 'Philipp Jonas',
        comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        tenantImageUrl: 'https://randomuser.me/api/portraits/men/92.jpg'
    },
    {
        id: uniqid(),
        tenantName: 'Philipp Jonas',
        comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        tenantImageUrl: 'https://randomuser.me/api/portraits/men/92.jpg'
    },
    {
        id: uniqid(),
        tenantName: 'Philipp Jonas',
        comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        tenantImageUrl: 'https://randomuser.me/api/portraits/men/92.jpg'
    },
    {
        id: uniqid(),
        tenantName: 'Philipp Jonas',
        comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        tenantImageUrl: 'https://randomuser.me/api/portraits/men/92.jpg'
    },
]


export default TenantReviews