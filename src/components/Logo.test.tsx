import { screen, render } from "@testing-library/react";
import Logo from "./Logo";


describe('Logo', () => {

    test('Renders logo image', () =>{
        render(<Logo src= {'logo'}/>)
    
        const logoImage = screen.getByRole('img')
        expect(logoImage).toBeInTheDocument()
    })

    test('Renders alt text for logo', () =>{
        render(<Logo src= {'logo'}/>)
    
        const logoAltText = screen.getByAltText(/logo/i)
        expect(logoAltText).toBeInTheDocument()
    })
})