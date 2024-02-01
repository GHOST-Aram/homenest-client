import { screen, render } from "@testing-library/react";
import ButtonOutlined from "./ButtonOutlined";


describe('ButtonOutlined component', () => {
    test('Renders button' ,() => {
        render(<ButtonOutlined>Start</ButtonOutlined>)

        const button = screen.getByRole('button', { name: /start/i})
        expect(button).toBeInTheDocument()
    })
})