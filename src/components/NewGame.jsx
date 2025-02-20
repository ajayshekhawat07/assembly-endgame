

export default function NewGame({ onClick }) {
  return (
    <div>
      <button
        className="btn m-4 w-3xs bg-[#155E95] py-6 font-mono text-lg tracking-wide"
        onClick={onClick}
      >
        New Game
      </button>
    </div>
  );
}
