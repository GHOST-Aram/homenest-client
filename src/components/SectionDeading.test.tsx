import { render, screen } from "@testing-library/react";
import SectionHeading from "./SectionHeading";

describe('Section Heading', () => {
    test('Renders heading element tag', () => {
        render(<SectionHeading>Headings</SectionHeading>)

        const headingTag = screen.getByRole('heading')
        expect(headingTag).toBeInTheDocument()
    })

    test('Renders heading text', () => {
        render(<SectionHeading>Headings</SectionHeading>)

        const headingText = screen.getByText(/Headings/i)
        expect(headingText).toBeInTheDocument()
    })
})