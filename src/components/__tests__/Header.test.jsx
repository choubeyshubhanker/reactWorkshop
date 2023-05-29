import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../header/Header';
// import matchers from '@testing-library/jest-dom/matchers';
// expect.extend(matchers)

describe('Header', ()=>{
    it("Renders Correctly", ()=>{
    render(<Header pageTitle={"Romantic Comedy"} />);
    const searchElement = screen.getByTitle("searchIcon");
    expect(searchElement).toBeInTheDocument()
    const backElement = screen.getByTitle("backArrow");
    expect(backElement).toBeInTheDocument();
    const titleElement = screen.getByText("Romantic Comedy");
    expect(titleElement).toBeInTheDocument()
    })
})