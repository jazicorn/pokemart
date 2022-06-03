import Home from '../pages/index'
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react'

describe('Home', () => {
    it('should render', () => {
        render(<Home />)
        expect(screen.getByTestId("Hello World")).toBeInTheDocument();
    })
})
