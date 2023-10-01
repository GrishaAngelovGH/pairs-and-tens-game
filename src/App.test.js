import { render } from "@testing-library/react"

import App from "./App"

jest.mock('./components/NumberGrid/grid')

test("should render App component", () => {
  const view = render(<App />)

  expect(view).toMatchSnapshot()
})