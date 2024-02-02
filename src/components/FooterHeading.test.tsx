import { screen, render } from "@testing-library/react";
import FooterHeading from "./FooterHeading";

describe('Footer Heading', () => {
    test('Renders heading element', () =>{
        render(<FooterHeading>Heading 1</FooterHeading>)

        const footerHeading = screen.getByRole('heading', {name: /Heading 1/i})
        expect(footerHeading).toBeInTheDocument()
    })
})