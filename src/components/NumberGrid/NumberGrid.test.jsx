import { render } from "@testing-library/react"
import { vi } from "vitest"

import NumberGrid from "./NumberGrid"

vi.mock('./grid')

test("should render NumberGrid component", () => {
  const view = render(<NumberGrid />)

  expect(view).toMatchSnapshot()
})