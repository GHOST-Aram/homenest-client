import { screen, render } from "@testing-library/react";
import SearchButton from "./SearchButton";


describe('Search button component', () =>{
    test('Renders a button', () => {
        render(<SearchButton />)

        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })

    test('Renders button label as search button', () =>{
        render(<SearchButton />)
        
        const button = screen.getByLabelText(/Search button/i)
        expect(button).toBeInTheDocument()
    })
})