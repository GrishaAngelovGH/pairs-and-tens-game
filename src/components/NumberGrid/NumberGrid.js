const NumberGrid = () => {
  const n = 10
  const grid = new Array(n).fill().map(() => new Array(n).fill().map((v, i) => i))

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