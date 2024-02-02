import { screen, render } from "@testing-library/react";
import SearchBox from "./SearchBox";


describe('SearchBox Component', () => {
    test('Renders texbox element', () => {
        render(<SearchBox />)

        const textbox = screen.getByRole('textbox')
        expect(textbox).toBeInTheDocument()
    })

    test('Renders labeled textbox', () =>{
        render(<SearchBox />)

        const labeledTextbox = screen.getByLabelText(/search input/i)
        expect(labeledTextbox).toBeInTheDocument()
    })

    test('Renders texbox with placeholder text', () =>{
        render(<SearchBox />)

        const textboxWithPlaceholder = screen.getByPlaceholderText(/Search/i)
        expect(textboxWithPlaceholder).toBeInTheDocument()
    })
})