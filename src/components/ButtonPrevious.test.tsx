import { screen, render } from "@testing-library/react";
import ButtonPrevious from "./ButtonPrevious";

describe('ButtonPrevious component', () => {
    test('Renders button element', () => {
        render(<ButtonPrevious />)

        const buttonPrevious = screen.getByRole('button')
        expect(buttonPrevious).toBeInTheDocument()
    })
})