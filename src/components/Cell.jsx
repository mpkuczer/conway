import '../stylesheets/Cell.css'

export default function Cell({ i, j, alive, handleCellClick }) {
  return (
    <div
      className={`cell ${alive ? "alive" : ""}`}
      onClick={() => handleCellClick(i, j)}
    >
    </div>
  );
}