import { screen, render } from "@testing-library/react";
import Card from "./BenefitCard";
import { Fa500Px } from "react-icons/fa";


describe('Card component', () => {

    test('Renders card title', () => {
        render(<Card 
            title='Card 1' 
            textContent='Main card' 
            icon = {<Fa500Px />}
            buttonLabel = 'view listings'
            />
        )
    
        const title = screen.getByText(/Card 1/i)
        expect(title).toBeInTheDocument()
    })
    
    test('Renders card text content', () =>{
        render(<Card 
            title='Card 1' 
            textContent='Main card' 
            icon = {<Fa500Px />}
            buttonLabel = 'view listings'
            />
        )

        const textContent = screen.getByText(/Main card/i)
        expect(textContent).toBeInTheDocument()
    })

    test('Renders card button with textcontent', () =>{
        render(<Card 
            title='Card 1' 
            textContent='Main card' 
            icon = {<Fa500Px />}
            buttonLabel = 'view listings'
        />)

        const button = screen.getByRole('button', { name: /view listings/})
        expect(button).toBeInTheDocument()
    })
})