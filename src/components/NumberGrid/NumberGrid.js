import { useState, useEffect } from "react"

import NumberCell from "./NumberCell"

import generateGrid from "./grid"

const NumberGrid = () => {
  const [grid, setGrid] = useState([])

  const [firstNum, setFirstNum] = useState(null)
  const [secondNum, setSecondNum] = useState(null)

  const [firstCoords, setFirstCoords] = useState([])
  const [secondCoords, setSecondCoords] = useState([])

  const handleClick = (num, coordinates) => {
    if (firstNum === null) {
      setFirstNum(num)
      setFirstCoords(coordinates)
    }

    if (firstNum !== null) {
      setSecondNum(num)
      setSecondCoords(coordinates)
    }

    const newGrid = JSON.parse(JSON.stringify(grid))
    const [i, j] = coordinates
    newGrid[i][j].isClicked = true

    setGrid(newGrid)
  }

  useEffect(() => {
    setGrid(generateGrid(10))
  }, [])

  useEffect(() => {
    if (firstNum !== null && secondNum !== null) {
      const isPair = firstNum === secondNum
      const isSum = firstNum + secondNum === 10

      if (isPair || isSum) {
        if (grid.flat().every(v => v.isClicked)) {
          console.log("the game has been completed")
        }
      } else {
        setTimeout(() => {
          const [i, j] = firstCoords
          const [k, m] = secondCoords

          const newGrid = JSON.parse(JSON.stringify(grid))
          newGrid[i][j].isClicked = false
          newGrid[k][m].isClicked = false
          setGrid(newGrid)
        }, 500)
      }

      setFirstNum(null)
      setSecondNum(null)
    }
  }, [firstNum, secondNum, firstCoords, secondCoords, grid])

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 border border-3 border-primary rounded shadow">
        {
          grid.map((row, i) => (
            <div key={i} className="row">
              {
                row.map((v, j) => (
                  <NumberCell
                    key={`${i}${j}`}
                    value={v.value}
                    coordinates={[i, j]}
                    isClicked={v.isClicked}
                    onClick={handleClick}
                  />
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default NumberGrid