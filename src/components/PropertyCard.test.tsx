import { screen, render } from "@testing-library/react";
import FeaturedCard from "./PropertyCard";

describe('Featured Card Component', () => {

    test('Renders property Image', () =>{
        render(<FeaturedCard id="KI" 
            rentPm = {'12.5k'} location ='Nakuru' 
            bedrooms = {'4 bedrooms'} imageSrc = ''
        />)

        const propertyImage = screen.getByRole('img')
        expect(propertyImage).toBeInTheDocument()
        
    })

    test('Renders Alt text for property Image', () =>{
        render(<FeaturedCard id="KI" 
            rentPm = {'12.5k'} location ='Nakuru' 
            bedrooms = {'4 bedrooms'} imageSrc = ''
        />)

        const propertyImage = screen.getByAltText('Nakuru 4 bedrooms house')
        expect(propertyImage).toBeInTheDocument()
        
    })

    test('Renders rates per month, locatio and number of bedrooms', () => {
        render(<FeaturedCard id="KI" 
            rentPm = {'12.5k'} location ='Nakuru' 
            bedrooms = {'4 bedrooms'} imageSrc = ''
        />)

        const rent = screen.getByText(/12\.5K/i)
        const location = screen.getByText(/Nakuru/i)
        const bedrooms = screen.getByText(/4 bedrooms/)

        expect(rent).toBeInTheDocument()
        expect(location).toBeInTheDocument()
        expect(bedrooms).toBeInTheDocument()
    })

    test('Renders read more button', () => {
        render(<FeaturedCard id="KI" 
            rentPm = {'12.5k'} location ='Nakuru' 
            bedrooms = {'4 bedrooms'} imageSrc = ''
        />)

        const readMoreBtn = screen.getByRole('button', { name: /read more/i})
        expect(readMoreBtn).toBeInTheDocument()
    })
})