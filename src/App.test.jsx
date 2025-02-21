import { render } from "@testing-library/react"
import { vi } from "vitest"
import App from "./App"

vi.mock('./components/NumberGrid/grid')

test("should render App component", () => {
  const view = render(<App />)

  expect(view).toMatchSnapshot()
})