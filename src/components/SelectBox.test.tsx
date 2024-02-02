import { screen, render } from "@testing-library/react";
import SelectBox from "./SelectBox";

describe('SelectBox component', () =>{
    test('Renders select input element', () => {
        render(<SelectBox />)

        const selectBox = screen.getByRole('combobox')
        expect(selectBox).toBeInTheDocument()
    })

    test('Renders labeled listbox', () =>{
        render(<SelectBox />)

        const labeledSelectBox = screen.getByLabelText(/filter search/i)
        expect(labeledSelectBox).toBeInTheDocument()
    })

    test('Renders initial option for listBox as \'All listings\'', () =>{
        render(<SelectBox />)

        const initialOption = screen.getByText(/All listings/i)
        expect(initialOption).toBeInTheDocument()
    })
})