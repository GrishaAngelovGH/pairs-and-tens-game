import { render } from "@testing-library/react"

import NumberGrid from "./NumberGrid"

jest.mock('./grid')

test("should render NumberGrid component", () => {
  const view = render(<NumberGrid />)

  expect(view).toMatchSnapshot()
})