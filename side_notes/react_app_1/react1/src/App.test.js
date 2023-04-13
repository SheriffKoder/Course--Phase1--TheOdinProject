// App.test.js

import React from "react";
import { render, screen } from '@testing-library/react';
import App7 from './App';

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

describe("App component", () =>{
  it("renders correct heading", ()=> {
    render(<App7 />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  })
})