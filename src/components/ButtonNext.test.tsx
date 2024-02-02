import { screen, render } from "@testing-library/react";
import ButtonNext from "./ButtonNext";

describe('ButtonNext component', () => {
    test('Renders button element', () => {
        render(<ButtonNext />)

        const buttonPrevious = screen.getByRole('button')
        expect(buttonPrevious).toBeInTheDocument()
    })
})