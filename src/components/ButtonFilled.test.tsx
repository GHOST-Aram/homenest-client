import { screen, render } from "@testing-library/react";
import ButtonFilled from "./ButtonFilled";

describe(' ButtonFilled component', () => {
    test('Renders button' ,() => {
        render(<ButtonFilled>Start</ButtonFilled>)

        const button = screen.getByRole('button', { name: /start/i})
        expect(button).toBeInTheDocument()
    })
})