import { screen, render } from "@testing-library/react";
import { Fa500Px } from "react-icons/fa";
import BenefitCard from "./BenefitCard";


describe('Card component', () => {

    test('Renders card title', () => {
        render(<BenefitCard 
            title='Card 1' 
            textContent='Main card' 
            icon = {<Fa500Px />}
            />
        )
    
        const title = screen.getByText(/Card 1/i)
        expect(title).toBeInTheDocument()
    })
    
    test('Renders card text content', () =>{
        render(<BenefitCard 
            title='Card 1' 
            textContent='Main card' 
            icon = {<Fa500Px />}
            />
        )

        const textContent = screen.getByText(/Main card/i)
        expect(textContent).toBeInTheDocument()
    })

    test('Renders card button with textcontent', () =>{
        render(<BenefitCard 
            title='Card 1' 
            textContent='Main card' 
            icon = {<Fa500Px />}
        />)

        const button = screen.getByRole('button', { name: /view listings/})
        expect(button).toBeInTheDocument()
    })
})