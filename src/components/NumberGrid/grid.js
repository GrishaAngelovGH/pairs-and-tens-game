const hasAvailablePlaceInGrid = grid => grid.flat().map(v => v.value).includes(null)

const generateRandomCoordinates = n => {
  const i = Math.floor(Math.random() * n)
  const j = Math.floor(Math.random() * n)

  return [i, j]
}

const placeNumber = (grid, n, num) => {
  let [i, j] = generateRandomCoordinates(n)

  while (grid[i][j].value !== null) {
    [i, j] = generateRandomCoordinates(n)
  }

  grid[i][j].value = num
}

const generatePair = (grid, n) => {
  const num = Math.floor(Math.random() * n)

  placeNumber(grid, n, num)
  placeNumber(grid, n, num)
}

const generateSum = (grid, n) => {
  placeNumber(grid, n, 2)
  placeNumber(grid, n, 8)
}

const generateGrid = n => {
  const grid = new Array(n).fill().map(() => {
    return new Array(n).fill().map(() => ({ value: null, isClicked: false }))
  })

  while (hasAvailablePlaceInGrid(grid)) {
    const shouldGeneratePair = Math.random() >= 0.5

    shouldGeneratePair ? generatePair(grid, n) : generateSum(grid, n)
  }

  return grid
}

export default generateGrid