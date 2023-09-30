import { render } from "@testing-library/react"

import NumberCell from "./NumberCell"

test("should render NumberCell component", () => {
  const view = render(<NumberCell value={1} coordinates={[0, 0]} isClicked={false} />)

  expect(view).toMatchSnapshot()
})

test("should render clicked NumberCell component", () => {
  const view = render(<NumberCell value={1} coordinates={[0, 0]} isClicked={true} />)

  expect(view).toMatchSnapshot()
})