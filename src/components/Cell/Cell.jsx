import "./Cell.css";

function Cell({ cellCount, classNames, handleClick }) {
  return (
    <div className={["cell", ...classNames].join(" ")} onClick={handleClick}>
      {cellCount}
    </div>
  );
}

export default Cell;
