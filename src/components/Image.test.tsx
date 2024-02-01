import { screen, render } from "@testing-library/react";
import Image from "./Image";

describe('Image component', () =>{
    test('Renders Image tag', () =>{
        render(<Image src = '' alt='' className=""/>)

        const img = screen.getByRole('img')
        expect(img).toBeInTheDocument()
    })

    test('Renders image alt text', () =>{
        render(<Image src = '' alt='my image' className=""/>)

        const imageAlt = screen.getByAltText(/my image/i)
        expect(imageAlt).toBeInTheDocument()
    })
})