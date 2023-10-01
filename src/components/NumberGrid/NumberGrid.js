import { useState, useEffect } from "react"

import NumberCell from "./NumberCell"
import Confetti from "react-confetti"

import generateGrid from "./grid"

const NumberGrid = () => {
  const [grid, setGrid] = useState([])

  const [firstNum, setFirstNum] = useState(null)
  const [secondNum, setSecondNum] = useState(null)

  const [firstCoords, setFirstCoords] = useState([])
  const [secondCoords, setSecondCoords] = useState([])

  const [isCompleted, setIsCompleted] = useState(false)
  const [showRestartButton, setShowRestartButton] = useState(false)

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

  const initializeGrid = () => {
    setGrid(generateGrid(10))
    setShowRestartButton(false)
  }

  useEffect(initializeGrid, [])

  useEffect(() => {
    if (firstNum !== null && secondNum !== null) {
      const isPair = firstNum === secondNum
      const isSum = firstNum + secondNum === 10

      if (isPair || isSum) {
        if (grid.flat().every(v => v.isClicked)) {
          setIsCompleted(true)
          setShowRestartButton(true)

          setTimeout(() => {
            setIsCompleted(false)
          }, 5000)
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

        {
          isCompleted && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
            />
          )
        }

        {
          showRestartButton && (
            <div className="row justify-content-center m-2">
              <div className="col-md-6">
                <button className="btn btn-primary w-100" onClick={initializeGrid}>
                  Restart Game
                </button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default NumberGrid