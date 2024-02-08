import { screen, render } from "@testing-library/react";
import List from "./List";

describe('List component', () =>{
    test('Renders a list', () =>{
        render(<List className=''>
            <li>x</li>
            <li>x</li>
        </List>)

        const list = screen.getByRole('list')
        expect(list).toBeInTheDocument()
    })
})
