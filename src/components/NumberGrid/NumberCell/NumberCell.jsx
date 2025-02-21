const NumberCell = ({ value, coordinates, onClick, isClicked }) => {
  const handleClick = () => {
    if (!isClicked) {
      onClick(value, coordinates)
    }
  }

  const bgClass = isClicked ? 'bg-secondary text-white' : 'bg-white text-dark'

  return (
    <div
      role="button"
      className={`col border border-primary text-center fw-bold ${bgClass}`}
      onClick={handleClick}
    >
      {value}
    </div>
  )
}

export default NumberCell