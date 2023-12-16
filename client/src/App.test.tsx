import { render, screen } from '@testing-library/react'
import App from './App'

it("App component renders with hello world text", () => {
  render(<App/>)
  expect(screen.getByText(/Hello World/i)).toBeInTheDocument()
})