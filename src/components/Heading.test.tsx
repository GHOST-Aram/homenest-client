import { render, screen } from "@testing-library/react";
import Heading from "./Heading";


describe('Heading component', () => {
    test('Renders heading tag', () => {
        render(<Heading level = {1} className=''>H</Heading>)

        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
    })

    test('Renders Heading text', () => {
        render(<Heading level = {1} className=''>Hello world</Heading>)

        const headingText = screen.getByText(/hello world/i)
        expect(headingText).toBeInTheDocument()
    
    })
})