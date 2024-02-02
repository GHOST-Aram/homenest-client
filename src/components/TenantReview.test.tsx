import { screen, render } from "@testing-library/react";
import TenantReview from "./TenantReview";


describe('Tenant Review component', () => {
    test('Renders tenant name', () =>{
        render(<TenantReview tenantName = 'Elena Miskin' comment = '' imageSrc = ''/>)

        const tenantName = screen.getByText(/Elena Miskin/i)
        expect(tenantName).toBeInTheDocument()
    })

    test('Renders tenant image', () => {
        render(<TenantReview tenantName = 'Elena Miskin' comment = '' imageSrc = ''/>)

        const tenantImage = screen.queryByRole('img')
        expect(tenantImage).toBeInTheDocument()
    })
    
    test('Renders alt text for tenenat image', () => {
        render(<TenantReview tenantName = 'Elena Miskin' comment = '' imageSrc = ''/>)

        const tenantImage = screen.getByAltText(/Elena Miskin/i)
        expect(tenantImage).toBeInTheDocument()
    })

    test('Renders tenant comments', () => {
        render(<TenantReview 
            tenantName = 'Elena Miskin' 
            comment = 'Lorem Ipsum' 
            imageSrc = ''
        />)

        const tenantComment = screen.getByText(/lorem ipsum/i)
        expect(tenantComment).toBeInTheDocument()
    })
})