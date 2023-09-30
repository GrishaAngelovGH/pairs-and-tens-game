import generateGrid from "./grid"

const NumberGrid = () => {
  const grid = generateGrid(10)

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 border border-3 border-primary rounded shadow">
        {
          grid.map((row, i) => (
            <div key={i} className="row">
              {
                row.map((v, j) => (
                  <div
                    key={`${i}${j}`}
                    role="button"
                    className="col border border-primary text-center fw-bold bg-white"
                  >
                    {v}
                  </div>
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