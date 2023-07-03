import '../stylesheets/Cell.css'

export default function Cell({ i, j, isAlive, handleCellClick }) {
  return (
    <div
      className={`cell ${isAlive ? "alive" : ""}`}
      onClick={() => handleCellClick(i, j)}
    >
    </div>
  );
}