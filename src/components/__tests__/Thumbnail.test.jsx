import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Thumbnail from '../listingLayout/thumbnail'
// import matchers from '@testing-library/jest-dom/matchers';
// expect.extend(matchers)

describe('Header', ()=>{
    it("Renders Correctly", ()=>{
    render(<Thumbnail name={"The Birds"} />);
    const searchElement = screen.getByTitle("posterImg");
    expect(searchElement).toBeInTheDocument()
    const textElement = screen.getByText("The Birds");
    expect(textElement).toBeInTheDocument()
   
    })
})