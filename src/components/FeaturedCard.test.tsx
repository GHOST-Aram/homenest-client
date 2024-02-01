import { screen, render } from "@testing-library/react";
import FeaturedCard from "./FeaturedCard";

describe('Featured Card Component', () => {
    test('Renders rates per month, locatio and number of bedrooms', () => {
        render(<FeaturedCard rentPm = {'12.5k'} location ='Nakuru' bedrooms = {'4 bedrooms'} />)

        const rent = screen.getByText(/12\.5K/i)
        const location = screen.getByText(/Nakuru/i)
        const bedrooms = screen.getByText(/4 bedrooms/)

        expect(rent).toBeInTheDocument()
        expect(location).toBeInTheDocument()
        expect(bedrooms).toBeInTheDocument()
    })

    test('Renders read more button', () => {
        render(<FeaturedCard rentPm = {'12.5k'} location ='Nakuru' bedrooms = {'4 bedrooms'} />)

        const readMoreBtn = screen.getByRole('button', { name: /read more/i})
        expect(readMoreBtn).toBeInTheDocument()
    })
})