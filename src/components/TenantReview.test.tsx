import { screen, render } from "@testing-library/react";
import TenantReview from "./TenantReview";


describe('Tenant Review component', () => {
    test('Renders tenant name', () =>{
        render(<TenantReview tenantName = 'Elena Miskin' comment = '' />)

        const tenantName = screen.getByText(/Elena Miskin/i)
        expect(tenantName).toBeInTheDocument()
    })

    test('Does not render tenant image', () => {
        render(<TenantReview tenantName = 'Elena Miskin' comment = '' />)

        const tenantImage = screen.queryByRole('img')
        expect(tenantImage).not.toBeInTheDocument()
    })

    test('Renders tenant comments', () => {
        render(<TenantReview 
            tenantName = 'Elena Miskin' 
            comment = 'Lorem Ipsum' 
        />)

        const tenantComment = screen.getByText(/lorem ipsum/i)
        expect(tenantComment).toBeInTheDocument()
    })
})