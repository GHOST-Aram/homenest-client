import { screen, render } from "@testing-library/react";
import AmenityCard from "./AmenityCard";

describe("AmenityCard", () => {
    test("Renders list of amenities", () => {
        render(<AmenityCard title='Education' amenities={amenities}/>)

        const list = screen.getAllByRole('listitem');
        expect(list).toHaveLength(2);
    })

    test("Renders list items correctly", () =>{
        render(<AmenityCard title='Education' amenities={amenities}/>)

        const listItem1 = screen.getByText(/ABC SCHOOL/i)
        const listItem2 = screen.getByText(/XYZ College/i)

        expect(listItem1).toBeInTheDocument()
        expect(listItem2).toBeInTheDocument()
    })
})

const amenities = [
    {
        id: 1,
        name: 'XYZ College',
    },
    {
       id: 2,
       name: 'ABC School',
    }
]