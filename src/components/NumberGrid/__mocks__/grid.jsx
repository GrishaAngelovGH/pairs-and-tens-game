const generateGrid = () => {
  return new Array(3).fill().map((v, i) => {
    return new Array(3).fill().map((v, j) => ({ value: `${i + 1}${j + 1}`, isClicked: false }))
  })
}

export default generateGrid