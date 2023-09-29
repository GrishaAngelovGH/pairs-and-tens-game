import { render } from "@testing-library/react"

import NumberGrid from "./NumberGrid"

test("should render NumberGrid component", () => {
  const view = render(<NumberGrid />)

  expect(view).toMatchSnapshot()
})