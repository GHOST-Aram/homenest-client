import { screen, render } from "@testing-library/react";
import MenuButton from "./MenuButton";


describe('Menu button component', () => {
    test('Renders button element', () =>{
        render(<MenuButton />)

        const menuButton = screen.getByRole('button')
        expect(menuButton).toBeInTheDocument()
    })

    test('Renders labelled menu button', () => {
        render(<MenuButton />)

        const menuButton = screen.getByLabelText(/menu button/i)
        expect(menuButton).toBeInTheDocument()
    })

    
})