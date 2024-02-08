import { render, screen } from "@testing-library/react";
import Paragraph from "./Paragraph";

describe('Paragraph Component', () =>{
    test('Renders paragraph text', () => {
        render(<Paragraph>Hello world</Paragraph>)
        
        const paragraphText = screen.getByText(/Hello world/i)
        expect(paragraphText).toBeInTheDocument()
    })
})